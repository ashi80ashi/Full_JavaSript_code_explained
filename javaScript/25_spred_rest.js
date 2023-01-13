 //Rest Operator
//  function sum(name, ...args) {     //rest operator will take all remaning arguments
//     let sum = 0;
//     for (const key in args) {
//      sum += args[key];
//     }
//     console.log(sum)
//     console.log(name)
// }
// sum("ashish",9,8,7,6)


//as we all know rest operator takes more then one argument or we can say spreaded argument
//so we we want to pass value of any array to rest operator at that tym we need to spread the values of that array
//and there we need SPREAD operator

//let arr=[10,20,30,40]
// function sum(...rest) {     //rest operator will take all remaning arguments
//     let sum = 0;
//     for (const key in rest) {
//      sum += rest[key];
//     }
//     console.log(sum)
// }
// sum(...arr);  //here if you pass direct array theen array is passed as single argument so we need to spread that 
//               //array using spread operator


//lets see how the values in rest and spread operator are being stored by consoling these operators

let arr=[4,3,6,7,8];
let fun =(x,...rst)=>{
    console.log(x);
    console.log(`all remaing values with is collected in rst ar ${rst}`);
}
console.log(...arr); //lets see what is being passed by spread operator
fun("ashi",...arr);