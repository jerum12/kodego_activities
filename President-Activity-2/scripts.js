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

const root = document.getElementById('root');

const presSeal = document.createElement('img');
presSeal.setAttribute('src', 'logo.png');
root.appendChild(presSeal);			/* Logo Image */

const wrapper = document.createElement('div');
wrapper.classList.add('container')
root.appendChild(wrapper);

presidents.forEach(pres => {
	for(let key in pres) {
		console.log(`${key}: ${pres[key]}`)
	}

const card = document.createElement('div');
card.classList.add('card');
root.appendChild(card);

const cardTitle = document.createElement('h1');
cardTitle.classList.add('card-title');
cardTitle.textContent = (pres.name);
root.appendChild(cardTitle);

const cardBody = document.createElement('p');
cardBody.classList.add('card-body');
cardBody.style.textAlign = 'center';
cardBody.textContent = (pres.details);
root.appendChild(cardBody);

wrapper.appendChild(card);
card.appendChild(cardTitle);
card.appendChild(cardBody);

})

