interface IMove {
  move(position: [number, number]): void;
}

interface IMoveConstructor {
  new (): IMove;
}

export class Human {
  position: [number, number];

  constructor() {
    this.position = [0, 0];
  }

  move(movementStyle: IMoveConstructor) {
    new movementStyle().move(this.position);
  }
}

class Crawling implements IMove {
  move(position: [number, number]) {
    position[0] += 0.5;
    console.log(`I'm Crawling... New Position ${position}`);
  }
}

class Walking implements IMove {
  move(position: [number, number]) {
    position[0] += 1;
    console.log(`I'm Walking... New Position ${position}`);
  }
}

class Running implements IMove {
  move(position: [number, number]) {
    position[0] += 0.5;
    console.log(`I'm Running... New Position ${position}`);
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Strategy
            Strategy design pattern does have choice of implementation that accomplish same task
            
            E.g: Software plugins can be implemented using Strategy design pattern
        `);

const mohamad = new Human();

mohamad.move(Crawling);
mohamad.move(Walking);
mohamad.move(Running);

console.log(
  "-------------------------------------------------------------------"
);
