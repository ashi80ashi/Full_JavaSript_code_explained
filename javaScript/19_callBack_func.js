// in callback functions we can pass function as a parameter , the function which is receiving 
//other function as parameter is called high order function

// function wishing(name,time) {             //int second parameter of this function we can pass name of                 
//     console.log(name);                    //any other functionthat can also be called as callBack function
//     time();
// }
// function morning(){
//     console.log("good morning")
// }
// function noon(){
//     console.log("good afterNoon")
// }
// function night(){
//     console.log("good Night")
// }                                         //here you can pass name of any function(morning,noon,night) or directly we can
// wishing("ashish",morning)                 //pass any arraow punction   
                                              


// other example

//take an array print print them by multipying and dividing every element by 2 and original array should  
//not be changed , you can create only one function in program

// let arr =[1,2,3,4,5,6];

// function newarray(a,callbck) {
//     let ans=[];

//     for(i=0;i<a.length;i++){
//         let element= callbck(a[i])
//         ans.push(element)
//     }

//     console.log(ans)
// }
// newarray(arr,(a)=>{return a*10})  //we passed arrow function as callbck
// newarray([3,4,3,2,1,4,6,4,2],(a)=>{return a/2})