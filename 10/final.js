const vagas = [];

function listarVagas() {
  if (vagas <= 0) {
    alert("Não existem Vagas disponíveis!");
    return;
  }

  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ".";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga: ");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga: "
  );

  const confirmacao = confirm(
    "Deseja criar uma nova com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  } else {
    alert("Voltando ao menu principal...");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir: ");

  if (indice >= vagas.length || indice < 0) {
    alert("Opção Inválida!");
    return;
  }

  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n . " + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de Candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a): ");
  const indice = prompt(
    "Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever: "
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      " ?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada com sucesso!");
  } else {
    alert("Voltando ao menu principal...");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso!");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções: " +
      "\n1.Vagas Disponíveis" +
      "\n2.Criar Nova Vaga" +
      "\n3.Visualizar Vaga" +
      "\n4.Increver um(a) candidato(a)" +
      "\n5.Excluir Vaga" +
      "\n6.Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção Inválida!");
        break;
    }
  } while (opcao !== "6");
}

executar();
