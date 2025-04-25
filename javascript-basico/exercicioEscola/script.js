
let nomeAluno = ["André Alexandre", "Joaquim", "Maria", "Paulo", "Severino"];
let nota1 = [8, 7, 9, 6, 5];
let nota2 = [9, 8, 7, 5, 4];


for (let i = 0; i < nomeAluno.length; i++) {
    let media = (nota1[i] + nota2[i]) / 2;

    if (media >= 7) {
        console.log("O(A) aluno(a): " + nomeAluno[i] + " foi aprovado(a) com a media: " + media);
    } else{
        console.log("O(A) aluno(a): " + nomeAluno[i] + " foi reprovado(a) com a media: " + media);
    }


}