let display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    document.querySelector('.calculator').classList.toggle('dark');
  }
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });
  function calculateResult() {
    try {
      const result = eval(display.value);
      saveToHistory(display.value + ' = ' + result);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function saveToHistory(entry) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.prepend(listItem); // Newest on top
  }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function(reg) {
      console.log('Service Worker Registered!', reg);
    })
    .catch(function(err) {
      console.log('Service Worker Registration Failed!', err);
    });
  }
  