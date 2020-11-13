/*
class User {
  constructor(fN, lN, em, ph) {
    this.firstName = fN;
    this.lastName = lN;
    this.email = em;
    this.phone = ph;
  }
  giveFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let joeyUser = new User(
  "Joey",
  "Brown",
  "joey.brown@kenzie.academy",
  "8883334433"
);
console.log(joeyUser.firstName);
console.log(joeyUser.giveFullName());
console.log(joeyUser["giveFullName"]());
let emeryUser = new User("Emery", "Marks", "emery@gmail", "8554432453");
console.log(emeryUser["giveFullName"]());
emeryUser.lastName = "Checkmarks";
emeryUser.middleName = "Patrick";
console.log(emeryUser["giveFullName"]());
console.log(emeryUser);

let userObject = {
  firstName: "Joey",
  lastName: "Brown",
  email: "joey.brown@kenzie.academy",
  phone: "8883334433",
  giveFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//console.log(user.firstName);
//console.log(user.lastName);
//user.lastName = "Blue";

//console.log(user.giveFullName());
*/
class Animal {
  constructor(species, legs, hasGills, tails, diet, noise) {
    this.species = species;
    this.legs = legs;
    this.hasGills = hasGills;
    this.tails = tails;
    this.diet = diet;
    this.noise = noise;
    this.hunger = 100;
  }
  eat(food) {
    if (this.hunger > 50) {
      if (food === "meat" && this.diet === "carnivore") {
        this.hunger = 0;
      } else if (food === "veggies" && this.dies === "herbivore") {
        this.hunger = 0;
      } else {
        this.hunger = 0;
      }
    }
  }
  exercise() {
    if (this.hunger < 50) {
      this.hunger = 100;
      return true;
    }
    return false;
  }
}

let cat = new Animal("feline", 4, false, true, "carnivore", "meow");
cat.eat("meat");
console.log(cat.exercise());
console.log(cat);
