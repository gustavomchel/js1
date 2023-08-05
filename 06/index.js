const numero = prompt("Escolha um número entre 0 a 10: ");
let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += numero + " * " + fator + " = " + numero * fator + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado);
