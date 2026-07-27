import React, { useState, useEffect, useRef, useMemo } from 'react';
import { io } from 'socket.io-client';
import { 
  Skull, Shield, Search, Eye, EyeOff, Users, X, 
  LogOut, CheckCircle, ArrowRight, Volume2, VolumeX, Music,
  BookOpen, Send, MessageSquare, Crown, Award, Play, UserPlus, UserMinus, Target, RefreshCw, Layers, Trophy, Clock, CheckSquare, AlertTriangle, Sparkles, Check, Copy, KeyRound, Compass, ChevronUp, ChevronDown, Lock, Flame, Zap, FileText, UserCheck, UserX, AlertCircle
} from 'lucide-react';
import { ROLES, MEANS_CARDS, CLUE_CARDS, CAUSE_OF_DEATH, LOCATIONS, SCENE_TILES } from './data/game-data';
import { SHERLOCK_CASE_1 } from './data/sherlock-case-1';

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

  // Optional Roles Settings (Mặc định tắt hoàn toàn, chỉ mở khi >= 6 người)
  const [enableAccomplice, setEnableAccomplice] = useState(false);
  const [enableWitness, setEnableWitness] = useState(false);

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
  const [latestChatToast, setLatestChatToast] = useState(null);

  // Timestamp hiện tại cập nhật 200ms/lần giúp đếm ngược mượt 100%
  const [nowTimestamp, setNowTimestamp] = useState(Date.now());

  // Selections for Murderer
  const [selectedMeans, setSelectedMeans] = useState(null);
  const [selectedClue, setSelectedClue] = useState(null);

  // Selections for Forensic Scientist (Bullets)
  const [forensicBullets, setForensicBullets] = useState({});

  // Game Selection / Sherlock States
  const [showGameSelectModal, setShowGameSelectModal] = useState(false);
  const [selectedGameForModal, setSelectedGameForModal] = useState(null); // 'deception' | 'sherlock' | null
  const [sherlockSearchQuery, setSherlockSearchQuery] = useState('');
  const [sherlockSelectedNodeId, setSherlockSelectedNodeId] = useState(null);
  const [sherlockAnswers, setSherlockAnswers] = useState({});

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

  // Nhạc nền BGM Sherlock Holmes
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const audioBgmRef = useRef(null);

  const roomStateRef = useRef(roomState);
  const chatEndRef = useRef(null);
  const isChatOpenRef = useRef(isChatOpen);
  const createdGameTypeRef = useRef('deception');

  useEffect(() => {
    isChatOpenRef.current = isChatOpen;
    if (isChatOpen) {
      setUnreadChatCount(0);
    }
  }, [isChatOpen]);

  useEffect(() => {
    roomStateRef.current = roomState;
  }, [roomState]);

  // Cập nhật timestamp 200ms/lần
  useEffect(() => {
    const timer = setInterval(() => {
      setNowTimestamp(Date.now());
    }, 200);
    return () => clearInterval(timer);
  }, []);

  // TỰ ĐỘNG ẨN THÔNG BÁO LỖI SAU 3.5 GIÂY (AUTO-DISMISS TOAST)
  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg('');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  // TỰ ĐỘNG TẮT VAI TRÒ MỞ RỘNG NẾU ÍT HƠN 6 NGƯỜI CHƠI
  useEffect(() => {
    if (roomState?.players && roomState.players.length < 6) {
      setEnableAccomplice(false);
      setEnableWitness(false);
    }
  }, [roomState?.players?.length]);

  // ĐỒNG BỘ NỘI DUNG CHAT TỪ ROOM STATE CHO TẤT CẢ THÀNH VIÊN
  useEffect(() => {
    if (roomState?.chatMessages) {
      setChatMessages(roomState.chatMessages);
    }
  }, [roomState?.chatMessages]);

  // TỰ ĐỘNG CHỌN BACKGROUND ẢNH VŨ ÁN / SẢNH CHỜ THU HÚT
  const currentBgStyle = useMemo(() => {
    if (!inRoom) {
      return {
        backgroundImage: `linear-gradient(185deg, rgba(10, 8, 15, 0.85) 0%, rgba(5, 5, 10, 0.94) 100%), url('/images/landing-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      };
    }

    const code = roomState?.code || '';
    const codeSum = code.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    const bgImageName = codeSum % 2 === 0 ? 'game-bg-1.jpg' : 'game-bg-2.jpg';

    return {
      backgroundImage: `linear-gradient(185deg, rgba(12, 9, 18, 0.88) 0%, rgba(6, 5, 10, 0.95) 100%), url('/images/${bgImageName}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    };
  }, [inRoom, roomState?.code]);

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

  // TỰ ĐỘNG PHÁT NHẠC KHI CÓ TƯƠNG TÁC ĐẦU TIÊN CỦA NGƯỜI DÙNG (BYPASS AUTOPLAY POLICY)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioBgmRef.current && isPlayingMusic && audioBgmRef.current.paused) {
        audioBgmRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [isPlayingMusic]);

  const toggleMusic = () => {
    if (!audioBgmRef.current) return;
    if (isPlayingMusic) {
      audioBgmRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioBgmRef.current.play().catch(e => console.warn('BGM play failed:', e));
      setIsPlayingMusic(true);
    }
  };

  // Socket Events
  useEffect(() => {
    socket.on('room-created', ({ roomState }) => {
      const gameType = roomState?.gameType || createdGameTypeRef.current || 'deception';
      setRoomState({ ...roomState, gameType });
      setInRoom(true);
      setErrorMsg('');
    });

    socket.on('room-updated', (updated) => {
      setRoomState(prev => {
        const gameType = updated?.gameType || prev?.gameType || createdGameTypeRef.current || 'deception';
        return { ...updated, gameType };
      });
    });

    socket.on('game-started', (updated) => {
      setRoomState(prev => {
        const gameType = updated?.gameType || prev?.gameType || createdGameTypeRef.current || 'deception';
        return { ...updated, gameType };
      });
      setSelectedMeans(null);
      setSelectedClue(null);
      setForensicBullets({});
      setShowAccuseModal(false);
      setShowDrawTileModal(false);
      
      const activeType = updated?.gameType || createdGameTypeRef.current;
      if (activeType !== 'sherlock' && updated.forensicScientistId !== socket.id) {
        setShowRoleRevealModal(true);
      }
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
    });

    socket.on('error-msg', (msg) => {
      setErrorMsg(msg);
    });

    socket.on('kicked-from-room', () => {
      setInRoom(false);
      setRoomState(null);
      setErrorMsg('Bạn đã bị Chủ phòng kick khỏi phòng!');
    });



    socket.on('receive-chat', (chatPayload) => {
      setChatMessages(prev => {
        if (chatPayload.id && prev.some(m => m.id === chatPayload.id)) {
          return prev;
        }
        return [...prev, chatPayload];
      });

      if (chatPayload.senderId !== socket.id) {
        if (!isChatOpenRef.current) {
          setUnreadChatCount(prev => prev + 1);
        }
        setLatestChatToast(chatPayload);
        setTimeout(() => {
          setLatestChatToast(prev => (prev?.id === chatPayload.id ? null : prev));
        }, 4500);
      }
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
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
    };
  }, [roomState]);

  // Actions
  const handleCreateRoom = (gameType) => {
    if (!socket || !socket.connected) {
      return setErrorMsg('Không kết nối tới server trò chơi. Hãy đảm bảo server đang chạy.');
    }
    const defaultName = `Thám tử ${Math.floor(Math.random() * 9000) + 1000}`;
    const name = playerName && playerName.trim() ? playerName.trim() : defaultName;
    if (!playerName || !playerName.trim()) setPlayerName(name);
    const targetGameType = gameType || selectedGameForModal || 'deception';
    socket.emit('create-room', { playerName: name, gameType: targetGameType });
    setShowGameSelectModal(false);
    setSelectedGameForModal(null);
  };

  const handleVisitNode = (nodeId) => {
    if (roomState?.code && nodeId) {
      socket.emit('visit-node', { roomCode: roomState.code, nodeId });
      setSherlockSearchQuery('');
    }
  };

  const handleSherlockNextPhase = (phase) => {
    if (roomState?.code) {
      socket.emit('sherlock-next-phase', { roomCode: roomState.code, phase });
    }
  };

  const handleSubmitSherlockSolution = () => {
    if (roomState?.code) {
      socket.emit('submit-sherlock-solution', { roomCode: roomState.code, answers: sherlockAnswers });
    }
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
    if (roomState?.gameType === 'sherlock') {
      socket.emit('start-game', { roomCode: roomState.code });
      return;
    }
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
    const text = roomState?.code;
    if (!text) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    } catch (e) {
      fallbackCopy(text);
    }
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const fallbackCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
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

  const handleSendChat = (e) => {
    if (e) e.preventDefault();
    const text = chatInput.trim();
    if (!text) return;

    const code = (roomStateRef.current?.code || roomState?.code || '').toUpperCase();
    if (!code) return setErrorMsg('Bạn chưa tham gia phòng chơi!');

    const msgId = `msg_${Date.now()}_${Math.floor(Math.random()*1000)}`;

    // 1. Thêm ngay tin nhắn vào bộ nhớ cá nhân (Hiển thị tức thì 0ms delay)
    const myMsg = {
      id: msgId,
      sender: me?.name || playerName || 'Bạn',
      senderId: socket.id,
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, myMsg]);
    setChatInput('');

    // 2. Phát tin nhắn qua socket cho tất cả người chơi khác
    socket.emit('send-chat', {
      roomCode: code,
      message: text,
      msgId: msgId
    });

    // Cuộn xuống cuối
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
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

  const handleLeaveRoom = () => {
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
    <div className="app-layout" style={currentBgStyle}>
      
      {/* HEADER - chỉ hiện khi đang trong phòng, không có logo */}
      {inRoom && (
        <header className="app-header-compact">
          <div className="header-actions">
            <div className="room-code-pill cursor-pointer" onClick={handleCopyCode} title="Nhấp để copy mã phòng">
              <span>PHÒNG:</span>
              <strong>{roomState?.code}</strong>
              <Copy size={12} className="ml-1 text-slate-400" />
            </div>

            {/* NÚT BẬT/TẮT NHẠC NỀN */}
            <button 
              onClick={toggleMusic}
              className={`btn btn-xs ${isPlayingMusic ? 'btn-music-active' : 'btn-music-muted'}`}
              title="Bật/Tắt Nhạc nền Sherlock Holmes"
            >
              {isPlayingMusic ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span>{isPlayingMusic ? 'NHẠC BẬT' : 'NHẠC TẮT'}</span>
            </button>

            <button onClick={() => setShowGuideModal(true)} className="btn btn-xs btn-secondary">
              <BookOpen size={13} /> Luật
            </button>

            <button onClick={handleLeaveRoom} className="btn btn-xs btn-danger">
              <LogOut size={13} /> Rời
            </button>
          </div>
        </header>
      )}

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
            
            {/* LOGO TITLE */}
            <div className="hero-logo-box text-center">
              <div className="detective-emblem-badge mx-auto">
                <div className="emblem-inner-glow">
                  <Skull size={44} className="text-rose-500 stroke-[3]" />
                  <Search size={32} className="text-amber-400 stroke-[3] emblem-glass-overlay" />
                </div>
                <div className="badge-star-sticker">VIP CLUB</div>
              </div>
              <h1 className="cinematic-main-title tracking-wider" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                SHERLOCK & DECEPTION
              </h1>
              <span className="cinematic-sub-title text-amber-400 font-black tracking-widest uppercase" style={{ letterSpacing: '0.18em' }}>
                ĐẤU TRƯỜNG KỲ ÁN TRINH THÁM MULTIPLAYER
              </span>
            </div>

            {/* INPUT NICKNAME */}
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
                onKeyDown={(e) => e.key === 'Enter' && setShowGameSelectModal(true)}
              />
            </div>

            {/* DUAL ACTION GRID: TẠO PHÒNG MỚI & THAM GIA PHÒNG */}
            <div className="dual-action-grid">
              
              {/* TẠO PHÒNG MỚI */}
              <div className="action-tile-card create-tile" onClick={() => setShowGameSelectModal(true)}>
                <div className="tile-icon-wrapper text-rose-400">
                  <Compass size={32} />
                </div>
                <div className="tile-content">
                  <h3>+ TẠO PHÒNG MỚI</h3>
                  <p>Chọn tựa game, khởi tạo phòng & Mời bạn bè</p>
                </div>
                <button onClick={() => setShowGameSelectModal(true)} className="btn btn-md btn-primary w-full mt-2 font-black tracking-wider">
                  TẠO PHÒNG NGAY
                </button>
              </div>

              {/* THAM GIA PHÒNG */}
              <div className="action-tile-card join-tile">
                <div className="tile-icon-wrapper text-amber-400">
                  <KeyRound size={32} />
                </div>
                <div className="tile-content">
                  <h3>THAM GIA PHÒNG</h3>
                  <p>Nhập Mã phòng 4 ký tự do bạn bè chia sẻ</p>
                </div>

                <div className="pin-input-group mt-2">
                  <input 
                    type="text"
                    className="pin-code-field uppercase tracking-widest text-center font-black"
                    placeholder="MÃ PIN (VD: R7S3)"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.key === 'Enter' && handleJoinRoom()}
                  />
                  <button onClick={handleJoinRoom} className="btn btn-md btn-gold-draw font-extrabold whitespace-nowrap">
                    VÀO PHÒNG
                  </button>
                </div>
              </div>

            </div>

            {/* MODAL CHỌN GAME TRINH THÁM */}
            {showGameSelectModal && (
              <div className="modal-overlay" onClick={() => setShowGameSelectModal(false)}>
                <div className="modal-card select-game-modal-card" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header border-b border-amber-500/20 pb-3 flex items-center justify-between mb-4">
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <Search size={22} className="text-amber-400" /> CHỌN TỰA GAME ĐỂ TẠO PHÒNG MỚI
                    </h3>
                    <button onClick={() => setShowGameSelectModal(false)} className="text-slate-400 hover:text-white"><X size={20} /></button>
                  </div>
                  
                  <div className="modal-body">
                    <div className="select-game-grid">
                      
                      {/* CARD GAME DECEPTION */}
                      <div 
                        onClick={() => handleCreateRoom('deception')}
                        className="select-game-option-card deception-option space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Skull className="text-rose-500" size={24} />
                              <h4 className="font-black text-white text-lg">DECEPTION</h4>
                            </div>
                            <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Ẩn vai trò</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Vụ án mạng tại Hồng Kông. Pháp Y ra hiệu manh mối, Hung thủ ẩn mình đổ tội, Thám tử truy tìm sự thật.
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-800">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                            <span>👥 3 - 12 Người</span>
                            <span>⏱️ 15 - 20 Phút</span>
                          </div>
                          <button className="btn btn-sm btn-primary w-full font-black flex items-center justify-center gap-1.5 py-2">
                            TẠO PHÒNG DECEPTION <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* CARD GAME SHERLOCK HOLMES */}
                      <div 
                        onClick={() => handleCreateRoom('sherlock')}
                        className="select-game-option-card sherlock-option space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Search className="text-amber-500" size={24} />
                              <h4 className="font-black text-white text-lg">SHERLOCK HOLMES</h4>
                            </div>
                            <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Đọc kỳ án</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Hợp tác giải vụ án "Cái chết của Sherlock Holmes". Tra cứu bản đồ, thẩm vấn nhân chứng và giải mã kỳ án.
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-800">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                            <span>👥 1 - 8 Người</span>
                            <span>⏱️ 30 - 45 Phút</span>
                          </div>
                          <button className="btn btn-sm btn-gold-draw w-full font-black flex items-center justify-center gap-1.5 py-2">
                            TẠO PHÒNG SHERLOCK <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      )}

      {/* 2. MÀN HÌNH TRUNG GIAN PHÒNG CHỜ (LOBBY) */}
      {inRoom && !roomState?.gameStarted && (() => {
        const isHost = socket.id === (roomState?.hostId || roomState?.players?.[0]?.id);
        const mePlayer = roomState?.players?.find(p => p.id === socket.id);
        const isReady = mePlayer?.isReady;
        const totalPlayers = roomState?.players?.length || 0;
        const canEnableRoles = totalPlayers >= 6;
        const isSherlock = roomState?.gameType === 'sherlock';

        return (
          <main className="lobby-hub-container">
            <div className="lobby-hub-card">
              <div className="lobby-hub-header">
                <div className="hub-title-group">
                  {isSherlock ? (
                    <>
                      <h2 className="flex items-center gap-2 text-amber-300">
                        <Search size={24} className="text-amber-400" /> PHÒNG CHỜ ĐIỀU TRA: SHERLOCK HOLMES
                      </h2>
                      <p className="text-slate-300">Hợp tác cùng đồng đội giải mã kỳ án "Cái chết của Sherlock Holmes".</p>
                    </>
                  ) : (
                    <>
                      <h2 className="flex items-center gap-2">
                        <Crown size={24} className="text-amber-400" /> PHÒNG CHỜ & BẦU CHỌN NHÀ KHOA HỌC PHÁP Y
                      </h2>
                      <p>Bỏ phiếu bầu chọn Quản trò dân chủ. Người có số phiếu bầu cao nhất sẽ làm Nhà khoa học pháp y!</p>
                    </>
                  )}
                </div>
                <div className="hub-room-badge" onClick={handleCopyCode} title="Nhấp để copy Mã phòng">
                  <span className="badge-lbl">MÃ PHÒNG:</span>
                  <strong className="badge-code">{roomState.code}</strong>
                  <button onClick={handleCopyCode} className="btn-copy-sm" title="Copy mã phòng"><Copy size={12} /></button>
                </div>
              </div>

              <div className="lobby-control-bar">
                <div className="player-count-badge">
                  <Users size={18} className="text-amber-400" />
                  <span>Số người chơi: <strong className="text-amber-400">{totalPlayers}/{isSherlock ? '8' : '12'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  {/* CHỦ PHÒNG MỚI THẤY NÚT THÊM/XÓA BOT */}
                  {isHost ? (
                    <div className="bot-actions-group">
                      <button onClick={handleAddBot} className="btn btn-sm btn-secondary"><UserPlus size={14} /> + Thêm Bot</button>
                      {botCount > 0 && <button onClick={handleRemoveBot} className="btn btn-sm btn-outline"><UserMinus size={14} /> - Xóa Bot ({botCount})</button>}
                    </div>
                  ) : (
                    /* NGƯỜI CHƠI KHÁC THẤY NÚT SẴN SÀNG */
                    <button 
                      onClick={() => socket.emit('toggle-ready', { roomCode: roomState.code })}
                      className={`btn btn-sm font-extrabold flex items-center gap-1.5 ${isReady ? 'btn-ready-active' : 'btn-ready-inactive'}`}
                    >
                      {isReady ? <CheckCircle size={14} /> : <Play size={14} />}
                      <span>{isReady ? 'ĐÃ SẴN SÀNG' : 'SẴN SÀNG'}</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lobby-members-section">
                <span className="section-label-amber">
                  {isSherlock ? 'DANH SÁCH THÁM TỬ TRONG PHÒNG CHỜ:' : 'NHẤP VÀO THÀNH VIÊN BẠN MUỐN BẦU LÀM NHÀ KHOA HỌC PHÁP Y:'}
                </span>
                <div className="lobby-members-grid">
                  {roomState.players?.map(player => {
                    const votes = getVotesForPlayer(player.id);
                    const isTopCandidate = !isSherlock && roomState.forensicScientistId === player.id;
                    const isMyVotedTarget = myVotedId === player.id;
                    const isPlayerHost = player.id === (roomState?.hostId || roomState?.players?.[0]?.id);

                    return (
                      <div 
                        key={player.id}
                        className={`member-hub-card ${isTopCandidate ? 'is-forensic-selected' : ''}`}
                      >
                        <div className="member-avatar-box shrink-0">
                          {player.isBot ? <Zap size={20} className="text-amber-400" /> : <Shield size={20} className="text-blue-400" />}
                        </div>

                        <div className="member-details cursor-pointer flex-1 min-w-0" onClick={() => !isSherlock && handleVoteForensic(player.id)}>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-extrabold text-white text-sm truncate max-w-[120px]" title={player.name}>
                              {player.name} {player.id === socket.id && '(Bạn)'}
                            </span>
                            {isPlayerHost && <span className="badge-host-crown">👑 Chủ phòng</span>}
                          </div>
                          <div className="text-[0.72rem] mt-0.5 font-semibold truncate">
                            {isSherlock ? (
                              player.isReady ? <span className="text-emerald-400 font-bold">✓ Đã sẵn sàng</span> : <span className="text-slate-400">⏳ Chưa sẵn sàng</span>
                            ) : (
                              isTopCandidate ? <span className="text-amber-400 font-extrabold">⭐ Dẫn đầu Pháp Y</span> : player.isBot ? <span className="text-slate-400">🤖 Bot tự động</span> : player.isReady ? <span className="text-emerald-400 font-bold">✓ Đã sẵn sàng</span> : <span className="text-slate-400">⏳ Chưa sẵn sàng</span>
                            )}
                          </div>
                          {!isSherlock && (
                            <div className="mt-1 flex items-center gap-1.5 text-xs">
                              <span className={`px-2 py-0.5 rounded-full font-extrabold text-[0.68rem] ${votes > 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800/80 text-slate-400'}`}>{votes} Phiếu</span>
                              {isMyVotedTarget && <span className="text-emerald-400 font-extrabold text-[0.65rem]">(Bạn đã bầu)</span>}
                            </div>
                          )}
                        </div>

                        {isTopCandidate && <div className="selected-crown-badge"><Crown size={18} /></div>}

                        {/* NÚT KICK DÀNH RIÊNG CHO CHỦ PHÒNG */}
                        {isHost && player.id !== socket.id && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              socket.emit('kick-player', { roomCode: roomState.code, targetId: player.id });
                            }}
                            className="btn-kick-member"
                            title="Kick khỏi phòng"
                          >
                            <UserMinus size={13} /> Kick
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* VAI TRÒ MỞ RỘNG (CHỈ DÀNH CHO DECEPTION) */}
              {!isSherlock && (
                <div className="game-settings-section">
                  <div className="flex items-center justify-between mb-2">
                    <span className="section-label-amber">VAI TRÒ MỞ RỘNG TRONG VÁN CHƠI:</span>
                    {!canEnableRoles && (
                      <span className="text-xs text-rose-400 font-extrabold flex items-center gap-1">
                        <Lock size={12} /> Cần từ 6 người chơi trở lên
                      </span>
                    )}
                  </div>
                  <div className="settings-toggles">
                    <label className={`toggle-item ${!canEnableRoles || !isHost ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <input 
                        type="checkbox" 
                        checked={enableAccomplice} 
                        disabled={!canEnableRoles || !isHost}
                        onChange={(e) => setEnableAccomplice(e.target.checked)} 
                      />
                      <span><strong>Đồng Phạm (Accomplice):</strong> Biết Kẻ sát nhân & Bộ đáp án, hỗ trợ che giấu vụ án.</span>
                    </label>
                    <label className={`toggle-item mt-2 ${!canEnableRoles || !isHost ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <input 
                        type="checkbox" 
                        checked={enableWitness} 
                        disabled={!canEnableRoles || !isHost}
                        onChange={(e) => setEnableWitness(e.target.checked)} 
                      />
                      <span><strong>Nhân Chứng (Witness):</strong> Biết ai thuộc phe Tội phạm nhưng phải giữ bí mật danh tính.</span>
                    </label>
                  </div>
                </div>
              )}

              {/* CHỦ PHÒNG MỚI THẤY NÚT BẮT ĐẦU VÁN CHƠI */}
              {isHost ? (
                <div className="lobby-hub-footer">
                  <button onClick={handleStartGame} className="btn btn-lg btn-primary btn-launch-game">
                    <Play size={20} /> {isSherlock ? 'BẮT ĐẦU VÁN CHƠI SHERLOCK HOLMES' : 'BẮT ĐẦU VÁN CHƠI DECEPTION'}
                  </button>
                </div>
              ) : (
                <div className="lobby-hub-footer text-center">
                  <div className="text-sm font-bold text-amber-300 animate-pulse py-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    ⏳ Đang chờ Chủ phòng ({roomState.players?.[0]?.name}) bắt đầu ván chơi...
                  </div>
                </div>
              )}
            </div>
          </main>
        );
      })()}

      {/* 3. MÀN HÌNH GAME CHÍNH */}
      {inRoom && roomState?.gameStarted && (
        roomState?.gameType === 'sherlock' ? (
          <main className="sherlock-game-wrapper p-4 md:p-6 max-w-6xl mx-auto min-h-screen text-slate-200">
            
            {/* 1. GIAI ĐOẠN INTRO / GIỚI THIỆU VỤ ÁN */}
            {roomState?.phase === 'SHERLOCK_INTRO' && (
              <div className="sherlock-intro-card bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl space-y-6">
                <div className="border-b border-amber-500/20 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 tracking-widest uppercase flex items-center gap-1.5 mb-1">
                      <Search size={14} /> Vụ án Sherlock Holmes #1
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-amber-100">{SHERLOCK_CASE_1.title}</h2>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                      <span>Tác giả: <strong>{SHERLOCK_CASE_1.author}</strong></span>
                      <span>•</span>
                      <span>Bối cảnh: <strong>{SHERLOCK_CASE_1.setting_date}</strong></span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleSherlockNextPhase('SHERLOCK_PLAYING')}
                    className="btn btn-md btn-gold-draw font-extrabold flex items-center gap-2 whitespace-nowrap"
                  >
                    <Compass size={18} /> BẮT ĐẦU ĐIỀU TRA KỲ ÁN <ArrowRight size={16} />
                  </button>
                </div>

                {/* BỐI CẢNH BAN ĐẦU */}
                <div className="bg-slate-950/60 border border-amber-500/20 rounded-xl p-5 space-y-3">
                  <h3 className="font-extrabold text-amber-300 text-sm flex items-center gap-2">
                    <BookOpen size={16} /> BỐI CẢNH BAN ĐẦU (INTRO STORY):
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300 whitespace-pre-line font-serif">
                    {SHERLOCK_CASE_1.intro.story_text}
                  </p>
                </div>

                {/* MANH MỐI TÌM THẤY & ĐỊA ĐIỂM MỞ SẴN */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-950/60 border border-rose-500/20 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-rose-400 text-xs uppercase flex items-center gap-1.5">
                      <Skull size={14} /> Manh mối ban đầu thu thập được:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {SHERLOCK_CASE_1.intro.initial_clues.map((clue, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{clue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-950/60 border border-amber-500/20 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-amber-400 text-xs uppercase flex items-center gap-1.5">
                      <Compass size={14} /> Địa điểm gợi ý mở sẵn từ đầu:
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {SHERLOCK_CASE_1.intro.unlocked_nodes.map((nodeId) => (
                        <button
                          key={nodeId}
                          onClick={() => {
                            setSherlockSelectedNodeId(nodeId);
                            handleSherlockNextPhase('SHERLOCK_PLAYING');
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-extrabold text-xs hover:bg-amber-500/40 transition-all flex items-center gap-1.5"
                        >
                          <Compass size={12} /> Ghé thăm mã [{nodeId}]
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button 
                    onClick={() => handleSherlockNextPhase('SHERLOCK_PLAYING')}
                    className="btn btn-lg btn-gold-draw w-full font-black tracking-wider shadow-lg flex items-center justify-center gap-2"
                  >
                    <Play size={20} /> VÀO BẢN ĐỒ & TRA CỨU ĐỊA ĐIỂM
                  </button>
                </div>
              </div>
            )}

            {/* 2. GIAI ĐOẠN PLAYING / TRA CỨU ĐỊA ĐIỂM & ĐỌC MANH MỐI */}
            {roomState?.phase === 'SHERLOCK_PLAYING' && (
              <div className="sherlock-playing-layout space-y-4">
                
                {/* BAR THANH ĐIỀU HƯỚNG TỔNG QUAN */}
                <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <Search size={22} className="text-amber-400" />
                    <div>
                      <h3 className="font-extrabold text-amber-200 text-base">{SHERLOCK_CASE_1.title}</h3>
                      <p className="text-xs text-slate-400">
                        Đã đi: <strong className="text-amber-400">{roomState.visitedNodes?.length || 0} địa điểm</strong> (Sherlock Holmes đi 6 địa điểm)
                      </p>
                    </div>
                  </div>

                  {/* THANH SEARCH KHU VỰC / MÃ ĐỊA ĐIỂM */}
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                      <input 
                        type="text" 
                        placeholder="Nhập mã địa điểm (VD: 5EC, 50NW)..."
                        className="w-full bg-slate-950 border border-amber-500/40 rounded-lg px-3 py-1.5 text-xs text-amber-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        value={sherlockSearchQuery}
                        onChange={(e) => setSherlockSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleVisitNode(sherlockSearchQuery)}
                      />
                    </div>
                    <button 
                      onClick={() => handleVisitNode(sherlockSearchQuery)}
                      className="btn btn-sm btn-primary font-bold whitespace-nowrap"
                    >
                      Ghé thăm
                    </button>
                    <button 
                      onClick={() => handleSherlockNextPhase('SHERLOCK_QUIZ')}
                      className="btn btn-sm btn-gold-draw font-extrabold whitespace-nowrap flex items-center gap-1"
                    >
                      <Trophy size={14} /> Phá án
                    </button>
                  </div>
                </div>

                {/* GRID BẢNG MANH MỐI & NỘI DUNG ĐỊA ĐIỂM */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  
                  {/* CỘT TRÁI: DANH SÁCH ĐỊA ĐIỂM MỞ SẴN & ĐÃ GHÉ THÂM */}
                  <div className="lg:col-span-1 space-y-4">
                    
                    {/* KHU VỰC ĐỊA ĐIỂM ĐÃ GHÉ THÂM */}
                    <div className="bg-slate-900/80 border border-amber-500/20 rounded-xl p-4 space-y-3">
                      <h4 className="font-extrabold text-amber-300 text-xs uppercase tracking-wider flex items-center justify-between">
                        <span>📍 Lịch sử ghé thăm ({roomState.visitedNodes?.length || 0}):</span>
                      </h4>
                      <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                        {roomState.visitedNodes?.length === 0 && (
                          <p className="text-xs text-slate-500 italic">Chưa ghé thăm địa điểm nào. Hãy chọn hoặc nhập mã bên dưới.</p>
                        )}
                        {roomState.visitedNodes?.map((nodeId) => {
                          const n = SHERLOCK_CASE_1.nodes[nodeId];
                          const isSelected = sherlockSelectedNodeId === nodeId;
                          return (
                            <div 
                              key={nodeId}
                              onClick={() => setSherlockSelectedNodeId(nodeId)}
                              className={`p-2 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${isSelected ? 'bg-amber-500/30 border-amber-400 text-amber-100 font-bold' : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'}`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-black text-[0.65rem]">{nodeId}</span>
                                <span className="truncate">{n?.title || nodeId}</span>
                              </div>
                              <ArrowRight size={12} className="text-slate-500 shrink-0" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* KHU VỰC ĐỊA ĐIỂM KHẢ NGHI ĐƯỢC GỢI Ý */}
                    <div className="bg-slate-900/80 border border-amber-500/20 rounded-xl p-4 space-y-3">
                      <h4 className="font-extrabold text-amber-400 text-xs uppercase tracking-wider">
                        🔍 Địa điểm mở khóa ({roomState.unlockedNodes?.length || 0}):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {roomState.unlockedNodes?.map((nodeId) => {
                          const n = SHERLOCK_CASE_1.nodes[nodeId];
                          const isVisited = roomState.visitedNodes?.includes(nodeId);
                          return (
                            <button
                              key={nodeId}
                              onClick={() => {
                                setSherlockSelectedNodeId(nodeId);
                                if (!isVisited) handleVisitNode(nodeId);
                              }}
                              className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all flex items-center gap-1 ${isVisited ? 'bg-slate-800/80 border-slate-700 text-slate-400' : 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/40'}`}
                            >
                              <Compass size={11} /> [{nodeId}] {n?.title ? `(${n.title})` : ''}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* CỘT PHẢI: CHI TIẾT NỘI DUNG NÚT ĐANG CHỌN */}
                  <div className="lg:col-span-2">
                    <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-5 md:p-6 backdrop-blur min-h-[400px] flex flex-col justify-between space-y-4">
                      {sherlockSelectedNodeId && SHERLOCK_CASE_1.nodes[sherlockSelectedNodeId] ? (() => {
                        const node = SHERLOCK_CASE_1.nodes[sherlockSelectedNodeId];
                        return (
                          <div className="space-y-4">
                            <div className="border-b border-amber-500/20 pb-3 flex items-center justify-between">
                              <div>
                                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-black text-xs border border-amber-500/30">
                                  Khu vực {node.area} • Mã [{node.id}]
                                </span>
                                <h3 className="text-xl font-black text-amber-100 mt-1">{node.title}</h3>
                              </div>
                              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                {node.type === 'suspect_interview' ? '🗣️ Thẩm vấn' : node.type === 'clue_inspection' ? '🔍 Vật chứng' : '📍 Địa điểm'}
                              </span>
                            </div>

                            {/* NỘI DUNG VĂN BẢN TRUYỆN */}
                            <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 leading-relaxed font-serif whitespace-pre-line max-h-[350px] overflow-y-auto">
                              {node.content}
                            </div>

                            {/* THÔNG TIN MỞ KHÓA MỚI */}
                            {node.unlocks?.evidence_items?.length > 0 && (
                              <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 space-y-1">
                                <h5 className="text-xs font-bold text-amber-300 uppercase flex items-center gap-1">
                                  <Sparkles size={12} /> Vật chứng / Manh mối mới ghi nhận:
                                </h5>
                                {node.unlocks.evidence_items.map((item, idx) => (
                                  <p key={idx} className="text-xs text-slate-300 font-semibold">• {item}</p>
                                ))}
                              </div>
                            )}

                          </div>
                        );
                      })() : (
                        <div className="flex flex-col items-center justify-center py-16 text-center space-y-3 text-slate-500">
                          <Search size={48} className="text-amber-500/40" />
                          <h4 className="font-extrabold text-slate-300 text-base">Văn phòng Thám tử Baker Street</h4>
                          <p className="text-xs max-w-md">
                            Hãy chọn một địa điểm từ danh sách gợi ý bên trái hoặc gõ mã địa điểm vào ô tìm kiếm phía trên để tới khám xét và lấy lời khai.
                          </p>
                        </div>
                      )}

                      <div className="border-t border-amber-500/20 pt-3 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Tự do thảo luận cùng đồng đội để chọn điểm đến tiếp theo.</span>
                        <button 
                          onClick={() => handleSherlockNextPhase('SHERLOCK_QUIZ')}
                          className="btn btn-sm btn-gold-draw font-extrabold"
                        >
                          🏆 Phá án ngay
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* 3. GIAI ĐOẠN QUIZ / NỘP LỜI GIẢI */}
            {roomState?.phase === 'SHERLOCK_QUIZ' && (
              <div className="sherlock-quiz-card bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl space-y-6">
                <div className="border-b border-amber-500/20 pb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-amber-100 flex items-center gap-2">
                      <Trophy size={24} className="text-amber-400" /> BỘ CÂU HỎI PHÁ ÁN
                    </h2>
                    <p className="text-xs text-slate-400">Hãy đưa ra câu trả lời chính xác nhất dựa trên các manh mối thu thập được.</p>
                  </div>
                  <button 
                    onClick={() => handleSherlockNextPhase('SHERLOCK_PLAYING')}
                    className="btn btn-xs btn-outline"
                  >
                    ← Quay lại điều tra
                  </button>
                </div>

                {/* PART 1: CÂU HỎI VỤ ÁN CHÍNH */}
                <div className="space-y-4">
                  <h3 className="font-extrabold text-amber-300 text-sm uppercase tracking-wider">PHẦN 1: CÂU HỎI VỤ ÁN CHÍNH (MAIN CASE)</h3>
                  {SHERLOCK_CASE_1.questions.part_1_main_case.map((q, idx) => (
                    <div key={q.id} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2">
                      <p className="font-bold text-sm text-slate-200">{idx + 1}. {q.question}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => (
                          <label key={oIdx} className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all flex items-center gap-2 ${sherlockAnswers[`q_${q.id}`] === oIdx ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold' : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'}`}>
                            <input 
                              type="radio" 
                              name={`q_${q.id}`} 
                              checked={sherlockAnswers[`q_${q.id}`] === oIdx}
                              onChange={() => setSherlockAnswers(prev => ({ ...prev, [`q_${q.id}`]: oIdx }))}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* PART 2: CÂU HỎI BÍ ẨN PHỤ */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-extrabold text-amber-400 text-sm uppercase tracking-wider">PHẦN 2: CÂU HỎI BÍ ẨN PHỤ (SIDE MYSTERIES)</h3>
                  {SHERLOCK_CASE_1.questions.part_2_side_mysteries.map((q, idx) => (
                    <div key={q.id} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2">
                      <p className="font-bold text-sm text-slate-200">{idx + 6}. {q.question}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => (
                          <label key={oIdx} className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all flex items-center gap-2 ${sherlockAnswers[`q_${q.id}`] === oIdx ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold' : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'}`}>
                            <input 
                              type="radio" 
                              name={`q_${q.id}`} 
                              checked={sherlockAnswers[`q_${q.id}`] === oIdx}
                              onChange={() => setSherlockAnswers(prev => ({ ...prev, [`q_${q.id}`]: oIdx }))}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-amber-500/20 text-center">
                  <button 
                    onClick={handleSubmitSherlockSolution}
                    className="btn btn-lg btn-gold-draw w-full font-black tracking-wider shadow-lg"
                  >
                    🏁 NỘP BÀI & XEM ĐÁP ÁN CHÍNH XÁC
                  </button>
                </div>
              </div>
            )}

            {/* 4. GIAI ĐOẠN GAME OVER / TỔNG KẾT & VẠCH TRẦN SỰ THẬT */}
            {roomState?.phase === 'SHERLOCK_GAME_OVER' && (
              <div className="sherlock-result-card bg-slate-900/90 border border-amber-500/40 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl space-y-6">
                
                {/* SCORE BANNER */}
                <div className="text-center bg-gradient-to-b from-amber-950/60 to-slate-950 border border-amber-500/40 rounded-2xl p-6 space-y-2">
                  <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">KẾT QUẢ ĐIỀU TRA TỔNG KẾT</span>
                  <h2 className="text-5xl font-black text-amber-300">{roomState.sherlockScore} / 100 ĐIỂM</h2>
                  <p className="text-sm font-bold text-amber-100">
                    {roomState.sherlockScore >= 100 ? '🏆 Tuyệt vời! Bạn đã vượt qua cả Sherlock Holmes!' : roomState.sherlockScore >= 70 ? '🥇 Thám tử lừng danh phố Baker!' : roomState.sherlockScore >= 35 ? '🥈 Phá án thành công!' : '🥉 Cần rèn luyện thêm kỹ năng suy luận!'}
                  </p>
                  <p className="text-xs text-slate-400">
                    Nhóm đã đi <strong>{roomState.visitedNodes?.length || 0} địa điểm</strong> (Sherlock Holmes đi 6 địa điểm).
                  </p>
                </div>

                {/* SỰ THẬT TOÀN BỘ VỤ ÁN */}
                <div className="bg-slate-950/80 border border-amber-500/30 rounded-xl p-5 space-y-3">
                  <h3 className="font-black text-amber-300 text-base flex items-center gap-2">
                    <Sparkles size={18} /> VẠCH TRẦN TOÀN BỘ SỰ THẬT VỤ ÁN (FULL TRUTH):
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-200 font-serif whitespace-pre-line">
                    {SHERLOCK_CASE_1.solution_summary.full_truth}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 text-rose-300">
                      <strong>Kẻ đứng sau (Mastermind):</strong> {SHERLOCK_CASE_1.solution_summary.mastermind}
                    </div>
                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-300">
                      <strong>Động cơ (Motive):</strong> {SHERLOCK_CASE_1.solution_summary.motive}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button 
                    onClick={() => socket.emit('leave-room', { roomCode: roomState.code })}
                    className="btn btn-lg btn-primary font-black"
                  >
                    TRỞ VỀ SẢNH CHỜ PHÒNG GAME
                  </button>
                </div>

              </div>
            )}

          </main>
        ) : (
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
        )
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

      {/* NÚT CHAT BỐC NỔI (FLOATING CHAT BUBBLE) - CHỈ HIỆN KHI Ở TRONG PHÒNG */}
      {inRoom && (
        <>
          <button 
            onClick={() => {
              setIsChatOpen(prev => !prev);
              setUnreadChatCount(0);
            }} 
            className="btn-floating-chat"
            title="Mở khung trò chuyện chat"
          >
            <MessageSquare size={22} />
            {unreadChatCount > 0 && (
              <span className="unread-chat-badge">{unreadChatCount}</span>
            )}
          </button>

          {/* KHUNG CHAT DRAWER NỔI */}
          {isChatOpen && (
            <div className="floating-chat-drawer">
              <div className="chat-drawer-header">
                <span className="flex items-center gap-1.5 font-bold text-amber-400">
                  <MessageSquare size={16} /> TRÒ CHUYỆN TOÀN PHÒNG ({chatMessages.length})
                </span>
                <button onClick={() => setIsChatOpen(false)} className="btn-close-chat"><X size={16} /></button>
              </div>

              <div className="chat-messages-box">
                {chatMessages.length === 0 ? (
                  <div className="empty-chat-msg">Chưa có tin nhắn nào. Hãy nhắn câu đầu tiên!</div>
                ) : (
                  chatMessages.map((msg, idx) => (
                    <div 
                      key={msg.id || idx} 
                      className={`chat-msg-item ${msg.senderId === socket.id ? 'is-me' : ''}`}
                    >
                      <div className="chat-msg-meta">
                        <span className="sender-name">{msg.sender} {msg.senderId === socket.id ? '(Bạn)' : ''}</span>
                        <span className="msg-time">{msg.time}</span>
                      </div>
                      <div className="chat-msg-text">{msg.text}</div>
                    </div>
                  ))
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleSendChat} className="chat-input-bar">
                <input 
                  type="text" 
                  value={chatInput} 
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Nhập tin nhắn (Ấn Enter để gửi)..." 
                  className="chat-input-field"
                  autoFocus
                />
                <button type="submit" className="btn-send-chat" title="Gửi tin nhắn"><Send size={16} /></button>
              </form>
            </div>
          )}

          {/* POPUP TOAST NỔI KHI CÓ TIN NHẮN MỚI NẾU KHUNG CHAT ĐANG ĐÓNG */}
          {!isChatOpen && latestChatToast && (
            <div 
              onClick={() => {
                setIsChatOpen(true);
                setUnreadChatCount(0);
                setLatestChatToast(null);
              }}
              className="chat-toast-popup"
              title="Nhấp để mở khung trò chuyện"
            >
              <MessageSquare size={16} className="text-amber-400 shrink-0" />
              <div className="chat-toast-content">
                <span className="chat-toast-sender">{latestChatToast.sender}:</span>
                <span className="chat-toast-text">{latestChatToast.text}</span>
              </div>
            </div>
          )}
        </>
      )}

      {/* MODAL KẾT THÚC GAME & CÔNG BỐ KẾT QUẢ / VAI TRÒ */}
      {inRoom && roomState?.phase === 'GAME_OVER' && (() => {
        const isInvestigatorsWin = roomState.winner === 'INVESTIGATORS';
        const isHost = socket.id === (roomState?.hostId || roomState?.players?.[0]?.id);

        return (
          <div className="modal-overlay z-[1100]">
            <div className="modal-card game-over-card-premium">
              <div className="game-over-header text-center py-3">
                <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/30 mb-2">
                  {isInvestigatorsWin ? <Trophy size={48} className="text-amber-400 animate-bounce" /> : <Skull size={48} className="text-rose-500 animate-pulse" />}
                </div>
                <h2 className={`text-2xl font-black ${isInvestigatorsWin ? 'text-amber-400' : 'text-rose-500'}`}>
                  {isInvestigatorsWin ? '🎉 PHE ĐIỀU TRA VIÊN THẮNG CỤC DIỆN!' : '💀 PHE HUNG THỦ THẮNG THẾ!'}
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  {isInvestigatorsWin 
                    ? 'Lập luận xuất sắc! Vụ án đã được giải mã và Kẻ sát nhân đã bị vạch mặt!' 
                    : 'Tất cả manh mối bị xóa sạch! Kẻ sát nhân đã tẩu thoát an toàn!'}
                </p>
              </div>

              {/* BỘ ĐÁP ÁN BÍ MẬT */}
              <div className="secret-solution-reveal-box bg-slate-900/80 border border-amber-500/30 rounded-xl p-3 my-3">
                <div className="text-xs font-bold text-amber-400 mb-2 text-center flex items-center justify-center gap-1">
                  <KeyRound size={14} /> BỘ ĐÁP ÁN BÍ MẬT CỦA VỤ ÁN:
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-rose-950/60 border border-rose-500/30 rounded-lg p-2">
                    <span className="text-[0.68rem] text-rose-400 font-extrabold uppercase block">Hung khí gây án</span>
                    <strong className="text-sm text-white font-black">{roomState.secretSolution?.means?.name || 'Không rõ'}</strong>
                  </div>
                  <div className="bg-blue-950/60 border border-blue-500/30 rounded-lg p-2">
                    <span className="text-[0.68rem] text-blue-400 font-extrabold uppercase block">Bằng chứng chính</span>
                    <strong className="text-sm text-white font-black">{roomState.secretSolution?.clue?.name || 'Không rõ'}</strong>
                  </div>
                </div>
              </div>

              {/* DANH SÁCH VAI TRÒ TẤT CẢ NGƯỜI CHƠI */}
              <div className="roles-reveal-section max-h-48 overflow-y-auto pr-1">
                <div className="text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1">
                  <Users size={14} className="text-amber-400" /> TIẾT LỘ VAI TRÒ TẤT CẢ THÀNH VIÊN:
                </div>
                <div className="space-y-1.5">
                  {roomState.players?.map(p => {
                    const isForensicPlayer = p.id === roomState.forensicScientistId;
                    const roleObj = isForensicPlayer 
                      ? ROLES.find(r => r.id === 'forensic_scientist') 
                      : p.role || ROLES.find(r => r.id === 'investigator');

                    return (
                      <div key={p.id} className="flex items-center justify-between bg-slate-800/60 border border-slate-700/50 rounded-lg p-2 text-xs">
                        <span className="font-extrabold text-white flex items-center gap-1.5">
                          {p.isBot ? <Zap size={14} className="text-amber-400" /> : <Shield size={14} className="text-blue-400" />}
                          {p.name} {p.id === socket.id && '(Bạn)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded font-black text-[0.7rem] ${
                          roleObj?.id === 'murderer' || roleObj?.id === 'accomplice' 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                            : roleObj?.id === 'forensic_scientist'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                        }`}>
                          {roleObj?.avatar} {roleObj?.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FOOTER NÚT BẮT ĐẦU VÁN MỚI */}
              <div className="modal-footer mt-4 pt-3 border-t border-slate-800 flex justify-center">
                {isHost ? (
                  <button 
                    onClick={() => socket.emit('reset-game', { roomCode: roomState.code })} 
                    className="btn btn-lg btn-primary btn-launch-game flex items-center gap-2"
                  >
                    <RefreshCw size={18} /> CHƠI LẠI VÁN MỚI (VỀ PHÒNG CHỜ)
                  </button>
                ) : (
                  <div className="text-sm font-bold text-amber-300 animate-pulse py-2">
                    ⏳ Đang chờ Chủ phòng reset ván chơi mới...
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* TRÌNH PHÁT NHẠC NỀN SHERLOCK HOLMES BGM */}
      <audio ref={audioBgmRef} src="/audio/bgm.mp3" loop />

    </div>
  );
}

export default App;
