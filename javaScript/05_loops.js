//there are maily 5 type of loops
//1.for loop
//2.forIN loop
//3.forOF loop
//4.forEach loop
//5.while loop
//6.do while loop

//---  for loop  ------
for(let i=0; i<=5; i++){
    console.log(i);
}
console.log("\n");

//---  forIN loop : used for printing array and objects  ------ 

let obj={
    name : "ashish",
    class : 6 ,
    sub : ["eng.","hindi","math"]
}
for (let key in obj) {
    console.log(key + " : "+obj[key]);
}

let arr= [1,2,3,4,5];
for (let i in arr) {
    console.log(i + " : "+arr[i]);
}
console.log("\n");

//--- forOF loop : it is used for itterable objects like array and string ----------
let str ="ASHISH"
for (let value of str) {
    console.log(value);
}

let arr2=[12,32,"ashish",true]
for (let value of arr2) {
    console.log(value);
}
console.log("\n");

//--- forEACH loop ------

let fruits = ["apple","mango","grapes","orange","----"];
fruits.forEach(value => console.log(value));
//or 
fruits.forEach(myfun);
function myfun(item) { 
    console.log(item)
}
console.log("\n");

//--- while loop ------
let i=2;
while (i<10) {
    console.log("i "+i);
    i++;
}
console.log("\n");

//--- do while loop -----
let p=5;
do{
    console.log("p "+p);
    p++;
}
while(p<10)