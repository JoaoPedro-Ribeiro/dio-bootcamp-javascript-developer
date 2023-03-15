// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

const firstGrade = 4;
const secondGrade = 4;
const thirdGrade = 6;

const gradeAverage = (firstGrade + secondGrade + thirdGrade) / 3;

if (gradeAverage >= 7 ){
  console.log(`Aluno aprovado com média ${gradeAverage.toFixed(1)}!`);
} else if (gradeAverage >= 5){
  console.log(`Aluno de recuperação com média ${gradeAverage.toFixed(1)}!`);
} else {
  console.log(`Aluno reprovado com média ${gradeAverage.toFixed(1)}!`);
}