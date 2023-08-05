const turista = prompt("Qual é o seu nome turista? ");
let cidades = " ";
let contagem = 0;

let continuar = prompt("Já visitou alguma cidade? (Sim/Não) ");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade? ");
  alert("Você visitou " + cidade + "!");

  cidades += "-" + cidade + "\n";
  contagem++;

  continuar = prompt("Visitou alguma outra cidade? (Sim/Não) ");

  if (continuar === "Não") {
    alert(
      "Turista: " +
        turista +
        "\nQuantidade de Cidades: " +
        contagem +
        "\nCidades:" +
        "\n\n" +
        cidades
    );
  }
}
