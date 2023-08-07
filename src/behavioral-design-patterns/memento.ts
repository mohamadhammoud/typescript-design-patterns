class Memento {
  state: string;

  constructor(state?: string) {
    this.state = "";
    if (state) {
      this.state = state;
    }
  }
}

export class Article {
  content: string;
  mementos: Memento[];

  constructor(value: string) {
    this.content = "";
    this.mementos = [];

    if (value) {
      this.write(value);
    }
  }

  save() {
    this.mementos.push(new Memento(this.content));
  }

  write(value: string) {
    this.content = value;
    this.save();
  }

  undo() {
    if (this.mementos.length > 1) {
      this.mementos.pop();
      const memnto = this.mementos[this.mementos.length - 1];
      this.content = memnto.state;
    }
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Memento
        You might want to store a copy of current state in case of later retrieval.
        Memento design pattern can be useful for saving a copy of state at a speicific command.
      
         E.g: Writing a google drive document.
      `);

const articleA = new Article("Hello World");

console.log(articleA.content);

articleA.write("Hello World, I'm mohamad hammoud");

console.log(articleA.content);

articleA.undo();
console.log(articleA.content);

articleA.undo();
console.log(articleA.content);

console.log(
  "-------------------------------------------------------------------"
);
