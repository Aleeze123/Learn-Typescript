//                                      Step 7(a)
//                                       ENUMS
//Enums allow a developer to define a set of named constants.
// Enums in Typescript are commonly used when you want to represent a set of related 
//             values and choose one value from multiple options. Enums provide a convenient way
//             to define a set of named values and associate them with specific meanings."


//             "In typescript, when enums constants are not explicitly assigned numeric values,
//             they are automatically assigned incremental numeric values starting from 0..
//             The default numeric value for the first enum constant  is 0 and subsequent 
//             enum constant is 0, and subsequent enum contants receive values incremented by 1."

//  An Enum is a special "class" that represents a groups of constants (unchangeable variables)
//  Enum comes in two flavors string and numeric       

//   Enum is the set of value
//   Enum return index or define index or return value
//TypeScript provides both numeric and string-based enums.

// enum Colors{
//     Red,//0
//     Blue,//1
//     Black,//2
//     Yellow,//3
//     White//4
// }
// let myfavoriteColor:Colors=Colors.Black;
// console.log(myfavoriteColor);//return index 2

// let mycolorName = Colors[2]
// console.log(mycolorName);//return value Black

//numeric enum
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
//   }
//   console.log(Direction.Left);//3
  
//String enum
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }
// console.log(Direction.Right);//RIGHT

// Heterogeneous enums
// Technically enums can be mixed with string and numeric members,
//  but it’s not clear why you would ever want to do so:

// enum BooleanLikeHeterogeneousEnum {
//   No = 0,
//   Yes = "YES",
// }

//                               Step 7(b)
//                            CONST ENUMS
// const enum Color {
//     Red, 
//     Green, 
//     Blue
// };//starts with 0
// let c: Color = Color.Green;
// console.log(c);//1


// const enum Color1 {Red = 1, Green, Blue};
// var colorName :string = Color[2]; // error Not allowed with const enums
// console.log(colorName);

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);