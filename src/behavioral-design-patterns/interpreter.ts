export interface IAbstractExpression {
  interpret(): number;
}

class Numeral implements IAbstractExpression {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  interpret(): number {
    return this.value;
  }
}

class add implements IAbstractExpression {
  left: IAbstractExpression;
  right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.right.interpret() + this.left.interpret();
  }
}

class subtract implements IAbstractExpression {
  left: IAbstractExpression;
  right: IAbstractExpression;

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.right.interpret() - this.left.interpret();
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Interpreter
        Interpreter design pattern helps to convert information from one language to another

        E.g: let's go with a tree that consists of non terminal expressions(+,-) and terminal expressions(1,2,3,4...).
      `);

const leaf1 = new Numeral(2);
const leaf2 = new Numeral(5);
const terminalExpression1 = new add(leaf1, leaf2);

const leaf3 = new Numeral(7);
const terminalExpression2 = new subtract(terminalExpression1, leaf3);

console.log(`terminalExpression2 = ${terminalExpression2.interpret()}`);

console.log(
  "-------------------------------------------------------------------"
);
