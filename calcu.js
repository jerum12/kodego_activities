const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;
    if (value === 'Clear') {
      display.value = '';
    } else if (value === '=') {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});