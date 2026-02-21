let language = "en";
let musicPlaying = false;

const FLAG_EN = `<svg style="width:1.2em; height:1.2em; vertical-align:middle; border-radius:2px" viewBox="0 0 640 480"><rect width="640" height="480" fill="#3c3b6e"/><path stroke="#fff" stroke-width="37" d="M0 37h640M0 111h640M0 185h640M0 259h640M0 333h640M0 407h640"/><rect width="256" height="261" fill="#3c3b6e"/><path fill="#fff" d="M37 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM102 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM167 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM232 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM70 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM135 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM200 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22z"/></svg>`;
const FLAG_TR = `<svg style="width:1.2em; height:1.2em; vertical-align:middle; border-radius:2px" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#e30a17"/><circle cx="425" cy="400" r="200" fill="#fff"/><circle cx="475" cy="400" r="160" fill="#e30a17"/><path fill="#fff" d="M675 400l-123.6 40.2 47.2-130.4v180.4l-47.2-130.4z"/></svg>`;

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
  document.querySelectorAll("nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.target === id));
}

function updateLanguage() {
  const occ = document.getElementById("occupation");
  if (occ) {
    occ.innerHTML = (language === "en")
      ? `${FLAG_EN} Computer Engineer ${FLAG_TR}`
      : `${FLAG_EN} Bilgisayar Mühendisi ${FLAG_TR}`;
  }
  document.querySelectorAll(".lang-en").forEach(el => el.hidden = (language !== "en"));
  document.querySelectorAll(".lang-tr").forEach(el => el.hidden = (language !== "tr"));
}

function toggleLanguage() {
  language = (language === "en") ? "tr" : "en";
  updateLanguage();
  renderSkills();
}

function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");
  const icon = el.parentElement.querySelector(".toggle-icon");
  if (icon) icon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
}

const skills = [
  { img: "Logos (10).png", en: "Ruby", tr: "Ruby" },
  { img: "Logos (11).png", en: "C++", tr: "C++" },
  { img: "Logos (12).png", en: "C#", tr: "C#" },
  { img: "Logos (13).png", en: "C", tr: "C" },
  { img: "Logos (14).png", en: "J2ME", tr: "J2ME" },
  { img: "Logos (15).png", en: "Javascript", tr: "Javascript" },
  { img: "Logos (16).png", en: "Java", tr: "Java" },
  { img: "Logos (17).png", en: "SQL", tr: "SQL" },
  { img: "Logos (18).png", en: "CSS", tr: "CSS" },
  { img: "Logos (19).png", en: "HTML 5", tr: "HTML5" },
  { img: "Logos (20).png", en: "PHP", tr: "PHP" },
  { img: "Logos (21).png", en: "React Native", tr: "React Native" },
  { img: "Logos (22).png", en: "Computer Repair", tr: "Bilgisayar Tamiri" },
  { img: "Logos (23).png", en: "Data Infrastructure", tr: "Veri merkezi altyapısı" },
  { img: "Logos (24).png", en: "Phyton", tr: "Phyton" },
  { img: "Logos (1).png", en: "Diagram Graphing", tr: "Diyagram çizimi" },
  { img: "Logos (2).png", en: "Translator++", tr: "Translator++" },
  { img: "Logos (3).png", en: "JPEXS", tr: "JPEXS" },
  { img: "Logos (4).png", en: "Adobe Flash", tr: "Adobe Flash" },
  { img: "Logos (5).png", en: "RPGMaker VX Ace", tr: "RPGMaker VX Ace" },
  { img: "Logos (6).png", en: "DaVinci Resolve", tr: "DaVinci Resolve" },
  { img: "Logos (7).png", en: "Firealpaca / Pixel Art", tr: "Firealpaca / Pixel Çizerlik" },
  { img: "Logos (8).png", en: "Undertale ModTool", tr: "Undertale ModTool" },
  { img: "Logos (9).png", en: "Löve", tr: "Löve" }
];

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  skills.forEach(skill => {
    const item = document.createElement("div");
    item.className = "skill-item";
    item.innerHTML = `<img src="resources/${skill.img}" alt="${skill.en}"><div class="skill-overlay">${language === "en" ? skill.en : skill.tr}</div>`;
    grid.appendChild(item);
  });
}

/* MUSIC SYSTEM - POLISHED VERSION */
let player;
let playerReady = false;
const videoIds = ["GpOHXDO-mQk", "-Jd4EP9OUmc", "xz61v-lss5g", "RKQUblO-iCs", "xhcukDSkxYM", "1AKkLEoixkw"];

window.onYouTubeIframeAPIReady = function () {
  const randomId = videoIds[Math.floor(Math.random() * videoIds.length)];
  player = new YT.Player('youtube-player', {
    videoId: randomId,
    playerVars: {
      'autoplay': 1,
      'mute': 1,
      'controls': 0,
      'loop': 1,
      'playlist': randomId,
      'enablejsapi': 1
    },
    events: {
      'onReady': () => {
        playerReady = true;
        player.setVolume(30);
        // Start muted autoplay always
        player.playVideo();

        // Sync button if music was already ON
        if (localStorage.getItem('musicActive') === 'true') {
          unmutePlayer();
        } else {
          updateMusicButton();
        }
      },
      'onStateChange': (e) => {
        // Only trigger UI changes on playback status if the player isn't muted
        updateMusicButton();
      }
    }
  });
};

(function () {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const first = document.getElementsByTagName('script')[0];
  first.parentNode.insertBefore(tag, first);
})();

function updateMusicButton() {
  const btn = document.querySelector('.pill-toggle.blue');
  if (!player || typeof player.isMuted !== 'function') return;

  // The button should be active ONLY if it's playing AND not muted
  const isActive = (player.getPlayerState() === 1 && !player.isMuted());
  btn?.classList.toggle('active', isActive);
}

function unmutePlayer() {
  if (player && playerReady && typeof player.unMute === 'function') {
    player.unMute();
    player.playVideo();
    localStorage.setItem('musicActive', 'true');
    updateMusicButton();
  }
}

function mutePlayer() {
  if (player && typeof player.mute === 'function') {
    player.mute();
    localStorage.setItem('musicActive', 'false');
    updateMusicButton();
  }
}

function toggleMusic(el) {
  if (!playerReady) return;
  if (!player.isMuted() && player.getPlayerState() === 1) {
    mutePlayer();
  } else {
    unmutePlayer();
  }
}

// Global click to UNMUTE if preference allows
document.addEventListener('click', () => {
  // If user hasn't explicitly muted it in a previous session
  if (localStorage.getItem('musicActive') !== 'false') {
    unmutePlayer();
  }
}, { once: true });

window.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  showSection("about");
  renderSkills();
});
