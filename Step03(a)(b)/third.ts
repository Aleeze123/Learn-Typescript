import greet from "./first.js"
greet()

import { names } from "./first.js"
console.log(names);


import {add} from "./second.js"
console.log(add(10 , 7))

import { info1, info2, info3 } from "./second.js";
console.log(info1.name);
console.log(info2.gender);
console.log(info3.name);


