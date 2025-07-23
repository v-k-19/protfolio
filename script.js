// script.js

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("theme-toggle");

  // Set theme based on localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true;
  } else {
    document.body.classList.remove("dark");
    checkbox.checked = false;
  }

  // Listen for toggle switch change
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
});
