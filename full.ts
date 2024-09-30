// Função de multiplicação que recebe dois números como parâmetros
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação que recebe uma string (nome) como parâmetro
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Exemplo de uso das funções
const resultadoMultiplicacao = multiplicar(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const saudacaoResultado = saudacao("Ezequias");
console.log(saudacaoResultado);

