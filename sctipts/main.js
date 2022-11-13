let number1;
let number2;
let operator;
let result;

function one() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "1");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "1");
  }
}

oneButton.addEventListener("click", one);

function two() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "2");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "2");
  }
}

twoButton.addEventListener("click", two);

function three() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "3");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "3");
  }
}

threeButton.addEventListener("click", three);

function four() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "4");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "4");
  }
}

fourButton.addEventListener("click", four);

function five() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "5");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "5");
  }
}

fiveButton.addEventListener("click", five);

function six() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "6");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "6");
  }
}

sixButton.addEventListener("click", six);

function seven() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "7");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "7");
  }
}

sevenButton.addEventListener("click", seven);

function eight() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "8");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "8");
  }
}

eightButton.addEventListener("click", eight);

function nine() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "9");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "9");
  }
}

nineButton.addEventListener("click", nine);

function zero() {
  let text = document.querySelector("p").textContent;
  if (document.querySelector("p").textContent == "0") {
    return (document.querySelector("p").innerHTML = "0");
  }
  for (; text.length < 18; text++) {
    return (document.querySelector("p").innerHTML += "0");
  }
}

zeroButton.addEventListener("click", zero);

function clear() {
  return (
    (document.querySelector("p").innerHTML = "0"),
    (result = 0),
    (number1 = 0),
    (number2 = 0)
  );
}

clearButton.addEventListener("click", clear);

function summary() {
  return (
    (number1 = Number(document.querySelector("p").textContent)),
    (operator = "+"),
    (document.querySelector("p").innerHTML = "0")
  );
}

plusButton.addEventListener("click", summary);

function difference() {
  return (
    (number1 = Number(document.querySelector("p").textContent)),
    (operator = "-"),
    (document.querySelector("p").innerHTML = "0")
  );
}

minusButton.addEventListener("click", difference);

function multiply() {
  return (
    (number1 = Number(document.querySelector("p").textContent)),
    (operator = "*"),
    (document.querySelector("p").innerHTML = "0")
  );
}

multiplyButton.addEventListener("click", multiply);

function divide() {
  return (
    (number1 = Number(document.querySelector("p").textContent)),
    (operator = "/"),
    (document.querySelector("p").innerHTML = "0")
  );
}

divideButton.addEventListener("click", divide);

function getResult() {
  number2 = Number(document.querySelector("p").textContent);
  if (operator == "+") {
    return (
      (result = number1 + number2),
      (document.querySelector("p").innerHTML = result)
    );
  }
  if (operator == "-") {
    return (
      (result = number1 - number2),
      (document.querySelector("p").innerHTML = result)
    );
  }
  if (operator == "*") {
    return (
      (result = number1 * number2),
      (document.querySelector("p").innerHTML = result)
    );
  }
  if (operator == "/") {
    return (
      (result = number1 / number2),
      (document.querySelector("p").innerHTML = result)
    );
  }
}

equalButton.addEventListener("click", getResult);
