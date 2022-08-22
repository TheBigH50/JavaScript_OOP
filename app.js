console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//Exe1

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    return this.hobbies + hobby;
  }
  removeHobby(hobby) {
    return this.hobbies - hobby;
  }
  greeting() {
    console.log(`Hello fellow person ${this.name}`);
  }
}

//Exe2

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log(`Hello fellow coder ${this.name}`);
  }
}

//Exe3

let Harrison = new Person("Harrison", 0, "Saint Joseph MN", "Lawn Care");
let coderHarrison = new Coder("coderHarrison", 0, "Saint Joseph MN", "Digital Lawn Care");

Harrison.greeting();
coderHarrison.greeting();
console.log(Harrison, coderHarrison)