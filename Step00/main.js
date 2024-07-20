//                                          STEP 00
//                                        HELLOW WORLD
// let message = "Hellow Aleeza"; //Infering type
// console.log(message);
//------------------------------------------------------------------------------------------------------
//                                       STEP 00 (a)
//                                       json_objects
// JSON stands for javascript object notation
// JSON  is a text based data format that is used to store and transfer data
// JSON syntax
// {
//     "name": "Aleeza",
//     "age": 17,
//     "gender": "Female",
//    }
// Is JSON is similar to javaScript objects?
// The Answer is No.
// JavaScript objects can contain functions but JSON not.
// JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.
// JSON Data
// JSON data consists of key/value pairs similar to JavaScript object properties.
// The key and values are written in double quotes separated by a :.
// Example :
// // JSON data
//     "name": "Aleeza"
// JSON data requires double quotes for the key.
// JSON Object
// The JSON object is written inside curly braces { }.
// JSON objects can contain multiple key/value pairs.
// Example :
//  // JSON object
//  { "name": "Aleeza", "age": 17 }
// JSON Array
// JSON array is written inside square brackets [ ].
// Example :
//  // JSON array
//  [ "Aleeza", "Hania", "Hoorain"]
// Accessing JSON Data
// We can access JSON data using the dot notation.
// Example :
// JSON object
// let myInfo = {
//     "name": "Aleeza",
//     "age": 17,
//     "gender": "Female",
//     "College": "Govt Degree College Malir Cantt "
// }
// console.log(myInfo.name);//Aleeza
// We can also use square bracket syntax [] to access JSON data.
// Example :
// let myInfo = {
//     "name": "Aleeza",
//     "age": 17,
//     "gender": "Female",
//     "College": "Govt Degree College Malir Cantt "
// }
// console.log(myInfo["age"]);//17
// Use of JSON
// JSON is the most commonly used format for transmitting data (data interchange)
// from a server to a client and vice-versa.
// JSON data are very easy to parse and use.
// JSON is language independent(We can create and use JSON in other programming languages too).
// Examples of JSON
// 1) package.json
// 2) tsconfig.json
//---------------------------------------------------------------------------------------
//                                   STEP 00(b)
//                                  Syntax Error
// example 1
// lett message = "Hello Aleeza";
// console.log(message);
//example 
// let 1user = "Aleeza";
// console.log(1user);
//--------------------------------------------------------------------------------------------
//                                       STEP 00(c)
//                                       Type error
// Type error
// let message = "Hello Aleeza";
// console.logger(message);
//-------------------------------------------------------------------------------------
//                                      STEP 00(d)
//                                    Assignability error
var user = "Aleeza";
user = 17;
console.log(user);
