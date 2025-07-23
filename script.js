// Load saved theme
const isDark = localStorage.getItem('theme') === 'dark';
if (isDark) document.body.classList.add('dark');

const toggle = document.getElementById('theme-toggle');
toggle.checked = isDark;

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
