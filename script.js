const people = [
  {
    name: "Leonardo da Vinci",
    birthYear: 1452,
    deathYear: 1519,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/220px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg"
  },
  {
    name: "Galileo Galilei",
    birthYear: 1564,
    deathYear: 1642,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Galileo_Galilei_2.jpg/220px-Galileo_Galilei_2.jpg"
  },
  {
    name: "Isaac Newton",
    birthYear: 1643,
    deathYear: 1727,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sir_Isaac_Newton_%281643-1727%29.jpg/220px-Sir_Isaac_Newton_%281643-1727%29.jpg"
  },
  {
    name: "Albert Einstein",
    birthYear: 1879,
    deathYear: 1955,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg"
  },
  {
    name: "Marie Curie",
    birthYear: 1867,
    deathYear: 1934,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Marie_Curie_c1920.jpg/220px-Marie_Curie_c1920.jpg"
  }
];

const yearInput = document.getElementById("yearInput");
const checkBtn = document.getElementById("checkBtn");
const resultsDiv = document.getElementById("results");

checkBtn.addEventListener("click", () => {
  const year = parseInt(yearInput.value);
  if (isNaN(year)) {
    resultsDiv.innerHTML = "<p>Kérlek, írj be egy érvényes évszámot!</p>";
    return;
  }

  const alivePeople = people.filter(p => p.birthYear <= year && p.deathYear > year);

  if (alivePeople.length === 0) {
    resultsDiv.innerHTML = `<p>Ebben az évben nem éltek a listán szereplő személyek.</p>`;
    return;
  }

  let html = `<p>Ebben az évben életben lévő személyek (${year}):</p><ul>`;
  alivePeople.forEach(p => {
    const age = year - p.birthYear;
    html += `
      <li>
        <img src="${p.imageUrl}" alt="${p.name}" />
        <strong>${p.name}</strong> — ${age} éves
      </li>`;
  });
  html += "</ul>";

  resultsDiv.innerHTML = html;
});
