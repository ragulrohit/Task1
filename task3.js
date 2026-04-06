//  1. User Input

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age"));
let salary = Number(prompt("Enter your salary"));
let amount = Number(prompt("Enter your loan amount"));

console.log("Name: "+ name);
console.log("Age: " + age);
console.log("Monthly Salary: " + salary);
console.log("Loan Amount: " + amount);



// 2. Eligibility Check (Logical Operators)Conditions

let Eligible = (age >= 21 && age <= 60) && (salary >= 25000);

if (Eligible){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}



//  3. EMI Calculation (Operators)Formula

let loanAmount = 300000;
let emi = loanAmount;
emi /= 12;
console.log("EMI:" , emi);



// 4. Loan Category (If-Else)

let LoanAmount = 300000;
let category;

if (LoanAmount > 500000){
    category = "High loan";
}
else if (LoanAmount > 200000){
    category = "Medium Loan";
}
else{
    category = "Low Loan";
}
console.log("Loan Category:" , category);



//  5. Risk Level (Ternary Operator)

let Salary = 40000;

let Risklevel = (Salary > 50000) ? "Low Risk" : "High Risk";
console.log("Risk Level: ", Risklevel);



// 6. Customer Type (Switch)

let Emi =30000
let CustomerType;

switch (true) {
    case (Emi > 40000):
    CustomerType ="Premium Customer"
    break;

    case (Emi > 20000):
    CustomerType = "Standard Customer";
    break;

    default :
    CustomerType = "Basic Customer";
}

console.log("Customer Type: " , CustomerType);



//  7. Type Conversion Check

let value = "35132" ;
console.log("Before conversion: " ,typeof (value));

let convert = Number(value);
console.log("After conversion: " , typeof(convert));