console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//Exe1

class Person {
  constructor(name = "Stranger", pets = 0, residence = "Nowhere", hobbies = []) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }
  removeHobby(oldHobby) {
    this.hobbies = this.hobbies.filter((hobby) => hobby != oldHobby);
  }
  greeting(greet) {
    console.log(`${greet} fellow person ${this.name}`);
  }
}

//Exe2

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting(greet) {
    console.log(`${greet} fellow coder ${this.name}`);
  }
}

//Exe3

let Harrison = new Person("Harrison", 0, "Saint Joseph MN", ["Lawn Care",]);
let coderHarrison = new Coder(
  "coderHarrison",
  0,
  "Saint Joseph MN",
  ["Digital Lawn Care",]
);

Harrison.greeting("Bonjour");
coderHarrison.greeting("Beep Boop");
Harrison.addHobby("Bowling");
coderHarrison.addHobby("Digital Bowling")
console.log(Harrison, coderHarrison);

//Exe4

class Calculator {
  constructor(result) {
    this.result = result;
  }
  add(a, b) {
    if (a != undefined && b != undefined) {
      return (this.result = a + b);
    } else {
      return this.result;
    }
  }
  subtract(a, b) {
    if (a != undefined && b != undefined) {
      return (this.result = a - b);
    } else {
      return this.result;
    }
  }
  multiply(a, b) {
    if (a != undefined && b != undefined) {
      return (this.result = a * b);
    } else {
      return this.result;
    }
  }
  divide(a, b) {
    if (a != undefined && b != undefined) {
      return (this.result = a / b);
    } else {
      return this.result;
    }
  }
  printAnswer() {
    return console.log(`${this.result}`);
  }
}

let results = new Calculator(0)
results.printAnswer((results.multiply(2, 3)));

