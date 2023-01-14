//lexical scoping means inner function have the access of its parent function
function l1(){
    let l1 =5;
    let l2 =15;
    function inner() {
        console.log(l1+l2 +"\n")
    }
    inner()
}
l1();

//closure means that function will return the reference of its child function
function f1(x,y) {
    x;
    y;
        return function f2() {
        console.log("f2 ",x+y +"\n")
    }
}
let final = f1(4,5);    //here value is not passed to final , refernce of function f2 stored in final 
console.log(final)      //to see what is stored in final
final()                 //needs to call final as it is strong function


//hoisting means nothing but it is a behaviour of JS 
//whats happens normally that first you declare the function then calls it but in js you can to opposite of it

gm()                     //we called fun before decalring
function gm() {
    console.log("good morning India")
}
