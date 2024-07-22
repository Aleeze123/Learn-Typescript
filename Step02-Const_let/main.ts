//                                      STEP 02
//                                     Const-let
// Variables (var, let, const)
// Definition: Variables in TypeScript can be declared using var, let, or const.

// - var: Function-scoped variable. or global scope
// - let: Block-scoped variable.
// - const: Block-scoped variable that cannot be reassigned.

// Syntax:
// var a = 50;
// let b = 60;
// const c = 70;

//use const where variable values do not change
// const myName = "Aleeza";

// const myEmail = "alizey649@gmail.com";
// myEmail = "aleeze1710@gmail.com"// error
//                               Cannot assign to 'myEmail' because it is a constant

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope


// let myAge = 17;
// myAge = 18
// let laptop = "Dell";


//                   - var: Function-scoped variable or global scope.
//                    - let: Block-scoped variable.
//              - const: Block-scoped variable that cannot be reassigned.

//                                    var funtion scope or global scope
//                                         example 
// const email =():void =>{
//     var myEmail = "alizey649@gmail.com";
//     if(true){
//         myEmail = "aleeze1710@gmail.com";
       
        
//     }
//     console.log(myEmail);
// }
// email()

//                                            const block scope
//                                                example 
// const email =():void =>{

//     if(true){
//         const myEmail = "alizey649@gmail.com";
//         myEmail = "aleeze1710@gmail.com";//error
//         //                                      Cannot assign to 'myEmail' because it is a constant
       
//         console.log(myEmail);
//     }
 
 
// }
// email()

//                                  let block scope
//                                    example 1(a) 

// const email =():void =>{

//     if(true){
//         let myEmail = "alizey649@gmail.com";
//         myEmail = "aleeze1710@gmail.com";
       
//         console.log(myEmail);
//     }
 
 
// }
// email()

//                                      example 1(b)
//                                          error 


       
        const email =():void =>{

            if(true){
                let myEmail = "alizey649@gmail.com";
                myEmail = "aleeze1710@gmail.com";
               
                
            }
         
            console.log(myEmail);//error because let block scope hai or yeh block se 
//                                     bhr hai toh humyee error show hoga
        }
        email()
