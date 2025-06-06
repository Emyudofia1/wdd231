// const baseURL = 'https://unclejoefx.github.io/wdd230/chamber/';
// const linksURL = baseURL + 'data/members.json';

// document.addEventListener('DOMContentLoaded', () => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(linksURL);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             const directoryContainer = document.querySelector('.directory-container');
//             directoryContainer.innerHTML = '';

//             data.forEach(member => {
//                 const memberItem = document.createElement('div');
//                 memberItem.classList.add('directory-item');
//                 memberItem.innerHTML = `
//                     <img src="images/${member.image}" alt="${member.name}">
//                     <h3>${member.name}</h3>
//                     <p>${member.address}</p>
//                     <p>${member.phone}</p>
//                     <a href="${member.url}">${member.url}</a>
//                     <p>${member.membership_level}</p>
//                 `;
//                 directoryContainer.appendChild(memberItem);
//             });
//         } catch (error) {
//             console.error('Error fetching the member data:', error);
//         }
//     };

//     fetchData();

//     const gridButton = document.querySelector('#grid');
//     const listButton = document.querySelector('#list');
//     const directoryContainer = document.querySelector('.directory-container');

//     gridButton.addEventListener('click', () => {
//         directoryContainer.classList.add('grid');
//         directoryContainer.classList.remove('list');
//     });

//     listButton.addEventListener('click', () => {
//         directoryContainer.classList.add('list');
//         directoryContainer.classList.remove('grid');
//     });
// });


// const container = document.querySelector(".directory-container");
// const gridBtn = document.querySelector("#grid");
// const listBtn = document.querySelector("#list");

// async function getMembers() {
//   try {
//     const response = await fetch("../data/members.json");
//     if (!response.ok) throw new Error("Network response was not ok");
//     const members = await response.json();
//     displayMembers(members);
//   } catch (error) {
//     console.error("Fetch error:", error);
//     container.innerHTML = "<p>Error loading member data.</p>";
//   }
// }

// function displayMembers(members) {
//   container.innerHTML = "";
//   members.forEach((member) => {
//     const card = document.createElement("section");
//     card.classList.add("member-card");

//     card.innerHTML = `
//       <img src="${member.image}" alt="${member.name} logo" loading="lazy">
//       <h3>${member.name}</h3>
//       <p>${member.address}</p>
//       <p>${member.phone}</p>
//       <a href="${member.website}" target="_blank">Visit Website</a>
//       <p class="membership ${member.membership.toLowerCase()}">Membership: ${member.membership}</p>
//     `;

//     container.appendChild(card);
//   });
// }

// Toggle Views
// gridBtn.addEventListener("click", () => {
//   container.classList.add("grid");
//   container.classList.remove("list");
// });
// listBtn.addEventListener("click", () => {
//   container.classList.add("list");
//   container.classList.remove("grid");
// });

// Initialize
// getMembers();


const membersUrl = './data/members.json';
// const membersUrl = '/chamber/data/members.json';





const gridButton = document.querySelector('#gridBtn');
const listButton = document.querySelector('#listBtn');
const displayArea = document.querySelector('#members');

async function getMembers() {
  try {
    // const response = await fetch(membersUrl);
    const response = await fetch('./data/members.json');

    if (!response.ok) throw new Error('Network response was not OK');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayMembers(members) {
  displayArea.innerHTML = '';

  members.forEach(member => {
    // Create member card
    const card = document.createElement('section');
    card.classList.add('member-card');

    // Member logo image
    const img = document.createElement('img');
    img.src = `./images/${member.image}`;
    img.alt = `${member.name} logo`;
    img.loading = 'lazy';
    card.appendChild(img);

    // Member info container
    const info = document.createElement('div');
    info.classList.add('member-info');

    const name = document.createElement('h2');
    name.textContent = member.name;
    info.appendChild(name);

    const address = document.createElement('p');
    address.textContent = member.address;
    info.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = member.phone;
    info.appendChild(phone);

    const website = document.createElement('p');
    const link = document.createElement('a');
    link.href = member.website;
    link.textContent = member.website;
    link.target = '_blank';
    link.rel = 'noopener';
    website.appendChild(link);
    info.appendChild(website);

    card.appendChild(info);
    displayArea.appendChild(card);
  });
}

// Toggle display to grid view
function showGrid() {
  displayArea.classList.add('grid');
  displayArea.classList.remove('list');
  gridButton.disabled = true;
  listButton.disabled = false;
}

// Toggle display to list view
function showList() {
  displayArea.classList.add('list');
  displayArea.classList.remove('grid');
  gridButton.disabled = false;
  listButton.disabled = true;
}

gridButton.addEventListener('click', showGrid);
listButton.addEventListener('click', showList);

// Initialize page
getMembers();
showGrid(); // Default to grid view
