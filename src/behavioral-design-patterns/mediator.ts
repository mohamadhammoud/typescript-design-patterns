interface IComponent {
  name: string;
  notify(...args: any): void;

  receive(originator: IComponent, ...args: any): void;
}

export class Mediator {
  components: Set<IComponent>;

  constructor() {
    this.components = new Set<IComponent>();
  }

  add(component: IComponent) {
    this.components.add(component);
  }

  notify(originator: IComponent, ...args: any) {
    this.components.forEach((component) => {
      if (component !== originator) {
        component.receive(originator, args);
      }
    });
  }
}

class Component implements IComponent {
  mediator: Mediator;
  name: string;
  constructor(name: string, mediator: Mediator) {
    this.mediator = mediator;

    this.mediator.add(this);
    this.name = name;
  }

  notify(...args: any): void {
    this.mediator.notify(this, args);
  }
  receive(originator: IComponent, ...args: any): void {
    console.log(
      `I'm component ${this.name}, I did received those ${args} from ${originator.name}`
    );
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Mediator
        Mediator design pattern replaces a structure with many-to-many interactions between its classes
        Mediator pattern encourage usage of shared objects that can now be centrally managed and synchronized.
      
        Some developers do specify it as Facade design pattern but I do specify it as the observer one,
        the difference between Observer and Mediator is in the Mediator all objects notifies each other,
        on the other hand in Observer just the Subject notifies all the observers as subscribers.
      `);

const mediator = new Mediator();

const component = new Component("Component 1", mediator);
const component2 = new Component("Component 2", mediator);
const component3 = new Component("Component 3", mediator);

component.notify("Notification ", 1);
component2.notify("Notification ", 2);

console.log(
  "-------------------------------------------------------------------"
);
