// ​Task 1: E-Commerce Discount System
    
function calculateDiscount(name , price){
    
   if (price > 1000){
    price = price - price * 0.2;
   }
   else{
    price = price - price * 0.1;
   }

   console.log("Product:", name);
   console.log("Final price:" , price);
   
}
calculateDiscount("shoes" , 2000);



//  Task 2: Order Processing using CallbacK

function placeOrder (CallbacK){
    console.log("Order placed");

    CallbacK();
}

function payment (amount , CallbacK) {
    console.log("Payment of " + amount + " successful");
    CallbacK();
}

function orderSuccess() {
    console.log("Order delivered");
}

placeOrder (function() {
    payment (500, function (){
        orderSuccess();
    });
});



// Task 3: Employee Data Loop System

let employees = [
    {name:"Navi",salary:50000},
    {name:"John",salary:70000}
];

for (let i = 0; i < employees.length; i++){
    if(employees[i] > 60000){
        console.log(employees[i].name+ ":High Salary");
    }
    else{
        console.log(employees[i].name+ ":Normal Salary")
    }
}



// Task 4: Login Attempts (While Loop)

let password = "1234"
let attempt = 1

while (attempt <= 2){
    console.log("Attempt" , attempt)

if (attempt === 2){
    userInput = "1234";
}
else{
    userInput = "Wrong"
}

if (userInput === password){
    console.log("Login Success")
}

attempt++
};



//  Task 5: Coupon Generator (Generator Function)

function* couponGenerator(){
 yield "10%OFF";
 yield "20%OFF";
 yield "Free Delivery";
 yield "Cashback";
};

 let offers = couponGenerator()

 console.log(offers.next().value);
 console.log(offers.next().value);
 console.log(offers.next().value);
 console.log(offers.next().value);



//  Task 6: Shopping Cart Total (for...of)

let cart =[100, 200, 300, 400];
let price = 0;
 
for(let total of cart){
  price += total;
}
  console.log("Total bill:", price);



//  Task 7: User Profile System (for...in)

let user = {
  name: "Navi",
  role: "Developer",
  location: "India"
}

for (let profile in user){
    console.log(profile +" : " + user[profile])
}



//  Task 8: Factory Pattern (Function Reuse)

function createPhone(){
    return "Phone";
}

function createBattery(){
    return "Battery";
}

function createCharger(){
    return "Charger";
}

let order = createPhone() + " + " + createBattery() + " + " +createCharger();

console.log("Your Order:" , order);



//  Task 9: College Form with Default Values

function collegeStudent(name , department = "Not Assigned"){
return{
    name : name,
    department : department
}
}

let s1 = collegeStudent("Ragul", "Msc");
let s2 = collegeStudent("Rohit")

console.log("Name:",s1.name);
console.log("Department:", s1.department);
console.log("Name:",s2.name);
console.log("Department:", s2.department);



// Task 10: Currying - EMI Calculator

function emi(principal){
    return function(rate){
        return function (time){
            return (principal * rate * time)/100
        };
    };
};

let rate = emi(10000)(2)(12);
console.log("EMI:", rate)



//  Task 11: Even/Odd Analyzer

for (let i = 1 ; i <= 10 ; i++) {
    if(i % 2 === 0) {
        console.log(i + " ->Even");
    }
    else{
        console.log(i + " ->Odd");
    }
}



// Task 12: Function Scope Debugging

if (true){
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log("Var a:" , a);
// console.log("let b:", b);     // reference error
// console.log("const c:", c);   // reference error



// Task 13: Real-Time Alert System (IIFE)

(function() {
    console.log("🔥 Flash Sale: 50% OFF on Shirts");
})();



// Task 14: Marks Calculator with Return

 function marks(m1 , m2 , m3){
    let total = m1 + m2 + m3 ;
    let average = total / 3;
  
    return {total , average};
}

let result = marks(80,90,70);

console.log("Total:" , result.total);
console.log("Average:" , result.average);



// Task 15: Retry Offer System (Generator + Condition)

function* Generator(){
    yield "10%  OFF";
    yield "20%  OFF";
    yield "Free Delivery";
}

let offer = Generator();

function getOffer(){
    let result = offer.next();

    if (result.done){
        console.log("All offers are expired")
    }
    else{
        console.log("offer:", result.value)
    }
}

getOffer();
getOffer();
getOffer();
getOffer();



