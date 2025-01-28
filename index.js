let nome = 'Lamerque';
let xp = 2000;
let nivel = '';

const faixasDeNivel = [
  { min: 0, max: 1000, nivel: 'Ferro' },
  { min: 1001, max: 2000, nivel: 'Bronze' },
  { min: 2001, max: 5000, nivel: 'Prata' },
  { min: 5001, max: 7000, nivel: 'Ouro' },
  { min: 7001, max: 8000, nivel: 'Platina' },
  { min: 8001, max: 9000, nivel: 'Ascendente' },
  { min: 9001, max: 10000, nivel: 'Imortal' },
  { min: 10001, max: Infinity, nivel: 'Radiante' }
];

for (let faixa of faixasDeNivel) {
  if (xp >= faixa.min && xp <= faixa.max) {
    nivel = faixa.nivel;
    break; // Encerra o laço assim que encontrar a faixa correspondente
  }
}

if (!nivel) {
  nivel = 'Não classificado';
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
