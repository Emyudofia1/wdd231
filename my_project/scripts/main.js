// main.js (ES Module Refactor)

import { fetchFlowerData } from "./utils.js";

// DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  handleMobileMenu();
  highlightCurrentNav();
  toggleCareTips();
  loadGalleryIfPresent();
  initModalDialog();
});

function handleMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

function highlightCurrentNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

function toggleCareTips() {
  const tipHeaders = document.querySelectorAll(".tip h3");
  tipHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const tipContent = header.nextElementSibling;
      tipContent.classList.toggle("visible");
    });
  });
}

function loadGalleryIfPresent() {
  const galleryContainer = document.getElementById("flower-gallery");
  if (!galleryContainer) return;

  fetchFlowerData("flowers.json")
    .then(flowers => {
      flowers.forEach(flower => {
        const card = document.createElement("div");
        card.className = "flower-card";
        card.innerHTML = `
          <img src="${flower.image}" alt="${flower.name}" />
          <h3>${flower.name}</h3>
          <p>${flower.description}</p>
        `;
        galleryContainer.appendChild(card);
      });
    })
    .catch(error => {
      galleryContainer.innerHTML = `<p>Error loading flowers: ${error.message}</p>`;
    });
}

function initModalDialog() {
  const modal = document.getElementById("flowerModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.querySelector(".close-button");

  if (!modal || !openBtn || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
