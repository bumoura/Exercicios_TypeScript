class Caixa {

    private _saldo: number = 1000;

    constructor() {
        console.log(`Seu saldo é de R$${this._saldo}`);
    }

    despositar(valor: number) {
        console.log(`Você depositou: R$${valor}`);
        this._saldo += valor;
        console.log(`Saldo atual: R$${this._saldo}`);
    }

    sacar(valor: number){
        console.log(`Você sacou: R$${valor}`);
        this._saldo -= valor;
        console.log(`Saldo atual: R$${this._saldo}`);
    }
}


let bu = new Caixa;
bu.sacar(500);
bu.despositar(13209);
bu.sacar(568);