// Week5 file..
// Object data type...
// var x = 10;
// var name = ["Alan", "Bob"];
// var num = [1, 2, 3];

// var obj = {}; //Empty Object Literal

// var c1 = { course: "Programming", college: "Keyin" };
// console.log(c1.course); //dot notation to access object data
// console.log(c1.college);

// console.log(c1["course"]); //index notation...
// console.log(c1["college"]);

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 3,
// };

// console.log(user);

// console.log(user);
// user.login();
// console.log(user);
// user.logout();
// console.log(user);

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 3,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// let user1 = {
//   firstName: "Bob",
//   lastName: "Smith",
//   email: "bob@gmail.com",
//   loggedIn: true,
//   level: 2,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// let user2 = {
//   firstName: "Christina",
//   lastName: "Lee",
//   email: "chris@gmail.com",
//   loggedIn: true,
//   level: 3,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user1.lastName);
// console.log(user.email);

// Constructor function to create objects...

// function User(f, l, e, v) {
//   this.firstName = f;
//   this.lastName = l;
//   this.email = e;
//   this.level = v;
//   this.department = "HR";
//   this.loggedIn = false;

//   this.login = function () {
//     this.loggedIn = true;
//   };
//   this.logout = function () {
//     this.loggedIn = false;
//   };
// }

// let alan = new User("Alan", "Smith", "alan@gmail.com", 3);
// let bob = new User("Bob", "Woolmer", "bob@gmail.com", 2);
// let chris = new User("Christina", "Lee", "chris@gmail.com", 2);

// prototype inheritance...
// All those methods or properties that we don't need to look for in the current object's prototype chain 
// are automatically inherited from its parent object, making prototype inheritance a powerful mechanism 
// for efficient code organization and reuse.


// alan.login();
// bob.login();
// chris.login();

// console.log(alan.department);
// alan.department = "IT";
// console.log(alan);

// var was a legacy way of declaring variables in JS. ES5 and ES6 (advanced versions of javascript were introduced, they defined two new ways of definging variables ... let and const...)
// var has a function level scope. var will only be available in a function where it is defined not outside of it...

// let has a block level scope :)

// const is a constant value that once defined cannot be changed...

// function A() {
//     var x = 10;
//     let y = 20;
//     const z = 30;
  
//       for (let i = 0; i < 5; i++) {
//         console.log(i);
//         console.log("The value of x is", x);
//         console.log("The value of y is", y);
//       }
  
//       console.log(z); //
//       z = z + 10;
//       console.log(z);
//   }
  
//   A();


// // Sample arrays of random first names and last names
// const randomFirstNames = ["Alice", "Bob", "Charlie", "David", "Ella", "Fiona", "Dick"];
// const randomLastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Mavrick"];

// // Function to generate a random integer within a range
// function getRandomIndex(arr) {
//   return Math.floor(Math.random() * arr.length);
// }

// // Initialize the users array
// let users = [];

// // Number of users you want to create
// const numberOfUsers = 5;

// // Generate user objects with random names and other properties
// for (let i = 0; i < numberOfUsers; i++) {
//   const randomFirstName = randomFirstNames[getRandomIndex(randomFirstNames)];
//   const randomLastName = randomLastNames[getRandomIndex(randomLastNames)];
  
//   let user = {
//     firstName: randomFirstName,
//     lastName: randomLastName,
//     email: `${randomFirstName.toLowerCase()}@gmail.com`,
//     loggedIn: false,
//     level: 3,
//     login: function () {
//       this.loggedIn = true;
//     },
//     logout: function () {
//       this.loggedIn = false;
//     },
//   };

//   users.push(user);
// }

// // Display the array of user objects
// console.log(users);

