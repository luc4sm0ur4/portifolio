// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

let theme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', theme);
themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
});

// LANGUAGE TOGGLE
const langToggle = document.getElementById('lang-toggle');
let lang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = lang === 'pt' ? el.dataset.pt : el.dataset.en;
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  langToggle.textContent = lang === 'pt' ? '🇺🇸' : '🇧🇷';

  localStorage.setItem('lang', lang);
}

langToggle.addEventListener('click', () => {
  lang = lang === 'pt' ? 'en' : 'pt';
  applyLanguage(lang);
});

applyLanguage(lang);