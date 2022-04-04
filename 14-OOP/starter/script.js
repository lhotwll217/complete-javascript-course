'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // This creates a function for each object instead of using the prototype to delegate the behavior which would effect performance
  // this.calcAge = function () {
  //     console.log(2037 - this.birthYear)
  // }
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called this ={};
//3 {} linked to prototype
//4. function automatically calls this
const matilda = new Person('Matild', 2017);
const jack = new Person('Jack', 1975);

console.log(jack, matilda);

console.log(jonas instanceof Person);

//Prototype

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person);

const h1 = document.querySelector('h1');
// Function is also an objects, and also have prototypes which also have methods on them.
console.dir(x => x + 1);

Person.prototype.species = 'HomoSapiens';

// ownProperties are the ones only declared on the object
// Coding Challenge #1

/* 
// Every funct
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;

  // this.accelerate = function() {
  //     this.speed = this.speed + 10;
  //     console.log(`${this.make} going ${this.speed} kmh`)
  // }

  this.brake = function () {
    this.speed = this.speed - 5;
    console.log(`${this.make} going ${this.speed} kmh`);
  };
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going ${this.speed} kmh`);
};
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going ${this.speed} kmh`);
};

let bmw = new Car('BMW', 60);
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

// class expression
const PersonClExp = class {};

//class declarations
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // This is on prototype, not instance. This is like using Object.prototype.method() notation without having to manually manipulate the prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  //
  set fullName(name) {
    //Underscore is a convention but truly you are just creating a new property

    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullname`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey There');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.dir(jessica);
jessica.calcAge();
console.log(jessica.age);

// This is exactly the same as declaring in the Class declaration as we did with calcAge()

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// const walter = new PersonCl('Walt', 1963);

jessica.greet(); //=> Hey Jessica

//1. Classes are NOT hoisted
//2. Classes are first class citizens
//3. Classes are executed in strict mode

// Static Methods

Number.parseFloat(12);

Person.hey = function () {
  console.log('Hey There');
  console.log(this);
};

Person.hey();

PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//Creates a new object using the Proto of the object passed to .create
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
