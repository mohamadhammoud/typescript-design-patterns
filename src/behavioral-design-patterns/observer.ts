interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(...args: any): void;
}

interface IObserver {
  notify(...args: any): void;
}

class Subject implements IObservable {
  observers: Set<IObserver>;

  constructor() {
    this.observers = new Set<IObserver>();
  }
  subscribe(observer: IObserver): void {
    this.observers.add(observer);
  }
  unsubscribe(observer: IObserver): void {
    this.observers.delete(observer);
  }
  notify(...args: any): void {
    this.observers.forEach((observer) => {
      observer.notify(...args);
    });
  }
}

export class Observer implements IObserver {
  static Counter: number = 0;

  id: number;
  observable: IObservable;

  constructor(observable: IObservable) {
    this.id = Observer.Counter++;
    this.observable = observable;

    this.observable.subscribe(this);
  }

  notify(...args: any): void {
    console.log(`OBSERVER_${this.id} received ${JSON.stringify(args)}`);
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Observer
        Observer design pattern follows the publish/subscribe concept, A subscriber subscribes to a publisher
        the publisher then notifies the subscribers when necessary.
    
       E.g: rx.js do use this mechanism.
    `);

const subject = new Subject();

const observer1 = new Observer(subject);
const observer2 = new Observer(subject);

subject.notify("First Notification", ["Heey", "How are you?"]);

subject.unsubscribe(observer2);

subject.notify("Second Notification.", ["Heey", "How are you?"]);

console.log(
  "-------------------------------------------------------------------"
);
