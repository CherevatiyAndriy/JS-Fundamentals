// Завдання 1

class Circle {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
    circumference() {
      return 2 * Math.PI * this.r;
    }
    static circumferenceFromRadius(r) {
      return 2 * Math.PI * r;
    }
    copy() {
      return new Circle(this.x, this.y, this.r);
    }
    static create(x, y, r) {
      return new Circle(x, y, r);
    }
    isPointInside(x, y) {
      return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) < this.r;
    }
    toString() {
      return `Circle(${this.x}, ${this.y}, ${this.r})`;
    }
  }
  const circle = new Circle(0, 0, 5);
  console.log(`Circle circumference: ${circle.circumference()}`);
  console.log(`Circle copy: ${circle.copy()}`);
  console.log(`Circle with radius 10 circumference: ${Circle.circumferenceFromRadius(10)}`);
  console.log(`Circle at (3, 3) with radius 2 is inside circle ${circle}: ${circle.isPointInside(3, 3)}`);
  console.log(`Circle at (6, 6) with radius 2 is inside circle ${circle}: ${circle.isPointInside(6, 6)}`);

// Завдання 2

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }
  let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
  }; 
  console.log(propsCount(mentor));

// Завдання 3

class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    showFullName() {
      console.log(`${this.surname} ${this.name}`);
    }
  }
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
    showFullName(middleName) {
      return `${this.surname} ${this.name} ${middleName}`;
    }
    showCourse() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.year + 1;
    }
  }
  const stud1 = new Student("Andrii", "Cherevatyi", 2020);
  console.log(stud1.showFullName("Pavlovych"));
  console.log("Current course: " + stud1.showCourse());

// Завдання 4
// А
class Marker {
    constructor(color, inkAmount) {
      this.color = color;
      this.inkAmount = inkAmount;
    }
    print(text) {
      let inkPerSymbol = 0.5;
      let symbolsToPrint = Math.floor(this.inkAmount / inkPerSymbol);
      let printedText = text.slice(0, symbolsToPrint);
      this.inkAmount -= printedText.length * inkPerSymbol;
      console.log(`%c${printedText}`, `color: ${this.color}`);
    }
  }
// Б
class RefillableMarker extends Marker {
    constructor(color, inkAmount, refillAmount) {
      super(color, inkAmount);
      this.refillAmount = refillAmount;
    }
    refill() {
      this.inkAmount += this.refillAmount;
      console.log(`Marker refilled. Current ink level: ${this.inkAmount}%`);
    }
  }
  const marker = new Marker("red", 80);
marker.print("Hello, Andrii!");
const refillableMarker = new RefillableMarker("yellow", 30, 50);
refillableMarker.refill();
refillableMarker.print("Hello, everyone!");

// Завдання 5

class Worker {
    constructor(fullName, dayRate, workingDays) {
      this._fullName = fullName;
      this._dayRate = dayRate;
      this._workingDays = workingDays;
      this._experience = 1.2;
    }
    showSalary() {
      let salary = this._dayRate * this._workingDays;
      console.log(`${this._fullName} salary: ${salary}`);
    }
    showSalaryWithExperience() {
      let salary = this._dayRate * this._workingDays * this._experience;
      console.log(`${this._fullName} salary: ${salary}`);
    }
    get showExp() {
      return this._experience;
    }
    set setExp(value) {
      this._experience = value;
    }
    get fullName() {
      return this._fullName;
    }
    set fullName(value) {
      this._fullName = value;
    }
    get dayRate() {
      return this._dayRate;
    }
    set dayRate(value) {
      this._dayRate = value;
    }
    get workingDays() {
      return this._workingDays;
    }
    set workingDays(value) {
      this._workingDays = value;
    }
  }
  
  let worker1 = new Worker("Pavlo Cherevatyi", 35, 23);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Andrii Cherevatyi", 65, 22);
  worker2.showSalary();
  console.log("New experience: " + worker2.showExp);
  worker2.setExp = 1.5;
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  
  let worker3 = new Worker("Vladimir Cherevatyi", 39, 23);
  worker3.showSalary();
  console.log("New experience: " + worker3.showExp);
  worker3.setExp = 1.5;
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  
  let workers = [worker1, worker2, worker3];
  workers.sort((a, b) => {
    return b.showExp * b.dayRate * b.workingDays - a.showExp * a.dayRate * a.workingDays;
  });
  console.log("Sorted salary:");
  for (let worker of workers) {
    console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`);
  }