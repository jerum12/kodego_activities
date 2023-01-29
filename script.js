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


  
      document.getElementById("root").innerHTML = "<img src='./img/logo.png' alt='The Image' />";

      document.getElementById("root").classList = "container";

      const containerCard = document.createElement('div');
      containerCard.classList.add('container');
      document.getElementById('root').appendChild(containerCard);

        
        
          
      presidents.forEach((para) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h1');
      title.classList.add('card-title');
      title.textContent = para.name;

      const body = document.createElement('p');
      body.classList.add('card-text');
      body.textContent = para.details;

      containerCard.appendChild(card);
      card.appendChild(title);
      card.appendChild(body);
      });

