// function user(name :string){
//     console.log( `The name of user is ${name}`);
    
// }
// user("Aleeza")
// user("Hania")
//------------------------------------------------------------
// function userInfo(name:string , userId:number){
//     console.log(`The name of user is ${name}`);
//     console.log(`The id of user is ${userId}`);

// }
// userInfo("Aleeza" , 1710)

// Default perameter
// function myHome(name : string= "Pakistan"){
//     console.log(`My home is in ${name}`);
    
// }
// myHome("Karachi")

// Rest perameter
// function driver(name:string, ...location:string[]){
//     console.log(`${name} ,,,, ${location}`);

// }

// driver("School", "College", "Mall", "Center", "Park")

//Optional Perameter
// function userInfo(name: string, age?:number){
//     console.log(`User name ${name} ,,, ${age}`);
    
// }
// userInfo("Aleeza" , 17)

// Anonymous Function
// let user1 = function(name: string) {
//     console.log(`${name}`);
// }

// // Is anonymous function ko aap direct call kar sakte hain
// user1("Aleeza")

//Arrow Function
// let user=( name: string)=>{
//     console.log(name);
// }
// user("Aleeza")

//Lambda Function
// let user3=(userId:number)=>
//     console.log(`${userId}`);
//     user3(17110)

// Imadiately Invoked fubtion
// let user =(function(name:string){
//     console.log(name);
    
// })

// Function overload

// function sum(num1:number,num2:number ):number  //signature
// function sum(num1:string, num2:string):string //signature

// function sum(num1:any,num2:any):any{
//     return num1+num2
// }
// sum(10, 7)
// sum("hey" ,"Aleeza")

// //overloads give us type-checked calls

// //its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));

// What are Callback Functions in TypeScript
// A callback function is defined as a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete the desirable routine or action.

// function outerFunction(callback: () => void) {
//   callback();
// }
