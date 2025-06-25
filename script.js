const people = [
  {
    name: "Dénes",
    birth: 2002,
    death: 2026,
    image: "kepek/en.jpg"
  },
  {
    name: "Jane Smith",
    birth: 1920,
    death: 1980,
    image: "kepek/jane_smith.jpg"
  },
  {
    name: "Anna Kovács",
    birth: 1990,
    death: 3000, // Jelzés arra, hogy még él vagy ismeretlen halálozás
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

  alivePeople.forEach(person => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = person.image;
    img.alt = person.name;

    const nameEl = document.createElement('div');
    nameEl.textContent = person.name;

    let ageText = '';
    const currentYear = new Date().getFullYear();

    // Ha az adott év nagyobb vagy egyenlő a halálozási évnél és az halálozási év a jelenleginél nagyobb (jövőbeli vagy ismeretlen)
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

