// document.addEventListener('DOMContentLoaded', () => {
//     fetch('data/spotlight.json')
//       .then(response => response.json())
//       .then(data => {
//         const container = document.querySelector('.spotlight-container');
  
//         data.spotlights.forEach(member => {
//           const card = document.createElement('div');
//           card.classList.add('spotlight-card');
  
//           card.innerHTML = `
//             <img src="${member.image}" alt="${member.name} logo">
//             <h4>${member.name}</h4>
//             <p>${member.description}</p>
//             <a href="${member.website}" target="_blank">Visit Website</a>
//           `;
  
//           container.appendChild(card);
//         });
//       })
//       .catch(error => {
//         console.error('Error loading spotlight members:', error);
//       });
//   });


//   document.addEventListener('DOMContentLoaded', () => {
//     fetch('data/spotlight.json')
//       .then(response => response.json())
//       .then(data => {
//         const container = document.querySelector('.spotlight-container');
  
//         data.spotlights.forEach(member => {
//           const card = document.createElement('div');
//           card.classList.add('spotlight-card');
  
//           card.innerHTML = `
//             <img src="${member.image}" alt="${member.name} logo">
//             <h4>${member.name}</h4>
//             <p>${member.description}</p>
//             <a href="${member.website}" target="_blank">Visit Website</a>
//           `;
  
//           container.appendChild(card);
//         });
//       })
//       .catch(error => {
//         console.error('Error loading spotlight members:', error);
//       });
//   });





  
//   document.addEventListener('DOMContentLoaded', () => {
//     fetch('data/spotlight.json')
//       .then(response => response.json())
//       .then(data => {
//         const spotlightContainer = document.getElementById('spotlight');
//         data.spotlights.forEach(member => {
//           const card = document.createElement('div');
//           card.classList.add('spotlight');
  
//           card.innerHTML = `
//             <img src="${member.image}" alt="${member.name} logo">
//             <h4>${member.name}</h4>
//             <p>${member.description}</p>
//             <a href="${member.website}" target="_blank">Visit Website</a>
//           `;
  
//           spotlightContainer.appendChild(card);
//         });
//       })
//       .catch(error => {
//         console.error('Error loading spotlight members:', error);
//       });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
  const spotlightContainer = document.getElementById('spotlight');

  async function fetchMembers() {
      const baseURL = 'https://unclejoefx.github.io/wdd230/chamber/';
      const linksURL = baseURL + 'data/members.json';

      try {
          const response = await fetch(linksURL);
          const members = await response.json();
          // console.log('members:', members);
          displaySpotlightMembers(members);
      } catch (error) {
          console.error('Error fetching member data:', error);
          spotlightContainer.innerHTML = '<p>Member data unavailable</p>';
      }
  }

  function displaySpotlightMembers(members) {
      const spotlightMembers = filterSpotlightMembers(members);
      const selectedMembers = selectRandomMembers(spotlightMembers, 3); // Selects 3 random members for display

      spotlightContainer.innerHTML = ''; // Clear existing content
      selectedMembers.forEach(member => {
          const memberElement = createMemberElement(member);
          spotlightContainer.appendChild(memberElement);
      });
  }

  function filterSpotlightMembers(members) {
      return members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
  }

  function selectRandomMembers(members, count) {
      const shuffled = members.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
  }

  function createMemberElement(member) {
      const element = document.createElement('div');
      element.className = 'spotlight-member';
      element.innerHTML = `
          <h4>${member.name}</h4>
          <p>${member.address}</p>
          <a href="${member.url === 'NA' ? '#' : member.url}" target="_blank">Visit Website</a>
      `;
      return element;
  }

  fetchMembers();
});