type Dimension = {
  height: number;
  width: number;
  depth: number;
};

export interface IChair {
  dimension: Dimension;
  getDimension(): Dimension;
}

class Chair implements IChair {
  dimension = {
    height: 0,
    width: 0,
    depth: 0,
  };

  getDimension(): Dimension {
    return this.dimension;
  }
}

class SmallChair extends Chair {
  constructor() {
    super();
    this.dimension = {
      height: 40,
      width: 40,
      depth: 40,
    };
  }
}

class MediumChair extends Chair {
  constructor() {
    super();
    this.dimension = {
      height: 80,
      width: 80,
      depth: 80,
    };
  }
}

class BigChair extends Chair {
  constructor() {
    super();
    this.dimension = {
      height: 120,
      width: 120,
      depth: 120,
    };
  }
}

export enum Size {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  BIG = "BIG",
}

export class ChairFactory {
  static getChair(size: Size): IChair {
    if (size === Size.SMALL) {
      return new SmallChair();
    }

    if (size === Size.MEDIUM) {
      return new MediumChair();
    }

    return new BigChair();
  }
}

console.log(
  "-------------------------------------------------------------------"
);
console.log(`Factory
      Factory is an interface that defines a creation of the final object of the subclass.
  
      This happens when you localize knowledge of specifics of initiating a particular object to the subclass,
      so the client doesn't need to be concerened about the details for each subclass.
  `);

const smallChair = ChairFactory.getChair(Size.SMALL);
console.log(smallChair.getDimension());

const mediumChair = ChairFactory.getChair(Size.MEDIUM);
console.log(mediumChair.getDimension());

const bigChair = ChairFactory.getChair(Size.BIG);
console.log(bigChair.getDimension());

console.log(
  "-------------------------------------------------------------------"
);
