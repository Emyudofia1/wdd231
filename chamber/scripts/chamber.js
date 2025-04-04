const options = {
    year: "numeric"
};
const options1 = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const year = new Date().toLocaleDateString("en-US", options);
const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options1);
// Variables for hamburguer button
const hamButton = document.querySelector('#menu');
const navMenu = document.querySelector('.menuItems');

document.querySelector('#year').textContent = year;
document.querySelector('#lastModified').textContent = lastModified;

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});