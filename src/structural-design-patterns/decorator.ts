export class BigNumber {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  add(obj: BigNumber | number) {
    if (typeof obj == "number") {
      return new BigNumber(this.value + obj);
    }

    return new BigNumber(this.value + obj.value);
  }

  sub(obj: BigNumber | number) {
    if (typeof obj == "number") {
      return new BigNumber(this.value - obj);
    }

    return new BigNumber(this.value - obj.value);
  }

  mul(obj: BigNumber | number) {
    if (typeof obj == "number") {
      return new BigNumber(this.value * obj);
    }

    return new BigNumber(this.value * obj.value);
  }

  div(obj: BigNumber | number) {
    if (typeof obj == "number") {
      return new BigNumber(this.value / obj);
    }

    return new BigNumber(this.value / obj.value);
  }

  mod(obj: BigNumber | number) {
    if (typeof obj == "number") {
      return new BigNumber(this.value % obj);
    }

    return new BigNumber(this.value % obj.value);
  }

  toString() {
    return this.value;
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Decorator
        Decorator design pattern simplifies for you adding complexity especially when you want to let the object deals
        with another same objects.

        Decorator supports recursive composition.
    `);

console.log("Testing Decorator design pattern");

const numberTwo = new BigNumber(2);
const numberThree = new BigNumber(3);

const numberFive = numberThree.add(numberTwo);

console.log(numberFive.value === 5);

console.log(numberFive.sub(numberTwo).toString() === 3);

console.log(numberFive.div(numberTwo).toString() === 2.5);

console.log(numberFive.mod(numberTwo).toString() === 1);

console.log(numberFive.mul(numberTwo).toString() === 10);

// ---
console.log(numberFive.sub(2).toString() === 3);

console.log(numberFive.div(2).toString() === 2.5);

console.log(numberFive.mod(2).toString() === 1);

console.log(numberFive.mul(2).toString() === 10);

console.log(
  "-------------------------------------------------------------------"
);
