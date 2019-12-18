// this in the global scope
console.log(this);

var furthermore = furthermore || {};

furthermore.tech = {
  init: function() {
    this.hello();
  },
  logThis: function() {
    console.log(this);
  },
  hello: function() {
    console.log("hello");
  },
  sayName: function(name) {
    console.log(`my name is ${name}`);
  },
  printArr: function(arr) {
    return arr.map(function(num) {
      console.log(num);
      // console.log(this);
    });
  },
  printArrArrow: function(arr) {
    return arr.map(num => {
      console.log(num);
      // console.log(this);
    });
  },
  logToConsole: function(info) {
    console.log(info);
  },
  donut: {
    callThis: function() {
      console.log(this);
    },
    callThisArrow: () => console.log(this),
    insideDonut: {
      name(name) {
        console.log(`Hello ${name}!`);
      }
    }
  },
  data: [1, 2, 3, 4, 5],
  loopData: function() {
    console.log(this.data);
  },
  loopDataArrow: () => {
    console.log(this.data);
  }
};

// const arr = ["ryan", "lea", "ji", "brooke"];

// furthermore.tech.logThis();
// furthermore.tech.hello();
// furthermore.tech.init();
// furthermore.tech.sayName("ryan"); // show condensed function notation
// furthermore.tech.printArr(arr); // show binding using logToConsole
// furthermore.tech.printArrArrow(arr);
// furthermore.tech.donut.callThis();
// furthermore.tech.donut.callThisArrow();
// furthermore.tech.donut.insideDonut.name("Lea");
// furthermore.tech.loopData();
// furthermore.tech.loopDataArrow();

// const Dog = function(name, breed, age) {
//   (this.name = name), (this.breed = breed), (this.age = age);
// };

// console.log(Dog);
// const firstDog = new Dog("Buddy", "Lab", 3);
// console.log(firstDog);
// const secondDog = new Dog("Tito", "Golden Retriever", 1);
// console.log(secondDog);
// show what happens if arrow function instead of regular function
