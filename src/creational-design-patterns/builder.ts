enum RealEstateType {
  HOUSE,
  BUILDING,
  TOWER,
}

class RealEstate {
  doors = 0;
  windows = 0;
  walletMaterial = "";
  buildingType: RealEstateType;

  constructor() {
    this.buildingType = RealEstateType.HOUSE;
  }

  setDoors(doorsNumber: number): RealEstate {
    this.doors = doorsNumber;
    return this;
  }

  setWindows(windowsNumber: number): RealEstate {
    this.windows = windowsNumber;
    return this;
  }

  setBuildingType(type: RealEstateType): RealEstate {
    this.buildingType = type;
    return this;
  }

  getResult(): RealEstate {
    return this;
  }
}

export default class RealEstateDirector {
  static construct(): RealEstate {
    return new RealEstate()
      .setDoors(1)
      .setWindows(6)
      .setBuildingType(RealEstateType.HOUSE)
      .getResult();
  }
}

console.log(
  "-------------------------------------------------------------------"
);
console.log(`Builder
      Builder pattern should be able to construct complex objects in any order and include/exclude whichever available
      components/attributes you want.

      For different combinations of products such as Real Estate, do use a specific Director for creation.
  `);

const realEstate = RealEstateDirector.construct();
console.log(realEstate);

console.log(
  "-------------------------------------------------------------------"
);
