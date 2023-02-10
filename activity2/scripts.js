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


  var cont =  document.getElementById("root");
  var image = document.createElement("img");
  var pos = document.createElement("div");
  cont.appendChild(image);
  cont.appendChild(pos);
  image.setAttribute("src", "logo.png")
  pos.classList.add("container")


  presidents.forEach((presidents) => {

    var element = document.createElement("div");
    element.classList.add("card");

    var Pname = document.createElement("h1");
    Pname.textContent = presidents.name;

    var Pdetails = document.createElement("p");
    Pdetails.textContent = presidents.details;
    Pdetails.style.textAlign = "center";

    element.appendChild(Pname);
    element.appendChild(Pdetails);
    pos.appendChild(element);
  });

