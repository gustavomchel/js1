let menu = " ";

do {
  menu = prompt(
    "Escolha um dia da semana:\n1.Segunda\n2.Terça\n3.Quarta\n4.Quinta\n5.Sexta\n6.Encerrar"
  );

  switch (menu) {
    case "1":
      alert("Frase do dia: O segredo de progredir é começar!");
      break;
    case "2":
      alert("Frase do dia: O segredo de progredir é começar!");
      break;
    case "3":
      alert("Frase do dia: O segredo de progredir é começar!");
      break;
    case "4":
      alert("Frase do dia: O segredo de progredir é começar!");
      break;
    case "5":
      alert("Frase do dia: O segredo de progredir é começar!");
      break;
    case "6":
      alert("Você escolheu encerrar.");
      alert("Encerrando...");
      break;
    default:
      alert("Opção Inválida.");
  }
} while (menu !== "6");
