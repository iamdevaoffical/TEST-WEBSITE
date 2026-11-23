/**
 * LINGAURO APPLICATION LOGIC
 * Clean & Minimal Live Practice Room Platform
 * Colors: Teal #008080 & Gold #FFD700
 */

// ==========================================
// 1. INITIAL ROOM DATA (Interactive Mock Data)
// ==========================================
let roomsData = [
  {
    id: 1,
    title: "Café & Casual Conversations",
    desc: "A relaxed, judgment-free space to talk about weekend plans, food, and daily routines.",
    language: "spanish",
    langName: "Spanish",
    flag: "🇪🇸",
    level: "intermediate",
    levelName: "Intermediate (B1-B2)",
    activity: "casual",
    activityName: "Casual Chat",
    host: {
      name: "Sofia Navarro",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      isNative: true,
      origin: "Mexico"
    },
    participants: 5,
    maxParticipants: 6,
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&auto=format&fit=crop&q=80"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Global Tech, Startups & Career English",
    desc: "Practicing professional vocabulary, interview tips, and tech news with international peers.",
    language: "english",
    langName: "English",
    flag: "🇺🇸",
    level: "advanced",
    levelName: "Advanced (C1-C2)",
    activity: "casual",
    activityName: "Voice & Video",
    host: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      isNative: true,
      origin: "USA"
    },
    participants: 4,
    maxParticipants: 8,
    avatars: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
    ],
    featured: false
  },
  {
    id: 3,
    title: "Anime, Manga & Japanese Slang Club",
    desc: "Discussing recent anime releases, favorite manga arcs, and authentic conversational Tokyo slang.",
    language: "japanese",
    langName: "Japanese",
    flag: "🇯🇵",
    level: "beginner",
    levelName: "Beginner Friendly (A1-A2)",
    activity: "games",
    activityName: "Taboo & Trivia",
    host: {
      name: "Kenji Sato",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
      isNative: true,
      origin: "Japan"
    },
    participants: 6,
    maxParticipants: 6,
    avatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80"
    ],
    featured: true
  },
  {
    id: 4,
    title: "French Bistro: Street Food & Travel Stories",
    desc: "Watching short Parisian street food tours in sync and learning authentic culinary idioms.",
    language: "french",
    langName: "French",
    flag: "🇫🇷",
    level: "intermediate",
    levelName: "Intermediate (B1-B2)",
    activity: "watch",
    activityName: "Watch Party",
    host: {
      name: "Amélie Laurent",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      isNative: true,
      origin: "France"
    },
    participants: 3,
    maxParticipants: 5,
    avatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
    ],
    featured: false
  },
  {
    id: 5,
    title: "German A1-A2: Slow & Patient Pronunciation",
    desc: "Very gentle, supportive pace for total beginners. We read short dialogue cards and practice sounds.",
    language: "german",
    langName: "German",
    flag: "🇩🇪",
    level: "beginner",
    levelName: "Beginner Friendly (A1-A2)",
    activity: "casual",
    activityName: "Pronunciation Lab",
    host: {
      name: "Felix Bauer",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80",
      isNative: true,
      origin: "Germany"
    },
    participants: 4,
    maxParticipants: 6,
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
    ],
    featured: false
  },
  {
    id: 6,
    title: "K-Pop Lyrics & Korean Drama Quotes",
    desc: "Sing-along session with romanized lyrics and breakdowns of popular K-Drama dialogues.",
    language: "korean",
    langName: "Korean",
    flag: "🇰🇷",
    level: "intermediate",
    levelName: "Intermediate (B1-B2)",
    activity: "sing",
    activityName: "Sing-Along & Lyrics",
    host: {
      name: "Min-ji Park",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      isNative: true,
      origin: "South Korea"
    },
    participants: 5,
    maxParticipants: 7,
    avatars: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
    ],
    featured: false
  }
];

// Icebreaker Prompt Deck
const icebreakerPrompts = [
  "If you could travel anywhere tomorrow without worrying about budget, where would you go and why?",
  "What is the most unusual food you've ever eaten in your country or while traveling?",
  "If you had to live inside any movie or TV show world for a year, which one would it be?",
  "What was your favorite childhood hobby, and do you still do anything similar today?",
  "What is one tradition or celebration from your culture that everyone should experience?",
  "If you could instantly become fluent in three languages right now, which three would you choose?",
  "What is the funniest misunderstanding or mistake you've made while learning a language?",
  "What music always puts you in an energized, good mood?"
];
let currentPromptIndex = 0;

// Taboo Demo Cards
const tabooCards = [
  {
    word: "La Playa (The Beach)",
    forbidden: ["Arena (Sand)", "Mar (Sea)", "Sol (Sun)", "Verano (Summer)"]
  },
  {
    word: "El Café (Coffee)",
    forbidden: ["Taza (Cup)", "Mañana (Morning)", "Beber (Drink)", "Negro (Black)"]
  },
  {
    word: "El Teléfono (Phone)",
    forbidden: ["Llamar (Call)", "Pantalla (Screen)", "Bolsillo (Pocket)", "Mensaje (Message)"]
  },
  {
    word: "El Viaje (Trip)",
    forbidden: ["Avión (Plane)", "Maleta (Suitcase)", "Hotel (Hotel)", "Vacaciones (Holidays)"]
  }
];
let currentTabooIndex = 0;

// Current Active Filter State
let selectedLanguage = "all";
let selectedLevel = "all";
let selectedActivity = "all";
let searchKeyword = "";

// ==========================================
// 2. RENDER ROOMS GRID
// ==========================================
function renderRooms() {
  const grid = document.getElementById("roomsGrid");
  if (!grid) return;

  // Filter
  const filtered = roomsData.filter(room => {
    const matchLang = selectedLanguage === "all" || room.language === selectedLanguage;
    const matchLevel = selectedLevel === "all" || room.level === selectedLevel;
    const matchActivity = selectedActivity === "all" || room.activity === selectedActivity;
    const matchSearch = searchKeyword === "" || 
      room.title.toLowerCase().includes(searchKeyword) ||
      room.desc.toLowerCase().includes(searchKeyword) ||
      room.langName.toLowerCase().includes(searchKeyword) ||
      room.host.name.toLowerCase().includes(searchKeyword);

    return matchLang && matchLevel && matchActivity && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px; border: 1px dashed var(--border-medium);">
        <i class="fa-solid fa-mug-hot" style="font-size: 2.5rem; color: var(--teal-primary); margin-bottom: 12px;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--teal-darker); margin-bottom: 6px;">No live rooms match this filter</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 18px;">Be the first to open a table and practice together!</p>
        <button class="btn btn-primary" onclick="openCreateRoomModal()">
          <i class="fa-solid fa-plus"></i> Create This Room
        </button>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(room => {
    const isFull = room.participants >= room.maxParticipants;
    const levelClass = room.level; // beginner, intermediate, advanced

    html += `
      <div class="room-card ${room.featured ? 'featured-card' : ''}">
        <div class="room-card-top">
          <div class="room-topic-area">
            <span class="room-flag">${room.flag}</span>
            <div>
              <div class="room-badge-group">
                <span class="level-badge ${levelClass}">${room.levelName}</span>
                <span class="activity-badge">${room.activityName}</span>
              </div>
            </div>
          </div>
          <div class="live-tag-pill" style="padding: 2px 8px; font-size: 0.7rem;">
            <span class="pulse-red"></span>
            <span>LIVE</span>
          </div>
        </div>

        <h3 class="room-title">${room.title}</h3>
        <p class="room-desc">${room.desc}</p>

        <div class="room-host">
          <img src="${room.host.avatar}" alt="${room.host.name}" class="host-avatar">
          <span>Hosted by <strong class="host-name">${room.host.name}</strong></span>
          ${room.host.isNative ? `<span class="native-chip">Native ${room.langName}</span>` : ''}
        </div>

        <div class="room-card-bottom">
          <div class="participants-stack">
            ${room.avatars.map(av => `<img src="${av}" alt="participant" class="stacked-avatar">`).join('')}
            <span class="stack-count">
              <strong style="color: var(--teal-dark);">${room.participants}</strong>/${room.maxParticipants} in room
            </span>
          </div>

          <button class="btn btn-sm ${room.featured ? 'btn-gold' : 'btn-primary'}" onclick="openRoomModal({
            title: '${escapeHtml(room.title)}',
            language: '${room.langName}',
            flag: '${room.flag}',
            level: '${room.levelName}',
            host: '${escapeHtml(room.host.name)} (${room.host.origin})'
          })">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            <span>${isFull ? 'Listen In' : 'Join Room'}</span>
          </button>
        </div>
      </div>
    `;
  });

  // Always append Create Room dashed card at the end
  html += `
    <div class="create-room-card" onclick="openCreateRoomModal()">
      <div class="create-icon-wrap">
        <i class="fa-solid fa-plus"></i>
      </div>
      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--teal-darker); margin-bottom: 6px;">Create a Room</h3>
      <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 240px;">
        Pick your topic, level, and invite learners worldwide to converse.
      </p>
    </div>
  `;

  grid.innerHTML = html;
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'");
}

// ==========================================
// 3. INTERACTIVE ROOM MODAL LOGIC
// ==========================================
const roomModal = document.getElementById("roomModalOverlay");
const modalTitle = document.getElementById("modalRoomTitle");
const modalFlag = document.getElementById("modalRoomFlag");
const modalHost = document.getElementById("modalRoomHost");
const modalTilesGrid = document.getElementById("modalTilesGrid");
const audioCanvas = document.getElementById("audioVisualizerCanvas");

let audioAnimationId = null;
let isMicMuted = false;
let isCamOff = false;

function openRoomModal(roomDetails) {
  if (modalTitle) modalTitle.textContent = roomDetails.title || "Casual Practice Room";
  if (modalFlag) modalFlag.textContent = roomDetails.flag || "🌐";
  if (modalHost) modalHost.textContent = `Host: ${roomDetails.host || 'Sofia'} • Level: ${roomDetails.level || 'Intermediate'}`;

  // Populate dynamic peers
  renderModalPeers(roomDetails.language);

  // Show modal
  if (roomModal) {
    roomModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Start smooth audio visualizer
  startAudioVisualizer();
}

function closeRoomModal() {
  if (roomModal) {
    roomModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
  if (audioAnimationId) {
    cancelAnimationFrame(audioAnimationId);
  }
}

function renderModalPeers(lang) {
  if (!modalTilesGrid) return;

  const peers = [
    {
      name: "Sofia Navarro",
      tag: "Host • Native",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      speaking: true,
      muted: false
    },
    {
      name: "Camila Gomez",
      tag: "Native Speaker",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      speaking: false,
      muted: false
    },
    {
      name: "Liam O'Connor",
      tag: "Learner (B1)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      speaking: false,
      muted: false
    },
    {
      name: "Marco Rossi",
      tag: "Learner (B2)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      speaking: false,
      muted: true
    },
    {
      name: "You (Guest)",
      tag: "Learner",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      speaking: false,
      muted: isMicMuted,
      isSelf: true
    }
  ];

  modalTilesGrid.innerHTML = peers.map(p => `
    <div class="peer-tile ${p.speaking ? 'active-speaker' : ''}" id="${p.isSelf ? 'userSelfTile' : ''}">
      <img src="${p.avatar}" alt="${p.name}" class="peer-tile-avatar">
      <div class="peer-tile-name">${p.name}</div>
      <div class="peer-tile-tag">${p.tag}</div>
      <i class="fa-solid ${p.muted ? 'fa-microphone-slash peer-mic-icon muted' : 'fa-microphone peer-mic-icon'}"></i>
    </div>
  `).join("");
}

// Audio Visualizer Canvas animation
function startAudioVisualizer() {
  if (!audioCanvas) return;
  const ctx = audioCanvas.getContext("2d");
  let step = 0;

  function draw() {
    ctx.clearRect(0, 0, audioCanvas.width, audioCanvas.height);

    const barCount = 28;
    const barWidth = 4;
    const gap = 3;

    for (let i = 0; i < barCount; i++) {
      // simulate speech audio waves
      const amplitude = Math.sin(step * 0.1 + i * 0.4) * 0.5 + 0.5;
      const noise = (Math.sin(step * 0.2 + i * 1.5) * 0.3 + 0.7);
      const height = Math.max(3, amplitude * noise * 22);

      const x = i * (barWidth + gap) + 10;
      const y = (audioCanvas.height - height) / 2;

      // Color alternating Teal & Gold
      if (i % 3 === 0) {
        ctx.fillStyle = "#FFD700"; // Gold
      } else {
        ctx.fillStyle = "#00a3a3"; // Bright Teal
      }

      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, height, 2);
      ctx.fill();
    }

    step++;
    audioAnimationId = requestAnimationFrame(draw);
  }

  draw();
}

// Room Controls
document.getElementById("ctrlMicBtn")?.addEventListener("click", function() {
  isMicMuted = !isMicMuted;
  const icon = this.querySelector("i");
  if (isMicMuted) {
    this.classList.add("active-muted");
    icon.className = "fa-solid fa-microphone-slash";
    showToast("Microphone muted");
  } else {
    this.classList.remove("active-muted");
    icon.className = "fa-solid fa-microphone";
    showToast("Microphone connected & live");
  }

  // Update self tile
  const selfTile = document.getElementById("userSelfTile");
  if (selfTile) {
    const mic = selfTile.querySelector(".peer-mic-icon");
    if (mic) {
      mic.className = isMicMuted ? "fa-solid fa-microphone-slash peer-mic-icon muted" : "fa-solid fa-microphone peer-mic-icon";
    }
  }
});

document.getElementById("ctrlCamBtn")?.addEventListener("click", function() {
  isCamOff = !isCamOff;
  const icon = this.querySelector("i");
  if (isCamOff) {
    this.classList.add("active-muted");
    icon.className = "fa-solid fa-video-slash";
    showToast("Camera turned off (Voice only mode)");
  } else {
    this.classList.remove("active-muted");
    icon.className = "fa-solid fa-video";
    showToast("Camera turned on");
  }
});

document.getElementById("ctrlHandBtn")?.addEventListener("click", function() {
  showToast("✋ Hand raised! The host will invite you to speak.");
});

document.getElementById("ctrlGameBtn")?.addEventListener("click", function() {
  // switch to prompt tab
  const promptTabBtn = document.querySelector('.sidebar-tab-btn[data-side="prompt"]');
  if (promptTabBtn) promptTabBtn.click();
});

document.getElementById("ctrlHeartBtn")?.addEventListener("click", function() {
  showToast("❤️ Sent appreciation reaction to the room!");
});

document.getElementById("ctrlLeaveBtn")?.addEventListener("click", closeRoomModal);
document.getElementById("modalCloseBtn")?.addEventListener("click", closeRoomModal);

// ==========================================
// 4. ROOM CHAT & ICEBREAKER PROMPTS
// ==========================================
// Tab switching inside modal sidebar
document.querySelectorAll(".sidebar-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sidebar-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".sidebar-pane").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const target = btn.dataset.side;
    if (target === "chat") {
      document.getElementById("sidePaneChat")?.classList.add("active");
    } else {
      document.getElementById("sidePanePrompt")?.classList.add("active");
    }
  });
});

// Send Chat Message
const chatInput = document.getElementById("modalChatInput");
const chatList = document.getElementById("modalChatList");
const sendBtn = document.getElementById("sendChatBtn");

function sendUserMessage() {
  if (!chatInput) return;
  const text = chatInput.value.trim();
  if (!text) return;

  const userMsgEl = document.createElement("div");
  userMsgEl.className = "m-chat-item";
  userMsgEl.innerHTML = `
    <div class="m-chat-user" style="color: var(--teal-light);">You</div>
    <div class="m-chat-text" style="background: var(--teal-primary); color: #fff;">${escapeHtml(text)}</div>
  `;
  chatList.appendChild(userMsgEl);
  chatInput.value = "";
  chatList.scrollTop = chatList.scrollHeight;

  // Automated friendly peer response after 1.2s
  setTimeout(() => {
    const peerMsgEl = document.createElement("div");
    peerMsgEl.className = "m-chat-item";
    const responses = [
      "¡Qué bien dicho! That was very natural phrasing.",
      "Totally agree with you! Me too.",
      "Excelente pregunta. ¿Alguien más quiere responder?",
      "Nice accent! You sound much more confident today."
    ];
    const reply = responses[Math.floor(Math.random() * responses.length)];
    peerMsgEl.innerHTML = `
      <div class="m-chat-user">Sofia (Host)</div>
      <div class="m-chat-text">${reply}</div>
    `;
    chatList.appendChild(peerMsgEl);
    chatList.scrollTop = chatList.scrollHeight;
  }, 1200);
}

sendBtn?.addEventListener("click", sendUserMessage);
chatInput?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendUserMessage();
});

// Icebreaker Prompts
document.getElementById("nextPromptBtn")?.addEventListener("click", () => {
  currentPromptIndex = (currentPromptIndex + 1) % icebreakerPrompts.length;
  const promptTextEl = document.getElementById("promptText");
  const promptIndexEl = document.getElementById("promptIndex");
  if (promptTextEl) promptTextEl.textContent = `"${icebreakerPrompts[currentPromptIndex]}"`;
  if (promptIndexEl) promptIndexEl.textContent = (currentPromptIndex + 1);
});

// ==========================================
// 5. IN-ROOM ACTIVITIES SHOWCASE (Tab Switcher)
// ==========================================
document.querySelectorAll(".act-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".act-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const targetId = btn.dataset.tab;
    const targetPane = document.getElementById(targetId);
    if (targetPane) targetPane.classList.add("active");
  });
});

// Taboo Card Interactive Deck
function drawNextTabooCard() {
  currentTabooIndex = (currentTabooIndex + 1) % tabooCards.length;
  const card = tabooCards[currentTabooIndex];
  
  const wordEl = document.getElementById("tabooTargetWord");
  const forbiddenEl = document.getElementById("tabooForbiddenWords");

  if (wordEl) wordEl.textContent = card.word;
  if (forbiddenEl) {
    forbiddenEl.innerHTML = card.forbidden.map(w => `<span class="taboo-pill">${w}</span>`).join("");
  }
}

// Watch Party Mock Video Player
let isMockVideoPlaying = false;
function toggleMockVideo() {
  isMockVideoPlaying = !isMockVideoPlaying;
  const playIcon = document.getElementById("mockPlayIcon");
  const statusEl = document.getElementById("mockVideoStatus");

  if (isMockVideoPlaying) {
    if (playIcon) playIcon.className = "fa-solid fa-pause";
    if (statusEl) statusEl.textContent = "▶ Streaming in Sync (Playing...)";
  } else {
    if (playIcon) playIcon.className = "fa-solid fa-play";
    if (statusEl) statusEl.textContent = "Click to Play Synced Stream";
  }
}

function simulateActivity(type) {
  if (type === "games") {
    openRoomModal({
      title: "Taboo & Icebreaker Party",
      language: "Spanish",
      flag: "🇪🇸",
      level: "Intermediate",
      host: "Camila (Spain)"
    });
    // switch to prompt tab
    setTimeout(() => {
      document.querySelector('.sidebar-tab-btn[data-side="prompt"]')?.click();
    }, 200);
  } else if (type === "watch") {
    openRoomModal({
      title: "French Bistro: Street Food & Travel",
      language: "French",
      flag: "🇫🇷",
      level: "Intermediate",
      host: "Amélie (France)"
    });
  }
}

// ==========================================
// 6. 1-ON-1 SPEED MATCHER
// ==========================================
const startMatchBtn = document.getElementById("startMatchBtn");
const matchDefaultState = document.getElementById("matchDefaultState");
const radarSpinner = document.getElementById("radarSpinner");
const matchedPartnerCard = document.getElementById("matchedPartnerCard");

startMatchBtn?.addEventListener("click", () => {
  const targetLang = document.getElementById("matchTargetLang").value;
  const myLevel = document.getElementById("matchMyLevel").value;

  // Show Radar
  if (matchDefaultState) matchDefaultState.style.display = "none";
  if (matchedPartnerCard) matchedPartnerCard.style.display = "none";
  if (radarSpinner) radarSpinner.style.display = "flex";

  startMatchBtn.disabled = true;
  startMatchBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Finding ${targetLang} partner...`;

  setTimeout(() => {
    if (radarSpinner) radarSpinner.style.display = "none";
    if (matchedPartnerCard) matchedPartnerCard.style.display = "block";
    startMatchBtn.disabled = false;
    startMatchBtn.innerHTML = `<i class="fa-solid fa-rotate"></i> Match With Another Partner`;
    showToast(`🎉 Found a 1-on-1 match for ${targetLang}!`);
  }, 1800);
});

document.getElementById("enter1on1RoomBtn")?.addEventListener("click", () => {
  const targetLang = document.getElementById("matchTargetLang").value;
  openRoomModal({
    title: `1-on-1 Practice with Lucía`,
    language: targetLang,
    flag: "🇪🇸",
    level: "Intermediate",
    host: "Lucía Valdés (Spain)"
  });
});

// ==========================================
// 7. CREATE ROOM MODAL & SUBMISSION
// ==========================================
const createModal = document.getElementById("createRoomModalOverlay");

function openCreateRoomModal() {
  if (createModal) {
    createModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCreateRoomModal() {
  if (createModal) {
    createModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

document.getElementById("createRoomBtn")?.addEventListener("click", openCreateRoomModal);
document.getElementById("createCloseBtn")?.addEventListener("click", closeCreateRoomModal);

document.getElementById("createRoomForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("newRoomTitle").value;
  const langKey = document.getElementById("newRoomLanguage").value;
  const levelKey = document.getElementById("newRoomLevel").value;
  const actKey = document.getElementById("newRoomActivity").value;

  const flagMap = {
    english: "🇺🇸",
    spanish: "🇪🇸",
    french: "🇫🇷",
    japanese: "🇯🇵",
    german: "🇩🇪",
    italian: "🇮🇹",
    korean: "🇰🇷",
    mandarin: "🇨🇳"
  };

  const nameMap = {
    english: "English",
    spanish: "Spanish",
    french: "French",
    japanese: "Japanese",
    german: "German",
    italian: "Italian",
    korean: "Korean",
    mandarin: "Mandarin"
  };

  const newRoom = {
    id: Date.now(),
    title: title,
    desc: `Live open practice room created by You. Drop in, unmute, and start conversing.`,
    language: langKey,
    langName: nameMap[langKey] || "Language",
    flag: flagMap[langKey] || "🌐",
    level: levelKey,
    levelName: levelKey.charAt(0).toUpperCase() + levelKey.slice(1),
    activity: actKey,
    activityName: actKey === "games" ? "Icebreaker Games" : actKey === "watch" ? "Watch Together" : "Voice & Video",
    host: {
      name: "You (Host)",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      isNative: false,
      origin: "Community"
    },
    participants: 1,
    maxParticipants: 6,
    avatars: [
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80"
    ],
    featured: true
  };

  // Prepend to room list
  roomsData.unshift(newRoom);
  renderRooms();
  closeCreateRoomModal();

  showToast(`🚀 "${title}" room launched! Waiting for peers to join.`);

  // Open the newly created room
  setTimeout(() => {
    openRoomModal({
      title: newRoom.title,
      language: newRoom.langName,
      flag: newRoom.flag,
      level: newRoom.levelName,
      host: "You (Host)"
    });
  }, 400);
});

// ==========================================
// 8. FILTER LISTENERS & PILLS
// ==========================================
document.querySelectorAll(".lang-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".lang-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    selectedLanguage = pill.dataset.lang;
    renderRooms();
  });
});

document.getElementById("levelFilter")?.addEventListener("change", (e) => {
  selectedLevel = e.target.value;
  renderRooms();
});

document.getElementById("activityFilter")?.addEventListener("change", (e) => {
  selectedActivity = e.target.value;
  renderRooms();
});

document.getElementById("roomSearchInput")?.addEventListener("input", (e) => {
  searchKeyword = e.target.value.toLowerCase().trim();
  renderRooms();
});

function filterByLang(langKey) {
  const pill = document.querySelector(`.lang-pill[data-lang="${langKey}"]`);
  if (pill) {
    pill.click();
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================
// 9. FAQ ACCORDION
// ==========================================
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    item.classList.toggle("open");
  });
});

// ==========================================
// 10. AUTH & TOAST NOTIFICATION HELPERS
// ==========================================
function simulateGoogleLogin() {
  showToast("✅ Authenticated via Google! Welcome to Lingauro.");
  const btn = document.getElementById("googleAuthBtn");
  if (btn) {
    btn.innerHTML = `<img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&auto=format&fit=crop&q=80" style="width:20px;height:20px;border-radius:50%;"> <span>Logged In</span>`;
    btn.style.borderColor = "var(--teal-primary)";
  }
}

document.getElementById("googleAuthBtn")?.addEventListener("click", simulateGoogleLogin);
document.getElementById("quickStartBtn")?.addEventListener("click", () => {
  document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("hero1on1Btn")?.addEventListener("click", () => {
  document.getElementById("speed-match")?.scrollIntoView({ behavior: "smooth" });
});

// Clean Minimal Toast Notification
function showToast(message) {
  const existing = document.querySelector(".lingauro-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "lingauro-toast";
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #0d2828;
    color: #ffffff;
    border-left: 4px solid #FFD700;
    padding: 14px 22px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideUpToast 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  toast.innerHTML = `<i class="fa-solid fa-sparkles" style="color: #FFD700;"></i> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Live User Jitter (Simulating real-time presence)
setInterval(() => {
  const counter = document.getElementById("activeUserCounter");
  if (counter) {
    const base = 1480;
    const offset = Math.floor(Math.random() * 20);
    counter.textContent = `${base + offset} speaking live`;
  }
}, 6000);

// Keydown Escape closes open modals
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeRoomModal();
    closeCreateRoomModal();
  }
});

// Close when clicking modal backdrop
[roomModal, createModal].forEach(m => {
  m?.addEventListener("click", (e) => {
    if (e.target === m) {
      closeRoomModal();
      closeCreateRoomModal();
    }
  });
});

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  renderRooms();
});
