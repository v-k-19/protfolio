// Dark/Light toggle with localStorage
const toggle = document.getElementById("theme-toggle");

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

toggle.addEventListener("change", () => {
  setTheme(toggle.checked);
});

// Set initial theme on load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark";
  toggle.checked = isDark;
  setTheme(isDark);
});
