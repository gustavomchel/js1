const atacante = prompt("Qual é o nome do personagem atacante? "); //prompt é um pop-up de pergunta;
const poderDeAtaque = prompt("Qual é o seu poder de ataque? "); //const é usada para definir uma váriavel não modificável;

const defensor = prompt("Qual é o nome do personagem defensor? ");
let pontosDeVida = prompt("Quantos pontos de vida ele possui? "); //let é usado para definir uma variável modificável;
const poderDeDefesa = prompt("Qual é o seu poder de defesa? ");
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não) ");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  // && é usado para retornar true se os dois operandos forem true;
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  // "===" é usado como igual;
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\nDano Causado: " +
    danoCausado +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
