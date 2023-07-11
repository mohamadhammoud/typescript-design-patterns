import { ChairFactory, IChair, Size } from "./factory";

type Dimension = {
  height: number;
  width: number;
  depth: number;
};

interface ITable {
  dimension: Dimension;
  getDimension(): Dimension;
}

class Table implements ITable {
  dimension = {
    height: 0,
    width: 0,
    depth: 0,
  };

  getDimension(): Dimension {
    return this.dimension;
  }
}

class SmallTable extends Table {
  constructor() {
    super();
    this.dimension = {
      height: 40,
      width: 40,
      depth: 40,
    };
  }
}

class MediumTable extends Table {
  constructor() {
    super();
    this.dimension = {
      height: 80,
      width: 80,
      depth: 80,
    };
  }
}

class BigTable extends Table {
  constructor() {
    super();
    this.dimension = {
      height: 120,
      width: 120,
      depth: 120,
    };
  }
}

export class TableFactory {
  static getTable(size: Size): ITable {
    if (size === Size.SMALL) {
      return new SmallTable();
    }

    if (size === Size.MEDIUM) {
      return new MediumTable();
    }

    return new BigTable();
  }
}

enum Category {
  CHAIR,
  TABLE,
}

interface IProduct extends ITable, IChair {}

class ProductFactory {
  static getProduct(category: Category, size: Size): IProduct {
    if (category === Category.CHAIR) {
      return ChairFactory.getChair(size);
    }

    return TableFactory.getTable(size);
  }
}

console.log(
  "-------------------------------------------------------------------"
);
console.log(`Abstract Factory
    Abstract Factory fullfils all the use cases of factor design pattern but with additional upper layer.

    Do use it when you want to provide a library of relatively similar products from multiple different factories.
`);

const smallChair = ProductFactory.getProduct(Category.CHAIR, Size.SMALL);
const mediumTable = ProductFactory.getProduct(Category.TABLE, Size.MEDIUM);

console.log(smallChair);
console.log(mediumTable);

console.log(
  "-------------------------------------------------------------------"
);
