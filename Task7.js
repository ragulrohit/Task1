// Task 1: Order System (setTimeout)

console.log("Order placed");

setTimeout (() => {
    console.log("Preparing Food");
},2000);

setTimeout (()=> {
    console.log("Food Ready");
},4000);

setTimeout(() => {
    console.log("Delivered");
}, 5000);



// Task 2: Digital Clock (setInterval)
let count = 0;

let clock = setInterval(()=>{
    let date = new Date()
    console.log(date.toLocaleTimeString());

count++;
 
if(count === 10){
    clearInterval(clock);
    console.log("Clock Stopped");
}
},1000);



//  Task 3: Callback Hell Simulation

function loginUser(Callback){
    setTimeout(()=>{
        console.log("User Logged In");
        Callback();
    },1000);
}

function getUserData(Callback){
    setTimeout(()=>{
        console.log("User Data Fetched");
        Callback();
    },2000);
}

function getUserPosts (Callback){
    setTimeout(()=>{
        console.log("User Posts Fetched");
        Callback();
    },3000);
}

loginUser(()=>{
    getUserData(()=>{
        getUserPosts(()=>{
        });
    });
});



//  Task 4: Fake API Promise

function getProducts(){
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            let success = true;

            if (success){
                resolve(["Phone" , "Laptop" , "Tab"]);
            }
            else{
                reject("API failed")   
            }
        },2000);
    });
}

getProducts()
  .then((products) => {
    console.log("Products:",products);
  })
  .catch((error) => {
    console.log ("Error:",error);
  })
  .finally(() =>{
    console.log("Request completed");
  });
  