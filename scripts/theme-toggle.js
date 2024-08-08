const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(theme) {
  html.classList.add('theme-transitioning');
  
  if (theme === 'dark') {
    html.classList.add('dark-theme');
  } else {
    html.classList.remove('dark-theme');
  }
  
  localStorage.setItem('theme', theme);
  

  setTimeout(() => {
    html.classList.remove('theme-transitioning');
  }, 300);
}

function toggleTheme() {
  if (html.classList.contains('dark-theme')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

themeToggle.addEventListener('click', toggleTheme);