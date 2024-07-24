// if we want to repeat same task multiple times in programming language, every programming has a power tool
// which is called loops
// In programming language loops is a way to repeat same task into multiple times
// we have different types of loops in typescript
// * for loop
// * while loop
// * do while loop
// * for of loop
// * for in loop
// Basic Loop aur base loop is
// for loop
// SYNTAX 
//FOR LOOP
// for(let count = 0; count <= 10; count = count + 1){
// }
// this is a syntax of for loop
// for loop is a traditional loop in typescript
// for loops takes three statements which is separated by semicolon ";"
// first statement is a initializer like we declare variable let number = 1
// second statement is a stopping condition where we want to stop the loop
// third one is updating condition where we update the condition variable or incremental variable
// the curly braces after the round brackets it is called body of the loop or in programming terms we can say
// it is a block of code this code will run till the condition variable is true
// basic example
//for (let count = 1; count <= 10; count++) {
//  console.log("Hello World" );
//  }
// while loop is same as forloop it do same things what for loop does but the syntax is different
// SYNTAX
// for(i = 0; i <= 10; i++)
// simple example
/*let i = 0;
while (i <= 10) {
  console.log(i, "i");
  i++;
}*/
//table
/*let a = 0;
let tableNum = 2;
while(a <= 10) {
  console.log(${tableNum} * ${a} = ${tableNum})
  a++;
}*/
// for(let i =0; i<=5;i++){
//     console.log("Hey");
// }
// FOR IN LOOP
// let students  ={
//   name: "Aleeze",
//   batch: "Thusday class",
//   isAvailable: false,
// };
// students["name"]
// for(let x in students){
//   console.log(x, students[x]);
// }
var Teacher = {
    name: "Hani",
    gender: "Female",
};
Teacher["name"];
for (var x in Teacher) {
    console.log(x, Teacher[x]);
}
