/*                          Primitive and Non-Primitive Data Types in TypeScript/JavaScript
In TypeScript/JavaScript, data types are categorized into two main types: primitive and non-primitive.

1. Primitive Data Types
Primitive data types are the most basic data types. They are immutable, 
meaning that their values cannot be changed once created.

Primitive data types in TypeScript/JavaScript include:

String: Represents textual data
Number: Represents numeric data (integers, floats)
Boolean: Represents true or false
Null: Represents an intentional absence of any object value
Undefined: Represents a variable that has been declared but not assigned a value
Symbol: Represents a unique and immutable identifier (introduced in ES6)
BigInt: Represents integers with arbitrary precision (introduced in ES11)
 */

// Simple Examples of Primitive Data Types

// String, Number, Boolean, Null, Undefined, Symbol, BigInt

//  String
// let userName: string = "Aleeza";
// console.log(Name: ${userName});  // Output: Name: Aleeza

//  Number
// let userAge: number = 17;
// console.log(Age: ${userAge});  // Output: Age: 17

// Boolean
// let isStudent: boolean = true;
// console.log(Is Student: ${isStudent});  // Output: Is Student: true

// Null
// let emptyValue: null = null;
// console.log(Empty Value: ${emptyValue});  // Output: Empty Value: null

// Undefined
// let notAssigned: undefined;
// console.log(Not Assigned: ${notAssigned});  // Output: Not Assigned: undefined

// Symbol
// let uniqueId: symbol = Symbol("id");
// console.log(Unique ID: ${uniqueId.toString()});  // Output: Unique ID: Symbol(id)

 // BigInt
// let bigNumber: bigint = 1234567890123456789012345678901234567890n;
// console.log(Big Number: ${bigNumber});  // Output: Big Number: 1234567890123456789012345678901234567890n


// 2. Non-Primitive Data Types
/* Non-primitive data types are more complex data types. They are mutable, 
meaning their values can be changed after they are created.

Non-primitive data types in TypeScript/JavaScript include:

Object: Represents a collection of properties
Array: Represents a list of values
Function: Represents a block of code designed to perform a particular task*/

// Examples of Non-Primitive Data Types

// Object
// let person: { name: string; age: number } = {
//     name: "Aleeza",
//     age: 17
//   };
//   console.log(Person: ${person.name}, Age: ${person.age});  // Output: Person: Aleeza, Age: 17
  
//   // Array
//   let scores: number[] = [85, 90, 78];
//   console.log(Scores: ${scores});  // Output: Scores: 85,90,78
  
//   // Function
//   let greet: (name: string) => string = (name) => {
//     return Hello, ${name}!;
//   };
//   console.log(greet("Aleeza"));  // Output: Hello, Aleeza!