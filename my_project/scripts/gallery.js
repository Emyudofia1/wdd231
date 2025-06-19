// Main script file using async/await and importing the module
import { createFlowerCard } from './utils.js';

document.addEventListener("DOMContentLoaded", async () => {
  const gallery = document.querySelector(".gallery");

  try {
    const response = await fetch("flowers.json");
    if (!response.ok) throw new Error("Failed to fetch flower data.");
    const data = await response.json();

    data.flowers.forEach(flower => {
      const card = createFlowerCard(flower);
      gallery.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading flowers:", error);
    gallery.innerHTML = "<p class='error'>Failed to load flower gallery. Please try again later.</p>";
  }
});
