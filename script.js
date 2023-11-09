function sumar() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  const result = operand1 + operand2;
  document.getElementById("resultado").textContent = result;
}

function restar() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  const result = operand1 - operand2;
  document.getElementById("resultado").textContent = result;
}

function multiplicar() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  const result = operand1 * operand2;
  document.getElementById("resultado").textContent = result;
}

function dividir() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  if (operand2 === 0) {
    document.getElementById("resultado").textContent = "No se puede dividir por 0";
  } else {
    const result = operand1 / operand2;
    document.getElementById("resultado").textContent = result;
  }
}
