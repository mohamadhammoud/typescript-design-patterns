interface Referenceable {
  name: string;
  parent?: Folder;
}

type Elementt = Filee | Folder;

class Filee implements Referenceable {
  parent: Folder;
  name: string;

  constructor(name: string, parent: Folder) {
    this.parent = parent;
    this.name = name;

    this.parent.addChild(this);
  }
}

export class Folder implements Referenceable {
  parent?: Folder;
  name: string;

  children: Elementt[];

  constructor(name: string, parent?: Folder) {
    this.parent = parent;
    this.name = name;
    this.children = [];

    if (parent != null) {
      this.parent?.addChild(this);
    }
  }

  addChild(child: Elementt) {
    this.children.push(child);

    if (child.parent !== this) {
      throw Error();
    }
  }

  dir() {
    this.children.forEach((element: Elementt) => {
      console.log(`${element.name}`);
    });
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Composite
              Do use it when you want to manage components in a manageable hierarchal order,
              File windows and explorer is a very good example of the compostire design pattern.
  
              Any system that needs to group, un-group and modify multiple objects at the same time.
          `);

console.log("Testing Composite design pattern");

const globalFolder = new Folder("global Folder");

new Filee("File A", globalFolder);

new Folder("Folder B", globalFolder);

globalFolder.dir();

console.log(
  "-------------------------------------------------------------------"
);
