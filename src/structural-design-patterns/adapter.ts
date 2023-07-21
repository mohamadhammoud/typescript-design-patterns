interface IA {
  methodA(): void;
}

class ClassA implements IA {
  methodA(): void {
    console.log("class A implementation");
  }
}

interface IB {
  methodB(): void;
}
class ClassB implements IB {
  methodB(): void {
    console.log("class B implementation");
  }
}

class ClassBAdapter implements IA {
  classB: ClassB;

  constructor() {
    this.classB = new ClassB();
  }

  methodA(): void {
    this.classB.methodB();
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Adapter
          You may have two classes that are similar, but they have different method signatures.
          Create an adapter over top of one the method signatures so that it is easier to implement and extend in the client.
      `);

console.log("Testing Adapter design pattern");

export default [new ClassA(), new ClassBAdapter()].map((item) => {
  item.methodA();
});

console.log(
  "-------------------------------------------------------------------"
);
