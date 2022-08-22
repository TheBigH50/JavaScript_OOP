console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//Exe1

class Person{
    constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
    };
   
    addHobby(hobby) {
return this.hobbies + hobby
    };
    removeHobby(hobby) {
        return this.hobbies - hobby
    };
    greeting(greet) {
        console.log(`${greet} fellow person`)
    }
};

