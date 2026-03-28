const roomData = {
  moon: {
    title: "浪石村內唱新聲",
    hallSummary: "湖南花鼓戲在這座戲臺上重新熱鬧開場，適合一家人用熟悉的鄉音彼此陪伴。",
    detailSummary: "這個戲房主題是「鄉音與團圓」，很適合讓在外的人陪家中長輩和孩子唱一段湖南花鼓戲。",
    act: "開場曲",
    online: "7 人在線",
    detailOnline: "7 人",
    tag: "花鼓熱場",
    shortTag: "花鼓",
    performer: "春秀正在台上",
    chatTitle: "花鼓戲正熱鬧",
    quote: "鑼鼓一響，鄉音就近了。",
    cast: {
      violet: {
        name: "春秀",
        detailRole: "俏皮清亮",
        chatRole: "花鼓旦角",
        subtitle: "你 - 清亮俏皮",
        emotion: "亮嗓",
        avatarClass: "",
        avatarText: "V"
      },
      orian: {
        name: "長生",
        detailRole: "樸實真誠",
        chatRole: "花鼓生角",
        subtitle: "花鼓生角 - 樸實真誠",
        emotion: "接唱",
        avatarClass: "alt",
        avatarText: "O"
      },
      selene: {
        name: "桂枝嬸",
        detailRole: "熱心爽朗",
        chatRole: "熱場幫腔",
        subtitle: "幫腔嬸子 - 熱心又爽朗",
        emotion: "喝采",
        avatarClass: "alt-two",
        avatarText: "S"
      }
    },
    messages: [
      {
        kind: "system",
        label: "旁白",
        text: "鑼鼓聲一起，浪石村內的小戲臺熱鬧起來，鄉親們圍坐著等人開嗓。"
      },
      {
        kind: "incoming featured",
        character: "orian",
        emotion: "接唱",
        text: "「春秀妹子，你這一開嗓，就像把家鄉的熱鬧都唱回來了。」"
      },
      {
        kind: "outgoing",
        character: "violet",
        emotion: "亮嗓",
        tone: "warm",
        text: "「我在外頭做工再忙，也想唱段花鼓戲給屋裡老人孩子聽，報個平安。」"
      },
      {
        kind: "incoming",
        character: "selene",
        emotion: "喝采",
        tone: "cool",
        text: "「唱得好呀，這一聲一調聽得人心裡暖，快再來一段《劉海砍樵》！」"
      }
    ]
  },
  spring: {
    title: "堂前對唱報平安",
    hallSummary: "偏溫情的對唱戲房，像一座熱鬧的小舞臺，適合慢慢和家人對唱幾句。",
    detailSummary: "這是一個以團圓與陪伴為主題的花鼓戲房，適合分享近況與一句平安問候。",
    act: "團圓調",
    online: "12 人在線",
    detailOnline: "12 人",
    tag: "團圓對唱",
    shortTag: "團圓",
    performer: "阿桃正在台上",
    chatTitle: "堂前對唱中",
    quote: "一句平安，勝過千封來信。",
    cast: {
      violet: {
        name: "阿桃",
        detailRole: "溫柔明快",
        chatRole: "報信旦角",
        subtitle: "你 - 溫柔明快",
        emotion: "報喜",
        avatarClass: "",
        avatarText: "A"
      },
      orian: {
        name: "福生叔",
        detailRole: "穩重和氣",
        chatRole: "對唱長者",
        subtitle: "對唱長者 - 穩重和氣",
        emotion: "和聲",
        avatarClass: "alt",
        avatarText: "F"
      },
      selene: {
        name: "小滿",
        detailRole: "靈巧活潑",
        chatRole: "孩童幫腔",
        subtitle: "孩童幫腔 - 靈巧活潑",
        emotion: "雀躍",
        avatarClass: "alt-two",
        avatarText: "X"
      }
    },
    messages: [
      {
        kind: "system",
        label: "旁白",
        text: "堂前的木凳排得整整齊齊，屋裡人一邊納涼，一邊等著今晚的對唱開場。"
      },
      {
        kind: "incoming featured",
        character: "orian",
        emotion: "和聲",
        text: "「阿桃啊，你先唱頭一句，我俺也去接你後頭那半段，讓屋裡老人都聽個高興。」"
      },
      {
        kind: "outgoing",
        character: "violet",
        emotion: "報喜",
        tone: "warm",
        text: "「我先報個平安，再唱一段，讓家裡曉得我在外面一切都好。」"
      },
      {
        kind: "incoming",
        character: "selene",
        emotion: "雀躍",
        tone: "cool",
        text: "「我也會唱！我陪你們一起拍手打節奏，讓奶奶笑一笑。」"
      }
    ]
  },
  harbor: {
    title: "花鼓家書小戲房",
    hallSummary: "把遠行的思念唱成一封花鼓家書，讓每段對話都像跨越距離的回信。",
    detailSummary: "這個戲房以家書、問候和平安報信為主題，適合在外工作的人與家中親人交流近況。",
    act: "家書調",
    online: "9 人在線",
    detailOnline: "9 人",
    tag: "鄉音家書",
    shortTag: "鄉音",
    performer: "秀蘭正在台上",
    chatTitle: "家書對唱中",
    quote: "把思念唱出來，回家的路就近了。",
    cast: {
      violet: {
        name: "秀蘭",
        detailRole: "細膩真摯",
        chatRole: "家書旦角",
        subtitle: "你 - 細膩真摯",
        emotion: "思念",
        avatarClass: "",
        avatarText: "X"
      },
      orian: {
        name: "石頭哥",
        detailRole: "沉穩寡言",
        chatRole: "遠行生角",
        subtitle: "遠行生角 - 沉穩寡言",
        emotion: "回應",
        avatarClass: "alt",
        avatarText: "S"
      },
      selene: {
        name: "蓮妹",
        detailRole: "暖心細緻",
        chatRole: "念信幫唱",
        subtitle: "念信幫唱 - 暖心細緻",
        emotion: "安慰",
        avatarClass: "alt-two",
        avatarText: "L"
      }
    },
    messages: [
      {
        kind: "system",
        label: "旁白",
        text: "夜色慢慢落下，院門口的風燈亮了，今晚這封家書要用唱的送出去。"
      },
      {
        kind: "incoming featured",
        character: "orian",
        emotion: "回應",
        text: "「秀蘭，你把心裡想講的唱出來吧，家裡聽見了，就曉得你人在外頭也惦記著屋裡。」"
      },
      {
        kind: "outgoing",
        character: "violet",
        emotion: "思念",
        tone: "warm",
        text: "「這封家書我不寫在紙上，我唱給你們聽，唱一句想念，唱一句盼歸。」"
      },
      {
        kind: "incoming",
        character: "selene",
        emotion: "安慰",
        tone: "cool",
        text: "「慢慢唱，不急，我替你把後頭那句和上，讓這封家書更暖一些。」"
      }
    ]
  }
};

const screens = document.querySelectorAll(".screen");
const goButtons = document.querySelectorAll("[data-go]");
const roomButtons = document.querySelectorAll("[data-room]");
const roomThumbButtons = document.querySelectorAll("[data-room-thumb]");
const characterButtons = document.querySelectorAll("[data-character]");
const quickMessageButtons = document.querySelectorAll("[data-quick-message]");

const messages = document.getElementById("messages");
const composer = document.getElementById("composer");
const messageInput = document.getElementById("messageInput");
const quoteDisplay = document.getElementById("quoteDisplay");
const elderModeToggle = document.getElementById("elderModeToggle");
const voiceAssistBtn = document.getElementById("voiceAssistBtn");
const shortcutCareSend = document.getElementById("shortcutCareSend");
const familyReminderRoom = document.getElementById("familyReminderRoom");

const selectedRoomTitle = document.getElementById("selectedRoomTitle");
const selectedRoomSummary = document.getElementById("selectedRoomSummary");
const selectedRoomAct = document.getElementById("selectedRoomAct");
const selectedRoomOnline = document.getElementById("selectedRoomOnline");
const selectedRoomTag = document.getElementById("selectedRoomTag");

const detailRoomTitle = document.getElementById("detailRoomTitle");
const detailRoomDescription = document.getElementById("detailRoomDescription");
const detailOnline = document.getElementById("detailOnline");
const detailTag = document.getElementById("detailTag");
const detailPerformer = document.getElementById("detailPerformer");
const chatRoomTitle = document.getElementById("chatRoomTitle");

const detailCastNameNodes = document.querySelectorAll("[data-detail-cast-name]");
const detailCastRoleNodes = document.querySelectorAll("[data-detail-cast-role]");
const buildControls = document.querySelectorAll(".build-control");
const buildCards = document.querySelectorAll("[data-build-card]");
const buildProgressText = document.getElementById("buildProgressText");
const buildStageMessage = document.getElementById("buildStageMessage");
const buildSceneNodes = document.querySelectorAll("[data-scene]");
const buildBase = document.getElementById("buildBase");
const buildCurtainLeft = document.getElementById("buildCurtainLeft");
const buildCurtainRight = document.getElementById("buildCurtainRight");
const buildBanner = document.getElementById("buildBanner");
const buildLightLeft = document.getElementById("buildLightLeft");
const buildLightRight = document.getElementById("buildLightRight");
const buildFigureHome = document.getElementById("buildFigureHome");
const buildFigureRemote = document.getElementById("buildFigureRemote");

let activeCharacter = "violet";
let activeRoom = "moon";
let roomState = JSON.parse(JSON.stringify(roomData));
let buildState = {
  scene: "",
  curtain: false,
  figure: false,
  light: "",
  message: ""
};

function showScreen(screenName) {
  screens.forEach((screen) => {
    screen.classList.toggle("screen-active", screen.dataset.screen === screenName);
  });
}

function renderMessages(room) {
  messages.innerHTML = "";

  room.messages.forEach((message) => {
    const article = document.createElement("article");

    if (message.kind === "system") {
      article.className = "message system";
      article.innerHTML = `
        <span class="message-label">${message.label}</span>
        <p>${message.text}</p>
      `;
      messages.appendChild(article);
      return;
    }

    const character = room.cast[message.character];
    const emotionClass = message.tone ? `emotion ${message.tone}` : "emotion";
    article.className = `message ${message.kind}`;
    article.innerHTML = `
      <div class="message-meta">
        <span class="avatar mini ${character.avatarClass}">${character.avatarText}</span>
        <div>
          <strong>${character.name}</strong>
          <small>${character.subtitle}</small>
        </div>
        <span class="${emotionClass}">${message.emotion}</span>
      </div>
      <p>${message.text}</p>
    `;
    messages.appendChild(article);
  });

  messages.scrollTop = messages.scrollHeight;
}

function applyCast(room) {
  const order = ["violet", "orian", "selene"];

  order.forEach((key, index) => {
    const cast = room.cast[key];
    if (!cast) return;

    if (detailCastNameNodes[index]) {
      detailCastNameNodes[index].textContent = cast.name;
    }

    if (detailCastRoleNodes[index]) {
      detailCastRoleNodes[index].textContent = cast.detailRole;
    }

    const chatName = document.querySelector(`[data-chat-cast-name="${key}"]`);
    const chatRole = document.querySelector(`[data-chat-cast-role="${key}"]`);

    if (chatName) {
      chatName.textContent = cast.name;
    }

    if (chatRole) {
      chatRole.textContent = cast.chatRole;
    }
  });
}

function applyRoom(roomKey) {
  const room = roomState[roomKey];
  if (!room) return;

  activeRoom = roomKey;
  selectedRoomTitle.textContent = room.title;
  selectedRoomSummary.textContent = room.hallSummary;
  selectedRoomAct.textContent = room.act;
  selectedRoomOnline.textContent = room.online;
  selectedRoomTag.textContent = room.tag;

  detailRoomTitle.textContent = room.title;
  detailRoomDescription.textContent = room.detailSummary;
  detailOnline.textContent = room.detailOnline;
  detailTag.textContent = room.shortTag;
  detailPerformer.textContent = room.performer;
  chatRoomTitle.textContent = room.chatTitle;
  quoteDisplay.textContent = room.quote;
  if (familyReminderRoom) {
    familyReminderRoom.textContent = room.title;
  }

  applyCast(room);
  renderMessages(room);

  roomButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.room === roomKey);
  });

  roomThumbButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.roomThumb === roomKey);
  });
}

function setElderMode(enabled) {
  document.body.classList.toggle("elder-mode", enabled);

  if (elderModeToggle) {
    elderModeToggle.classList.toggle("is-on", enabled);
    elderModeToggle.setAttribute("aria-pressed", String(enabled));
    elderModeToggle.textContent = enabled ? "已開啟" : "開啟";
  }

  try {
    localStorage.setItem("good-opera-elder-mode", enabled ? "on" : "off");
  } catch (error) {
    // Ignore storage errors in preview mode.
  }
}

function getBuildProgress() {
  return ["scene", "curtain", "light", "message"].filter((step) => {
    if (step === "curtain") return buildState.curtain;
    return Boolean(buildState[step]);
  }).length;
}

function renderBuildStage() {
  const progress = getBuildProgress();

  if (buildProgressText) {
    buildProgressText.textContent = `${progress} / 4 已完成`;
  }

  buildSceneNodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.scene === buildState.scene);
  });

  const curtainVisible = buildState.curtain;
  const lightVisible = Boolean(buildState.light);
  const figureVisible = buildState.figure || curtainVisible;

  if (buildBase) {
    buildBase.classList.toggle("is-ready", Boolean(buildState.scene));
  }

  [buildCurtainLeft, buildCurtainRight, buildBanner].forEach((node) => {
    if (node) node.classList.toggle("is-visible", curtainVisible);
  });

  [buildFigureHome, buildFigureRemote].forEach((node) => {
    if (node) node.classList.toggle("is-visible", figureVisible);
  });

  [buildLightLeft, buildLightRight].forEach((node) => {
    if (!node) return;
    node.classList.toggle("is-visible", lightVisible);
    node.dataset.light = buildState.light || "";
  });

  if (buildStageMessage) {
    buildStageMessage.textContent = buildState.message || "先選一個開唱場景，戲台就會開始成形。";
    buildStageMessage.classList.toggle("is-visible", Boolean(buildState.message));
  }

  buildControls.forEach((button) => {
    const { buildStep, buildValue } = button.dataset;
    let isActive = false;

    if (buildStep === "scene" || buildStep === "light" || buildStep === "message") {
      isActive = buildState[buildStep] === buildValue;
    } else if (buildStep === "curtain" && buildValue === "open") {
      isActive = buildState.curtain;
    } else if (buildStep === "figure" && buildValue === "set") {
      isActive = buildState.figure || buildState.curtain;
    }

    button.classList.toggle("active", isActive);
  });

  const nextStep = ["scene", "curtain", "light", "message"].find((step) => {
    if (step === "curtain") return !buildState.curtain;
    return !buildState[step];
  });

  buildCards.forEach((card) => {
    const step = card.dataset.buildCard;
    const done = step === "curtain" ? buildState.curtain : Boolean(buildState[step]);
    card.classList.toggle("is-done", done);
    card.classList.toggle("is-current", !done && step === nextStep);
  });
}

function runBuildAction(step, value) {
  if (step === "scene") {
    buildState.scene = value;
  }

  if (step === "curtain") {
    buildState.curtain = true;
    buildState.figure = true;
  }

  if (step === "figure") {
    buildState.figure = true;
  }

  if (step === "light") {
    buildState.light = value;
  }

  if (step === "message") {
    buildState.message = value;
  }

  renderBuildStage();
}

goButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

roomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyRoom(button.dataset.room);
  });
});

roomThumbButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyRoom(button.dataset.roomThumb);
    showScreen("main");
  });
});

characterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    characterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCharacter = button.dataset.character;
  });
});

if (composer) {
  composer.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = messageInput.value.trim();
    if (!value) return;

    const room = roomState[activeRoom];
    const character = room.cast[activeCharacter];

    room.messages.push({
      kind: "outgoing",
      character: activeCharacter,
      emotion: character.emotion,
      tone: "warm",
      text: value
    });

    room.quote = value.length > 24 ? `${value.slice(0, 24)}...` : value;
    renderMessages(room);
    quoteDisplay.textContent = room.quote;
    messageInput.value = "";
  });
}

if (elderModeToggle) {
  elderModeToggle.addEventListener("click", () => {
    const nextState = !document.body.classList.contains("elder-mode");
    setElderMode(nextState);
  });
}

quickMessageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    messageInput.value = button.dataset.quickMessage || "";
    messageInput.focus();
  });
});

if (voiceAssistBtn) {
  voiceAssistBtn.addEventListener("click", () => {
    messageInput.value = "我現在在外面，今天一切平安，想和家裡說說話。";
    messageInput.focus();
  });
}

if (shortcutCareSend) {
  shortcutCareSend.addEventListener("click", () => {
    showScreen("tertiary");
    messageInput.value = "我現在在外面，今天一切平安，想和家裡說說話。";
    messageInput.focus();
  });
}

buildControls.forEach((button) => {
  button.addEventListener("click", () => {
    const { buildStep, buildValue } = button.dataset;
    runBuildAction(buildStep, buildValue);
  });
});

applyRoom(activeRoom);
renderBuildStage();
showScreen("intro");

try {
  setElderMode(localStorage.getItem("good-opera-elder-mode") === "on");
} catch (error) {
  setElderMode(false);
}
