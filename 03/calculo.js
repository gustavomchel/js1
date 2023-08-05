const valor = prompt("Informe um valor em metros: ");
let resultado = prompt(
  "Escolha uma medida de conversão:\n1-(mm) \n2-(cm) \n3-(dm) \n4-(dam) \n5-(hm) \n6-(km)"
);

switch (resultado) {
  case "1":
    resultado = valor * 1000;
    alert("O valor informado" + " foi convertido para " + resultado + " cm!");
    break;
  case "2":
    resultado = valor * 100;
    alert("O valor informado" + " foi convertido para " + resultado + " cm!");
    break;
  case "3":
    resultado = valor * 10;
    alert("O valor informado" + " foi convertido para " + resultado + " dm!");
    break;
  case "4":
    resultado = valor / 10;
    alert("O valor informado" + " foi convertido para " + resultado + " dam!");
    break;
  case "5":
    resultado = valor / 100;
    alert("O valor informado" + " foi convertido para " + resultado + " hm!");
    break;
  case "6":
    resultado = valor / 1000;
    alert("O valor informado" + " foi convertido para " + resultado + " km!");
    break;
  default:
    alert("finalizando...");
}
