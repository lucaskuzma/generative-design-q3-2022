let s = 'string';
// let i = '5'; // oops
let i = 5;
let v = createVector(24, 96);
let o = {};

class Person {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
	grow(amount) {
      this.height += amount;
  }
}
let bob = new Person('bob', 4);

s = s + i;
// s = s * i; // oops
// s = s + v; // uh oh
// v = v * 5; // nope
v.mult(5);
