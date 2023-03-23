export class Sacar {
  _saldo = 0;

  get saldo() {
    return this._saldo;
  }
  
  constructor(saldo, valorInput) {
    (this._saldo = saldo), 
    (this.valorInput = valorInput);
  }

  sacarDinheiro() {
    let novoSaldo = this._saldo - this.valorInput;

    let multa = novoSaldo * 0.025;

    return (novoSaldo -= multa);
  }
}
