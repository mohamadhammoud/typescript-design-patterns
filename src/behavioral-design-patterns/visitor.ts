interface IVisitable {
  name: string;
  accept(visitor: IVisitor): void;
}

interface IVisitor {
  name: string;
  visit(visitor: IVisitable): void;
}

export class Part implements IVisitable {
  name: string;
  value: number;
  parts: Set<Part>;

  constructor(name: string, value: number, parent?: Part) {
    this.name = name;
    this.value = value;
    this.parts = new Set();

    if (parent) {
      parent.parts.add(this);
    }
  }

  accept(visitor: IVisitor): void {
    this.parts.forEach((part: Part) => {
      part.accept(visitor);
    });

    console.log(`Hey I'm ${this.name} accepted this visitor ${visitor.name}`);
    visitor.visit(this);
  }
}

class Visitor implements IVisitor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  visit(visitor: IVisitable): void {
    console.log(`Hey I'm ${this.name} visited ${visitor.name}`);
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Visitor
            Do use design pattern to define an operation to be performed on the elements/parts of a hierarchal object
            structure.
            
            Usage of the Visitor design pattern helps that your classes conform to the single responsibility principle
            due to them implementing the custom visitor behavior in a seperate class.
`);

const adam = new Part("adam", 1);
const mohamad = new Part("mohamad", 1, adam);
const nawar = new Part("nawar", 1, adam);
const odai = new Part("odai", 1, nawar);

const dani = new Visitor("dani");
adam.accept(dani);

console.log(
  "-------------------------------------------------------------------"
);
