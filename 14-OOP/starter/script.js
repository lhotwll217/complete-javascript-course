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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Calls to the parent constructor, makes this keyword available (by making it a Contructor fuction through inheritance?) If we didn't need this, the super call would suffice to pas all the arguments to the class.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I'm cool.`);
  }

  calcAge() {
    console.log(`I feel older than I am.`);
  }
}

const martha = new StudentCl('Marth Jones', 2012, 'Computer Science');
console.log(martha);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
//Creates a new object using the Proto of the object passed to .create
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

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

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} going ${this.speed} kmh`);
    return this;
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} going ${this.speed} kmh`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  //
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const audi = new CarCl('46', 'Audi');
console.log(audi);
console.log(audi.speedUS);
audi.brake();
audi.accelerate();

audi.speedUS = 120;
console.log(audi.speed);

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};
//Student.prototype = Person2.prototype ==> this leads to Student having the same prototype instead of inhereiting.
Student.prototype = Object.create(Person2.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

Student.prototype.constructor = Student;

console.log(mike instanceof Student);
console.log(mike instanceof Person2);

console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

*/
//Uses call to inherit methods on the Parent prototype
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//This links the prototype and makes the change
EV.prototype = Object.create(Car.prototype);

const ev = new EV('Tesla', 100);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} is going ${this.speed} with a charge of ${this.charge}`
  );
};

console.log(ev);

ev.brake();
ev.chargeBattery(67);
console.log(ev.charge);

ev.accelerate();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

class Account {
  //Public fields (instances) - references by this
  locale = navigator.language;
  //private fields
  #movements = [];
  //creates the pin as private and leaves it to be assigned for later
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  //API
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }
  //Private methods

  approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(100);
acc1.withdraw(50);

acc1.requestLoan();

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(6000).getMovements();

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(speed, make);
    this.#charge = charge;
  }

  accelerate() {
    this.speed = this.speed + 20;
    this.#charge = this.#charge - 1;
    console.log(
      `${this.make} is going ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  brake() {
    this.speed = this.speed - 10;
    console.log(`${this.make} going ${this.speed} kmh`);
    return this;
  }
}

const ev3 = new EVCl('T', 70, 50);

console.log(ev3.chargeBattery().chargeBattery(70).brake().accelerate().speedUS);

ev3.chargeBattery().chargeBattery(70).brake().accelerate().speedUS;
