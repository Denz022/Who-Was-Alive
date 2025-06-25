const people = [
  {
    name: "Dénes",
    birth: 2002,
    death: 2026,
    image: "kepek/en.jpg"
  },
  {
    name: "Franck Ribéry",
    birth: 1983,
    death: 2026,
    image: "kepek/ribery.jpg"
  },
  {
    name: "Cristiano Ronaldo",
    birth: 1985,
    death: 2026,
    image: "kepek/cr7.jpg"
  },
  {
    name: "Lionel Messi",
    birth: 1987,
    death: 2026,
    image: "kepek/messi.jpg"
  },
  {
    name: "Puskás Ferenc",
    birth: 1927,
    death: 2006,
    image: "kepek/puskas.jpg"
  },
  {
    name: "Diego Maradona",
    birth: 1960,
    death: 2020,
    image: "kepek/maradona.jpg"
  },
  {
    name: "Pelé",
    birth: 1940,
    death: 2022,
    image: "kepek/pele.jpg"
  },
  {
    name: "Gerd Müller",
    birth: 1945,
    death: 2021,
    image: "kepek/gerd.jpg"
  },
  {
    name: "Michael Jackson",
    birth: 1958,
    death: 2009,
    image: "kepek/mj.jpg"
  },
  {
    name: "Elvis Presley",
    birth: 1935,
    death: 1977,
    image: "kepek/elvis.jpg"
  },
  {
    name: "Marilyn Monroe",
    birth: 1926,
    death: 1962,
    image: "kepek/monroe.jpg"
  },
  {
    name: "Frank Sinatra",
    birth: 1915,
    death: 1998,
    image: "kepek/sinatra.jpg"
  },
  {
    name: "Anna Kovács",
    birth: 2025,
    death: 3000,
    image: "kepek/anna_kovacs.jpg"
  }
];

const resultsDiv = document.getElementById('results');
const yearInput = document.getElementById('yearInput');

yearInput.addEventListener('input', () => {
  const yearStr = yearInput.value.trim();
  const year = parseInt(yearStr, 10);
  resultsDiv.innerHTML = '';

  if (!yearStr || isNaN(year)) {
    return;
  }

  const alivePeople = people.filter(person => {
    return person.birth <= year && person.death >= year;
  });

  if (alivePeople.length === 0) {
    return;
  }

  [...alivePeople]
    .sort((a, b) => a.birth - b.birth)
    .forEach(person => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = person.image;
      img.alt = person.name;

      const nameEl = document.createElement('div');
      nameEl.textContent = person.name;

      let ageText = '';
      const currentYear = new Date().getFullYear();

      if (year >= person.death && person.death > currentYear) {
        ageText = 'Életben van';
      } else if (year === person.birth) {
        ageText = 'Megszületett';
      } else {
        ageText = `${year - person.birth} éves`;
      }

      if (year === person.death && person.death <= currentYear) {
        ageText += ' (Elhunyt)';
      }

      const ageEl = document.createElement('div');
      ageEl.textContent = ageText;

      card.appendChild(img);
      card.appendChild(nameEl);
      card.appendChild(ageEl);

      resultsDiv.appendChild(card);
    });
});



