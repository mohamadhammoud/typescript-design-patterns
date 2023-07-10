export class Singleton {
  static instance: Singleton;
  id: number;

  constructor(id: number) {
    this.id = id;

    if (Singleton.instance != null) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}
console.log(
  "-------------------------------------------------------------------"
);

console.log(`Singleton
    Singleton is a creational design pattern used for accessing data in 1 single state.
    This happens in Redux state management tool when you want to refer to a 1 state of data in the app.

    What I did here is that I always return the same object regardless of how many times I intiate an object
    from the same class
`);

const obj1 = new Singleton(1);
const obj2 = new Singleton(2);

console.log(obj1 === obj2); // Returns true
console.log(obj1.id); // Returns 1
console.log(obj2.id); // Returns 1

console.log(
  "-------------------------------------------------------------------"
);
