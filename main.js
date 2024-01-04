document.addEventListener("DOMContentLoaded", function () {
  let num1 = 0;
  let num2 = 0;
  let operator = null;
  let result = 0;
  let clear = document.getElementById("ac");

  clear.addEventListener("click", function () {
    // Clear variables
    num1 = 0;
    num2 = 0;
    operator = null;
    result = 0;

    // Update display after clearing variables
    updateDisplay();
    document.getElementById("result").textContent = result;
  });

  // Function to update the displayed values on the calculator
  function updateDisplay() {
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("operator").textContent = operator || "";
  }

  // Function to perform the calculation
  function calculateResult() {
    operator = operator ? operator.trim() : operator;
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;
      default:
        return 0;
    }
  }

  // Event listeners for number buttons (1-9, 0)
  for (let i = 0; i <= 9; i++) {
    const button = document.getElementById(i.toString());

    if (button) {
      button.addEventListener("click", function () {
        if (operator !== null) {
          num2 = num2 * 10 + i;
        } else {
          num1 = num1 * 10 + i;
        }

        updateDisplay();
      });
    }
  }

  // Event listeners for operator buttons
  const operatorButtons = ["add-op", "sub-op", "mul-op", "div-op", "mod-op"];
  for (const operatorId of operatorButtons) {
    const opButton = document.getElementById(operatorId);
    opButton.addEventListener("click", function () {
      operator = opButton.textContent;
      updateDisplay();
    });
  }

  // Event listener for the equals button
  const equalsButton = document.getElementById("equals");
  equalsButton.addEventListener("click", function () {
    result = calculateResult();
    document.getElementById("result").textContent = result;

    // Clear variables after displaying the result
    num1 = result;
    num2 = 0;
    operator = null;
    updateDisplay();
  });
});
