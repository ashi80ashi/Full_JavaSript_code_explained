//operators in javascript


// 1.Airthmetic_operators
let a=7;
let b=5;
console.log(a+b); // addition
console.log(a-b); // subtraction
console.log(a*b); // multiplication
console.log(a/b); // division
console.log(a%b); // reminder
console.log(a**b); // a raise to power b
console.log(++a); //  increment
console.log(--b); //  decrement
console.log("\n");

// 2.assignment_operators
let x=1; 
    x=2; //value 2 is assigned
console.log(x);
x += 5 // 5 is added in x
console.log(x);
x *=2 // x is multiplied by 2
console.log(x);
// similarly there are -= , /= , %= and **=
console.log("\n");

//3.comparison_operator
let comp1=5;
let comp2=3;
console.log(comp1==comp2);
console.log(comp1!=comp2);
console.log(comp1===comp2);
console.log(comp1!==comp2);
console.log(comp1>comp2);
console.log(comp1<=comp2);
console.log(comp1<comp2);
console.log(comp1>=comp2);
console.log("\n");

//4.logical_opertors
let p=7;
let q=3;
if(p>6 && q>6) //AND operator
{
    console.log("and opertor"); //if both cond. are true then only statement will be printed 
}
if(p>6 || q>6)
{
    console.log("OR opertor"); //if even one cond. is true then also statement will be printed 
}
console.log(!true); //NOT operator
console.log(!false);