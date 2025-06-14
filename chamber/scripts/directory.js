// const url = 'https://emyudofia1.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

// Display Current Date and Time
const updateDateTime = () => {
    const now = new Date();
    const dateTimeEl = document.getElementById('last-updated');
    if (dateTimeEl) {
      dateTimeEl.textContent = `Last updated: ${now.toLocaleString()}`;
    }
  };


async function getCompanies() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.companies);
        } else {
            throw Error(response.text());
        }
    } catch (error) {

    }
}

function displayMembers(members) {
    members.forEach(member => {
        const section = document.createElement('section');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const psite = document.createElement('p');
        const wsite = document.createElement('a');
        section.setAttribute('class', `${member.membershiplevel}, card`);
        title.textContent = member.name;
        img.setAttribute('src', member.image);
        img.setAttribute('alt', member.name);
        address.textContent = member.address;
        phone.textContent = member.phonenumber;
        wsite.setAttribute('href', member.website);
        wsite.textContent = member.website;
        psite.appendChild(wsite);
        section.appendChild(title);
        section.appendChild(img);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(psite);
        cards.appendChild(section);
    });
}

getCompanies();

// Toggle View (Grid/List)
const gridBtn = document.querySelector("#grid-view");
const listBtn = document.querySelector("#list-view");
const displayContainer = document.querySelector(".directory-container");

gridBtn.addEventListener("click", () => {
    displayContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    displayContainer.classList.add("list");
});

// Load directory data from JSON
const url = "https://emyudofia1.github.io/wdd231/chamber/data/members.json"; // Adjust if your path differs

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("directory-item");

            card.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            displayContainer.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading directory:", error));


