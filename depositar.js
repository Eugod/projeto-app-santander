export class Depositar {
  _saldo = 0;

  get saldo() {
    return this._saldo;
  }

  constructor(saldo, valorInput) {
    (this._saldo = saldo), 
    (this.valorInput = valorInput);
  }

  depositarDinheiro() {
    let bonus = this.valorInput * 0.01;

    let depositoTotal = this.valorInput + bonus;

    return (this._saldo += depositoTotal);
  }
}
