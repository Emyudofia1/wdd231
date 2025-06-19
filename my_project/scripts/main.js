// site.js

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav ul');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Highlight current navigation item
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Tips section toggle for Care & Design page
  const tipHeaders = document.querySelectorAll('.tip h3');

  tipHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const tipContent = header.nextElementSibling;
      tipContent.classList.toggle('visible');
    });
  });
});

function toggleTip(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("flower-gallery");

  if (galleryContainer) {
    fetch("flowers.json")
      .then(response => {
        if (!response.ok) throw new Error("Failed to load flowers.json");
        return response.json();
      })
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
});


// Modal Logic
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("flowerModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.querySelector(".close-button");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
