let language = "en";
let musicPlaying = false;

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

function updateLanguage() {
  document.getElementById("occupation").innerText =
    language === "en"
      ? "Computer Engineer (EN)"
      : "Bilgisayar Mühendisi (TR)";

  document.querySelectorAll(".lang-en").forEach(el => {
    el.style.display = language === "en" ? "" : "none";
  });

  document.querySelectorAll(".lang-tr").forEach(el => {
    el.style.display = language === "tr" ? "" : "none";
  });
}

function toggleLanguage() {
  language = language === "en" ? "tr" : "en";
  updateLanguage();
}

window.addEventListener("DOMContentLoaded", () => {
  updateLanguage();
  showSection("about");
});

/* Dark mode */
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");

  const icon = el.parentElement.querySelector(".toggle-icon");
  icon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
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
