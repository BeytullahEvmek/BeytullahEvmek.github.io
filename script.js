let language = "en";
let musicPlaying = false;

// Show a section
function showSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* 🌍 Language toggle */
function toggleLanguage() {
  language = language === "en" ? "tr" : "en";

  // Header occupation
  document.getElementById("occupation").innerText =
    language === "en"
      ? "Computer Engineer (EN)"
      : "Bilgisayar Mühendisi (TR)";

  // Toggle all text content
  document.querySelectorAll(".lang-en").forEach(el => {
    el.style.display = language === "en" ? "" : "none";
  });
  document.querySelectorAll(".lang-tr").forEach(el => {
    el.style.display = language === "tr" ? "" : "none";
  });
}

// Apply initial language on page load
toggleLanguage();

/* 🌙 Dark mode */
function toggleDarkMode(el) {
  document.body.classList.toggle("dark");
  el.classList.toggle("active");

  const icon = el.parentElement.querySelector(".toggle-icon");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
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
