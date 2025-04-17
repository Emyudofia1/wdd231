document.addEventListener('DOMContentLoaded', () => {
    fetch('data/spotlight.json')
      .then(response => response.json())
      .then(data => {
        const container = document.querySelector('.spotlight-container');
  
        data.spotlights.forEach(member => {
          const card = document.createElement('div');
          card.classList.add('spotlight-card');
  
          card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h4>${member.name}</h4>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error loading spotlight members:', error);
      });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('data/spotlight.json')
      .then(response => response.json())
      .then(data => {
        const spotlightContainer = document.getElementById('spotlight');
        data.spotlights.forEach(member => {
          const card = document.createElement('div');
          card.classList.add('spotlight');
  
          card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h4>${member.name}</h4>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          `;
  
          spotlightContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error loading spotlight members:', error);
      });
  });
  