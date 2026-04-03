//  Section 1: Printing & User Interaction

// Print your name and designation in the console.
console.log("Name:Ragul");
console.log("Designation:Developer")

// show alert message\
alert("Welcome to JavaScript Session");

// ask the user
let coding = confirm("Do you like coding")
console.log("User likes coding :" + coding);

// prompt
let food = prompt("Enter your favourite food:");
console.log("Favourite food:" + food);

// document.writeln
document.writeln("Good Evening Team");


// Section 2: Console Methods

// Print a number
console.log(500);

// warning message
console.warn("This is a warning");

// error message
console.error( "Something went wrong!");

// Clear the console
console.clear();


//  Section 3: Data Types

// variable with your name 
let myName = "Ragul";
console.log(typeof myName);

// Store your age 
let age = 24;
console.log(typeof age);

// boolean value
let work = true;
console.log(work);

//  variable without value
let x;
console.log(x);

// null
let y = null;
console.log(y);


//  Section 4: Arrays

// Create an array
let fruits = ["Apple" , "Mango" , "Guava" , "Banana" , "Pineapple"];
console.log(fruits);

//  first and last element
console.log("First:" ,fruits[0]);
console.log("Last:" ,fruits[fruits.length-1]);

// Add one more fruit 
fruits.push ("Orange");
console.log("adding fruit:",fruits);

// Remove the last element
fruits.pop();
console.log("removing:" , fruits);

// length of the array
console.log("length:" , fruits.length);




// Section 5: Objects

// Create an object
let Student = {
   name: "Ragul" ,
   age: "24" ,
   course: "Developer",
    fruits:["Apple" , "Orange" , "Banana"]
   
};

//Print the student name
console.log("Name:" , Student.name);

// Add a new property 
Student.college = "Selvamm College";
console.log("After adding college:" , Student);

// Access nested array
console.log("First fruit:",
Student.fruits[1]);

// Update a property value  
Student.age = 25;
console.log("Updated Age:" , Student.age);


// Section 6: Operators

let num1 = 20;
let num2 = 15;

// Add two numbers
console.log("Add:" , num1 + num2);

// Subtract
console.log("Sub:" , num1 - num2);

// Multiply
console.log("Multiply:" , num1 * num2);

// Divide
console.log("Divide:" , num1 / num2);

// Remainder
console.log("Remainder:" , num1 % num2);

// exponent operator 
console.log("Exponent:" , num1 ** num2);


// Section 7: Increment & Decrement

// post increment
let a = 5;
console.log("Post increment:", a++);
console.log("After increment:" , a);

// pre increment
let b = 5;
console.log("Pre increment:" , ++a);

//  difference between num++ and ++num
let X = 5;
console.log("num++:" , X++);
console.log("++num:" , ++X);

//  decrement operator
let Y = 5;
console.log("Post decrement:" , Y++);
console.log("After decrement:" , Y);

// Predict output
let A = 5;
let B = A++;
let C = ++A;

console.log("A:" , A);  //7
console.log("B:" , B);  //5
console.log("C:" , C);  //7


//  Section 8: Real-Time Logic Tasks

// user age and check if eligible to vote.
let Age = prompt("Enter your Age");
if (Age >= 18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible");
}

// user name and greet
let User = prompt("Enter your Name");
console.log("Hello" + User);

// Store marks in array and print highest value
let marks = [80 , 79 , 45 , 98 ,89];
let max = Math.max(...marks);
console.log("Maximum:" , max);

//  fruits category
let fruit = {
    redcolor : ["Apple" , "Strawberry"],
    yellow : ["Banana"]
};
console.log("Category:" , fruit.redcolor);

// Combine prompt + array
let favFruit = [];
favFruit.push(prompt("Enter Fruit 1:"));
favFruit.push(prompt("Enter Fruit 2:"));
favFruit.push(prompt("Enter Fruit 3:"));
console.log("Your Favourite Fruit:" , favFruit);