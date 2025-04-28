const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.numbers button');
const operatorButtons = document.querySelectorAll('.operators button');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('back');
const equalsButton = document.getElementById('equals');

display.value = '';

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

operatorButtons.forEach(button => {
  if (button.id !== 'equals') {
    button.addEventListener('click', () => {
      display.value += button.textContent;
    });
  }
});

equalsButton.addEventListener('click', () => {
  try {
    if (display.value.match(/^[-+]?[0-9]+([*/+-][-+]?[0-9]+)*$/)) {
      display.value = eval(display.value);
    } else {
      alert('Invalid Expression');
    }
  } catch {
    alert('Error in calculation');
  }
});

clearButton.addEventListener('click', () => {
  display.value = '';
});

backButton.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});
