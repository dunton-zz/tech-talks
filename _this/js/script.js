// this in the global scope
console.log(this);

// const furthermore = {
//   init: function() {
//     this.hello();
//   },
//   logThis: function() {
//     console.log(this);
//   },
//   hello: function() {
//     console.log("hello");
//   },
//   sayName: function(name) {
//     console.log(`my name is ${name}`);
//   },
//   printArr: function(arr) {
//     return arr.map(function(num) {
//       console.log(num);
//       // console.log(this);
//     });
//   },
//   printArrArrow: function(arr) {
//     return arr.map(num => {
//       console.log(num);
//       // console.log(this);
//     });
//   },
//   logToConsole: function(info) {
//     console.log(info);
//   },
//   donut: {
//     callThis: function() {
//       console.log(this);
//     },
//     callThisArrow: () => console.log(this),
//     insideDonut: {
//       name(name) {
//         console.log(`Hello ${name}!`);
//       }
//     }
//   }
// };

// const arr = ["ryan", "lea", "ji", "brooke"];

// furthermore.logThis();
// furthermore.hello();
// furthermore.init();
// furthermore.sayName("ryan"); // show condensed function notation
// furthermore.printArr(arr); // show binding using logToConsole
// furthermore.printArrArrow(arr);
// furthermore.donut.callThis();
// furthermore.donut.callThisArrow();
// furthermore.donut.insideDonut.name("Lea");

// const Dog = function(name, breed, age) {
//   (this.name = name), (this.breed = breed), (this.age = age);
// };

// console.log(Dog);
// const firstDog = new Dog("Buddy", "Lab", 3);
// console.log(firstDog);
// const secondDog = new Dog("Tito", "Golden Retriever", 1);
// console.log(secondDog);
// show what happens if arrow function instead of regular function
