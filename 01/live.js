const nome = prompt("Qual é o seu nome? ");
const city = prompt("Qual cidade nasceu? ");
const profession = prompt("Qual é a sua profissão? ");
const aim = prompt("Qual o ano do seu nascimento? ");

alert(
  "Dados Cadastrais: " +
    "\nNome Completo: " +
    nome +
    " " +
    "\nCidade:" +
    city +
    " " +
    "\nProfissão: " +
    profession +
    "\nIdade: " +
    (2022 - aim)
);
