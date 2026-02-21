let language = "en";
let musicPlaying = false;

const FLAG_EN = `<svg style="width:1.2em; height:1.2em; vertical-align:middle; border-radius:2px" viewBox="0 0 640 480"><rect width="640" height="480" fill="#3c3b6e"/><path stroke="#fff" stroke-width="37" d="M0 37h640M0 111h640M0 185h640M0 259h640M0 333h640M0 407h640"/><rect width="256" height="261" fill="#3c3b6e"/><path fill="#fff" d="M37 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM102 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM167 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM232 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM70 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM135 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM200 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22z"/></svg>`;
const FLAG_TR = `<svg style="width:1.2em; height:1.2em; vertical-align:middle; border-radius:2px" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#e30a17"/><circle cx="425" cy="400" r="200" fill="#fff"/><circle cx="475" cy="400" r="160" fill="#e30a17"/><path fill="#fff" d="M675 400l-123.6 40.2 47.2-130.4v180.4l-47.2-130.4z"/></svg>`;

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.remove("active")
  );
  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  document.querySelectorAll("nav button").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.target === id)
  );
}

function updateLanguage() {
  const occ = document.getElementById("occupation");
  if (occ) {
    occ.innerHTML = language === "en"
      ? `${FLAG_EN} Computer Engineer`
      : `${FLAG_TR} Bilgisayar Mühendisi`;
  }

  document.querySelectorAll(".lang-en").forEach(el => {
    el.hidden = language !== "en";
  });

  document.querySelectorAll(".lang-tr").forEach(el => {
    el.hidden = language !== "tr";
  });

  // Update switcher UI
  const switcher = document.querySelector(".flag-switch");
  if (switcher) {
    switcher.classList.toggle("is-tr", language === "tr");
    const enLabel = switcher.querySelector(".flag-label.en");
    const trLabel = switcher.querySelector(".flag-label.tr");
    if (enLabel) enLabel.innerHTML = `${FLAG_EN} EN`;
    if (trLabel) trLabel.innerHTML = `${FLAG_TR} TR`;
  }
}

function setLanguage(lang) {
  if (language === lang) return;
  language = lang;
  updateLanguage();
  renderSkills();
}

function toggleLanguage() {
  language = (language === "en") ? "tr" : "en";
  updateLanguage();
  renderSkills();
}

/* Dark mode */
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");
  const icon = el.parentElement.querySelector(".toggle-icon");
  if (icon) {
    icon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
  }
}

/* Skills */
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
    item.innerHTML = `
      <img src="resources/${skill.img}" alt="${skill.en}">
      <div class="skill-overlay">
        ${language === "en" ? skill.en : skill.tr}
      </div>
    `;
    grid.appendChild(item);
  });

  const note = document.getElementById("skills-note");
  if (note) {
    note.innerText = language === "en"
      ? "All logos are the property of their respective owners."
      : "Tüm logolar ilgili hak sahiplerine aittir.";
  }
}

/* Music (YouTube API) */
const videoIds = ["GpOHXDO-mQk", "-Jd4EP9OUmc", "xz61v-lss5g", "RKQUblO-iCs", "xhcukDSkxYM", "1AKkLEoixkw"];
let player;
let isYTReady = false;
let musicAttempted = false;

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
      'onReady': (event) => {
        isYTReady = true;
        event.target.setVolume(25);
        event.target.playVideo();
      },
      'onStateChange': (event) => {
        const musicBtn = document.querySelector('.pill-toggle.blue');
        if (event.data === 1) { // Playing
          musicPlaying = true;
          musicBtn?.classList.add('active');
        } else {
          musicPlaying = false;
          musicBtn?.classList.remove('active');
        }
      }
    }
  });
};

function toggleMusic(el) {
  if (!player || typeof player.getPlayerState !== 'function') return;
  if (player.isMuted()) player.unMute();
  if (player.getPlayerState() === 1) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

document.addEventListener('click', () => {
  if (player && typeof player.playVideo === 'function' && !musicAttempted) {
    player.unMute();
    player.playVideo();
    musicAttempted = true;
  }
}, { once: true });

window.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  showSection("about");
  renderSkills();
});
