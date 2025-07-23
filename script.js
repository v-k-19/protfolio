const toggle = document.getElementById("theme-toggle");

// Apply theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}

// Toggle logic
toggle.checked = localStorage.getItem("theme") === "dark";

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
});
