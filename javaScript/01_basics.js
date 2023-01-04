//variable are defined using three keywords i.e var let , const

// 1. var --> it is global scoped
var a=2;
var a=5;
console.log(a);
//here the value 5 is assigned to variable a 


// 2. let (intoduced in ES6) --> it is block scoped
let b=7;
let d=5;
console.log(b+d)
//let b=5; //if you uncomment this line code then it will give an error 
console.log(b);


// 3. const --> it is used to define the variable for assigning a constant value
const c= 9;
console.log(c);


