class Book {
  page: { [id: number]: string } = {};

  getPage(number: number) {
    return this.page[number];
  }
}

export class BookFactory {
  static Books: { [name: string]: Book } = {};

  static getBook(name: string) {
    if (!BookFactory.Books[name]) {
      BookFactory.Books[name] = new Book();
    }

    return BookFactory.Books[name];
  }

  static getCount() {
    return Object.keys(BookFactory.Books).length;
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Flyweight  "Fly" in term Flyweight means light/not heavy
            Instead of creating thousands of objects that share common attribtues and result in situation where a large
            amount of memory or other resources are used.
    
            The Flyweight simplifies this process by having one dictionary object and start from their to manage.
            `);

console.log("Testing Flyweight design pattern");

const programmingBook = BookFactory.getBook("Programming Book");
programmingBook.page[1] = "Hello World this is page 1 in the Programming Book";

console.log(BookFactory.Books["Programming Book"].getPage(1));
console.log(BookFactory.getCount());

console.log(
  "-------------------------------------------------------------------"
);
