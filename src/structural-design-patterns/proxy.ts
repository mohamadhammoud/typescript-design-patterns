class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface IDataAccesslayer {
  getUsers(): User[];
}

class Data implements IDataAccesslayer {
  users: User[];

  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }
}

export class ProxyCache implements IDataAccesslayer {
  users: User[];
  data: Data;

  constructor() {
    this.users = [];
    this.data = new Data();

    this.data.users = [];
  }

  getUsers() {
    if (this.users.length === 0) {
      const cachedUsers = this.data.users;
      this.users = cachedUsers;

      console.log("Cached Users...");
    }

    return this.users;
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Proxy
             Proxy design pattern can be used for multiple tasks if necessary.
      
             Proxy could function as cache or as authentication, authorization layers.
            `);

console.log("Testing Proxy cache design pattern");

const proxy = new ProxyCache();
proxy.data.users = [{ name: "Mohamad" }];

console.log(proxy.getUsers());
// returned cached users
console.log(proxy.getUsers());

console.log(
  "-------------------------------------------------------------------"
);
