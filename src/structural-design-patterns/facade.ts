class Wallets {
  getBalance(userId: number) {
    return 0;
  }
}

class Users {
  registerUser() {
    console.log("User has been registered");
  }
}

export class SystemAPI {
  wallets: Wallets;
  users: Users;

  constructor() {
    this.wallets = new Wallets();
    this.users = new Users();
  }

  getBalance(userId: number) {
    return this.wallets.getBalance(userId);
  }

  registerUser() {
    this.users.registerUser();
  }
}

console.log(`Facade
        Do use Facade design pattern when you want to provide a simple interface to a complex subsystem.

        Facade is an optional layer that doesn't alter subsystem.
    `);

console.log("Testing Facade design pattern");

const systemAPI = new SystemAPI();
systemAPI.registerUser();
console.log(systemAPI.getBalance(1));

console.log(
  "-------------------------------------------------------------------"
);
