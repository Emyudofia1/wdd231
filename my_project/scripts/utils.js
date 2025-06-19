// utils.js

// Reusable function to create a flower card
export function createFlowerCard(flower) {
  const card = document.createElement("div");
  card.classList.add("flower-card");

  card.innerHTML = `
    <img src="images/${flower.image}" alt="${flower.name}">
    <div class="flower-info">
      <h3>${flower.name}</h3>
      <p>${flower.description}</p>
    </div>
  `;
  return card;
}

// Reusable async function to fetch flower data from JSON
export async function fetchFlowerData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data.flowers || [];
}
