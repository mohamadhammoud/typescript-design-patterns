interface IDrawer {
  draw(): void;
}

class CircleDrawer implements IDrawer {
  draw(): void {
    console.log("Drawing Circle...");
  }
}

class SquareDrawer implements IDrawer {
  draw(): void {
    console.log("Drawing Square...");
  }
}

export class Artist {
  drawer: IDrawer;
  constructor(drawer: IDrawer) {
    this.drawer = drawer;
  }

  draw() {
    this.drawer.draw();
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Bridge
            Do use it when you want to separate a solution where the abstraction and implementation may be tightly coupled,
            and you want to break it up into smaller conceptual parts.

            Bridge design pattern is the definition of dependancy injection.
        `);

console.log("Testing Bridge design pattern");

const circleArtist = new Artist(new CircleDrawer());
circleArtist.draw();

const squareArtist = new Artist(new SquareDrawer());
squareArtist.draw();

console.log(
  "-------------------------------------------------------------------"
);
