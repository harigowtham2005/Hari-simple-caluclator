const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const result = eval(display.value);
    saveToHistory(`${display.value} = ${result}`);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  document.querySelector(".calculator").classList.toggle("dark");
}

function saveToHistory(entry) {
  const historyList = document.getElementById("historyList");
  const item = document.createElement("li");
  item.textContent = entry;
  historyList.prepend(item);
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker registered.', reg))
    .catch(err => console.error('Service Worker registration failed.', err));
}
