enum CloneType {
  SHALLOW,
  DEEP,
}

export class Document {
  name: string;
  array: number[];

  constructor(name: string, array: number[]) {
    this.name = name;
    this.array = array;
  }

  clone(mode: CloneType) {
    let array;

    if (mode === CloneType.SHALLOW) {
      array = Object.assign([], this.array);
    } else {
      array = JSON.parse(JSON.stringify(this.array));
    }

    return new Document(this.name, array);
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Prototype
      Prototype is a creational design pattern used for creating a new copy from specific object.
      When designing your clone() method, you should consider which elements will be shallow or deep copied.
  `);
console.log("Testing shallow copy mechanism");
const originalDocument = new Document("Document 1", [1, 2, 3, 4]);
const shallowCopyDocument = originalDocument.clone(CloneType.SHALLOW);

originalDocument.array[1] = 1;
originalDocument.array[2] = 1;
originalDocument.array[3] = 1;

console.log(originalDocument);
console.log(shallowCopyDocument);

console.log("Testing deep copy mechanism");
const originalDocument2 = new Document("Document 1", [1, 2, 3, 4]);
const deepCopyDocument = originalDocument2.clone(CloneType.DEEP);
originalDocument2.array[1] = 1;
originalDocument2.array[2] = 1;
originalDocument2.array[3] = 1;

console.log(originalDocument2);
console.log(deepCopyDocument);

console.log(
  "-------------------------------------------------------------------"
);
