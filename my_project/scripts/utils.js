// Module file to export the reusable function
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
