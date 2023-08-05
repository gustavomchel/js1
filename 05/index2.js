let saldo = prompt("Qual é o saldo disponível? ");
saldo = parseFloat(saldo);
let opcao = " ";

do {
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      ",00." +
      "\n1.Adicionar" +
      "\n2.Remover" +
      "\n3.Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("informe o valor a ser adicionado: "));
      break;

    case "2":
      saldo -= prompt("informe o valor a ser removido: ");
      break;

    case "3":
      alert("Você escolher encerrar!");
      alert("Encerrando...");
      break;

    default:
      alert("Opção Inválida.");
  }
} while (opcao !== "3");
