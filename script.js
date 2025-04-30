const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const calculator = document.querySelector(".calculator");

let currentInput = "";

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    if (result !== undefined) {
      addToHistory(currentInput + " = " + result);
      currentInput = result.toString();
      display.value = currentInput;
    }
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleTheme() {
  calculator.classList.toggle("dark");
  const isDark = calculator.classList.contains("dark");
  document.body.classList.toggle("dark", isDark);
  document.querySelector(".theme-btn").textContent = isDark ? "🌞" : "🌙";
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
