class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    (this.currentOperandTextElement = currentOperandTextElement),
      (this.previousOperandTextElement = previousOperandTextElement);
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.perviousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.currentOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.perviousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.perviousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    if (this.operation === "+") {
      computation = prev + current;
    } else if (this.operation === "-") {
      computation = prev - current;
    } else if (this.operation === "÷") {
      computation = prev / current;
    } else if (this.operation === "*") {
      computation = prev * current;
    } else {
      return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.perviousOperand = "";
  }

  getDisplay(number) {
    const stringNumber = number.toString();
    const integerDigit = parseFloat(stringNumber.split(".")[0]);
    const decimalDigit = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigit)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigit.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigit != null) {
      return `${integerDisplay}.${decimalDigit}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerHTML = this.getDisplay(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerHTML = `${this.getDisplay(
        this.perviousOperand
      )} ${this.operation}`;
    }
    //  else {
    //   // this.currentOperandTextElement.innerHTML = "";
    // }
  }
}

const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calcultor = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calcultor.appendNumber(button.innerHTML);
    calcultor.updateDisplay();
    console.log(button.innerText);
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calcultor.chooseOperation(button.innerHTML);
    calcultor.updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calcultor.compute();
  calcultor.updateDisplay();
});

allClearBtn.addEventListener("click", () => {
  calcultor.clear();
  calcultor.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calcultor.delete();
  calcultor.updateDisplay();
});
