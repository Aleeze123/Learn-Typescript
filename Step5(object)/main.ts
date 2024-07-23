//                                    STEP 5(a)
//                                     OBJECT
// An "object" in TypeScript and JavaScript is a data structure that stores key-value pairs,
// allowing for the organization and manipulation of data within a program.
// let userInfo ={
//     name: "Aleeza",
//     age: 17,

// }    
// //access
// //Dot notation
// console.log(userInfo.name);//Aleeza

// //using square brackets
// console.log(userInfo["age"]);//17

//                                            Type Declaration
// let students:{
//     name: string,
//     age: number,
//     isStudent: boolean
// }

// students={
//     name: "Aleeza",
//     age: 17,
//     isStudent :true
// }
// console.log(students.name);//Aleeza
// console.log(students["isStudent"]);//true

//                                      PROPERTIES
// 3 Properties
// 1            optional property 
// type Students ={
    //     name: string,
    //     age: number,
    //     email: string,
    //     isStudent: boolean,
    //     id?: number //optional ke hum ? ka use karte hain
    // }
    // let student1:Students={
    //     name: "Aleeza",
    //     age: 17,
    //     email: "aleeze649@gmail.com",
    //     isStudent: true,
    //     id: 1710
    // }
    // let student2: Students={
    //     name: "Hoorain",
    //     age: 5,
    //     email: "hoorain123@gmail.com",
    //     isStudent: false,
     
    // }
    // console.log(student1.name);
    // console.log(student2["name"]);

//                        2                  readonly
//Readonly is a keyword in typescript that we can use when we want to make a prperty unchangeable 
//so, the value of the property cannot be changed after it has been set
//
// interface Type {
//     readonly name: string;
//   }
   
//  let teacher:Type= {
//     name:"Aleeza"
//  }
//  teacher.name ="Hania"//Cannot assign to 'name' because it is a read-only property.



//                        3 index Signature
/* Index Signature are a powerful feature in typescript that allows you to define types for objects with
unknown structures. They are especially useful when you want to create dictionary like data structure 
or when you want to define complex utility types*/

// interface User{
//     [index: string]:string
// }
// let user1: User ={
//     username: "Aleeza",
//     age: 17//error Type 'number' is not assignable to type 'string'
// }


// interface User {
//     [index :string]:any
// }
// let user1:User = {
//     username: "Aleeza",
//     age:17,
//     isUser: true
// }


//--------------------------------------------------------------------------------------------

//                                  Step 05(b)
//                                  Object Types
// Object Types

// Type Aliases

// Type vs. Interfaces


//  anonymous
// let student :{name:string, age:number}={
//     name:"Aleeza",
//     age: 17
// }

//                                    Aliased Object Type
// type Students ={
//     name: string,
//     age: number,
//     email: string,
//     isStudent: boolean,
//     id?: number //optional ke hum ? ka use karte hain
// }
// let student1:Students={
//     name: "Aleeza",
//     age: 17,
//     email: "aleeze649@gmail.com",
//     isStudent: true,
//     id: 1710
// }
// let student2: Students={
//     name: "Hoorain",
//     age: 5,
//     email: "hoorain123@gmail.com",
//     isStudent: false,
 
// }
// console.log(student1.name);
// console.log(student2["name"]);
//                             interface
// interface Students {
//     name: string,
//     age: number,
//     email: string,
//     isStudent: boolean,
//     id?: number //optional ke hum ? ka use karte hain
// }
// let student1:Students={
//     name: "Aleeza",
//     age: 17,
//     email: "aleeze649@gmail.com",
//     isStudent: true,
//     id: 1710
// }
// let student2: Students={
//     name: "Hoorain",
//     age: 5,
//     email: "hoorain123@gmail.com",
//     isStudent: false,
 
// }
// console.log(student1.name);
// console.log(student2["name"]);
//------------------------------------------------------------------------------------

//                                      Step 05(c)
//                             Structural Typing in Object Literals
//TypeScript is a Structural Type System. A structural type system means that when comparing types,
// TypeScript only takes into account the members on the type.

//This is in contrast to nominal type systems, where you could create two types but could not assign 
//them to each other.

// Type Compatibility
// interface Teacher{
//     name: string;
//     age: number;
    
// }
// interface Student{
//     name: string;
//     age: number;
//     qualification: string
// }
// let teacher:Teacher={
//     name: "Hania",
//     age: 30
// }
// let student:Student ={
//     name: "Hoorain",
//     age:16,
//     qualification: "Matric"
// }
// teacher =student
// student = teacher //error
// console.log(teacher);

//-------------------------------------------------------------------------------
// interface Teacher{
//     name: string;
//     age: number;
    
// }
//     interface Student{
//         name: string;
//         age: number;
        
//     }
//     let teacher:Teacher={
//         name: "Hania",
//         age: 30
//     }
//     let student:Student ={
//         name: "Hoorain",
//         age:16,
        
//     }

// student= teacher
// console.log(student);

//          



//                                Freshness

// TypeScript provides a concept of Freshness (also called strict object literal checking) 
// to make it easier to type check object literals that would otherwise be structurally type compatible.

// function logName(something: { name: string }) {
//     console.log(something.name);
// }

// var person = { name: 'Hoorain', job: 'being awesome' };
// var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
// var random = { note: `I don't have a name property` };

// logName(person); // okay
// logName(animal); // okay
// logName(random); // Error: property `name` is missing

//                         Strutural Typing in Object Literals

/*structural typing has a weakness in that it allows you to misleadingly think that something
 accepts more data than it actually does. This is demonstrated in the following code which 
 TypeScript will error on as shown: */
// function logName(something: { name: string}) {
//     console.log(something.name);
// }

// logName({ name: 'matt',  }); // okay
// logName({ name: 'matt', job: 'being awesome' }); // Error: object literals must only specify known properties. 
// //                                                  `job` is excessive here.

//                                     Structural Typing
/*TypeScript‘s type system is based on Structural typing. 
In a structurally typed system, a type is considered to be
 compatible with another type if the type has all the properties and methods of that type.
  But JavaScript is a duck-typed language. Since Typescript Compiles to JavaScript,
   you can take the benefit of duck typing also.

*/

// interface Dog {
//     name:string
//   }
   
//   interface Cat {
//     name:string
//   }
   
//   interface Person {
//     firstName:string,
//     lastName:string
//   }
//   let dog:Dog = { name:"mars"}
//   let cat:Cat = { name:"venus"}
   
//   dog=cat;     //ok
//   cat=dog;     //ok
 
//  let person:Person ={firstName:"jon",lastName:"snow"}
// dog=person; // Property 'name' is missing in type 'Person' but required in type 'Dog'
// cat=person; //Property 'name' is missing in type 'Person' but required in type 'Cat'.    

