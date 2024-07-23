//                                      Step 7(a)
//                                       ENUMS
//Enums allow a developer to define a set of named constants.
// Enums in Typescript are commonly used when you want to represent a set of related 
//             values and choose one value from multiple options. Enums provide a convenient way
//             to define a set of named values and associate them with specific meanings."
; //starts with 0
var c = 1 /* Color.Green */;
console.log(c);
;
var colorName = Color[2]; //Not allowed with const enums
console.log(colorName);
; //can assign values to all
var colorIndex = 4 /* Color2["Blue"] */;
console.log(colorIndex);
