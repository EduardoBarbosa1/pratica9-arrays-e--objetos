// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let listaPessoas = []
listaPessoas[0] = { nome: "André", trabalha: "s", salario: 1000 }
listaPessoas[1] = { nome: "Carlos", trabalha: "n", salario: 0 }
listaPessoas[2] = { nome: "João", trabalha: "s", salario: 2510 }

for (item of listaPessoas) {
    if (item.trabalha === "n") {
        console.log(`${item.nome} está desempregado `)
    } else if (item.salario < 2500) {
        console.log(`${item.nome} ganha menos de 2500`)
    } else {
        console.log(`${item.nome} ganha mais de 2500 `);
    }
}

