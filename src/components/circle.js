// import using require
const Shape = require("./shape.js");

// declare class
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Calculated Area of Circle with color: " + this.color);
  }
}

// export class using module.exports
module.exports = Circle;
