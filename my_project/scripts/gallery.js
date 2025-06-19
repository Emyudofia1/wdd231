// gallery.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("flowers.json")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json();
    })
    .then((data) => displayFlowers(data.flowers))
    .catch((error) => console.error("Error fetching flowers:", error));
});

function displayFlowers(flowers) {
//   const gallery = document.querySelector(".gallery-grid");
    const gallery = document.querySelector("#gallery");


  flowers.forEach((flower) => {
    const card = document.createElement("div");
    card.classList.add("flower-card");

    card.innerHTML = `
      <img src="images/${flower.image}" alt="${flower.name}">
      <div class="flower-info">
        <h3>${flower.name}</h3>
        <p>${flower.description}</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}
