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
});


function toggleLanguage() {
  language = language === "en" ? "tr" : "en";
  updateLanguage();
}

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
