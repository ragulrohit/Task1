// Task 1: E-commerce Cart System

let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}
]

let cart2 = [
  {name: "Watch", price: 2000}
]

let merge = [...cart1,...cart2]
console.log("Merge Carts:" , merge);

merge.push = ({name: "Pant",price: 800})
console.log("Add:",merge);

merge.pop();
console.log("Remove last Product:",merge);

let total = merge.reduce ((total,items) => {return total+ items.price},0);
console.log("Total Price:" ,total);



//  Task 2: User Profile Management

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

let Update = { ...user, ...update };

let { name, role, salary } = Update;
console.log(`${name} is now a ${role} earning ${salary}`);



// Task 3: Function with Rest Operator (Team Score System)

function teamScore(teamName, ...scores){

console.log("Team Name:", teamName)

console.log("All Score:",scores)

let totalScore = scores.reduce((total,sum) => {return total +sum;},0);
console.log("Total Score:",totalScore)

let high = Math.max(...scores)
console.log("Highest Marks:", high)
}

teamScore ("Vengai Puyal", 60,95,78,85)



//  Task 4: Nested Data Extraction (API Response Simulation)

let apiData = {
  user: {
    name1: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
}

let {
    user:{
        name1,address:{city,pincode}
    }
}=apiData;

console.log(`${name1} lives in ${city} -${pincode}`)



// Task 5: Array Dashboard (Admin Panel)

let users = ["A", "B", "C", "D", "E"]
users.splice (2, 2, "X" , "Y")
console.log("Remove & Add:",users)

let first = users.slice(0,3);
console.log("First 3 user:",first)

let check = users.includes("B");
console.log("Check:", check)

let index = users.indexOf("E");
console.log("Index:", index)



//  Task 6: Data Cleaning Tool

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"]

let cleanArray = messyData
.flat(Infinity)
.filter (item => item != null);

console.log(cleanArray)



// Task 7: Sorting Bug Fix (Real Industry Issue ⚠️)

let prices = [200, 5000, 1000,  50, ]
 let order = prices.sort((a,b) => a-b);
 console.log(order);



//   Task 8: Analytics Report Generator

let orders = [
       {id:1, amount:100},
       {id:2, amount:200},
       {id:3, amount:300}
];

let totalRevenue = orders.reduce((sum,total) => sum+total.amount,0);
console.log(totalRevenue);

let average = totalRevenue / orders.length;
console.log("Average Value:",average);



//  Task 9: Inventory System (Advanced)

let inventory = ["bus" , "train" ,"cycle"]

inventory.push("zeep");
inventory.unshift("car")
console.log("Add items:", inventory);

inventory.pop();
inventory.shift();
console.log("Remove items:",inventory);

let find = inventory.indexOf("train");
if(find != -1){
  inventory.splice(find,1,"Plane")
}
console.log("Update:",inventory);

let correct = inventory.includes("cycle")
console.log("Includes:",correct);

let merge1 = ["helicopter","auto"];
let mergeItems = inventory.concat(merge1);
console.log("Merge Items:", mergeItems)



// Task 10: Interview Level Challenge 

function processData(...data) {

  let flattened = data.flat(Infinity);
  let unique = [...new Set(flattened)];
  let sorted = unique.sort((a,b) => a-b);
  return sorted;
}
let result1 = processData(1,2,[3,4],[5,[6]]);
console.log(result1);