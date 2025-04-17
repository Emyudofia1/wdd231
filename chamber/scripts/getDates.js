document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const bodyElement = document.body;

    darkModeToggle.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
    });
});

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const now = new Date();
document.getElementById("dateNow").textContent = now.toLocaleString();