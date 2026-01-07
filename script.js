let language = "en";
let musicPlaying = false;

function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* 🌍 Language toggle */
function toggleLanguage() {
  language = language === "en" ? "tr" : "en";

  document.getElementById("occupation").innerText =
    language === "en"
      ? "Computer Engineer (EN)"
      : "Bilgisayar Mühendisi (TR)";

  // Later: switch all section texts here
}

/* 🌙 Dark mode */
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");
}

/* 🎵 Music toggle */

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
/* button style*/
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");

  const icon = el.parentElement.querySelector(".toggle-icon");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}
