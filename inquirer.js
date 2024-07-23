/*                                      INQUIRER
In JavaScript/TypeScript, Inquirer is a library used for creating interactive command-line interfaces (CLIs),
allowing developers to prompt users for input, validate responses, and manage user interactions efficiently.
*/
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "PersonName",
        type: "string",
        message: "Enter your name..."
    },
    {
        name: "age",
        type: "number",
        message: "Enter your Age..."
    }
]);
console.log("InshaAllah, in " + (70 - answers.age) + " years " + (answers.PersonName) + " will be 70 years old.");
//---------------------------------------------------------------------------------------------------------------//
// import inquirer from "inquirer";
// let userInfo = await inquirer.prompt([
//     {
//         name:"username",
//         type: "string",
//         message: "Enter your name"
//     },
//     {
//         name: "age",
//         type: "number",
//         message: "Enter your age"
//     },
//     {
//         name: "Email",
//         type: "String",
//         message: "Enter your email"
//     },
//     {
//         name: "Gender",
//         type : "string",
//         message: "Enter your Gender"
//     }
// ])
// console.log(" Name: " +(userInfo.username) + " age: " + (userInfo.age) + " Email: " + (userInfo.Email) + " Gender: " + (userInfo.Gender)  );
