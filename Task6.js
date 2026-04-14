// Task 1: E-commerce Cart Total

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
]

let totalCart = cart.reduce ((total,item) => {return total+ (item.price* item.qty);},0 )
console.log("Total price:", totalCart);

let products = cart.filter (item => item.price > 1000);
console.log(products);

let upper = cart.map (item => item.name.toUpperCase());
console.log(upper);



// Task 2: Student Result System

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
]

let student = students.filter(students => students.marks < 50);
console.log(student);

let distinction = students.some (students => students.marks > 80);
console.log("Distinction:",distinction);

let pass = students.every (students => students.marks > 35);
console.log("Students Passed:",pass)

let fail = student.find(students => students.marks < 40);
console.log("First Failed Student:",fail);



// Task 3: Employee Salary Analysis

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
]

let salary1 = employees.map(emp => ({ 
    ...emp, salary:emp.salary * 1.10}));
console.log(salary1)

let employe = employees.filter (emp => emp.salary >30000);
console.log("Salary > 30000:",employe)

let expense = employees.reduce((total,sum) => total + sum.salary,0 );
console.log("Total Salary:",expense);

let high = employees.sort((a,b) => b.salary - a.salary);
console.log("Highest Salary:",high);



// Task 4: String Real Use Case (Search System)

let Products = ["Laptop", "Mobile", "Tablet", "Camera"]

let includes = Products.includes ("Mobile");
console.log("Includes:",includes)

let Case = Products.map(p => p.toLowerCase());
console.log("Lowercase:",Case); 

let index = Products.indexOf("Tablet");
console.log("IndexOf:", index);

let join = Products.join("-");
console.log("Join:",join);



//  Task 5: Date Real-Time Task (Age Calculator)

 let dob = prompt("Enter you Age:(dd:mm:yyyy");

 let birth = new Date(dob);
 let today = new Date()

 let age = today.getFullYear() - birth.getFullYear();
 let month = today.getMonth() - birth.getMonth();

 if (month < 0 || month===0 && (today.getDate() < birth.getDate()))12
 console.log("You are " + age + " years old");



//  Task 6: Login Validation System

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
]

let inputUsername = prompt("Enter username:");
let inputUserpassword = prompt("Enter password:");

let validate = users.find(users => users.username===inputUsername && users.password===inputUserpassword);

if (validate){
    console.log("Login Success ✅")
}
else{
    console.log("Invalid Credentials ❌");
    
}



// Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30]

let even = numbers.filter(num => num %2 ===0);
console.log("Even numbers:" , even)

let odd = numbers.some(num => num%2 !==0);
console.log("Odd number exists:",odd);

let all = numbers.every(num => num %2 ===0);
console.log("All numbers are even:",all);

let first = numbers.find(num => num > 20);
console.log("First number >20:",first);



//  Bonus Challenge (🔥 Interview Level)

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
]

let totalRevenue = orders
 .filter(order => order.status === "delivered")
.reduce((total,sum) => total + sum.amount ,0);
console.log("Total revenue:",totalRevenue)

let pending = orders.filter(order => order.status==="pending");
console.log("Pending orders:",pending)

let value = orders.some(orders => orders.amount > 1000);
console.log("Order > 1000:" , value);

let Sort = orders.sort ((a,b) => a.amount - b.amount);
console.log("Sorted orders:",Sort);

