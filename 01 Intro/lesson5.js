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



// Завдання 3



// Завдання 4



// Завдання 5