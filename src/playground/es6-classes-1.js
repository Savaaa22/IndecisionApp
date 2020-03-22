class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description += ` Their major is ${this.major}.`;
    }
  }
}

const me = new Student("Sava Polimac", 20, "Computer Science");
console.log(me);

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGretting() {
    let gretting = super.getGretting();
    if (this.hasHomeLocation()) {
      gretting = gretting += ` I'm visiting from ${this.homeLocation}.`;
    }
  }
}
