// Difference b/w union / literal types
//union types
// let userinfo :string | number 
// userinfo = "Aleeza"
// userinfo =123
// userinfo = true//error bcz type boolean not assignable in type string |number
// userinfo =undefined //error bcz undefined not assignable to type string |number
// //literal types
// let userinfo : "Aleeza" | 123;
// userinfo= 123
// userinfo = true //error Type 'true' is not assignable to type '"Aleeza" | 123'.
// userinfo= 1710 //error
var userId;
userId = "aiaiai";
console.log(userId.toUpperCase());
// let user = Math.random()>0.5 ?"Aleeza" : 1710.00
// if(typeof user === "string"){
//     console.log(user.toUpperCase());
// }
// else{
//     console.log(user.toFixed());
// }
// console.log(user);
// // You can also define a type alias
// type RawData = boolean | number | string | null | undefined;
// let data: RawData;
// You can even combine them
//-----------------------------------------------------------------------------
   let x : any = "Aleeza"

x =1710

console.log(typeof x)//number
