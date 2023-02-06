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
 var rootContainer = document.getElementById('root');
 var  img = document.createElement('img');
 var div = document.createElement('div');
 div.classList.add('container');
 img.setAttribute('src', 'logo.png');
   
 rootContainer.appendChild(img);



 presidents.forEach((presidents) =>{
  var div2 = document.createElement('div');
  div2.classList.add('container');
  var div1 = document.createElement('div');
  div1.classList.add('card');

  var header = document.createElement('h1');
  header.textContent = presidents.name;
  header.style.textAlign = 'center';
  
  var p = document.createElement('p');
  p.textContent = presidents.details;
  p.style.textAlign = 'center';

  // var nameNode = document.createTextNode(presidents[i].details);
  // var detailsNode = document.createTextNode(presidents[i].details);
  div1.appendChild(header);
  div1.appendChild(p);

  div2.appendChild(div1);
rootContainer.appendChild(div2);

});