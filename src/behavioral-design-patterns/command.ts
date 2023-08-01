class Receiver {
  runCommand1() {
    console.log(`Run command 1`);
  }

  runCommand2() {
    console.log(`Run command 1`);
  }
}

export interface ICommand {
  execute(): void;
}

class Command1 implements ICommand {
  receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.runCommand1();
  }
}

class Command2 implements ICommand {
  receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.runCommand2();
  }
}

class Invoker {
  commands: { [id: string]: ICommand } = {};

  register(commandName: string, command: ICommand) {
    this.commands[commandName] = command;
  }

  execute(commandName: string) {
    if (commandName in this.commands) {
      this.commands[commandName].execute();
      return;
    }

    console.log(`Command ${commandName} not recognised`);
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Command
      Command design pattern is a behavioral design pattern, in which an abstraction exists between an object
      that invokes a command, and the object that performs it.
  
     E.g: a button will call the invoker, that will call a pre-registered Command, that Receiver will perform.
  `);

const receiver = new Receiver();

const command1 = new Command1(receiver);
const command2 = new Command2(receiver);

const invoker = new Invoker();

invoker.register("Command 1", command1);
invoker.register("Command 2", command2);

invoker.execute("Command 1");
invoker.execute("Command 2");
invoker.execute("Command 3");

console.log(
  "-------------------------------------------------------------------"
);
