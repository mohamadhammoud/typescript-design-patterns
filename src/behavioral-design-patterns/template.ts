export abstract class Template {
  stepOne(): void {}

  abstract stepTwo(): void;

  stepThree(): void {
    console.log("Template step 3");
  }

  templateMethod() {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }
}

console.log(
  "-------------------------------------------------------------------"
);

console.log(`Template
              Template design pattern defines an algorithm in terms of abstract operations and subclasses
              override some or all of the methods to create concrete behaviors.
              
              Do use it when you have a class contains many conditional statements.
          `);

class TemplateA extends Template {
  stepTwo(): void {
    console.log("TemplateA: stepTwo...");
  }
}

class TemplateB extends Template {
  stepTwo(): void {
    console.log("TemplateB: stepTwo...");
  }

  stepThree(): void {
    console.log("TemplateB: stepThree...");
  }
}

const templateA = new TemplateA();
templateA.templateMethod();

const templateB = new TemplateB();
templateB.templateMethod();

console.log(
  "-------------------------------------------------------------------"
);
