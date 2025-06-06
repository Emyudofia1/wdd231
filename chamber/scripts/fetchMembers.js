const displayArea = document.querySelector('#membersContainer');
const url = './data/members.json';

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Failed to fetch members.");
    return response.json();
  })
  .then(data => {
    data.members.forEach(member => {
      const card = document.createElement('section');
      card.classList.add('member-card');

      const name = document.createElement('h3');
      name.textContent = member.name;

      const logo = document.createElement('img');
      logo.src = member.image;
      logo.alt = `${member.name} logo`;
      logo.loading = 'lazy';

      const address = document.createElement('p');
      address.textContent = `📍 ${member.address}`;

      const phone = document.createElement('p');
      phone.textContent = `📞 ${member.phone}`;

      const link = document.createElement('a');
      link.href = member.url;
      link.textContent = member.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      card.append(name, logo, address, phone, link);
      displayArea.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading members:', error);
  });

// document.querySelector('#gridBtn').addEventListener('click', () => {
//   displayArea.classList.add('grid-view');
//   displayArea.classList.remove('list-view');
// });

// document.querySelector('#listBtn').addEventListener('click', () => {
//   displayArea.classList.add('list-view');
//   displayArea.classList.remove('grid-view');
// });

document.querySelector('#grid').addEventListener('click', () => {
  const directory = document.querySelector('#directory');
  directory.classList.add('grid');
  directory.classList.remove('list');
});

document.querySelector('#list').addEventListener('click', () => {
  const directory = document.querySelector('#directory');
  directory.classList.add('list');
  directory.classList.remove('grid');
});


