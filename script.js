// Wait for DOM content to be fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme if it exists
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  // Add smooth animation on theme toggle
  document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";

  // Toggle dark/light mode on switch
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    // Save current theme to localStorage
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });
});
