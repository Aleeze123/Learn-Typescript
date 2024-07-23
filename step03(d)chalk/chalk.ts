//                               CHALK INTRODUCTION
// In TypeScript and JavaScript, "chalk" is a popular library used to style terminal string output.
//  It allows developers to add colors, background colors, and other styles to their console output, 
//  making it easier to read and visually appealing.


/*chalks : Black , Red, Green, Yellow , Magenta, Cyan , White , Gray
*/
// console.log(chalk.bold.bgRed("bold + bgRed chalk"))

// console.log(chalk.dim.bgGreen("dim + bgGreen chalk"));

// console.log(chalk.italic.bgYellow("italic + bgYellow"));

// console.log(chalk.underline.bgBlue("underline + bgblue chalk"));

// console.log(chalk.inverse.bgMagenta("inverse + bgMagenta chalk"));

// console.log(chalk.strikethrough.bgCyan("strikethrought + bgcyan chalk"));

// console.log(chalk.bgWhite("bgwhite chalk"));

//--------------------------------------------------------------------


//chalk with inquirer
// import inquirer from "inquirer";
// import chalk from "chalk";

// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);

// console.log(chalk.bgCyan("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));