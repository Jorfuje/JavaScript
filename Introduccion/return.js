/* const operacion = (tipo, num1, num2) => {
    let resultado;
    if (tipo === "suma") {
        resultado = num1 + num2;
    } else if (tipo === "resta") {
        resultado = num1 - num2;
    }
    return resultado;
  }; */

const operacion = (tipo, num1, num2) => {
  if (tipo === "suma") {
    return num1 + num2;
  } else if (tipo === "resta") {
    return num1 - num2;
  }
};

const miVariable = operacion("suma", 100, 15);
console.log(miVariable);
