const veiculo1 = prompt("Qual é o nome do Primeiro Veículo? ");
const velocidade1 = prompt("Qual é a velocidade do Primeiro Veículo? ");

const veiculo2 = prompt("Qual é o nome do Segundo Veículo? ");
const velocidade2 = prompt("Qual é a velocidade do Segundo Veículo? ");

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido que " + veiculo2);
} else if (velocidade1 < velocidade2) {
  alert(veiculo2 + " é mais rápido que " + veiculo1);
} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais! ");
}

//if e else é usado para comparar valores;
