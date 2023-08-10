interface IDispenser {
  handle(amount: number, payload: any[]): any[];
}

class Dispenser1 implements IDispenser {
  theNextSuccessor?: IDispenser;

  setNextSuccessor(nextSuccessor: IDispenser) {
    this.theNextSuccessor = nextSuccessor;
  }

  handle(amount: number, payload: any[]): any[] {
    if (amount >= 1) {
      const count = Math.floor(amount / 1);
      const remainder = amount % 1;

      payload.push({ name: "Dispenser1", count });

      if (remainder !== 0) {
        if (this.theNextSuccessor) {
          return this.theNextSuccessor.handle(remainder, payload);
        }
      }
    } else {
      if (this.theNextSuccessor) {
        return this.theNextSuccessor.handle(amount, payload);
      }
    }

    return payload;
  }
}

class Dispenser10 implements IDispenser {
  theNextSuccessor?: IDispenser;

  setNextSuccessor(nextSuccessor: IDispenser) {
    this.theNextSuccessor = nextSuccessor;
  }

  handle(amount: number, payload: any[]): any[] {
    if (amount >= 10) {
      const count = Math.floor(amount / 10);
      const remainder = amount % 10;

      payload.push({ name: "Dispenser10", count });

      if (remainder !== 0) {
        if (this.theNextSuccessor) {
          return this.theNextSuccessor.handle(remainder, payload);
        }
      }
    } else {
      if (this.theNextSuccessor) {
        return this.theNextSuccessor.handle(amount, payload);
      }
    }

    return payload;
  }
}

class Dispenser50 implements IDispenser {
  theNextSuccessor?: IDispenser;

  setNextSuccessor(nextSuccessor: IDispenser) {
    this.theNextSuccessor = nextSuccessor;
  }

  handle(amount: number, payload: any[]): any[] {
    if (amount >= 50) {
      const count = Math.floor(amount / 50);
      const remainder = amount % 50;
      payload.push({ name: "Dispenser50", count });

      if (remainder !== 0) {
        if (this.theNextSuccessor) {
          return this.theNextSuccessor.handle(remainder, payload);
        }
      }
    } else {
      if (this.theNextSuccessor) {
        return this.theNextSuccessor.handle(amount, payload);
      }
    }

    return payload;
  }
}

export class ATM {
  dispenser50: Dispenser50;
  dispenser10: Dispenser10;
  dispenser1: Dispenser1;

  constructor() {
    this.dispenser1 = new Dispenser1();

    this.dispenser10 = new Dispenser10();
    this.dispenser10.setNextSuccessor(this.dispenser1);

    this.dispenser50 = new Dispenser50();
    this.dispenser50.setNextSuccessor(this.dispenser10);
  }

  cashout(value: number) {
    const payload = this.dispenser50.handle(value, []);

    console.log(payload);
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Chain-of-Responsibility
        Do use Chain-of-Responsibility design pattern when will propagate through the chain until fully processed.
    
        The object doesn't know which successor or how many will process it.

        Successors do implement a common interface that makes them work independently of each other, so they
        can be used recursively or possibly in a different order.
    `);

const atm = new ATM();
atm.cashout(155);

atm.cashout(178);

atm.cashout(11);

console.log(
  "-------------------------------------------------------------------"
);
