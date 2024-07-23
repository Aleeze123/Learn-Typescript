//                    step8
//                     ARRAY
// Collection of values

//Syntax
// let array1 :number[]= [1, 7, 6]//correct
// console.log(array1[2]);

// let array2 :string[] = ["Aleeza", "Hoorain", "Shahzain"]//correct
// let array3:Array<number>= [1, 7, 0]//correct
// let emptyArray: number[] = []//correct
// let error:number[]= new number[2]//incorrect

// let array: (string |number)[] = ["Aleeza", "Hoorain", "Shahzain", 1 , 3 , 6]
// console.log(array);

// let array:string[]=[]
// array.push("Aleeza", "Hoorain", "Hania", "Shahzain")
// console.log(array);
// Nested Array
const multiArr = [1, 2, 3,4,[1, 2, 4, 6]]
const names = ["Aleeze"]
console.log(names[0]);
console.log(multiArr[4], "Arrays");


//                                        Methods of array

// push()
// This method pushes/adds one or more elements to the array at the last of an array.

// syntax:
// array.push(element)

// let arrays: string[] = ["Aleeza", "Hooain"]
// arrays.push("Hoorain")
// console.log(arrays);
// arrays.push("Shahzain")
// console.log(arrays);

// pop()
// This method pops/removes the last element from an array.

// syntax:
// array.pop()
// let array: string[] = ["Aleeza", "Hooain", "Hoorain", "Shahzain"]
// array.pop()
// console.log(array);

//shift()
// This method removes starting(first) element from an array and returns the removed element.
// We can say that it’s the exact opposite of pop() method, which removes the last element and returns the result.

// syntax:
// array.shift()

// let arrays: string[] = ["Aleeza", "Hooain", "Hoorain", "Shahzain"]
// let newArray = arrays.shift()

// console.log("Before shift",arrays);
// console.log("After shift", newArray);


// unshift()
// It has the exact opposite behavior to the shift() method. 
// It adds an element at starting of an array and returns a new array.

// syntax:
// array.unshift(element)

// let unshiftArray:string[] = ["Dear", "Hoorain"]
// unshiftArray.unshift("Hey")
// console.log(unshiftArray);

// slice()
// This method cuts an array, in whichever manner we want and returns the trimmed array.
// a. It excludes the last index from an argument.

// syntax:
// array.slice(start_index, end_index)
//  let myArray:string[] = ["Aleeza", "Hania", "Hoorain", "Shahzain", "Almeerah"]
// console.log(myArray.slice(1,4));

// splice()
// This method can be used for multiple purposes. For,
// 1. Add an element to an array
// 2. Replace specific elements within an array
// 3. Remove specific elements from an array


// syntax:
// array.splice(index, number of elements to be removed, element1,..,elementN)

 
// let myArray:string[] = ["Aleeza", "Hania", "Hoorain", "Shahzain", "Almeerah"]
// let deletedArray = myArray.splice(1,2, "Mehak", "Hiba")
// console.log(deletedArray);
// console.log(myArray);

// concat()
// As the name suggests, this method simply merges two arrays and returns a combined result.

// syntax:
// array1.concat(array2)
// let names:string[]=["Aleeza", "Hania", "Hoorain", "Shahzain"]
// let nums :string[]= ["Hey", "Dear"]
// let newArray= names.concat(nums)
// console.log(newArray);

//reverse()
// As per the name, this method reverts the order of an array.

// syntax:
// array.reverse()

// let names:string[]=["Aleeza", "Hania", "Hoorain", "Shahzain"]
// console.log(names.reverse());


// join()
// According to the name, this method joins all elements of the array into a string with a given operator.

// a. If an operator is not given, it joins elements with a comma(,).

// syntax:
// array.join(operator)

// let names:string[]=["Aleeza", "Hania", "Hoorain", "Shahzain"]
// console.log(names.join(" * "));


// let names:string[]=["Hey", "How", "are", "you?"]
// console.log(names.toString());

// indexOf()
// Every array element has an index. This method returns the index of an element in an array.

// a. If specific element doesn’t exist within array, indexOf() returns -1.

// Hence, this method can be used to check whether an element exists in an array or not.

// syntax:
// array.indexOf(element)
// let names:string[]=["Hey", "How", "are", "you?"]
// console.log(names.indexOf("are") );//2


// let names:string[]=["Hey", "How", "are", "you?"]
// console.log(names.indexOf("are") !== -1);//true


