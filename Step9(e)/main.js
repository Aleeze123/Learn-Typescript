"use strict";
//Synchronous & Asynchronous Programming
// Synchronous Method
//code run line by line
//Example 1
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// //Example 2
// let c = 1;
// let d = 2;
// console.log(c);
// console.log(d);
// //Asynchronous Method
// //Example 1
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(function(){
//     console.log(4);
// },2000)
// console.log(5);
// console.log(6);
// //Example 2
// console.log("a");
// console.log("b");
// setTimeout(function(){
//     console.log("c");
//     },4000)
// console.log("d");
// console.log("e");
// //Example 3
// let a = 1;
// let b = 2
// setTimeout(function(){
//     console.log(a);
//     },2000)
// console.log(b);
// a=10
// //Example4
// console.log(1);
// console.log(2);
// setTimeout(function(){
//     console.log(3);
//     },3000)
// for(let i=1; i <= 7; i++){
// console.log(`loop ${i}`);  
// }
//                                  Set Timeout & Time interval
//Set Time out
// console.log("Hey Dear!");
// setTimeout(function(){
//     console.log("Aleeze!");
// }, 1000)
// setTimeout(function(){
//     console.log("Senior Student at GIAIC!");
// },2000)
// //-------------------------------------------------------------------------------------------------------------//
// //Time interval 
// console.log("Her dear!");
// let count = 0;
// let func = setInterval(function(){
//     count++;
//     console.log(`${count}: Aleeze`);
//     if(count >=5){
//         clearInterval(func)
//     }
// },1000)
//---------------------------------------------------------------------------------------------------------------//
/*                             FETCH
 • Fetch is a predefine function that return Promise
 • Fetch function require API

 Question: What is API?
 Answer: The API client acts as a bridge between the server and the client, facilitating the exchange of data.
*/
// let url = "https://jsonplaceholder.typicode.com/posts/1"
// let fetchData = fetch(url).then((response)=>(response.json()))
// .then(data=>console.log(data))
// .catch(error=>console.log(error))
// console.log(fetchData);
//--------------------------------------------------------------------------------------------------------//
/*                          Async Await
 • Fetch is a predefine function that return Promise
 • Return promise
 */
// let url = "https://jsonplaceholder.typicode.com/posts/1"
// let func1 =  async()=>{
//     let fetchData = await fetch(url)
//     let response = await fetchData.json()
//     console.log(response);
// }
// func1()
//---------------------------------------------------------------------------------------------------------//
// ------------------------------------ TRY & CATCH --------------------------------------------//
//                                         try
/*console.log("Start");
try{
    let a = "Aleeze"
console.log(a);

}catch(error){
    console.log("Error");
    
}

console.log("Stop");    //output Start Aleeze Stop*/
//-----------------------------------------------------------------------------------------------------------//
//                                             catch
/*console.log("Start");
try{
    lett a = "Aleeze" // syntax error
console.log(a); //error

}catch(error){
    console.log("Error");
    
}

console.log("Stop");    //output Start Error Stop
//-------------------------------------------------------------------------------------------------------------//

//                                              try
console.log("Start");

async function func1(){
   try{
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let response = await fetchData.json()
    console.log(response);
   }catch(error){
    console.log("Error in API");
    
   }
    
}
func1()
console.log("End")
*/
//------------------------------------------------------------------------------------------------------------//
//                                             catch
// console.log("Start");
// async function func1(){
//    try{
//     let fetchData = await fetch("https://sonplaceholder.typicode.com/posts/1") // mistake in API 
//     let response = await fetchData.json()
//     console.log(response);
//    }catch(error){
//     console.log("Error in API");
//    }
// }
// func1()
// console.log("End");
/*                                         PROMISE
A Javascript Promise can be
 • Pending
 • Resolve
 • Reject

Promise object supports two properties: state  &  result

• While a Promise object is "Pending" (working), the result is undefined.
• While a Promise object is "resolve" ,the result is a value.
• While a Promise object is "reject" ,the result is an error object.
*/
// let aleezePromise = new Promise((resolve , reject)=>{
//     console.log("Promise Pending.......");
//     setTimeout(()=>{
//         let data = ""
//        if(data){
//            console.log("Data fetched successfully, Promise resolved!");
//         return resolve(data)  
//        }   
//        else{
//           console.log("Data fetched failed, Promise rejected!");   
//             return reject(new Error("Data fetched failed"))     
//         }
// },3000)
// })
// aleezePromise
// .then((result)=>(console.log(result)))//Promise resolve
// .catch((error)=>(console.log("Oh No! Data fetched failed")))//Promise reject
// //                                 EXAMPLE 1 
// let cityPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let cityName = "Karachi"
//         if(cityName == "Karachi"){
//             console.log("Your city name is Karachi");
//             return resolve(cityName)
//         }
//         else{
//             console.log("Promise rejected");
//           return reject(new Error)
//         }
//     },2000) 
// })
// cityPromise
// .then((resolve)=>(console.log("Promise resolved")))
// .catch((reject)=>(console.log("Oh no! Promise rejected")))
/*                              CALLBACK HELL
Callback hell in JavaScript refers to a situation where multiple nested callbacks
 make the code hard to read and maintain.
This typically occurs when performing asynchronous operations that depend on each other,
leading to deeply nested function calls.
 
 
 //                              IN SIMPLE WORDS
Callback hell is when your code becomes hard to read and manage due to too many nested callback functions.  */
/*
setTimeout(()=>{
    console.log("Called to HR!");
    setTimeout(()=>{
        console.log("HR to Director!");
        setTimeout(()=>{
            console.log("Information Update!");
        },1000)
               
    },1000)
},2000)
*/
//-----------------------------------------------------------------------------------------------------------------//
/*                                   PROMISE
Promises are a powerful tool in JavaScript for handling asynchronous operations.
They help in managing the complexities and potential pitfalls of asynchronous code,
 providing a more structured and readable approach compared to traditional callbacks. */
//  let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Called to HR!");
//         resolve("Calledl to HR!"); 
//     }, 2000);
// });
// promise.then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("HR to Director!");
//             resolve("HR to Director!"); 
//         }, 1000);
//     })
// }).then(() => {
//     setTimeout(() => {
//         console.log("Information Update!");
//     }, 1000);
// })
