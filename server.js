import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { ALL_SHERLOCK_CASES } from './src/data/sherlock-cases.js';

const getActiveSherlockCase = (room) => {
  const caseId = room?.selectedCaseId || 'sherlock_case_1';
  return ALL_SHERLOCK_CASES[caseId] || ALL_SHERLOCK_CASES.sherlock_case_1;
};

const app = express();
app.use(cors());

// Health check endpoint cho Railway
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Deception Murder in Hong Kong - Socket.IO Server', timestamp: new Date().toISOString() });
});
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:3000',
  // Thêm URL Vercel của bạn vào đây sau khi deploy frontend
  process.env.FRONTEND_URL || '*'
];

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ALLOWED_ORIGINS,
    methods: ['GET', 'POST'],
    credentials: true
  },
  transports: ['websocket', 'polling']
});

const rooms = {};
const BOT_NAMES = ['Bot Minh', 'Bot Hoàng', 'Bot Hùng', 'Bot Linh', 'Bot Tuấn', 'Bot Trang', 'Bot Dũng', 'Bot Huy'];

function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Quản lý Timer Server dựa trên Timestamp chuẩn xác 100%
const roomTimers = {};

function applyBotForensicSetup(room, roomCode) {
  const forensicPlayer = room.players.find(p => p.id === room.forensicScientistId);
  if (!forensicPlayer || !forensicPlayer.isBot) return;

  room.bullets[room.causeOfDeathTile.id] = Math.floor(Math.random() * room.causeOfDeathTile.options.length);
  room.bullets[room.locationTile.id] = Math.floor(Math.random() * room.locationTile.options.length);
  room.activeSceneTiles.forEach(tile => {
    room.bullets[tile.id] = Math.floor(Math.random() * tile.options.length);
  });

  room.phase = 'INVESTIGATION';
  room.timerType = 'DISCUSSION';
  room.endTime = Date.now() + 180 * 1000;
  room.eventLog.push(`🤖 Pháp y (${forensicPlayer.name}) đã gắn đạn gợi ý! Bắt đầu Vòng 1 Điều tra (3 phút).`);
  startRoomTimer(roomCode);
}

function finalizeMurderSolution(room, roomCode, clue, means, actorLabel = 'Hung thủ') {
  if (!clue || !means) return;

  room.secretSolution = { clue, means };
  room.crimeChoiceDeadline = null;
  room.phase = 'FORENSIC_SETUP';
  room.eventLog.push(`${actorLabel} đã chốt đáp án! Pháp y bắt đầu gắn đạn gợi ý hiện trường.`);
  applyBotForensicSetup(room, roomCode);
}

function startRoomTimer(roomCode) {
  if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);

  roomTimers[roomCode] = setInterval(() => {
    const room = rooms[roomCode];
    if (!room || !room.gameStarted || room.phase === 'GAME_OVER') {
      clearInterval(roomTimers[roomCode]);
      return;
    }

    const now = Date.now();

    if (room.phase === 'CRIME_CHOICE') {
      if (!room.secretSolution?.means && room.crimeChoiceDeadline && now >= room.crimeChoiceDeadline) {
        const murdererPlayer = room.players.find(p => p.role?.id === 'murderer');
        const randomMeans = murdererPlayer?.means?.[Math.floor(Math.random() * (murdererPlayer?.means?.length || 0))];
        const randomClue = murdererPlayer?.clues?.[Math.floor(Math.random() * (murdererPlayer?.clues?.length || 0))];

        if (randomMeans && randomClue) {
          finalizeMurderSolution(room, roomCode, randomClue, randomMeans, `🤖 AI hỗ trợ Hung thủ (${murdererPlayer.name})`);
          io.to(roomCode).emit('room-updated', room);
        }
      }
      return;
    }

    if (room.phase === 'INVESTIGATION') {
      
      if (room.endTime && now >= room.endTime) {
        if (room.timerType === 'DISCUSSION') {
          room.timerType = 'ACCUSATION_WINDOW';
          room.endTime = now + 10 * 1000;
          room.eventLog.push('⏳ Hết 3 phút bàn luận! Bắt đầu 10 giây Cửa Sổ Phá Án dành cho các Điều tra viên.');
          io.to(roomCode).emit('room-updated', room);
        } else if (room.timerType === 'ACCUSATION_WINDOW') {
          if (room.round < 3 && room.deck.length > 0) {
            room.round += 1;
            room.timerType = 'DISCUSSION';
            room.endTime = Date.now() + 180 * 1000;
            room.votesForNextRound = [];

            const forensicPlayer = room.players.find(p => p.id === room.forensicScientistId);
            if (forensicPlayer && forensicPlayer.isBot) {
              const newTile = room.deck.shift();
              const oldTile = room.activeSceneTiles[Math.floor(Math.random() * room.activeSceneTiles.length)];
              room.activeSceneTiles = room.activeSceneTiles.map(t => t.id === oldTile.id ? newTile : t);
              delete room.bullets[oldTile.id];
              room.bullets[newTile.id] = Math.floor(Math.random() * newTile.options.length);
              room.eventLog.push(`🤖 Pháp Y (Bot) đã bốc thẻ mới [${newTile.name}] đè lên [${oldTile.name}]! Bắt đầu Vòng ${room.round} (3 phút).`);
            } else {
              room.needsTileDraw = true;
              room.eventLog.push(`🃏 BẮT ĐẦU VÒNG ${room.round}! Mời Pháp Y bốc thẻ gợi ý mới và chọn thẻ cũ để đè.`);
            }
            io.to(roomCode).emit('room-updated', room);
          } else {
            room.phase = 'GAME_OVER';
            room.winner = 'MURDERER';
            room.eventLog.push('💀 Hết 3 Vòng bàn luận mà không tìm ra sự thật! PHE HUNG THỦ VÀ ĐỒNG PHẠM THẮNG!');
            io.to(roomCode).emit('room-updated', room);
          }
        }
      }
    }
  }, 500);
}

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handler Chọn Vụ Án Sherlock
  socket.on('select-sherlock-case', ({ roomCode, caseId }) => {
    const code = roomCode?.toUpperCase();
    const room = rooms[code];
    if (!room) return;

    const targetCase = ALL_SHERLOCK_CASES[caseId] || ALL_SHERLOCK_CASES.sherlock_case_1;
    room.selectedCaseId = caseId;
    room.unlockedNodes = [...(targetCase.intro?.unlocked_nodes || [])];
    room.visitedNodes = [];
    io.to(code).emit('room-updated', room);
  });

  // Handler Ghé Thăm Địa Điểm Node Sherlock
  socket.on('visit-node', ({ roomCode, nodeId }) => {
    const code = roomCode?.toUpperCase();
    const room = rooms[code];
    if (!room) return;

    if (!room.visitedNodes) room.visitedNodes = [];
    if (!room.visitedNodes.includes(nodeId)) {
      room.visitedNodes.push(nodeId);
    }

    const currentCase = ALL_SHERLOCK_CASES[room.selectedCaseId || 'sherlock_case_1'];
    const node = currentCase?.nodes?.[nodeId];
    if (node?.unlocks?.nodes) {
      if (!room.unlockedNodes) room.unlockedNodes = [];
      node.unlocks.nodes.forEach(unlockedId => {
        if (!room.unlockedNodes.includes(unlockedId)) {
          room.unlockedNodes.push(unlockedId);
        }
      });
    }

    io.to(code).emit('room-updated', room);
  });

  // 1. Tạo phòng

  socket.on('create-room', ({ playerName, gameType }) => {
    let roomCode = generateRoomCode();
    while (rooms[roomCode]) {
      roomCode = generateRoomCode();
    }

    rooms[roomCode] = {
      code: roomCode,
      hostId: socket.id,
      gameType: gameType || 'deception',
      players: [{
        id: socket.id,
        name: playerName,
        socketId: socket.id,
        role: null,
        clues: [],
        means: [],
        hasAccused: false,
        accusedCorrectly: false,
        isMuted: true,
        hasBadge: true,
        isReady: true
      }],
      forensicScientistId: socket.id, // Mặc định người tạo phòng
      votesForForensic: {}, // Map: { socketId: targetPlayerId }
      gameStarted: false,
      phase: 'LOBBY',
      winner: null,
      secretSolution: { clue: null, means: null },
      round: 1,
      endTime: null,
      crimeChoiceDeadline: null,
      timerType: 'DISCUSSION',
      votesForNextRound: [],
      needsTileDraw: false,
      causeOfDeathTile: null,
      locationTile: null,
      activeSceneTiles: [],
      deck: [],
      bullets: {},
      chatMessages: [],
      eventLog: [`Phòng chơi ${roomCode} đã được tạo bởi ${playerName} cho game ${gameType || 'deception'}.`]
    };

    socket.join(roomCode);
    socket.emit('room-created', { roomCode, roomState: rooms[roomCode] });
  });

  // 2. Tham gia phòng (FIX LỖI TAB 2 KHÔNG VÀO ĐƯỢC PHÒNG)
  socket.on('join-room', ({ roomCode, playerName }) => {
    const code = roomCode.toUpperCase();
    const room = rooms[code];

    if (!room) {
      socket.emit('error-msg', 'Phòng chơi không tồn tại! Kiểm tra lại Mã phòng.');
      return;
    }
    if (room.gameStarted) {
      socket.emit('error-msg', 'Trò chơi trong phòng này đã bắt đầu!');
      return;
    }
    if (room.players.length >= 12) {
      socket.emit('error-msg', 'Phòng chơi đã đầy (tối đa 12 người)!');
      return;
    }

    const newPlayer = {
      id: socket.id,
      name: playerName,
      socketId: socket.id,
      role: null,
      clues: [],
      means: [],
      hasAccused: false,
      accusedCorrectly: false,
      hasBadge: true,
      isReady: false
    };

    room.players.push(newPlayer);
    room.eventLog.push(`${playerName} đã tham gia phòng.`);
    socket.join(code);

    // Gửi sự kiện room-created cho người vừa gia nhập để chuyển sang giao diện phòng chờ!
    socket.emit('room-created', { roomCode: code, roomState: room });

    // Gửi sự kiện room-updated cho toàn bộ thành viên trong phòng
    io.to(code).emit('room-updated', room);
  });

  // 3. THÊM BOT VÀO PHÒNG (CHỈ CHỦ PHÒNG)
  socket.on('add-bot', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || room.gameStarted) return;
    const hostId = room.hostId || room.players[0]?.id;
    if (socket.id !== hostId) {
      socket.emit('error-msg', 'Chỉ Chủ phòng mới có quyền thêm Bot!');
      return;
    }
    if (room.players.length >= 12) {
      socket.emit('error-msg', 'Phòng chơi đã đầy!');
      return;
    }

    const botCount = room.players.filter(p => p.isBot).length;
    const botName = BOT_NAMES[botCount % BOT_NAMES.length];
    const botId = `bot_${Date.now()}_${Math.floor(Math.random()*1000)}`;

    const botPlayer = {
      id: botId,
      name: botName,
      socketId: botId,
      role: null,
      clues: [],
      means: [],
      hasAccused: false,
      accusedCorrectly: false,
      isMuted: true,
      hasBadge: true,
      isBot: true,
      isReady: true
    };

    room.players.push(botPlayer);
    room.eventLog.push(`🤖 ${botName} (Bot) đã vào phòng.`);
    io.to(roomCode).emit('room-updated', room);
  });

  // 4. XÓA BOT KHỎI PHÒNG (CHỈ CHỦ PHÒNG)
  socket.on('remove-bot', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || room.gameStarted) return;
    const hostId = room.hostId || room.players[0]?.id;
    if (socket.id !== hostId) {
      socket.emit('error-msg', 'Chỉ Chủ phòng mới có quyền xóa Bot!');
      return;
    }

    const lastBotIdx = room.players.map(p => p.isBot).lastIndexOf(true);
    if (lastBotIdx !== -1) {
      const removedBot = room.players[lastBotIdx];
      room.players.splice(lastBotIdx, 1);
      delete room.votesForForensic[removedBot.id];
      room.eventLog.push(`🤖 ${removedBot.name} đã rời phòng.`);
      io.to(roomCode).emit('room-updated', room);
    }
  });

  // 4b. SẴN SÀNG / CHƯA SẴN SÀNG (NGƯỜI CHƠI)
  socket.on('toggle-ready', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || room.gameStarted) return;

    const player = room.players.find(p => p.id === socket.id);
    if (player) {
      player.isReady = !player.isReady;
      room.eventLog.push(`📌 ${player.name} đã ${player.isReady ? 'SẴN SÀNG' : 'HỦY SẴN SÀNG'}.`);
      io.to(roomCode).emit('room-updated', room);
    }
  });

  // 4c. KICK NGƯỜI CHƠI (CHỈ CHỦ PHÒNG)
  socket.on('kick-player', ({ roomCode, targetId }) => {
    const room = rooms[roomCode];
    if (!room || room.gameStarted) return;

    const hostId = room.hostId || room.players[0]?.id;
    if (socket.id !== hostId) {
      socket.emit('error-msg', 'Chỉ Chủ phòng mới có quyền Kick người chơi!');
      return;
    }

    const playerIdx = room.players.findIndex(p => p.id === targetId);
    if (playerIdx !== -1 && targetId !== hostId) {
      const kickedPlayer = room.players[playerIdx];
      room.players.splice(playerIdx, 1);
      delete room.votesForForensic[targetId];
      room.eventLog.push(`👢 ${kickedPlayer.name} đã bị Chủ phòng kick khỏi phòng.`);

      // Gửi sự kiện cho người bị kick
      io.to(targetId).emit('kicked-from-room');
      io.to(roomCode).emit('room-updated', room);
    }
  });

  // 5. BẦU PHÁP Y THEO ĐA SỐ PHIẾU BẦU
  socket.on('vote-forensic', ({ roomCode, targetId }) => {
    const room = rooms[roomCode];
    if (!room || room.gameStarted) return;

    room.votesForForensic[socket.id] = targetId;

    room.players.filter(p => p.isBot).forEach(bot => {
      if (!room.votesForForensic[bot.id]) {
        room.votesForForensic[bot.id] = targetId;
      }
    });

    const voteCounts = {};
    Object.values(room.votesForForensic).forEach(tId => {
      voteCounts[tId] = (voteCounts[tId] || 0) + 1;
    });

    let maxVotes = 0;
    let topCandidate = room.forensicScientistId;

    Object.keys(voteCounts).forEach(tId => {
      if (voteCounts[tId] > maxVotes) {
        maxVotes = voteCounts[tId];
        topCandidate = tId;
      }
    });

    room.forensicScientistId = topCandidate;
    const fsName = room.players.find(p => p.id === topCandidate)?.name;
    const voterName = room.players.find(p => p.id === socket.id)?.name;

    room.eventLog.push(`🗳️ ${voterName} đã bầu cho ${room.players.find(p => p.id === targetId)?.name}. (${fsName} đang dẫn đầu với ${maxVotes} phiếu).`);

    io.to(roomCode).emit('room-updated', room);
  });

  // 6. Bắt đầu game (CHỈ CHỦ PHÒNG)
  socket.on('start-game', ({ roomCode, enabledOptionalRoles, ROLES_DATA, CLUES_DATA, MEANS_DATA, CAUSE_DATA, LOCATIONS_DATA, SCENES_DATA }) => {
    const room = rooms[roomCode];
    if (!room) return;

    const hostId = room.hostId || room.players[0]?.id;
    if (socket.id !== hostId) {
      socket.emit('error-msg', 'Chỉ Chủ phòng mới có quyền bắt đầu ván chơi!');
      return;
    }

    if (room.gameType === 'sherlock') {
      // KHỞI TẠO GAME SHERLOCK HOLMES CONSULTING DETECTIVE
      const activeCase = getActiveSherlockCase(room);
      room.gameStarted = true;
      room.phase = 'SHERLOCK_INTRO';
      room.winner = null;
      room.round = 1;
      room.endTime = null;
      room.timerType = 'DISCUSSION';
      room.visitedNodes = [];
      room.unlockedNodes = [...(activeCase.intro?.unlocked_nodes || [])];
      room.sherlockScore = null;
      room.submittedAnswers = null;
      room.eventLog.push(`Vụ án "${activeCase.title}" bắt đầu! Hãy đọc cốt truyện giới thiệu.`);

      io.to(roomCode).emit('room-updated', room);
      io.to(roomCode).emit('game-started', room);
      return;
    }

    // ĐÂY LÀ KHỞI TẠO GAME DECEPTION: MURDER IN HONG KONG GỐC
    room.gameStarted = true;
    room.phase = 'CRIME_CHOICE';
    room.winner = null;
    room.round = 1;
    room.endTime = null;
    room.crimeChoiceDeadline = Date.now() + 20 * 1000;
    room.timerType = 'DISCUSSION';
    room.votesForNextRound = [];
    room.needsTileDraw = false;
    room.bullets = {};
    room.eventLog.push('Trò chơi bắt đầu! Đang chia bài và phân vai...');

    if (!room.forensicScientistId) {
      room.forensicScientistId = room.players[0].id;
    }

    const playersToAssign = room.players.filter(p => p.id !== room.forensicScientistId);
    let rolesPool = [ROLES_DATA.find(r => r.id === 'murderer')];
    const investigatorRole = ROLES_DATA.find(r => r.id === 'investigator');

    while (rolesPool.length < playersToAssign.length) {
      rolesPool.push(investigatorRole);
    }

    rolesPool.sort(() => Math.random() - 0.5);
    const shuffledClues = [...CLUES_DATA].sort(() => Math.random() - 0.5);
    const shuffledMeans = [...MEANS_DATA].sort(() => Math.random() - 0.5);

    room.players = room.players.map(p => {
      if (p.id === room.forensicScientistId) {
        return {
          ...p,
          role: ROLES_DATA.find(r => r.id === 'forensic_scientist'),
          clues: [],
          means: [],
          hasBadge: false
        };
      } else {
        const assignedRole = rolesPool.shift();
        return {
          ...p,
          role: assignedRole,
          clues: shuffledClues.splice(0, 4),
          means: shuffledMeans.splice(0, 4),
          hasAccused: false,
          accusedCorrectly: false,
          hasBadge: !p.isBot
        };
      }
    });

    room.causeOfDeathTile = CAUSE_DATA;
    room.locationTile = LOCATIONS_DATA[Math.floor(Math.random() * LOCATIONS_DATA.length)];
    const shuffledScenes = [...SCENES_DATA].sort(() => Math.random() - 0.5);
    room.activeSceneTiles = shuffledScenes.slice(0, 4);
    room.deck = shuffledScenes.slice(4);

    const murdererPlayer = room.players.find(p => p.role?.id === 'murderer');
    if (murdererPlayer && murdererPlayer.isBot) {
      const chosenMeans = murdererPlayer.means[Math.floor(Math.random() * murdererPlayer.means.length)];
      const chosenClue = murdererPlayer.clues[Math.floor(Math.random() * murdererPlayer.clues.length)];
      finalizeMurderSolution(room, roomCode, chosenClue, chosenMeans, `🤖 Hung thủ (${murdererPlayer.name})`);
    } else {
      room.eventLog.push('⏱️ Hung thủ có 20 giây để chọn đáp án. Quá thời gian AI sẽ tự chọn giúp.');
      startRoomTimer(roomCode);
    }

    io.to(roomCode).emit('room-updated', room);
    io.to(roomCode).emit('game-started', room);
  });

  // =========================================================
  // CÁC SỰ KIỆN PHỤC VỤ CHO GAME SHERLOCK HOLMES
  // =========================================================

  // Chuyển giai đoạn trong game Sherlock (Ví dụ: Từ Intro sang Map)
  socket.on('sherlock-next-phase', ({ roomCode, phase }) => {
    const room = rooms[roomCode];
    if (!room) return;
    room.phase = phase;
    room.eventLog.push(`Giai đoạn game chuyển sang: ${phase}`);
    io.to(roomCode).emit('room-updated', room);
  });

  // Chọn Vụ án Sherlock Holmes
  socket.on('select-sherlock-case', ({ roomCode, caseId }) => {
    const room = rooms[roomCode];
    if (!room) return;
    if (ALL_SHERLOCK_CASES[caseId]) {
      room.selectedCaseId = caseId;
      room.unlockedNodes = [...(ALL_SHERLOCK_CASES[caseId].intro?.unlocked_nodes || [])];
      room.visitedNodes = [];
      const playerName = room.players.find(p => p.id === socket.id)?.name || 'Thám tử';
      room.eventLog.push(`🕵️‍♂️ ${playerName} đã chọn Vụ Án mới: "${ALL_SHERLOCK_CASES[caseId].title}".`);
      io.to(roomCode).emit('room-updated', room);
    }
  });

  // Ghé thăm địa điểm (Node) trong game Sherlock
  socket.on('visit-node', ({ roomCode, nodeId }) => {
    const room = rooms[roomCode];
    if (!room) return;

    const activeCase = getActiveSherlockCase(room);
    const formattedNodeId = (nodeId || '').toUpperCase().replace(/\s+/g, '');
    if (!formattedNodeId) return;

    if (!room.visitedNodes) room.visitedNodes = [];
    if (!room.visitedNodes.includes(formattedNodeId)) {
      room.visitedNodes.push(formattedNodeId);
    }

    const node = activeCase?.nodes?.[formattedNodeId];
    if (node?.unlocks?.nodes) {
      if (!room.unlockedNodes) room.unlockedNodes = [];
      node.unlocks.nodes.forEach(un => {
        if (!room.unlockedNodes.includes(un)) {
          room.unlockedNodes.push(un);
        }
      });
    }

    const playerName = room.players?.find(p => p.id === socket.id)?.name || 'Thám tử';
    const title = node?.title || formattedNodeId;
    room.eventLog.push(`🕵️‍♂️ ${playerName} đã ghé thăm Địa điểm [${formattedNodeId}]: ${title}.`);

    io.to(roomCode).emit('room-updated', room);
  });

  // Nộp đáp án và chấm điểm game Sherlock
  socket.on('submit-sherlock-solution', ({ roomCode, answers }) => {
    const room = rooms[roomCode];
    if (!room) return;

    const activeCase = getActiveSherlockCase(room);
    room.submittedAnswers = answers;
    
    // Tính điểm dựa trên câu trả lời
    let score = 0;
    
    // Part 1: Câu hỏi chính (5 câu, mỗi câu 15 điểm)
    activeCase.questions.part_1_main_case.forEach((q) => {
      const selected = answers[`q_${q.id}`];
      if (selected !== undefined && Number(selected) === q.correct_option_index) {
        score += 15;
      }
    });

    // Part 2: Bí ẩn phụ (5 câu, mỗi câu 5 điểm)
    activeCase.questions.part_2_side_mysteries.forEach((q) => {
      const selected = answers[`q_${q.id}`];
      if (selected !== undefined && Number(selected) === q.correct_option_index) {
        score += 5;
      }
    });

    // Tính toán số lượng đầu mối so với Sherlock Holmes (Holmes cần 6 leads)
    const holmesLeads = 6;
    const playerLeads = room.visitedNodes.length;
    const leadsDiff = playerLeads - holmesLeads;
    
    // Trừ 5 điểm cho mỗi lead vượt quá, hoặc cộng 5 điểm cho mỗi lead ít hơn
    const leadPenalty = leadsDiff * 5;
    score = score - leadPenalty;
    if (score < 0) score = 0;

    room.sherlockScore = score;
    room.phase = 'SHERLOCK_GAME_OVER';
    room.eventLog.push(`🏁 Nhóm thám tử đã hoàn tất phá án! Điểm số đạt được: ${score}/100. (Số địa điểm đã ghé thăm: ${playerLeads}, Holmes đi hết: ${holmesLeads} địa điểm).`);

    io.to(roomCode).emit('room-updated', room);
  });

  // 7. Hung thủ chọn đáp án
  socket.on('submit-solution', ({ roomCode, clue, means }) => {
    const room = rooms[roomCode];
    if (!room) return;

    finalizeMurderSolution(room, roomCode, clue, means, 'Hung thủ');

    io.to(roomCode).emit('room-updated', room);
  });

  // 8. Pháp Y gửi đạn gợi ý hiện trường lần đầu
  socket.on('submit-bullets', ({ roomCode, bullets }) => {
    const room = rooms[roomCode];
    if (!room) return;

    room.bullets = bullets;
    room.phase = 'INVESTIGATION';
    room.timerType = 'DISCUSSION';
    room.endTime = Date.now() + 180 * 1000;
    startRoomTimer(roomCode);
    room.eventLog.push('Pháp Y đã hoàn tất gắn 6 viên đạn gợi ý! Vòng 1 Điều tra chính thức bắt đầu (3 phút bàn luận).');

    io.to(roomCode).emit('room-updated', room);
  });

  // 9. PHÁP Y BỐC THẺ BỐI CẢNH MỚI VÀ ĐÈ LÊN THẺ CŨ (VÒNG 2 & 3)
  socket.on('draw-and-replace-tile', ({ roomCode, oldTileId, newOptionIndex }) => {
    const room = rooms[roomCode];
    if (!room || room.deck.length === 0) return;

    const oldTile = room.activeSceneTiles.find(t => t.id === oldTileId);
    const newTile = room.deck.shift();
    room.activeSceneTiles = room.activeSceneTiles.map(t => t.id === oldTileId ? newTile : t);
    delete room.bullets[oldTileId];
    room.bullets[newTile.id] = newOptionIndex;

    room.needsTileDraw = false;
    room.timerType = 'DISCUSSION';
    room.endTime = Date.now() + 180 * 1000;
    room.votesForNextRound = [];
    startRoomTimer(roomCode);
    room.eventLog.push(`🃏 Pháp Y đã bốc thẻ gợi ý mới [${newTile.name}] đè lên thẻ cũ [${oldTile?.name || ''}]! Vòng ${room.round} tiếp tục bàn luận (3 phút).`);

    io.to(roomCode).emit('room-updated', room);
  });

  // 10. VOTE QUA VÒNG MỚI (CẦN 100% ĐỒNG Ý)
  socket.on('vote-next-round', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || room.phase !== 'INVESTIGATION') return;

    if (!room.votesForNextRound.includes(socket.id)) {
      room.votesForNextRound.push(socket.id);
      
      room.players.filter(p => p.isBot).forEach(bot => {
        if (!room.votesForNextRound.includes(bot.id)) {
          room.votesForNextRound.push(bot.id);
        }
      });
    }

    const totalPlayers = room.players.length;
    const votedCount = room.votesForNextRound.length;

    if (votedCount >= totalPlayers) {
      if (room.round < 3 && room.deck.length > 0) {
        room.round += 1;
        room.timerType = 'DISCUSSION';
        room.endTime = Date.now() + 180 * 1000;
        room.votesForNextRound = [];

        const forensicPlayer = room.players.find(p => p.id === room.forensicScientistId);
        if (forensicPlayer && forensicPlayer.isBot) {
          const newTile = room.deck.shift();
          const oldTile = room.activeSceneTiles[Math.floor(Math.random() * room.activeSceneTiles.length)];
          room.activeSceneTiles = room.activeSceneTiles.map(t => t.id === oldTile.id ? newTile : t);
          delete room.bullets[oldTile.id];
          room.bullets[newTile.id] = Math.floor(Math.random() * newTile.options.length);
          room.eventLog.push(`🗳️ 100% Vote đồng ý! Bot Pháp Y bốc thẻ [${newTile.name}] đè lên [${oldTile.name}]. Bắt đầu Vòng ${room.round}.`);
        } else {
          room.needsTileDraw = true;
          room.eventLog.push(`🗳️ 100% Vote đồng ý chuyển sang Vòng ${room.round}! Mời Pháp Y bốc thẻ gợi ý mới ngay lập tức.`);
        }
      } else {
        room.phase = 'GAME_OVER';
        room.winner = 'MURDERER';
        room.eventLog.push('💀 Hết 3 Vòng bàn luận mà không tìm ra sự thật! PHE HUNG THỦ THẮNG!');
      }
      startRoomTimer(roomCode);
    } else {
      room.eventLog.push(`🗳️ Có ${votedCount}/${totalPlayers} người chơi đã vote chuyển vòng (Cần 100%).`);
    }

    io.to(roomCode).emit('room-updated', room);
  });

  // 11. Cáo buộc / Phá án
  socket.on('accuse-solution', ({ roomCode, targetPlayerId, means, clue }) => {
    const room = rooms[roomCode];
    if (!room || !room.secretSolution.means) return;

    const accuserSocketId = socket.id;
    const accuser = room.players.find(p => p.id === accuserSocketId);
    if (!accuser || !accuser.hasBadge) return;

    accuser.hasBadge = false;

    // So sánh đáp án chính xác 100% (Hỗ trợ cả Object & String ID/Name)
    const solMeansId = room.secretSolution.means?.id || room.secretSolution.means;
    const solClueId = room.secretSolution.clue?.id || room.secretSolution.clue;
    const solMeansName = room.secretSolution.means?.name;
    const solClueName = room.secretSolution.clue?.name;

    const targetMeansId = means?.id || means;
    const targetClueId = clue?.id || clue;
    const targetMeansName = means?.name;
    const targetClueName = clue?.name;

    const isMeansCorrect = (solMeansId && targetMeansId && solMeansId === targetMeansId) || (solMeansName && targetMeansName && solMeansName === targetMeansName);
    const isClueCorrect = (solClueId && targetClueId && solClueId === targetClueId) || (solClueName && targetClueName && solClueName === targetClueName);

    const targetPlayer = room.players.find(p => p.id === targetPlayerId);
    const targetName = targetPlayer?.name || 'Nghi phạm';
    const meansNameStr = targetMeansName || means?.name || 'Hung khí';
    const clueNameStr = targetClueName || clue?.name || 'Bằng chứng';

    if (isMeansCorrect && isClueCorrect) {
      room.phase = 'GAME_OVER';
      room.winner = 'INVESTIGATORS';
      const winLog = `🎉 CHÚC MỪNG! ${accuser.name} ĐÃ PHÁ ÁN CHÍNH XÁC! Tố cáo đúng [${targetName}] dùng Hung khí [${meansNameStr}] và Bằng chứng [${clueNameStr}]. PHE ĐIỀU TRA VIÊN THẮNG!`;
      room.eventLog.push(winLog);
      if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);
      
      io.to(roomCode).emit('receive-chat', {
        sender: '📢 HỆ THỐNG PHÁ ÁN',
        senderId: 'system',
        text: winLog,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      io.to(roomCode).emit('room-updated', room);
    } else {
      const failLog = `❌ CÁO BUỘC SAI! ${accuser.name} đã tố cáo sai [${targetName}] (Chọn: ${meansNameStr} & ${clueNameStr}). ${accuser.name} mất Huy hiệu Phá án.`;
      room.eventLog.push(failLog);
      
      io.to(roomCode).emit('receive-chat', {
        sender: '📢 HỆ THỐNG PHÁ ÁN',
        senderId: 'system',
        text: failLog,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      if (room.timerType === 'ACCUSATION_WINDOW') {
        room.endTime = Date.now() + 10 * 1000;
        startRoomTimer(roomCode);
      }

      // Kiểm tra người chơi thật (không tính Bot & Pháp Y) xem còn ai còn Huy hiệu không
      const remainingHumanAccusers = room.players.filter(p => p.id !== room.forensicScientistId && !p.isBot && p.hasBadge);
      if (remainingHumanAccusers.length === 0) {
        room.phase = 'GAME_OVER';
        room.winner = 'MURDERER';
        const overLog = '💀 Tất cả người chơi đã dùng hết Huy hiệu Phá án mà không tìm ra sự thật! PHE HUNG THỦ VÀ ĐỒNG PHẠM THẮNG!';
        room.eventLog.push(overLog);
        if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);

        io.to(roomCode).emit('receive-chat', {
          sender: '📢 HỆ THỐNG PHÁ ÁN',
          senderId: 'system',
          text: overLog,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
      }

      io.to(roomCode).emit('accusation-failed', { accuser: accuser.name });
      io.to(roomCode).emit('room-updated', room);
    }
  });

  // 12. Ngắt kết nối
  socket.on('disconnect', () => {
    Object.keys(rooms).forEach(roomCode => {
      const room = rooms[roomCode];
      const playerIdx = room.players.findIndex(p => p.id === socket.id);
      if (playerIdx !== -1) {
        const disconnectedId = room.players[playerIdx].id;
        room.players.splice(playerIdx, 1);
        delete room.votesForForensic[disconnectedId];

        if (room.players.length === 0) {
          delete rooms[roomCode];
          if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);
        } else {
          io.to(roomCode).emit('room-updated', room);
        }
      }
    });
  });



  // 14. Tin nhắn Chat nhóm (Broadcast to room)
  socket.on('send-chat', ({ roomCode, message, msgId }) => {
    const code = (roomCode || '').trim().toUpperCase();
    const room = rooms[code];
    if (room && message) {
      const sender = room.players.find(p => p.id === socket.id);
      const chatPayload = {
        id: msgId || `msg_${Date.now()}_${Math.floor(Math.random()*1000)}`,
        sender: sender?.name || 'Người chơi',
        senderId: socket.id,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (!room.chatMessages) room.chatMessages = [];
      room.chatMessages.push(chatPayload);
      if (room.chatMessages.length > 100) room.chatMessages.shift();

      io.to(code).emit('receive-chat', chatPayload);
      io.to(code).emit('room-updated', room);
    }
  });

  // 15. Reset ván chơi quay về Sảnh chờ (Chủ phòng)
  socket.on('reset-game', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room) return;
    const hostId = room.hostId || room.players[0]?.id;
    if (socket.id !== hostId) {
      socket.emit('error-msg', 'Chỉ Chủ phòng mới có quyền Reset ván chơi!');
      return;
    }

    if (roomTimers[roomCode]) clearInterval(roomTimers[roomCode]);

    room.gameStarted = false;
    room.phase = 'LOBBY';
    room.winner = null;
    room.secretSolution = { clue: null, means: null };
    room.bullets = {};
    room.activeSceneTiles = [];
    room.causeOfDeathTile = null;
    room.locationTile = null;

    room.players = room.players.map(p => ({
      ...p,
      role: null,
      clues: [],
      means: [],
      hasAccused: false,
      accusedCorrectly: false,
      hasBadge: true,
      isReady: p.id === hostId || p.isBot
    }));

    room.eventLog.push(`🔄 ${room.players.find(p => p.id === socket.id)?.name} đã reset ván chơi quay về Sảnh chờ.`);
    io.to(roomCode).emit('room-updated', room);
    io.to(roomCode).emit('game-reset');
  });

  // 16. Người chơi chủ động Rời phòng về Sảnh chính / Landing Page
  socket.on('leave-room', ({ roomCode }) => {
    const code = (roomCode || '').trim().toUpperCase();
    const room = rooms[code];
    if (!room) return;

    // Rời socket room
    socket.leave(code);

    // Xóa player khỏi phòng
    room.players = room.players.filter(p => p.id !== socket.id);

    // Nếu không còn người chơi thật nào, xóa phòng
    const hasHuman = room.players.some(p => !p.isBot);
    if (!hasHuman) {
      if (roomTimers[code]) clearInterval(roomTimers[code]);
      delete rooms[code];
      return;
    }

    // Nếu host rời, chuyển host cho người tiếp theo
    if (room.hostId === socket.id) {
      const nextHost = room.players.find(p => !p.isBot);
      if (nextHost) {
        room.hostId = nextHost.id;
        nextHost.isReady = true;
      }
    }

    room.eventLog.push(`🚪 Một người chơi đã rời phòng.`);
    io.to(code).emit('room-updated', room);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
