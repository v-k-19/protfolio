// Load dark mode from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector(".theme-switch__checkbox");
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
});
