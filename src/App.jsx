import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { 
  Skull, Shield, Search, Eye, EyeOff, Users, X, 
  Mic, MicOff, LogOut, CheckCircle, ArrowRight,
  BookOpen, Send, MessageSquare, Crown, Award, Play, UserPlus, UserMinus, Target, RefreshCw, Layers, Trophy, Clock, CheckSquare, AlertTriangle, Sparkles, Check, Copy, KeyRound, Compass, ChevronUp, ChevronDown, Lock, Flame, Zap, FileText, UserCheck, UserX, AlertCircle
} from 'lucide-react';
import { ROLES, MEANS_CARDS, CLUE_CARDS, CAUSE_OF_DEATH, LOCATIONS, SCENE_TILES } from './data/game-data';

// Khởi tạo Socket.IO an toàn - Hỗ trợ Railway backend
const getSocketUrl = () => {
  // Nếu có biến môi trường VITE_SOCKET_URL (Railway URL) thì dùng
  if (import.meta.env.VITE_SOCKET_URL) {
    return import.meta.env.VITE_SOCKET_URL;
  }
  // Nếu đang chạy localhost dev thì kết nối port 3001
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:3001';
  }
  // Fallback: kết nối cùng origin (không hoạt động trên Vercel vì serverless)
  return window.location.origin;
};

const socket = io(getSocketUrl(), {
  autoConnect: true,
  transports: ['websocket', 'polling'],
  reconnectionAttempts: 5,
  timeout: 10000
});

function App() {
  // Client & Room States
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [inRoom, setInRoom] = useState(false);
  const [roomState, setRoomState] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedMsg, setCopiedMsg] = useState(false);

  // Optional Roles Settings
  const [enableAccomplice, setEnableAccomplice] = useState(true);
  const [enableWitness, setEnableWitness] = useState(true);

  // Floating Chat Bubble Open State & Mobile Active Tab
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState('scene'); // 'scene' | 'players' | 'profile' | 'chat'

  // Role Reveal Modal khi mới vào trận (Trừ Pháp Y)
  const [showRoleRevealModal, setShowRoleRevealModal] = useState(false);

  // Auto Collapse Scene Board khi Pháp Y gắn đạn xong
  const [isSceneBoardCollapsed, setIsSceneBoardCollapsed] = useState(false);

  // UI Local States
  const [showRoleSecret, setShowRoleSecret] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [unreadChatCount, setUnreadChatCount] = useState(0);

  // Timestamp hiện tại cập nhật 200ms/lần giúp đếm ngược mượt 100%
  const [nowTimestamp, setNowTimestamp] = useState(Date.now());

  // Selections for Murderer
  const [selectedMeans, setSelectedMeans] = useState(null);
  const [selectedClue, setSelectedClue] = useState(null);

  // Selections for Forensic Scientist (Bullets)
  const [forensicBullets, setForensicBullets] = useState({});

  // Bốc Thẻ Bối Cảnh Mới Modal (Pháp Y Vòng 2 & 3)
  const [showDrawTileModal, setShowDrawTileModal] = useState(false);
  const [replaceTargetTileId, setReplaceTargetTileId] = useState('');
  const [newTileBulletIdx, setNewTileBulletIdx] = useState(null);

  // Accusation / Phá án Modal State
  const [accuseTargetId, setAccuseTargetId] = useState('');
  const [accuseMeans, setAccuseMeans] = useState(null);
  const [accuseClue, setAccuseClue] = useState(null);
  const [showAccuseModal, setShowAccuseModal] = useState(false);
  const [accusationResultMsg, setAccusationResultMsg] = useState('');

  // Voice Chat States (Khai báo const chính xác 100%)
  const [isMuted, setIsMuted] = useState(true);
  const [localStream, setLocalStream] = useState(null);
  const peerConnections = useRef({});
  const audioElements = useRef({});
  const localStreamRef = useRef(null);

  // Cập nhật timestamp 200ms/lần
  useEffect(() => {
    const timer = setInterval(() => {
      setNowTimestamp(Date.now());
    }, 200);
    return () => clearInterval(timer);
  }, []);

  // TỰ ĐỘNG THU GỌN BẢNG GỢI Ý KHI VÀO VÒNG ĐIỀU TRA (INVESTIGATION) 100%
  useEffect(() => {
    if (roomState?.phase === 'INVESTIGATION') {
      setIsSceneBoardCollapsed(true);
    } else if (roomState?.phase === 'FORENSIC_SETUP') {
      setIsSceneBoardCollapsed(false);
    }
  }, [roomState?.phase]);

  // Format mm:ss
  const formatTime = (totalSeconds) => {
    const s = Math.max(0, Number(totalSeconds) || 0);
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // TỰ ĐỘNG BẬT MODAL BỐC THẺ CHO PHÁP Y KHI VÀO VÒNG MỚI
  useEffect(() => {
    if (roomState?.gameStarted && roomState?.forensicScientistId === socket.id && roomState?.needsTileDraw) {
      setShowDrawTileModal(true);
    }
  }, [roomState?.needsTileDraw, roomState?.round, roomState?.forensicScientistId]);

  // WebRTC Audio Stream
  const initVoiceChat = async () => {
    try {
      if (!navigator?.mediaDevices?.getUserMedia) return;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setLocalStream(stream);
      localStreamRef.current = stream;
      
      // NẾU LÀ PHÁP Y ➔ KHÓA MIC CỨNG NICK 100%
      const isCurrentForensic = roomState?.forensicScientistId === socket.id;
      if (isCurrentForensic) {
        setIsMuted(true);
        stream.getAudioTracks().forEach(track => track.enabled = false);
      } else {
        stream.getAudioTracks().forEach(track => track.enabled = !isMuted);
      }

      if (roomState?.code) {
        socket.emit('voice-join', { roomCode: roomState.code });
      }
    } catch (err) {
      console.warn('Mic access error:', err);
    }
  };

  const createPeerConnection = (targetSocketId) => {
    if (peerConnections.current[targetSocketId]) return peerConnections.current[targetSocketId];
    const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    peerConnections.current[targetSocketId] = pc;

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => pc.addTrack(track, localStreamRef.current));
    }

    pc.ontrack = (e) => {
      if (!audioElements.current[targetSocketId]) {
        const audio = document.createElement('audio');
        audio.autoplay = true;
        audio.srcObject = e.streams[0];
        document.body.appendChild(audio);
        audioElements.current[targetSocketId] = audio;
      }
    };

    pc.onicecandidate = (e) => {
      if (e.candidate && roomState?.code) {
        socket.emit('voice-signal', {
          roomCode: roomState.code,
          targetSocketId,
          signal: { candidate: e.candidate }
        });
      }
    };

    return pc;
  };

  const cleanupVoiceChat = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(t => t.stop());
    }
    setLocalStream(null);
    localStreamRef.current = null;
    Object.keys(peerConnections.current).forEach(id => peerConnections.current[id]?.close());
    peerConnections.current = {};
    Object.keys(audioElements.current).forEach(id => audioElements.current[id]?.remove());
    audioElements.current = {};
  };

  const toggleMute = () => {
    if (isForensic) return setErrorMsg('Theo luật Deception: Nhà khoa học pháp y KHÔNG ĐƯỢC bật mic hay nói thành lời!');
    const nextState = !isMuted;
    setIsMuted(nextState);
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach(t => t.enabled = !nextState);
    }
    if (roomState?.code) {
      socket.emit('voice-mute-state', { roomCode: roomState.code, isMuted: nextState });
    }
  };

  // Socket Events
  useEffect(() => {
    socket.on('room-created', ({ roomState }) => {
      setRoomState(roomState);
      setInRoom(true);
      setErrorMsg('');
    });

    socket.on('room-updated', (updated) => {
      setRoomState(updated);
    });

    socket.on('game-started', (updated) => {
      setRoomState(updated);
      setSelectedMeans(null);
      setSelectedClue(null);
      setForensicBullets({});
      setShowAccuseModal(false);
      setShowDrawTileModal(false);
      
      // HIỆN HIỆU ỨNG THÔNG BÁO VAI TRÒ NẾU KHÔNG PHẢI PHÁP Y
      if (updated.forensicScientistId !== socket.id) {
        setShowRoleRevealModal(true);
      }

      initVoiceChat();
    });

    socket.on('accusation-failed', ({ accuser }) => {
      setAccusationResultMsg(`Lời phá án của ${accuser} KHÔNG CHÍNH XÁC!`);
      setTimeout(() => setAccusationResultMsg(''), 5000);
    });

    socket.on('game-reset', () => {
      setSelectedMeans(null);
      setSelectedClue(null);
      setForensicBullets({});
      setShowAccuseModal(false);
      setShowDrawTileModal(false);
      setShowRoleRevealModal(false);
      cleanupVoiceChat();
    });

    socket.on('error-msg', (msg) => {
      setErrorMsg(msg);
    });

    socket.on('voice-peer-joined', async ({ socketId }) => {
      const pc = createPeerConnection(socketId);
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket.emit('voice-signal', { roomCode: roomState?.code, targetSocketId: socketId, signal: { offer } });
    });

    socket.on('voice-signal-received', async ({ senderSocketId, signal }) => {
      const pc = createPeerConnection(senderSocketId);
      if (signal.offer) {
        await pc.setRemoteDescription(new RTCSessionDescription(signal.offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.emit('voice-signal', { roomCode: roomState?.code, targetSocketId: senderSocketId, signal: { answer } });
      } else if (signal.answer) {
        await pc.setRemoteDescription(new RTCSessionDescription(signal.answer));
      } else if (signal.candidate) {
        try { await pc.addIceCandidate(new RTCIceCandidate(signal.candidate)); } catch (e) {}
      }
    });

    socket.on('voice-peer-left', ({ socketId }) => {
      if (peerConnections.current[socketId]) {
        peerConnections.current[socketId].close();
        delete peerConnections.current[socketId];
      }
      if (audioElements.current[socketId]) {
        audioElements.current[socketId].remove();
        delete audioElements.current[socketId];
      }
    });

    return () => {
      socket.off('room-created');
      socket.off('room-updated');
      socket.off('game-started');
      socket.off('accusation-failed');
      socket.off('game-reset');
      socket.off('error-msg');
      socket.off('voice-peer-joined');
      socket.off('voice-signal-received');
      socket.off('voice-peer-left');
    };
  }, [roomState, isMuted]);

  // Actions
  const handleCreateRoom = () => {
    if (!socket || !socket.connected) {
      return setErrorMsg('Không kết nối tới server trò chơi. Hãy đảm bảo server đang chạy.');
    }
    const defaultName = `Thám tử ${Math.floor(Math.random() * 9000) + 1000}`;
    const name = playerName && playerName.trim() ? playerName.trim() : defaultName;
    if (!playerName || !playerName.trim()) setPlayerName(name);
    socket.emit('create-room', { playerName: name });
  };

  const handleJoinRoom = () => {
    if (!socket || !socket.connected) {
      return setErrorMsg('Không kết nối tới server trò chơi. Hãy đảm bảo server đang chạy.');
    }
    if (!playerName.trim()) return setErrorMsg('Vui lòng nhập tên thám tử của bạn!');
    if (!roomCode.trim()) return setErrorMsg('Vui lòng nhập Mã phòng 4 ký tự!');
    socket.emit('join-room', { roomCode: roomCode.toUpperCase(), playerName });
  };

  const handleAddBot = () => {
    if (roomState?.code) {
      socket.emit('add-bot', { roomCode: roomState.code });
    }
  };

  const handleRemoveBot = () => {
    if (roomState?.code) {
      socket.emit('remove-bot', { roomCode: roomState.code });
    }
  };

  const handleVoteForensic = (targetId) => {
    if (roomState?.code) {
      socket.emit('vote-forensic', { roomCode: roomState.code, targetId });
    }
  };

  const handleVoteNextRound = () => {
    if (roomState?.code) {
      socket.emit('vote-next-round', { roomCode: roomState.code });
    }
  };

  const handleStartGame = () => {
    if (!roomState?.players || roomState.players.length < 3) {
      return setErrorMsg('Cần ít nhất 3 người chơi (hoặc bấm + Bot) để bắt đầu!');
    }
    socket.emit('start-game', {
      roomCode: roomState.code,
      enabledOptionalRoles: { accomplice: enableAccomplice, witness: enableWitness },
      ROLES_DATA: ROLES,
      CLUES_DATA: CLUE_CARDS,
      MEANS_DATA: MEANS_CARDS,
      CAUSE_DATA: CAUSE_OF_DEATH,
      LOCATIONS_DATA: LOCATIONS,
      SCENES_DATA: SCENE_TILES
    });
  };

  const handleCopyCode = () => {
    if (roomState?.code) {
      navigator.clipboard.writeText(roomState.code);
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 2000);
    }
  };

  const handleConfirmMurderChoice = () => {
    if (!selectedMeans || !selectedClue) return setErrorMsg('Vui lòng chọn 1 Công cụ giết người và 1 Bằng chứng chính!');
    socket.emit('submit-solution', {
      roomCode: roomState.code,
      means: selectedMeans,
      clue: selectedClue
    });
  };

  const handleSelectBullet = (tileId, optionIdx) => {
    setForensicBullets(prev => ({
      ...prev,
      [tileId]: optionIdx
    }));
  };

  const handleConfirmForensicBullets = () => {
    const allTileIds = [
      roomState.causeOfDeathTile?.id,
      roomState.locationTile?.id,
      ...(roomState.activeSceneTiles?.map(t => t.id) || [])
    ];

    const missingBullets = allTileIds.some(id => forensicBullets[id] === undefined);
    if (missingBullets) {
      return setErrorMsg('Vui lòng đặt đủ đạn chỉ dẫn lên tất cả 6 Thẻ Bối Cảnh!');
    }

    socket.emit('submit-bullets', {
      roomCode: roomState.code,
      bullets: forensicBullets
    });

    setIsSceneBoardCollapsed(true);
  };

  const handleConfirmReplaceTile = () => {
    if (!replaceTargetTileId || newTileBulletIdx === null) {
      return setErrorMsg('Vui lòng chọn 1 thẻ cũ cần thay và chọn 1 mục chỉ dẫn trên thẻ mới!');
    }
    socket.emit('draw-and-replace-tile', {
      roomCode: roomState.code,
      oldTileId: replaceTargetTileId,
      newOptionIndex: newTileBulletIdx
    });
    setShowDrawTileModal(false);
    setReplaceTargetTileId('');
    setNewTileBulletIdx(null);
  };

  const handleSendAccusation = () => {
    if (!accuseTargetId || !accuseMeans || !accuseClue) return setErrorMsg('Vui lòng chọn đầy đủ người bị tình nghi, Công cụ giết người và Bằng chứng chính!');
    socket.emit('accuse-solution', {
      roomCode: roomState.code,
      targetPlayerId: accuseTargetId,
      means: accuseMeans,
      clue: accuseClue
    });
    setShowAccuseModal(false);
  };

  // NHẤP NHANH THẺ BÀI TRÊN BÀN CHƠI ĐỂ PHÁ ÁN
  const handleQuickAccuseCard = (playerId, card, type) => {
    if (isForensic) return;
    if (!me?.hasBadge) return setErrorMsg('Bạn đã dùng hết Huy hiệu Phá án!');
    
    setAccuseTargetId(playerId);
    if (type === 'means') {
      setAccuseMeans(card);
    } else {
      setAccuseClue(card);
    }
    setShowAccuseModal(true);
  };

  const handleSendChat = () => {
    if (isForensic) return setErrorMsg('Theo luật Deception: Nhà khoa học pháp y im lặng, KHÔNG ĐƯỢC nhắn chat!');
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { sender: me?.name || 'Bạn', text: chatInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setChatInput('');
  };

  const handleLeaveRoom = () => {
    cleanupVoiceChat();
    setInRoom(false);
    setRoomState(null);
  };

  // Helper getters & Vote counting
  const me = roomState?.players?.find(p => p.id === socket.id);
  const isForensic = roomState?.forensicScientistId === socket.id;
  const isMurderer = me?.role?.id === 'murderer';
  const botCount = roomState?.players?.filter(p => p.isBot).length || 0;
  const hasVotedNextRound = roomState?.votesForNextRound?.includes(socket.id);
  const totalPlayersCount = roomState?.players?.length || 1;
  const votesCount = roomState?.votesForNextRound?.length || 0;

  const getVotesForPlayer = (playerId) => {
    if (!roomState?.votesForForensic) return 0;
    return Object.values(roomState.votesForForensic).filter(id => id === playerId).length;
  };

  const myVotedId = roomState?.votesForForensic?.[socket.id];

  // TÍNH TOÁN SỐ GIÂY ĐẾM NGƯỢC CHÍNH XÁC 100%
  const secCount = roomState?.endTime 
    ? Math.max(0, Math.ceil((roomState.endTime - nowTimestamp) / 1000))
    : (roomState?.timerType === 'ACCUSATION_WINDOW' ? 10 : 180);

  const allSceneTiles = roomState ? [
    roomState.causeOfDeathTile,
    roomState.locationTile,
    ...(roomState.activeSceneTiles || [])
  ].filter(Boolean) : [];

  const nextDrawnTile = roomState?.deck?.[0];
  const accusedPlayerObj = roomState?.players?.find(p => p.id === accuseTargetId);

  // Helper lấy string label an toàn từ option
  const getOptLabel = (opt) => {
    if (!opt) return 'Chưa chọn';
    if (typeof opt === 'string') return opt;
    return opt.label || 'Chưa chọn';
  };

  // Helper phân màu thẻ bối cảnh: Tím (Nguyên nhân), Xanh lá (Địa điểm), Nâu nhạt (Gợi ý)
  const getTileColorClass = (tileId) => {
    if (tileId === roomState?.causeOfDeathTile?.id) return 'cause-death-purple';
    if (tileId === roomState?.locationTile?.id) return 'location-green';
    return 'scene-tile-brown';
  };

  // Lấy tên Kẻ sát nhân của vụ án
  const murdererPlayerObj = roomState?.players?.find(p => p.role?.id === 'murderer');

  return (
    <div className="app-layout">
      
      {/* HEADER - chỉ hiện khi đang trong phòng, không có logo */}
      {inRoom && (() => {
        const isMicDisabled = roomState?.gameStarted && isForensic;
        return (
          <header className="app-header-compact">
            <div className="header-actions">
              <div className="room-code-pill cursor-pointer" onClick={handleCopyCode} title="Nhấp để copy mã phòng">
                <span>PHÒNG:</span>
                <strong>{roomState?.code}</strong>
                <Copy size={12} className="ml-1 text-slate-400" />
              </div>

              {/* NÚT BẬT/TẮT MIC */}
              <button 
                onClick={isMicDisabled ? undefined : toggleMute}
                disabled={isMicDisabled}
                className={`btn btn-xs ${isMicDisabled ? 'btn-mic-disabled' : !isMuted ? 'btn-mic-active' : 'btn-mic-muted'}`}
                title={isMicDisabled ? 'Theo luật Deception: Nhà khoa học pháp y không được nói thành lời khi ván chơi bắt đầu!' : ''}
              >
                {isMicDisabled ? <Lock size={12} /> : !isMuted ? <Mic size={13} /> : <MicOff size={13} />}
                <span>{isMicDisabled ? 'KHOÁ MIC (PHÁP Y)' : !isMuted ? 'MIC MỞ' : 'MIC TẮT'}</span>
              </button>

              <button onClick={() => setShowGuideModal(true)} className="btn btn-xs btn-secondary">
                <BookOpen size={13} /> Luật
              </button>

              <button onClick={handleLeaveRoom} className="btn btn-xs btn-danger">
                <LogOut size={13} /> Rời
              </button>
            </div>
          </header>
        );
      })()}

      {/* THÔNG BÁO LỖI NẾU CÓ */}
      {errorMsg && (
        <div className="error-toast">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg('')}><X size={14} /></button>
        </div>
      )}

      {copiedMsg && (
        <div className="copy-toast">
          <Check size={16} />
          <span>Đã copy Mã phòng [{roomState?.code}]!</span>
        </div>
      )}

      {/* THÔNG BÁO KẾT QUẢ PHÁ ÁN SAI */}
      {accusationResultMsg && (
        <div className="accusation-toast">
          <X size={20} className="text-rose-400" />
          <span>{accusationResultMsg}</span>
        </div>
      )}

      {/* 1. MÀN HÌNH ĐẦU TIÊN: LANDING SCREEN */}
      {!inRoom && (
        <main className="cinematic-landing-wrapper landing-bg">
          <div className="cinematic-landing-container">
            
            <div className="hero-logo-box">
              <div className="detective-emblem-badge">
                <div className="emblem-inner-glow">
                  <Skull size={44} className="text-rose-400 stroke-[3]" />
                  <Search size={32} className="text-amber-400 stroke-[3] emblem-glass-overlay" />
                </div>
                <div className="badge-star-sticker">SHERLOCK</div>
              </div>
              <h1 className="cinematic-main-title">DECEPTION</h1>
              <span className="cinematic-sub-title">MURDER IN HONG KONG</span>
            </div>

            <div className="cinematic-identity-card">
              <label className="identity-label">
                <Search size={16} className="text-amber-400" /> NICKNAME THÁM TỬ CỦA BẠN:
              </label>
              <input 
                type="text"
                className="identity-input-field"
                placeholder="Ví dụ: Thám tử Nam..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreateRoom()}
              />
            </div>

            <div className="dual-action-grid">
              <div className="action-tile-card create-tile" onClick={handleCreateRoom}>
                <div className="tile-icon-wrapper text-rose-400">
                  <Compass size={32} />
                </div>
                <div className="tile-content">
                  <h3>+ TẠO PHÒNG MỚI</h3>
                  <p>Khởi tạo hiện trường vụ án & Mời bạn bè</p>
                </div>
                <button onClick={handleCreateRoom} className="btn btn-md btn-primary w-full mt-2 font-black tracking-wider">
                  TẠO PHÒNG NGAY
                </button>
              </div>

              <div className="action-tile-card join-tile">
                <div className="tile-icon-wrapper text-amber-400">
                  <KeyRound size={32} />
                </div>
                <div className="tile-content">
                  <h3>THAM GIA PHÒNG</h3>
                  <p>Nhập Mã phòng 4 ký tự để vào án mạng</p>
                </div>

                <div className="pin-input-group mt-2">
                  <input 
                    type="text"
                    className="pin-code-field"
                    placeholder="MÃ PIN (VD: R7S3)"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.key === 'Enter' && handleJoinRoom()}
                  />
                  <button onClick={handleJoinRoom} className="btn btn-md btn-gold-draw font-extrabold">
                    VÀO PHÒNG
                  </button>
                </div>
              </div>
            </div>

            {/* roles-showcase-bar removed per design: keep landing clean */}
          </div>
        </main>
      )}

      {/* 2. MÀN HÌNH TRUNG GIAN PHÒNG CHỜ */}
      {inRoom && !roomState?.gameStarted && (
        <main className="lobby-hub-container">
          <div className="lobby-hub-card">
            <div className="lobby-hub-header">
              <div className="hub-title-group">
                <h2 className="flex items-center gap-2"><Crown size={24} className="text-amber-400" /> PHÒNG CHỜ & BẦU CHỌN NHÀ KHOA HỌC PHÁP Y</h2>
                <p>Bỏ phiếu bầu chọn Quản trò dân chủ. Người có số phiếu bầu cao nhất sẽ làm Nhà khoa học pháp y!</p>
              </div>
              <div className="hub-room-badge">
                <span className="badge-lbl">MÃ PHÒNG:</span>
                <strong className="badge-code" onClick={handleCopyCode}>{roomState.code}</strong>
                <button onClick={handleCopyCode} className="btn-copy-sm"><Copy size={12} /></button>
              </div>
            </div>

            <div className="lobby-control-bar">
              <div className="player-count-badge">
                <Users size={18} className="text-amber-400" />
                <span>Số người chơi: <strong className="text-amber-400">{roomState.players?.length || 0}/12</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleMute}
                  className={`btn btn-sm ${!isMuted ? 'btn-mic-active' : 'btn-mic-muted'} font-bold flex items-center gap-1.5`}
                  title="Bật/Tắt Mic để trò chuyện thảo luận với mọi người trong sảnh chờ"
                >
                  {!isMuted ? <Mic size={14} /> : <MicOff size={14} />}
                  <span>{!isMuted ? 'MIC ĐANG BẬT' : 'BẬT MIC SẢNH CHỜ'}</span>
                </button>
                <div className="bot-actions-group">
                  <button onClick={handleAddBot} className="btn btn-sm btn-secondary"><UserPlus size={14} /> + Thêm Bot</button>
                  {botCount > 0 && <button onClick={handleRemoveBot} className="btn btn-sm btn-outline"><UserMinus size={14} /> - Xóa Bot ({botCount})</button>}
                </div>
              </div>
            </div>

            <div className="lobby-members-section">
              <span className="section-label-amber">NHẤP VÀO THÀNH VIÊN BẠN MUỐN BẦU LÀM NHÀ KHOA HỌC PHÁP Y:</span>
              <div className="lobby-members-grid">
                {roomState.players?.map(player => {
                  const votes = getVotesForPlayer(player.id);
                  const isTopCandidate = roomState.forensicScientistId === player.id;
                  const isMyVotedTarget = myVotedId === player.id;
                  return (
                    <div 
                      key={player.id}
                      onClick={() => handleVoteForensic(player.id)}
                      className={`member-hub-card ${isTopCandidate ? 'is-forensic-selected' : ''}`}
                    >
                      <div className="member-avatar-box">
                        {player.isBot ? <Zap size={20} className="text-amber-400" /> : <Shield size={20} className="text-blue-400" />}
                      </div>
                      <div className="member-details">
                        <span className="member-name">{player.name} {player.id === socket.id && '(Bạn)'}</span>
                        <span className="member-type-tag">{isTopCandidate ? 'Dẫn đầu Pháp Y' : player.isBot ? 'Bot tự động' : 'Người chơi'}</span>
                        <div className="mt-1 flex items-center gap-1 text-xs">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-xs ${votes > 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-400'}`}>{votes} Phiếu</span>
                          {isMyVotedTarget && <span className="text-emerald-400 font-extrabold text-[0.65rem]">(Bạn đã bầu)</span>}
                        </div>
                      </div>
                      {isTopCandidate && <div className="selected-crown-badge"><Crown size={20} /></div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="game-settings-section">
              <span className="section-label-amber">VAI TRÒ MỞ RỘNG TRONG VÁN CHƠI:</span>
              <div className="settings-toggles">
                <label className="toggle-item">
                  <input type="checkbox" checked={enableAccomplice} onChange={(e) => setEnableAccomplice(e.target.checked)} />
                  <span><strong>Đồng Phạm (Accomplice):</strong> Biết Kẻ sát nhân & Bộ đáp án, hỗ trợ che giấu vụ án.</span>
                </label>
                <label className="toggle-item mt-2">
                  <input type="checkbox" checked={enableWitness} onChange={(e) => setEnableWitness(e.target.checked)} />
                  <span><strong>Nhân Chứng (Witness):</strong> Biết ai thuộc phe Tội phạm nhưng phải giữ bí mật danh tính.</span>
                </label>
              </div>
            </div>

            <div className="lobby-hub-footer">
              <button onClick={handleStartGame} className="btn btn-lg btn-primary btn-launch-game">
                <Play size={20} /> BẮT ĐẦU VÁN CHƠI DECEPTION
              </button>
            </div>
          </div>
        </main>
      )}

      {/* 3. MÀN HÌNH GAME CHÍNH TÍNH NĂNG GỌN GÀNG TỰ ĐỘNG THU GỌN BÀN GỢI Ý & MOBILE TABS */}
      {inRoom && roomState?.gameStarted && (
        <main className={`game-container-compact mobile-tab-view-${activeMobileTab}`}>
          
          {/* BANNER THÔNG BÁO BỐC THẺ */}
          {roomState?.phase === 'INVESTIGATION' && isForensic && roomState?.needsTileDraw && (
            <div className="forensic-draw-alert-bar-compact">
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-amber-400 animate-spin-slow" />
                <span className="font-extrabold text-amber-300 text-xs uppercase tracking-wider">
                  VÒNG {roomState.round}: ĐẾN LƯỢT PHÁP Y BỐC THẺ BỐI CẢNH MỚI!
                </span>
              </div>
              <button 
                onClick={() => setShowDrawTileModal(true)}
                className="btn-tarot-draw-glow"
              >
                <Layers size={14} /> BỐC THẺ MỚI (VÒNG {roomState.round})
              </button>
            </div>
          )}

          {/* BANNER CỬA SỔ PHÁ ÁN 10s */}
          {roomState?.phase === 'INVESTIGATION' && roomState?.timerType === 'ACCUSATION_WINDOW' && (
            <div className="accusation-huge-alert-bar-compact">
              <div className="flex items-center gap-2">
                <AlertTriangle size={24} className="text-rose-400 animate-bounce" />
                <div>
                  <h3 className="font-black text-rose-300 text-sm">CỬA SỔ PHÁ ÁN ĐANG MỞ!</h3>
                  <p className="text-xs text-white">Còn <strong className="big-sec-count-sm">{secCount}s</strong> để bấm Phá Án!</p>
                </div>
              </div>
              {!isForensic && me?.hasBadge && (
                <button 
                  onClick={() => setShowAccuseModal(true)}
                  className="btn-accuse-badge-glow"
                >
                  <Award size={16} /> PHÁ ÁN NGAY!
                </button>
              )}
            </div>
          )}

          {/* BANNER KẾT THÚC GAME */}
          {roomState?.phase === 'GAME_OVER' && (
            <div className={`game-over-banner ${roomState.winner === 'INVESTIGATORS' ? 'win-investigators' : 'win-murderer'}`}>
              <h2>
                {roomState.winner === 'INVESTIGATORS' ? 'PHE ĐIỀU TRA VIÊN PHÁ ÁN THÀNH CÔNG!' : 'KẺ SÁT NHÂN ĐÃ THOÁT TỘI GÂY ÁN HOÀN HẢO!'}
              </h2>
              <p className="text-xs mt-1 font-mono">
                Đáp án: Công cụ <strong>[{roomState.secretSolution?.means?.name}]</strong> & Bằng chứng <strong>[{roomState.secretSolution?.clue?.name}]</strong>
              </p>
            </div>
          )}

          {/* BỐ CỤC VÁN CHƠI GỌN GÀNG TỰ NHIÊN */}
          <div className="natural-game-layout">
            
            {/* CỘT TRÁI: VAI TRÒ & BỘ NÚT TƯƠNG TÁC */}
            <aside className="natural-panel-left mobile-tab-section-profile sidebar-profile-panel">
              
              {/* VAI TRÒ CARD */}
              <div className="compact-card role-info-card">
                <span className="card-mini-heading">VAI TRÒ CỦA BẠN</span>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <Shield size={20} className="text-amber-400" />
                    <span className="role-name-text">{me?.role ? me.role.name : 'Chưa phân vai'}</span>
                  </div>
                  {me?.role && (
                    <button onClick={() => setShowRoleSecret(!showRoleSecret)} className="btn btn-xs btn-outline role-toggle-btn">
                      {showRoleSecret ? <EyeOff size={12} /> : <Eye size={12} />}
                    </button>
                  )}
                </div>

                {showRoleSecret && me?.role && (
                  <div className="role-secret-box mt-2 text-xs">
                    <p>{me.role.description}</p>
                    {(isMurderer || isForensic) && roomState?.secretSolution?.means && (
                      <div className="mt-2 p-2 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 font-bold">
                        ĐÁP ÁN VỤ ÁN:
                        <div className="text-xs text-white font-normal mt-1">
                          🔴 Công cụ giết người: <strong>{roomState.secretSolution.means.name}</strong><br />
                          🔵 Bằng chứng chính: <strong>{roomState.secretSolution.clue.name}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* THỜI GIAN VÁN ĐẤU & BỘ NÚT TƯƠNG TÁC COMPACT */}
              <div className="compact-card timer-action-card">
                <span className="card-mini-heading">VÒNG {roomState?.round || 1}/3 • THỜI GIAN</span>
                
                <div className="mt-2">
                  {roomState?.timerType === 'DISCUSSION' ? (
                    <div className="discussion-timer-pill sidebar-timer-pill">
                      <Clock size={16} className="animate-spin-slow text-emerald-400" />
                      <span>BÀN LUẬN:</span>
                      <strong className="font-mono text-base ml-auto">{formatTime(secCount)}</strong>
                    </div>
                  ) : (
                    <div className="accusation-timer-pill sidebar-timer-pill">
                      <Clock size={16} className="animate-pulse text-rose-400" />
                      <span>PHÁ ÁN:</span>
                      <strong className="font-mono text-base text-rose-400 ml-auto">{secCount}s</strong>
                    </div>
                  )}
                </div>

                {/* NÚT TƯƠNG TÁC GỌN GÀNG COMPACT */}
                <div className="flex flex-col gap-2 mt-3">
                  
                  {/* NÚT VOTE CHUYỂN VÒNG */}
                  {roomState?.phase === 'INVESTIGATION' && (
                    <button 
                      onClick={handleVoteNextRound}
                      className={`natural-vote-btn sidebar-action-btn ${hasVotedNextRound ? 'voted' : ''}`}
                    >
                      <CheckSquare size={15} />
                      <span className="truncate">Vote Chuyển Vòng</span>
                      <strong className="ml-auto font-mono text-xs">({votesCount}/{totalPlayersCount})</strong>
                    </button>
                  )}

                  {/* NÚT BỐC THẺ PHÁP Y */}
                  {roomState?.phase === 'INVESTIGATION' && isForensic && roomState?.round <= 3 && (
                    <button 
                      onClick={() => setShowDrawTileModal(true)}
                      className="btn-tarot-draw-glow sidebar-action-btn draw-btn w-full"
                    >
                      <Layers size={15} /> Bốc Thẻ Mới (Vòng {roomState.round})
                    </button>
                  )}

                  {/* NÚT PHÁ ÁN */}
                  {roomState?.phase === 'INVESTIGATION' && !isForensic && (
                    <button 
                      onClick={() => me?.hasBadge ? setShowAccuseModal(true) : setErrorMsg('Đã hết Huy hiệu!')}
                      className={`btn-accuse-badge-glow sidebar-action-btn accuse-btn w-full ${!me?.hasBadge ? 'disabled' : ''}`}
                      disabled={!me?.hasBadge}
                    >
                      <Award size={16} /> Phá Án ({me?.hasBadge ? 'Còn 1 Huy hiệu' : 'Hết Huy hiệu'})
                    </button>
                  )}
                </div>
              </div>

            </aside>

            {/* CỘT CHÍNH: BANNER ĐÁP ÁN BÍ MẬT DÀNH CHO PHÁP Y & BẢNG BỐI CẢNH */}
            <main className="natural-panel-center">
              
              {/* BANNER THÔNG BÁO ĐÁP ÁN BÍ MẬT DÀNH RIÊNG CHO PHÁP Y (SIÊU GỌN 1 DÒNG) */}
              {isForensic && roomState?.secretSolution?.means && (
                <div className="forensic-solution-banner-compact mb-3 mobile-tab-section-scene">
                  <div className="flex items-center gap-2 text-xs flex-wrap">
                    <span className="font-extrabold text-amber-400 flex items-center gap-1">
                      <Sparkles size={14} /> ĐÁP ÁN VỤ ÁN:
                    </span>
                    <span className="solution-tag murderer flex items-center gap-1">
                      <Skull size={13} className="text-amber-400" /> Kẻ sát nhân: <strong>{murdererPlayerObj?.name || 'Kẻ Sát Nhân'}</strong>
                    </span>
                    <span className="solution-tag means flex items-center gap-1">
                      <Flame size={13} className="text-rose-400" /> Công cụ giết người: <strong>{roomState.secretSolution.means.name}</strong>
                    </span>
                    <span className="solution-tag clue flex items-center gap-1">
                      <FileText size={13} className="text-blue-400" /> Bằng chứng chính: <strong>{roomState.secretSolution.clue.name}</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* 1. BẢNG THẺ BỐI CẢNH HIỆN TRƯỜNG */}
              <section className="compact-card scene-board-compact mobile-tab-section-scene">
                <div className="section-header-bar">
                  <div className="section-title-group">
                    <div className="section-icon-badge amber">
                      <Target size={16} />
                    </div>
                    <h2 className="section-title-text">
                      THẺ BỐI CẢNH HIỆN TRƯỜNG
                      <span className="section-badge-round">VÒNG {roomState.round}/3</span>
                    </h2>
                  </div>
                </div>

                {/* TỰ ĐỘNG THU GỌN HIỆN THANH CHIP NGANG KHI VÀO VÒNG ĐIỀU TRA */}
                {isSceneBoardCollapsed ? (
                  <div className="scene-summary-chips-bar">
                    {allSceneTiles.map(tile => {
                      const bulletIdx = roomState.bullets?.[tile.id];
                      const bulletOption = bulletIdx !== undefined ? tile.options[bulletIdx] : 'Chưa chọn';
                      const bulletLabel = getOptLabel(bulletOption);
                      const tileColorClass = getTileColorClass(tile.id);
                      return (
                        <div key={tile.id} className={`scene-chip-item ${tileColorClass} flex items-center gap-1.5`}>
                          <span className="chip-tile-name">{tile.name}:</span>
                          <span className="flex items-center gap-1 font-bold text-white">
                            <Target size={12} /> {bulletLabel}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    {/* PHÁP Y GẮN ĐẠN LẦN ĐẦU (PHÂN MÀU THẺ TÍM, XANH LÁ, NÂU NHẠT CHUẨN LUẬT) */}
                    {roomState.phase === 'FORENSIC_SETUP' && isForensic && (
                      <div className="forensic-setup-compact">
                        <div className="scene-grid-compact">
                          {allSceneTiles.map((tile) => {
                            const tileColorClass = getTileColorClass(tile.id);
                            return (
                              <div key={tile.id} className={`scene-card-sm picking ${tileColorClass}`}>
                                <div className="scene-card-title">{tile.name}</div>
                                <div className="scene-options-list">
                                  {tile.options.map((opt, idx) => {
                                    const label = getOptLabel(opt);
                                    const isSelected = forensicBullets[tile.id] === idx;
                                    return (
                                      <button 
                                        key={idx}
                                        onClick={() => handleSelectBullet(tile.id, idx)}
                                        className={`scene-opt-btn ${isSelected ? 'selected' : ''}`}
                                      >
                                        {isSelected && <Target size={13} className="inline mr-1 text-rose-400" />}
                                        {label}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <button 
                          onClick={handleConfirmForensicBullets}
                          className="btn btn-md btn-primary mt-3 w-full font-bold shadow-lg"
                        >
                          🚀 XÁC NHẬN ĐẶT ĐẠN CHỈ DẪN & BẮT ĐẦU ĐIỀU TRA
                        </button>
                      </div>
                    )}

                    {/* HIỂN THỊ THẺ BỐI CẢNH CÔNG KHAI KHI MỞ RỘNG */}
                    {(roomState.phase === 'INVESTIGATION' || roomState.phase === 'GAME_OVER') && (
                      <div className="scene-grid-compact">
                        {allSceneTiles.map((tile) => {
                          const bulletIdx = roomState.bullets[tile.id];
                          const tileColorClass = getTileColorClass(tile.id);
                          return (
                            <div key={tile.id} className={`scene-card-sm public ${tileColorClass}`}>
                              <div className="scene-card-title">{tile.name}</div>
                              <div className="scene-options-list">
                                {tile.options.map((opt, idx) => {
                                  const label = getOptLabel(opt);
                                  const isSelected = bulletIdx === idx;
                                  return (
                                    <div key={idx} className={`scene-opt-item ${isSelected ? 'has-bullet' : ''}`}>
                                      {isSelected ? (
                                        <span className="flex items-center gap-1 text-rose-400 font-bold">
                                          <Target size={13} /> {label}
                                        </span>
                                      ) : (
                                        <span className="text-slate-400">{label}</span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </section>

              {/* 2. BÀN CHƠI HIỂN THỊ BÀI NGƯỜI CHƠI (ẨN HOÀN TOÀN THẺ CỦA PHÁP Y) */}
              <section className="compact-card players-board-compact mobile-tab-section-players">
                <div className="section-header-bar">
                  <div className="section-title-group">
                    <div className="section-icon-badge blue">
                      <Users size={16} />
                    </div>
                    <h2 className="section-title-text">
                      BÀI NGƯỜI CHƠI NGHI PHẠM
                      <span className="section-count-pill">{roomState?.players ? roomState.players.length - 1 : 0}</span>
                    </h2>
                  </div>
                  <div className="section-tip-badge">
                    <Sparkles size={12} className="text-amber-400" />
                    <span>Nhấp vào thẻ của ai để nghi vấn người đó</span>
                  </div>
                </div>

                {/* GIAO DIỆN CHỌN HUNG KHÍ & MANH MỐI BÍ MẬT DÀNH CHO HUNG THỦ */}
                {roomState?.phase === 'CRIME_CHOICE' && (
                  isMurderer ? (
                    <div className="murderer-choice-banner-card mb-4">
                      <div className="murderer-choice-head">
                        <div className="badge-skull-glow"><Skull size={24} /></div>
                        <div>
                          <h3 className="murderer-choice-title">THIẾT LẬP VỤ ÁN BÍ MẬT (DÀNH CHO KẺ SÁT NHÂN)</h3>
                          <p className="murderer-choice-sub">Hãy nhấp chọn 1 Công cụ giết người và 1 Bằng chứng chính của bạn làm đáp án vụ án:</p>
                        </div>
                      </div>

                      <div className="murderer-picker-sections mt-4">
                        <div className="picker-column means-picker-column">
                          <label className="picker-col-label text-rose-400 flex items-center gap-1">
                            <Flame size={14} /> 1. CHỌN 1 CÔNG CỤ GIẾT NGƯỜI (MEANS):
                          </label>
                          <div className="cards-picker-grid">
                            {me?.means?.map(card => {
                              const isSelected = selectedMeans?.id === card.id;
                              return (
                                <button
                                  key={card.id}
                                  onClick={() => setSelectedMeans(card)}
                                  className={`tarot-choice-card means ${isSelected ? 'selected' : ''}`}
                                >
                                  <span className="card-tarot-name">{card.name}</span>
                                  {isSelected && <span className="card-check-badge flex items-center gap-0.5 justify-center"><Check size={12} /> Đã chọn</span>}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="picker-column clue-picker-column">
                          <label className="picker-col-label text-blue-400 flex items-center gap-1">
                            <FileText size={14} /> 2. CHỌN 1 BẰNG CHỨNG CHÍNH (CLUE):
                          </label>
                          <div className="cards-picker-grid">
                            {me?.clues?.map(card => {
                              const isSelected = selectedClue?.id === card.id;
                              return (
                                <button
                                  key={card.id}
                                  onClick={() => setSelectedClue(card)}
                                  className={`tarot-choice-card clue ${isSelected ? 'selected' : ''}`}
                                >
                                  <span className="card-tarot-name">{card.name}</span>
                                  {isSelected && <span className="card-check-badge flex items-center gap-0.5 justify-center"><Check size={12} /> Đã chọn</span>}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={handleConfirmMurderChoice} 
                        className="btn-confirm-murder-solution w-full mt-4"
                      >
                        CHỐT ĐÁP ÁN VỤ ÁN BÍ MẬT
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-6 text-sm text-amber-400 font-extrabold animate-pulse bg-amber-500/10 border border-amber-500/30 rounded-xl mb-4">
                      ⏳ Đang chờ Kẻ Sát Nhân bí mật chọn đáp án Công cụ & Bằng chứng chính...
                    </div>
                  )
                )}

                {/* DANH SÁCH BÀI NGƯỜI CHƠI (ẨN HOÀN TOÀN PHÁP Y KHỎI BÀN CHƠI) */}
                <div className="players-grid-compact-stylish">
                  {roomState?.players
                    ?.filter(player => player.id !== roomState.forensicScientistId)
                    .map(player => (
                      <div key={player.id} className="player-card-stylish">
                        <div className="player-card-head">
                          <div className="player-avatar-badge">
                            {player.isBot ? <Zap size={14} className="text-amber-400" /> : <Shield size={14} className="text-blue-400" />}
                          </div>
                          <span className="player-name-text truncate">
                            {player.name} {player.id === socket.id && <span className="me-tag">(Bạn)</span>}
                          </span>
                          {player.hasBadge && (
                            <div className="badge-has-badge" title="Còn Huy hiệu Phá án">
                              <Award size={13} />
                            </div>
                          )}
                        </div>

                        {player.means && (
                          <div className="player-mini-decks">
                            <div className="chip-list-group">
                              <span className="deck-lbl means-lbl">
                                <Flame size={12} /> Công cụ giết người
                              </span>
                              <div className="mini-chips-grid">
                                {player.means.map(c => (
                                  <button 
                                    key={c.id} 
                                    onClick={() => handleQuickAccuseCard(player.id, c, 'means')}
                                    className="mini-chip means-chip"
                                    title="Nhấp để Phá án nhanh bằng thẻ này"
                                  >
                                    {c.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="chip-list-group">
                              <span className="deck-lbl clues-lbl">
                                <FileText size={12} /> Bằng chứng chính
                              </span>
                              <div className="mini-chips-grid">
                                {player.clues?.map(c => (
                                  <button 
                                    key={c.id} 
                                    onClick={() => handleQuickAccuseCard(player.id, c, 'clue')}
                                    className="mini-chip clue-chip"
                                    title="Nhấp để Phá án nhanh bằng thẻ này"
                                  >
                                    {c.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>

              </section>

            </main>

          </div>

          {/* FLOATING CHAT BUBBLE WIDGET */}
          <div className="floating-chat-container mobile-tab-section-chat">
            {isChatOpen || activeMobileTab === 'chat' ? (
              <div className="floating-chat-box mobile-full-chat">
                <div className="floating-chat-head">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-amber-400" />
                    <span>💬 THẢO LUẬN & CHAT NHANH</span>
                  </div>
                  <button onClick={() => setIsChatOpen(false)}><X size={16} /></button>
                </div>

                <div className="floating-chat-messages">
                  {isForensic && (
                    <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded text-center text-xs text-amber-300 font-bold mb-2">
                      🔒 Theo luật Deception: Nhà khoa học pháp y không được chat hay gợi ý thành lời!
                    </div>
                  )}

                  {chatMessages.length === 0 ? (
                    <div className="chat-empty-sm">Chưa có tin nhắn nào. Nhắn tin để tranh luận!</div>
                  ) : (
                    chatMessages.map((msg, i) => (
                      <div key={i} className="chat-line">
                        <strong className="text-amber-400">{msg.sender}:</strong> <span>{msg.text}</span>
                      </div>
                    ))
                  )}
                </div>

                <div className="floating-chat-input">
                  <input 
                    type="text" 
                    placeholder={isForensic ? "Pháp Y im lặng lắng nghe..." : "Nhắn tin tranh luận..."}
                    value={chatInput}
                    disabled={isForensic}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  />
                  <button 
                    onClick={handleSendChat} 
                    disabled={isForensic}
                    className="btn btn-xs btn-primary disabled:opacity-50"
                  >
                    <Send size={12} />
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => {
                  setIsChatOpen(true);
                  setUnreadChatCount(0);
                }} 
                className="floating-chat-bubble-btn"
                title="Mở khung thảo luận"
              >
                <MessageSquare size={20} />
                <span>{isForensic ? 'Lắng nghe Chat' : 'Thảo luận'}</span>
                {unreadChatCount > 0 && <span className="chat-unread-badge">{unreadChatCount}</span>}
              </button>
            )}
          </div>

          {/* MOBILE BOTTOM NAVIGATION BAR */}
          <nav className="mobile-bottom-nav">
            <button 
              onClick={() => setActiveMobileTab('scene')}
              className={`mobile-nav-btn ${activeMobileTab === 'scene' ? 'active' : ''}`}
            >
              <Target size={18} />
              <span>🎯 Gợi Ý</span>
            </button>

            <button 
              onClick={() => setActiveMobileTab('players')}
              className={`mobile-nav-btn ${activeMobileTab === 'players' ? 'active' : ''}`}
            >
              <Users size={18} />
              <span>🎴 Bàn Bài</span>
            </button>

            <button 
              onClick={() => setActiveMobileTab('profile')}
              className={`mobile-nav-btn ${activeMobileTab === 'profile' ? 'active' : ''}`}
            >
              <Shield size={18} />
              <span>🕵️ Hồ Sơ</span>
            </button>

            <button 
              onClick={() => {
                setActiveMobileTab('chat');
                setIsChatOpen(true);
              }}
              className={`mobile-nav-btn ${activeMobileTab === 'chat' ? 'active' : ''}`}
            >
              <MessageSquare size={18} />
              <span>💬 Chat</span>
            </button>
          </nav>

        </main>
      )}

      {/* 4. MODAL THÔNG BÁO TIẾT LỘ VAI TRÒ */}
      {showRoleRevealModal && me?.role && (
        <div className="modal-overlay">
          <div className={`modal-card role-reveal-card ${me.role.id}`}>
            <div className="role-reveal-hero">
              <div className="role-reveal-icon-badge">
                <Shield size={40} className="text-amber-400" />
              </div>
              <span className="role-reveal-subtitle">BẠN ĐƯỢC PHÂN VAI TRÒ</span>
              <h2 className="role-reveal-title">{me.role.name}</h2>
            </div>

            <div className="role-reveal-desc">
              <p>{me.role.description}</p>
              {isMurderer && (
                <div className="murderer-alert-box mt-2">
                  <span>Hãy bí mật chọn 1 Công cụ giết người và 1 Bằng chứng chính làm đáp án vụ án!</span>
                </div>
              )}
            </div>

            <div className="modal-footer justify-center pt-2">
              <button 
                onClick={() => setShowRoleRevealModal(false)}
                className="btn btn-lg btn-primary font-black px-8"
              >
                <Check size={18} /> ĐÃ HIỂU VAI TRÒ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL BỐC THẺ BỐI CẢNH MỚI */}
      {showDrawTileModal && nextDrawnTile && (
        <div className="modal-overlay">
          <div className="modal-card draw-tile-modal-premium">
            <div className="modal-header">
              <h3>
                <Sparkles size={20} className="text-amber-400" /> 
                <span>PHÁP Y: CHỌN THẺ CŨ ĐỂ ĐÈ THẺ MỚI (VÒNG {roomState.round})</span>
              </h3>
              <button onClick={() => setShowDrawTileModal(false)}><X size={18} /></button>
            </div>

            <div className="modal-body">
              <div className="new-tarot-card-frame">
                <div className="tarot-card-badge">
                  <Layers size={14} /> THẺ RÚT MỚI
                </div>
                <h4 className="tarot-card-title">{nextDrawnTile.name}</h4>
                <div className="tarot-options-list mt-2">
                  {nextDrawnTile.options.map((opt, idx) => {
                    const isSelected = newTileBulletIdx === idx;
                    const label = getOptLabel(opt);
                    return (
                      <button 
                        key={idx}
                        onClick={() => setNewTileBulletIdx(idx)}
                        className={`option-tarot-btn ${isSelected ? 'selected' : ''}`}
                      >
                        {isSelected && <Target size={13} className="inline mr-1 text-rose-400" />}
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="old-tiles-selection-section">
                <label className="section-label">NHẤP CHỌN 1 THẺ CŨ CẦN ĐÈ LÊN:</label>
                <div className="old-tiles-selectable-grid">
                  {roomState?.activeSceneTiles?.map(tile => {
                    const isSelected = replaceTargetTileId === tile.id;
                    const activeBullet = roomState.bullets[tile.id];
                    const bulletOption = activeBullet !== undefined ? tile.options[activeBullet] : 'Chưa có';
                    const bulletLabel = getOptLabel(bulletOption);

                    return (
                      <div 
                        key={tile.id}
                        onClick={() => setReplaceTargetTileId(tile.id)}
                        className={`selectable-old-tile-card ${isSelected ? 'selected' : ''}`}
                      >
                        <span className="old-tile-name">{tile.name}</span>
                        <span className="old-tile-bullet flex items-center gap-1 text-rose-400">
                          <Target size={12} /> {bulletLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowDrawTileModal(false)} className="btn btn-secondary">Đóng</button>
              <button onClick={handleConfirmReplaceTile} className="btn btn-gold-draw font-extrabold">
                🚀 XÁC NHẬN ĐÈ THẺ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PHÁ ÁN */}
      {showAccuseModal && (
        <div className="modal-overlay">
          <div className="modal-card accuse-modal-premium">
            <div className="modal-header">
              <h3><Award size={18} /> ĐƯA RA LỜI PHÁ ÁN CHÍNH THỨC</h3>
              {roomState?.timerType === 'ACCUSATION_WINDOW' && (
                <div className="font-mono text-rose-400 font-bold text-xs">⏱️ Còn {secCount}s</div>
              )}
              <button onClick={() => setShowAccuseModal(false)}><X size={18} /></button>
            </div>

            <div className="modal-body">
              <div className="modal-field">
                <label className="font-extrabold text-amber-400">1. CHỌN NGHI PHẠM BỊ CÁO BUỘC:</label>
                <select 
                  value={accuseTargetId} 
                  onChange={(e) => {
                    setAccuseTargetId(e.target.value);
                    setAccuseMeans(null);
                    setAccuseClue(null);
                  }}
                  className="modal-select font-bold"
                >
                  <option value="">-- Nhấp chọn người chơi làm nghi phạm --</option>
                  {roomState?.players
                    ?.filter(p => p.id !== roomState.forensicScientistId)
                    .map(p => (
                      <option key={p.id} value={p.id}>{p.name} {p.isBot ? '(Bot)' : ''}</option>
                    ))}
                </select>
              </div>

              {accuseTargetId && accusedPlayerObj && (
                <>
                  <div className="modal-field mt-2">
                    <label className="font-extrabold text-rose-400 flex items-center gap-1">
                      <Flame size={14} /> 2. CHỌN 1 CÔNG CỤ GIẾT NGƯỜI CỦA [{accusedPlayerObj.name.toUpperCase()}]:
                    </label>
                    <div className="modal-cards-grid">
                      {accusedPlayerObj.means?.map(c => (
                        <div 
                          key={c.id} 
                          onClick={() => setAccuseMeans(c)}
                          className={`modal-card-item means ${accuseMeans?.id === c.id ? 'selected' : ''}`}
                        >
                          <span className="card-name-txt">{c.name}</span>
                          {accuseMeans?.id === c.id && <span className="text-emerald-400 text-xs font-bold flex items-center gap-0.5"><Check size={12} /> Đã chọn</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-field mt-2">
                    <label className="font-extrabold text-blue-400 flex items-center gap-1">
                      <FileText size={14} /> 3. CHỌN 1 BẰNG CHỨNG CHÍNH CỦA [{accusedPlayerObj.name.toUpperCase()}]:
                    </label>
                    <div className="modal-cards-grid">
                      {accusedPlayerObj.clues?.map(c => (
                        <div 
                          key={c.id} 
                          onClick={() => setAccuseClue(c)}
                          className={`modal-card-item clue ${accuseClue?.id === c.id ? 'selected' : ''}`}
                        >
                          <span className="card-name-txt">{c.name}</span>
                          {accuseClue?.id === c.id && <span className="text-emerald-400 text-xs font-bold flex items-center gap-0.5"><Check size={12} /> Đã chọn</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowAccuseModal(false)} className="btn btn-secondary">Hủy</button>
              <button 
                onClick={handleSendAccusation} 
                className="btn btn-primary font-black"
                disabled={!accuseTargetId || !accuseMeans || !accuseClue}
              >
                🚀 XÁC NHẬN LỜI PHÁ ÁN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL HUỚNG DẪN LUẬT CHƠI */}
      {showGuideModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>📖 HUỚNG DẪN LUẬT CHƠI CS FILES DECEPTION</h3>
              <button onClick={() => setShowGuideModal(false)}><X size={18} /></button>
            </div>
            <div className="modal-body text-xs text-left leading-relaxed">
              <p><strong>Deception: Murder in Hong Kong</strong> là trò chơi suy luận ẩn vai trò:</p>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><strong>Nhà khoa học pháp y:</strong> Biết đáp án vụ án nhưng KHÔNG ĐƯỢC NÓI THÀNH LỜI. Đưa ra gợi ý thông qua các thẻ bối cảnh.</li>
                <li><strong>Kẻ sát nhân:</strong> Bí mật chọn 1 Công cụ giết người và 1 Bằng chứng chính của mình lúc đầu game. Cần giấu giếm và đánh lạc hướng mọi người.</li>
                <li><strong>Điều tra viên:</strong> Thảo luận cùng nhau, quan sát bài của tất cả người chơi để tìm ra ai giữ Công cụ & Bằng chứng mục tiêu. Mỗi người có 1 Huy hiệu duy nhất để đưa ra lời Phá án!</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowGuideModal(false)} className="btn btn-primary">Đã hiểu</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
