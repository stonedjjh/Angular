export class Person {
  public name?: string;
  public address?: string;

  constructor() {
    this.name = "John Doe";
    this.address = "123 Main St";
  }
}

export class Hero extends Person {
  public alterEgo?: string;
  public age?: number;
  public realName?: string;
  constructor() {
    super();
    this.alterEgo = "Ironman";
    this.age = 45;
  }
}

const ironman = new Hero();
console.log(ironman);

//composicion en vez de herencia se usa una clase dentro de otra clase

class Hero2 {
  public person: Person;
  public alterEgo?: string;
  public age?: number;
  public realName?: string;
  constructor() {
    this.person = new Person();
    this.alterEgo = "Ironman";
    this.age = 45;
  }
}
