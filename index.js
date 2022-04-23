
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name
    this.isFlying = false;
  }
  takeOff() {
    console.log(`The plane takes off and is flying.`)
    this.isFlying = true;
  }
  land() {
    console.log(`${this.name} lands and is no longer flying.`)
    this.isFlying = false;
  }
}
const jet = new Airplane({name: 747 })
jet.takeOff();
jet.land();
/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE READ TASK INSTRUCTIONS CAREFULLY TO KNOW WHEN TO USE OBJECT AS CONSTRUCTOR ARGUMENT. TESTS WILL NOT PASS IF USED WHEN NOT INSTRUCTED. ❗❗ */

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from 2 arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = []
  }
  eat(someFood){
    console.log(`${this.name} picks up ${someFood}.`)
    if(this.stomach.length >= 10){
      console.log(`They're not very hungry, though.`)
    }else{
      console.log(`Delicious!`)
      this.stomach.push(someFood);
    }
  }
  poop(){
    console.log(`Pushing...`);
    this.stomach = [];
    console.log(`${this.name} has pooped. Better clean it up.`)
  }
  toString(){
    console.log(`${this.name} is ${this.age}.`)
    return `${this.name}, ${this.age}`
  }
}
const trinity = new Person(`Trinity`, 24);
trinity.toString();
console.log(trinity.name);
console.log(trinity.age);

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon`, from 2 arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon, tankSize){
    this.model = model,
    this.milesPerGallon = milesPerGallon,
    this.tankSize = tankSize;
    this.tank = 0,
    this.odometer = 0
    this.drivableMiles = (this.milesPerGallon * this.tank);
    this.spareCans = 2;
  }

  checkDash(){
    console.log(`You check the dashboard. With mileage of ${this.milesPerGallon} miles to the gallon, it looks like you can drive ${this.drivableMiles} miles with what you've got left - all ${this.tank} gallons of it.`);
  }

  fill(gallons){
    this.tank += gallons;

    if (gallons > this.tankSize || this.tank > this.tankSize){
      console.log(`Woah, ${gallons} gallons would be way too much! The ${this.model} can only hold ${this.tankSize} gallons of gas. You top it up and save your money.`)
      this.tank = this.tankSize;
    } else {
      console.log(`You stop at a gas station. The ${this.model} has ${this.tank} gallons in the tank now.`);
    }

    this.drivableMiles = (this.milesPerGallon * this.tank);
    console.log(`You can drive for ${this.drivableMiles} miles before you'll run out of gas.`)
  }

  drive(distance){
    
    if (this.tank >= (distance/this.milesPerGallon)){
      this.tank -= (distance / this.milesPerGallon);
        if (this.tank > 0){
          this.odometer += distance;
          this.drivableMiles = (this.milesPerGallon * this.tank);
          console.log(`You're left with ${(this.tank).toFixed(2)} gallons in the tank. There are ${this.drivableMiles} drivable miles left, and the odometer reads ${this.odometer} miles after driving ${distance} of them.`)
        } else {
          this.odometer += distance;
          console.log(`You feel the car sputter to a halt just as you reach your destination. You despair as you glance at the dashboard.`)
          console.log(`There are ${this.tank} gallons left in the ${this.model}, and can't drive a single mile more!`)
          console.log(`At least you made it on time, you think, and at least the ${this.model} was able to make it for all ${distance} miles.`)
          console.log(`The odometer tells you that you've traveled a total of ${this.odometer} miles.`)
        }
    } else if (this.tank < (distance/this.milesPerGallon)) {
      this.drivableMiles = (this.milesPerGallon * this.tank);
      console.log(`The ${this.model} won't be able to make the last ${(distance - this.drivableMiles).toFixed(2)} miles...`);
      this.tank = 0;
      console.log(`It drives for ${this.drivableMiles} miles before it runs out of gas.`);
      this.odometer += (this.drivableMiles);
      console.log(`The odometer tells you that your ${this.model} has driven a total of ${this.odometer} miles since it drove off the lot.`)
      return `I ran out of fuel at ${this.odometer} miles!`
    } else {(console.log(`Something's wrong. The key doesn't start the ignition...`));}
}
  emergency(){
    if (this.tank === 0){
      if (this.spareCans > 1){
        console.log(`It's a good thing you keep spare gas in the back. You'd better find a gas station ASAP, though.`)
        this.tank += 5;
        this.spareCans -= 1;
        this.drivableMiles = (this.milesPerGallon * this.tank);
        console.log(`You've added 5 gallons to the tank and can now drive for a maximum of ${this.drivableMiles} miles. You only have one spare gas can left.`)
      } else if (this.spareCans == 1){
        console.log(`Yikes, can this day get any worse!! You're one more gas can away from getting stranded out here...`)
        this.tank += 5;
        this.spareCans -= 1;
        this.drivableMiles = (this.milesPerGallon * this.tank);
        console.log(`Let's hope there's a gas station within ${this.drivableMiles} miles of here.`)
      } else {
        console.log(`Your ${this.model} putters to a stop and you curse under your breath as you step out. Unfortunately, when you get to the trunk, you realize that you have ${this.spareCans} spare cans of gas left, and you'll have to call a tow truck.`)
      }
      
    }
  }
}
const florence = new Car(`Fiat`, 33, 13);
console.log('florence.checkDash();')
florence.checkDash()

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  constructor(prop){
    this.name = prop.name;
    this.age = prop.age;
    this.location = prop.location
  }
  speak(){
    console.log(`Hello! My name is ${this.name}, and I'm from ${this.location}!`)
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Lambdasian {
  constructor(prop){
    super(prop);
    this.specialty = prop.specialty;
    this.favLanguage = prop.favLanguage;
    this.catchPhrase = prop.catchPhrase;
  }
}


/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

class Student {
   
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager {
   
}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
