function add(x,y,c=0) {    //here c=0 means default value of c will be 0 
    console.log(x+y+c);
}
add(2,2,6);

let p=12;
let q=8;
add(p,q);  //value of a and b passed to function

// other way || arrow function
let addition = (x,y) => {
    console.log("--- using arrow function ---")
    console.log(x+y)
}
addition(p,q)

//we can store function in any variable

let multi = function (p,q){  //p,q will be multiplied and value will be stored in c
    let r=p*q ;
    console.log(r);
}
multi(5,5); //calling "multi" variable as a function

//return type function

function sub(x,y){
    return x-y ;
}
let ans = sub(10,6);
console.log(ans)


// lets do total of any array using function 
let arr =[1,2,3,4,5]

function totalOfArray(arr=[]) {
    let total=0;
    for(let i=0; i<arr.length; i++){
        total+=arr[i];
    }
    return total;
}
console.log(totalOfArray(arr));
console.log("\n");



//let's understand scoping

// let a=30;            
// {                         
//     console.log(a)          //30 will be printed because a is declared globaly
// }

// {
//     let a =10 ;            //scope of this a is only inside braces
// }
// console.log(a);            //it will give error because scope of 10 is only inside the braces 

// let a= 10;                             
// {
//     let a=20;             // 20 overidden the 10 
//     console.log(a)        //it will print 10          
// }                                
// console.log(a)            //it will print 10           


