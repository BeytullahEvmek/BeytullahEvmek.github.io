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
  { img: "Logos (1).png", en: "HTML", tr: "HTML" },
  { img: "Logos (2).png", en: "CSS", tr: "CSS" },
  { img: "Logos (3).png", en: "JavaScript", tr: "JavaScript" },
  { img: "Logos (4).png", en: "Python", tr: "Python" },
  { img: "Logos (5).png", en: "C", tr: "C" },
  { img: "Logos (6).png", en: "C++", tr: "C++" },
  { img: "Logos (7).png", en: "C#", tr: "C#" },
  { img: "Logos (8).png", en: "Java", tr: "Java" },
  { img: "Logos (9).png", en: "Git", tr: "Git" },
  { img: "Logos (10).png", en: "GitHub", tr: "GitHub" },
  { img: "Logos (11).png", en: "Linux", tr: "Linux" },
  { img: "Logos (12).png", en: "Windows", tr: "Windows" },
  { img: "Logos (13).png", en: "VS Code", tr: "VS Code" },
  { img: "Logos (14).png", en: "Docker", tr: "Docker" },
  { img: "Logos (15).png", en: "MySQL", tr: "MySQL" },
  { img: "Logos (16).png", en: "PostgreSQL", tr: "PostgreSQL" },
  { img: "Logos (17).png", en: "MongoDB", tr: "MongoDB" },
  { img: "Logos (18).png", en: "Node.js", tr: "Node.js" },
  { img: "Logos (19).png", en: "Express.js", tr: "Express.js" },
  { img: "Logos (20).png", en: "React", tr: "React" },
  { img: "Logos (21).png", en: "Bootstrap", tr: "Bootstrap" },
  { img: "Logos (22).png", en: "Tailwind CSS", tr: "Tailwind CSS" },
  { img: "Logos (23).png", en: "Figma", tr: "Figma" },
  { img: "Logos (24).png", en: "Photoshop", tr: "Photoshop" }
];

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";

  skills.forEach(skill => {
    const item = document.createElement("div");
    item.className = "skill-item";

    item.innerHTML = `
      <img src="images/${skill.img}" alt="${skill.en}">
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
