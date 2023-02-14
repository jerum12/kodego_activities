var presidents = [
  {
    name: 'Bobong Marcos',
    details: '2022-Present',
  },
  {
    name: 'Rodrigo Duterte',
    details: '2016-2012',
  },
  {
    name: 'Benigno Aquino III',
    details: '2010-2016',
  },
  {
    name: 'Gloria Macapagal Arroyo',
    details: '2001-2010',
  },
  {
    name: 'Joseph Ejercito Estrada',
    details: '1998-2001',
  },
  {
    name: 'Fidel V. Ramos',
    details: '1992-1998',
  },
  {
    name: 'Corazon Aquino',
    details: '1986-1992',
  },
  {
    name: 'Ferdinand Marcos',
    details: '1965-1986',
  },
  {
    name: 'Diosdado Macapagal',
    details: '1961-1965',
  },
];

var pres = document.getElementById('root');
var ab = document.createElement('img');
var pic = document.createElement('div');
pres.appendChild(ab);
pres.appendChild(pic);
ab.setAttribute('src', 'logo.png');
pic.classList.add('container');

presidents.forEach((presidents) =>{
  const card = document.createElement("div");
  card.classList.add('card');

  const title  = document.createElement('h1');
  title.textContent = presidents.name;

  const ele  = document.createElement('p');
  ele.textContent = presidents.details;
  ele.style.textAlign = 'center';

  card.appendChild(title);
  card.appendChild(ele);
  pic.appendChild(card);
})