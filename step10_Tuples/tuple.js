//                                     Step 10
//                                        TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// syntax
// let myTuple:[string ,number, boolean]
// myTuple = ["Aleeza", 1710 , true]
// error
// let errorTuple:[string ,number, boolean]
// errorTuple = [1710 , true "Aleeza"]//error 
//                                  Even though we have a boolean, string, and number the order matters
//                                       in our tuple and will throw an error.
//Readonly Tuple
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// const myReadOnlyTuple : readonly[number, boolean, string] = [1710, false, "Absent"]
// console.log(myReadOnlyTuple);
// console.log(myReadOnlyTuple.push("Not Present"));//Property 'push' does not exist on type
//                                                       'readonly [number, boolean, string]'
// Named Tuples
// Named tuples allow us to provide context for our values at each index.
// Example
// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph[0]);//55.2
// Named tuples provide more context for what our index values represent.
// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
// Example
var nums = [123, 1710];
var x = nums[0], y = nums[1];
console.log(nums[1]); //1710
console.log(x); //123
