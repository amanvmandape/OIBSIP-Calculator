function addToScreen(event) {
    document.getElementById('screen').value += event.target.innerText;
  }

  function clearScreen() {
    document.getElementById('screen').value = '';
  }

  function calculateResult() {
    try {
      const result = eval(document.getElementById('screen').value);
      document.getElementById('screen').value = result;
    } catch (error) {
      document.getElementById('screen').value = 'Incorrect Operation';
    }
  }
