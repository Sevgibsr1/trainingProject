const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
sidebar.classList.remove("close");
});

// --- Gece Modu Kodu Başlangıcı ---

// Sayfa yüklendiğinde localStorage'ı kontrol et
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
body.classList.add("dark");
modeText.innerText = "Light mode";
}

modeSwitch.addEventListener("click", () => {
body.classList.toggle("dark");

if (body.classList.contains("dark")) {
  modeText.innerText = "Light mode";
  localStorage.setItem("mode", "dark"); // Modu localStorage'a kaydet
} else {
  modeText.innerText = "Dark mode";
  localStorage.setItem("mode", "light"); // Modu localStorage'a kaydet
}
});

// --- Gece Modu Kodu Sonu ---