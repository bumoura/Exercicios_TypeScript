class Calculadora {
    constructor(valor) {
        this.resultado = 0;
        this.resultado = valor;
    }
    soma(valorSoma) {
        this.resultado = valorSoma + this.resultado;
        return this.resultado;
    }
    subtracao(valorSubtracao) {
        this.resultado = this.resultado - valorSubtracao;
        return this.resultado;
    }
    multiplicacao(valorMultiplicacao) {
        this.resultado = this.resultado * valorMultiplicacao;
        return this.resultado;
    }

    divisao(valorDivisao) {
        this.resultado = this.resultado / valorDivisao;
        return this.resultado;
    }

    resultadoFinal() {
        return this.resultado;
    }


}
let teste = new Calculadora(3);
console.log(teste.soma(5));
console.log(teste.subtracao(2));
console.log(teste.multiplicacao(3));
console.log(teste.divisao(2));
console.log(teste.resultadoFinal());