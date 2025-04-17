// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
  
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.body.classList.add('dark-mode');
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });
  