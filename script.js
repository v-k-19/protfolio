window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme if it exists
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  // Toggle dark/light mode and save preference
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    // Save to localStorage
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });
});
