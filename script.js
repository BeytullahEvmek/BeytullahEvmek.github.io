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
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* 🎵 Music toggle */
function toggleMusic() {
  const music = document.getElementById("bg-music");

  if (!musicPlaying) {
    music.play();
  } else {
    music.pause();
  }

  musicPlaying = !musicPlaying;
}

