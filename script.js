let language = "en";
let musicPlaying = false;

const FLAG_EN = `<svg style="width:1.2em; height:1.2em; vertical-align:middle; border-radius:2px" viewBox="0 0 640 480"><rect width="640" height="480" fill="#3c3b6e"/><path stroke="#fff" stroke-width="37" d="M0 37h640M0 111h640M0 185h640M0 259h640M0 333h640M0 407h640"/><rect width="256" height="261" fill="#3c3b6e"/><path fill="#fff" d="M37 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM102 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM167 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM232 28l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM70 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM135 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22zM200 60l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22z"/></svg>`;
const FLAG_TR = `<svg style="width:1.2em; height:1.2em; vertical-align:middle; border-radius:2px" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#e30a17"/><circle cx="425" cy="400" r="200" fill="#fff"/><circle cx="475" cy="400" r="160" fill="#e30a17"/><path fill="#fff" d="M675 400l-123.6 40.2 47.2-130.4v180.4l-47.2-130.4z"/></svg>`;

// Bölümü göster/gizle
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
  document.querySelectorAll("nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.target === id));
}

// Dil bilgilerini güncelle
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

// Dili değiştir (TR/EN)
function toggleLanguage() {
  language = (language === "en") ? "tr" : "en";
  updateLanguage();
  renderSkills();
}

// Koyu modu aç/kapat
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");
  const icon = el.parentElement.querySelector(".toggle-icon");
  if (icon) icon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
}

// Yetenek verileri
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

// Yetenekleri ekrana çiz
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

/* MÜZİK SİSTEMİ - KARIŞIK OYNATMA GÜNCELLEMESİ */
let player;
let playerReady = false;
const videoIds = ["GpOHXDO-mQk", "-Jd4EP9OUmc", "xz61v-lss5g", "RKQUblO-iCs", "xhcukDSkxYM", "1AKkLEoixkw"];

// YouTube API hazır olduğunda çalışır
window.onYouTubeIframeAPIReady = function () {
  const randomId = videoIds[Math.floor(Math.random() * videoIds.length)];
  player = new YT.Player('youtube-player', {
    videoId: randomId,
    playerVars: {
      'autoplay': 1,
      'mute': 1,
      'controls': 0,
      'enablejsapi': 1
    },
    events: {
      'onReady': () => {
        playerReady = true;
        player.setVolume(30);
        player.playVideo();
        syncMusicState();
      },
      'onStateChange': (e) => {
        // Müzik bittiğinde (0), yeni bir rastgele şarkıya geç
        if (e.data === 0) {
          playNextRandom();
        }
        syncMusicState();
      }
    }
  });
};

// Sıradaki rastgele şarkıyı oynat
function playNextRandom() {
  const nextId = videoIds[Math.floor(Math.random() * videoIds.length)];
  if (player && typeof player.loadVideoById === 'function') {
    player.loadVideoById(nextId);
    // Ses seviyesini koru
    player.setVolume(30);
  }
}

// API scriptini yükle
(function () {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const first = document.getElementsByTagName('script')[0];
  first.parentNode.insertBefore(tag, first);
})();

// Müzik durumunu senkronize et (Açık/Kapalı)
function syncMusicState() {
  const btn = document.querySelector('.pill-toggle.blue');
  const intendedOn = localStorage.getItem('musicActive') !== 'false';

  // Düğme UI'sini duruma göre güncelle
  btn?.classList.toggle('active', intendedOn);

  if (!playerReady) return;

  if (intendedOn) {
    // Kullanıcı istiyorsa sesi aç ve oynat
    player.unMute();
    player.playVideo();
  } else {
    // Kullanıcı istemiyorsa sesi kapat ve duraklat
    player.mute();
    player.pauseVideo();
  }
}

// Müzik açma/kapama fonksiyonu
function toggleMusic(el) {
  const currentlyOn = localStorage.getItem('musicActive') !== 'false';
  const newOn = !currentlyOn;

  localStorage.setItem('musicActive', newOn ? 'true' : 'false');
  syncMusicState();
}

// İlk tıklamada müziği (eğer açıksa) etkinleştir (Tarayıcı kısıtlamaları için)
document.addEventListener('click', () => {
  syncMusicState();
}, { once: true });

// Sayfa yüklendiğinde başlat
window.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  showSection("about");
  renderSkills();
  // UI'yi hemen başlat
  syncMusicState();
});
