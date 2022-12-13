const buffer = ["0"];

const calcDisplay = document.getElementById("display_text");

let number1 = null;
let number2 = null;
let operator = null;
let last_result = null;

// добавление числа

function addNumberToArray() {
  checkFirstValue();

  return buffer.push(document.querySelector(".button:hover").id);
}

function checkFirstValue() {
  switch (buffer[0]) {
    case "0":
      return buffer.splice(0, 1);
    case "-":
      switch (buffer[1]) {
        case "0":
          return buffer.splice(1, 1);
      }
  }
}

// рендер числа

function renderInputs() {
  const value = buffer.join("");

  return (calcDisplay.innerHTML = value), console.log(buffer);
}

// превращение числа в дробь

function doFloat() {
  const flag = buffer.includes(".");

  if (flag == false) {
    return buffer.push("."), renderInputs();
  } else {
    const index = buffer.indexOf(".");

    return buffer.splice(index), renderInputs();
  }
}

// добавление нулей

function addZero() {
  if (buffer[0] == "0" || buffer[0] == "-") {
    return;
  } else {
    buffer.push("0"), renderInputs();
  }
}

// изменение знака

function changeSign() {
  const flag = buffer.includes("-");

  if (flag == false) {
    return buffer.unshift("-"), renderInputs();
  } else {
    const index = buffer.indexOf("-");

    return buffer.splice(index, 1), renderInputs();
  }
}

// очистка

function clearNum() {
  return buffer.splice(0), buffer.push("0"), renderInputs();
}

// операции с числами

function operate() {
  const operator_value = document.querySelector(".button:hover").id;

  const number_value = calcDisplay.textContent;

  return (
    (number1 = Number(number_value)),
    (operator = operator_value),
    buffer.splice(0),
    buffer.push("0"),
    renderInputs()
  );
}

// результат операции

function showOperationResult() {
  number2 = Number(calcDisplay.textContent);

  switch (operator) {
    case "summary":
      return (
        (last_result = number1 + number2),
        console.log(last_result),
        (calcDisplay.innerHTML = last_result),
        setTimeout(() => {
          clearVariables();
        }, 0)
      );
    case "difference":
      return (
        (last_result = number1 - number2),
        console.log(last_result),
        (calcDisplay.innerHTML = last_result),
        setTimeout(() => {
          clearVariables();
        }, 0)
      );
    case "multiply":
      return (
        (last_result = number1 * number2),
        console.log(last_result),
        (calcDisplay.innerHTML = last_result),
        setTimeout(() => {
          clearVariables();
        }, 0)
      );
    case "divide":
      return (
        (last_result = number1 / number2),
        console.log(last_result),
        (calcDisplay.innerHTML = last_result),
        setTimeout(() => {
          clearVariables();
        }, 0)
      );
    case "percentage":
      return (
        (last_result = number1 * (number2 / 100)),
        console.log(last_result),
        (calcDisplay.innerHTML = last_result),
        setTimeout(() => {
          clearVariables();
        }, 0)
      );
  }
}

// очистка переменных и массивов

function clearVariables() {
  return (number1 = null), (number2 = null), (operator = null);
}

// квадратный корень

function getSquareRoot() {
  number1 = calcDisplay.textContent;

  last_result = Math.sqrt(number1);

  if (!last_result) {
    alert("Не могу извлечь квадратный корень из отрицательного числа :(");
  } else {
    (calcDisplay.innerHTML = last_result),
      setTimeout(() => {
        clearVariables();
      }, 0);
  }
}

// обработчики

const numbers_btns = document.querySelectorAll(".button.number");

numbers_btns.forEach((item) => {
  item.addEventListener("click", addNumberToArray),
    item.addEventListener("click", renderInputs);
});

const operators_btns = document.querySelectorAll(".button.operator");

operators_btns.forEach((item) => {
  item.addEventListener("click", operate);
});

dot.addEventListener("click", doFloat);

zero.addEventListener("click", addZero);

sign.addEventListener("click", changeSign);

clear.addEventListener("click", clearNum);

equal.addEventListener("click", showOperationResult);

root.addEventListener("click", getSquareRoot);
