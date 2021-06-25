// ---------------filter() method----------------------

// let cities = [
//   { name: "Los Angeles", population: 3792621 },
//   { name: "New York", population: 8175133 },
//   { name: "Chicago", population: 2695598 },
//   { name: "Houston", population: 2099451 },
//   { name: "Philadelphia", population: 1526006 },
// ];

// const bigCitys = cities
//   .filter((city) => city.population < 3000000)
//   .sort((a, b) => a.population - b.population)
//   .map((city) => console.log(city.name + ": " + city.population));

// let data = [10, 20, "30", 1, 5, "JavaScript filter", undefined, "example"];

// let range = {
//   lower: 1,
//   upper: 10,
// };

// let numberInRange = data.filter(function (element) {
//   if (typeof element !== "number") {
//     return false;
//   }
//   return element >= this.lower && element <= this.upper;
// }, range);

// console.log(numberInRange); // [10, 1, 5]

// ---------------reduce() method----------------------

// let numbers = [1, 2, 3];

// const sum = numbers.reduce((accomulator, currentValue) => {
//   return (accomulator + currentValue);
// }, 10);

// console.log(sum);

// let shoppingCart = [
//   {
//     product: "phone",
//     qty: 1,
//     price: 699,
//   },
//   {
//     product: "Screen Protector",
//     qty: 1,
//     price: 9.98,
//   },
//   {
//     product: "Memory Card",
//     qty: 2,
//     price: 20.99,
//   },
// ];

// let total = shoppingCart.reduce((acc, curr) => {
//   return acc + curr.qty * curr.price;
// }, 0);

// console.log(total);

// ---------------map() method----------------------

// let numbers = [16, 25, 36];
// let results = numbers.map((e) => Math.sqrt(e));
// console.log(results);

// ---------------forEach() method----------------------

// function Counter() {
//   this.cnt = 0;
//   let self = this;
//   return {
//     increase: function () {
//       self.cnt++;
//     },
//     current: () => {
//       return self.cnt;
//     },

//     reset: function () {
//       self.cnt = 0;
//     },
//   };
// }

// var counter = new Counter();
// var numbers = [1, 2, 3];
// var sum = 0;

// numbers.forEach(function (e) {
//   sum += e;
//   this.increase();
// }, counter);

// console.log(sum);
// console.log(counter.current());

// ---------------join() method----------------------

// const cssClass = ["btn", "btn-primary", "btn-active"];

// let total = cssClass.join(" ");

// console.log(total);

// const title = "JavaScript array join example";
// const test = title.split(" ").join("-").toLowerCase();
// console.log(test);

// let add = (function (a, b) {
//   return a + b;
// })(10, 20);

// console.log(add);

// ----------------------Promise()--------------------------

// function makePromise(completed) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (completed) {
//         resolve("I have completed learning JS.");
//       } else {
//         reject("I haven't completed learning JS yet.");
//       }
//     }, 2 * 1000);
//   });
// }

// const learnJS = makePromise(true);

// learnJS
//   .then((success) => console.log(success))
//   .catch((failure) => console.log(failure))
//   .finally(() => console.log("Completed"));

// ---------------------------------Async / Await -------------------------
// async() luôn luôn trả về promise nên ta có thể dùng then() được sau đó
// async function test() {
//   return "hung";
// }
// test().then(console.log);

// Sử dụng từ khóa await để chờ một lời hứa sẽ giải quyết trong trạng thái đã resolve hoặc reject.

// ---------------------------------this------------------------------------

// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   },
// };

// const test = car.getBrand.bind(car);

// console.log(test())

// function Car(brand) {
//   if (!new.target) {
//     throw Error("Must use the new operator to call the function");
//   }
//   this.brand = brand;
//   this.getBrand = function () {
//     return this.brand;
//   };
// }

// const car = new Car("Honda");

// console.log(car.getBrand());

// const BMV = new Car("BMV");
// console.log(BMV.brand);

// ----------------------------------------------------------------------------------
// console.log(Object.prototype.constructor);

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return "Hi, I'm " + this.name + "!";
// };

// let p1 = new Person("John");

// let greeting = p1.greet();
// console.log(greeting);

// -----------------------------------------------------------------------------
// Classes are special functions
// JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// const test = new Person("hung");

// // console.log(test.getName());
// console.log(typeof Person);

// -----------------The for...in loop & inheritance-------------------

// const decoration = {
//   color: "red",
// };

// Kế thừa lại các các thuộc tính của decoration
// const circle = Object.create(decoration);

// Tạo thêm cho chính circle
// circle.radius = 10;

// Lặp qua tất cả
// for (const key in circle) {
//   console.log(key);
// }

// Lặp qua những j mà circle vốn có(không kế thừa của cha)
// for (const key in circle) {
//   if (circle.hasOwnProperty(key)) console.log(key);
// }

// -------------------------------------------------------------------------
// function getName() {
//   let firstName = "Hung",
//     lastName = "Le";
//   return {
//     firstName,
//     lastName,
//   };
// }

// const { firstName, lastName } = getName();

// // console.log(firstName, lastName);

// console.log(getName.prototype.constructor);

// ---------------------------------JavaScript Function Type------------------------------------------
// All functions in JavaScript are objects.
//  They are the instances of the Function type.
//  Since functions are objects, they have properties and methods like other objects.

// let cat = { type: "Cat", sound: "Meow" };
// let dog = { type: "Dog", sound: "Woof" };

// function say(test) {
//   console.log(test);
//   console.log(this.type + " " + this.sound);
// }

// say.apply(cat, ["hung"]);
// console.log(say instanceof Function);

// ------------------------call() method-------------------------------------

// function sum(a, b) {
//   return a + b;
// }

// const test = sum.call(this, 10, 20);
// console.log(test);

// var greeting = "Hi";

// var mess = {
//   greeting: "Halo",
// };

// function say(name) {
//   console.log(this.greeting + " " + name);
// }

// say.call(this, "Hung");
// say.call(mess, "Hung");

// function Box(h, w) {
//   this.h = h;
//   this.w = w;
// }

// function test(h, w, color) {
//   Box.call(this, h, w);
//   this.color = color;
//   console.log(h, w, this.color);
// }

// test.call(this, 3, 5, "red");

// ------------------------------apply() method----------------------------------
// const computer = {
//   name: "MacBook",
//   isOn: false,
//   turnOn() {
//     this.isOn = true;
//     return `The ${this.name} is On`;
//   },
//   turnOff() {
//     this.isOn = false;
//     return `The ${this.name} is Off`;
//   },
// };

// const server = {
//   name: "Dell PowerEdge T30",
//   isOn: false,
// };

// const k = computer.turnOn.apply(server);
// console.log(k);

// ---------------------------------bind() method-----------------------------------------
// let runner = {
//   name: "Runner",
//   run: function (speed) {
//     console.log(this.name + " runs at " + speed + " mph.");
//   },
// };

// let flyer = {
//   name: "Flyer",
//   fly: function (speed) {
//     console.log(this.name + " flies at " + speed + " mph.");
//   },
// };

// const run = runner.run.bind(flyer, 50);
// // const run = runner.run.call(flyer, 50);
// // const run = runner.run.apply(flyer, [50]);

// run();

// ----------------------JavaScript Closures-----------------------------
// a closure is a function that references variables in the outer scope from its inner scope.
//  The closure preserves the outer scope inside its inner scope.
// function greeting() {
//   let mess = "Hi";

//   function say() {
//     console.log(mess);
//   }
//   return say;
// }

// const test = greeting();

// test();

// function greeting(mess) {
//   return function say(name) {
//     return mess + " " + name;
//   };
// }

// const hung = greeting("hi");
// // const hung = greeting("halo");
// console.log(hung("Hung"));

// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log("after " + index + " second(s):" + index);
//   }, index * 1000);
// }

// function f1() {
//   var N = 0; // N luon duoc khoi tao khoi ham f1 dduowcj thuc thi
//   console.log(N);
//   function f2() {
//     // Ham f2
//     N += 1; // cong don cho bien N
//     console.log("-->>", N);
//   }

//   return f2;
// }

// var result = f1();

// result(); // Chay lan 1
// result(); // Chay lan 2
// result(); // Chay lan 3

// function speak() {
//   var words = "hi";
//   return function logIt() {
//     console.log(words);
//   };
// }

// var sayHello = speak();

// // console.log(sayHello);
// sayHello();

// function name(n) {
//   return function (a) {
//     return `${n} likes ${a}`;
//   };
// }

// var j = name("John");
// var c = name("Cindy");

// console.log(j);

// -----------------------------------JavaScript Regular Expression-------------------------------------

// const pattern = RegExp("hi", "gi");

// const name = pattern.test("hI LMH");

// console.log(name);

// let message = "Hi, are you there? hi, HI...";
// let re = RegExp("hi", "gi");

// let matches = [];
// let match = message.match(re);
// console.log(match);

// do {
//   match = re.exec(message);
//   if (match != null) matches.push(match);
// } while (match != null);

// console.log(matches);

// let str = "Are you Ok? Yes, I'm OK";
// const pattern = RegExp("ok", "gi");

// const test = str.match(pattern);

// console.log(test);

// ----------------------------------Regular Expression: Character Classes-------------------------------------

// let phone = "+1-(408)-555-0105_hung";

// const pattern = RegExp("/w", "g");
// // console.log(pattern);

// const result = phone.match(pattern).join("");

// console.log(result);

// let str = "00036 is o_xygen";
// let re = /\d\d/g;

// console.log(str.match(re));

// let phone = "+1- (408)-555-0105";
// let re = new RegExp("\\D", "g");
// console.log(phone.replace(re, ""));

// let re = /\w..6/s;
// console.log("EA\n\n6".match(re));

// ----------------------------------Regular Expression: Anchors------------------------

// let str = "JavaScript";

// console.log(/^J/.test(str));
// console.log(/J$/.test(str));

// let isValid = /^\d\d:\d\d$/.test("12:34");
// console.log(isValid);

// let isInvalid = /^\d\d:\d\d$/.test("12:347");
// console.log(isInvalid);

// -------------------------------Regular Expression: Sets and Ranges---------------------

// let nameH = "Toiz la toiz boiz hoiz";
// let re = /[a-z]oiz/gi;
// console.log(nameH.match(re));

// let reg = /[^a-z]oiz/gi;
// console.log(nameH.match(reg));

// -------------------------------Regular Expression: Quantifiers--------------------------
// let str = "The official name of ES11 is ES2020 65789";

// const re = /\d{4}/g;
// console.log(str.match(re));

// const re2 = /\d{2,4}/g;
// console.log(str.match(re2));

// const re3 = /\d{2,}/g;
// console.log(str.match(re3));

// let chars = ["A", ..."BYYC", "D"];
// console.log(chars);

// export default function (arr) {
//   // sorting here
// }
// export function heapSort(arr) {
//   // heapsort
// }

// -------------------------------JavaScript Inheritance Using extends & super---------------------

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    // super.walk();
    console.log("flying");
  }
}

let bird = new Bird(2);

bird.walk();
bird.fly();
