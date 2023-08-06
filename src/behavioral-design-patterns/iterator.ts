interface IIterator {
  next(): Aggregator;

  hasNext(): boolean;
}

interface IAggregator {
  method(): void;
}

export class Aggregator implements IAggregator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  method() {
    console.log(`I'm aggregator ${this.name}`);
  }
}

class ConceptIterator implements IIterator {
  index: number;
  aggregators: Aggregator[];

  constructor(aggregators: Aggregator[]) {
    this.index = 0;
    this.aggregators = aggregators;
  }

  next() {
    if (this.index < this.aggregators.length) {
      const aggregator = this.aggregators[this.index];
      this.index++;
      return aggregator;
    }

    throw new Error("End of iterator");
  }

  hasNext(): boolean {
    return this.index < this.aggregators.length;
  }
}

const iterator = new ConceptIterator([
  new Aggregator("Mohamad"),
  new Aggregator("John"),
  new Aggregator("Alex"),
  new Aggregator("Chong"),
]);

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Iterator
          Iterator design pattern helps to traverse over a collection

         At minimum, an iterator needs a 'next' equivalent method that returns an object
        `);

while (iterator.hasNext()) {
  iterator.next().method();
}

console.log(
  "-------------------------------------------------------------------"
);
