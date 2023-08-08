enum ExampleState {
  Initializing = "Initializing",
  Started = "Started",
  Running = "Running",
  Finished = "Finished",
}

interface IExampleState {
  request(): void;
}

export class StateContext implements IExampleState {
  state: ExampleState;

  constructor() {
    this.state = ExampleState.Initializing;
  }

  setState(value: ExampleState) {
    switch (value) {
      case ExampleState.Started:
        this.request = Starter.prototype.request;
        break;
      case ExampleState.Running:
        this.request = Running.prototype.request;
        break;
      case ExampleState.Finished:
        this.request = Finished.prototype.request;
        break;
    }

    this.state = value;
  }

  request(): void {
    // This function does nothing for
    // It will be assigned from another prototyp depending on specific condition
  }
}

class Starter implements IExampleState {
  request(): void {
    console.log("Started....");
  }
}

class Running implements IExampleState {
  request(): void {
    console.log("Running....");
  }
}

class Finished implements IExampleState {
  request(): void {
    console.log("Finished....");
  }
}
console.log(
  "-------------------------------------------------------------------"
);

console.log(`State
          State design pattern depends on one object and change its behavior depending on specific condtion

          State pattern is concerned about changing the handle of an object's method dynamically
      `);

const stateObject = new StateContext();
console.log(stateObject.state);

stateObject.setState(ExampleState.Started);
stateObject.request();

stateObject.setState(ExampleState.Running);
stateObject.request();

stateObject.setState(ExampleState.Finished);
stateObject.request();

console.log(
  "-------------------------------------------------------------------"
);
