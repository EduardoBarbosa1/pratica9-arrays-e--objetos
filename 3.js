// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let listaAluno = []
listaAluno[0] = { nome: "Andre", nota1: 10, nota2: 7 }
listaAluno[1] = { nome: "Joao", nota1: 7, nota2: 9 }

let mediaIndividual = 0
for (item of listaAluno) {
    mediaIndividual = (item.nota1 + item.nota2) / 2

    console.log(`${item.nome} obteve a media ${mediaIndividual} `);

}
// let mediaClasse1 = listaAluno[0].mediaIndividual + listaAluno[1].mediaIndividual
// let mediaClasse2 = mediaClasse1 / 2
// console.log(`A media da classe é ${mediaClasse2}`)

