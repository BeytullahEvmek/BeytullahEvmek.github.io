let language = "en";
let musicPlaying = false;

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.remove("active")
  );
  document.getElementById(id)?.classList.add("active");

  document.querySelectorAll("nav button").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.target === id)
  );
}


function updateLanguage() {
  document.getElementById("occupation").textContent =
    language === "en"
      ? "Computer Engineer (EN)"
      : "Bilgisayar Mühendisi (TR)";

  document.querySelectorAll(".lang-en").forEach(el => {
    el.hidden = language !== "en";
  });

  document.querySelectorAll(".lang-tr").forEach(el => {
    el.hidden = language !== "tr";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  showSection("about");
  renderSkills(); 
});


function toggleLanguage() {
  language = language === "en" ? "tr" : "en";
  updateLanguage();
   renderSkills();
}

/* Dark mode */
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");

  const icon = el.parentElement.querySelector(".toggle-icon");
  icon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
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

  document.getElementById("skills-note").innerText =
    language === "en"
      ? "All logos are the property of their respective owners."
      : "Tüm logolar ilgili hak sahiplerine aittir.";
}


/* Music */
const music = document.getElementById("bg-music");

function toggleMusic(el) {
  if (music.paused) {
    music.volume = 0.2;
    music.play();
    el.classList.add("active");
  } else {
    music.pause();
    el.classList.remove("active");
  }
}
