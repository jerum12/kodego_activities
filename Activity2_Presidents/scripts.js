var presidents = [
  {
    name: "Bobong Marcos",
    details: "2022-Present",
  },
  {
    name: "Rodrigo Duterte",
    details: "2016-2012",
  },
  {
    name: "Benigno Aquino III",
    details: "2010-2016",
  },
  {
    name: "Gloria Macapagal Arroyo",
    details: "2001-2010",
  },
  {
    name: "Joseph Ejercito Estrada",
    details: "1998-2001",
  },
  {
    name: "Fidel V. Ramos",
    details: "1992-1998",
  },
  {
    name: "Corazon Aquino",
    details: "1986-1992",
  },
  {
    name: "Ferdinand Marcos",
    details: "1965-1986",
  },
  {
    name: "Diosdado Macapagal",
    details: "1961-1965",
  },
];

const container = document.querySelector("#root");
const logo = document.createElement("img");
logo.src = "logo.png";
logo.alt = "the image logo";
container.appendChild(logo);

const row = document.createElement("div");
row.style.display = "flex";
row.style.flexWrap = "wrap";

presidents.forEach((president) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const name = document.createElement("h1");
  name.textContent = president.name;
  name.style.textAlign = "center";

  const details = document.createElement("p");
  details.textContent = president.details;
  details.style.textAlign = "center";

  card.appendChild(name);
  card.appendChild(details);

  row.appendChild(card);
});

container.appendChild(row);
