let arr0 = new Array(5,4,3,2,1); //declaring array with new keyword
console.log(arr0)

let arr= [1,2,3,"abc",null,true]; //other way to declare array

let arr2= [106,105,104,103,102,101]

console.log(arr);
console.log("\n");

console.log(arr[0]); //accessed the value of index no.0
console.log("\n");

console.log(arr.indexOf("abc")) //it will tell the index no. of abc
console.log("\n");

console.log(arr.concat(arr2)); //arr2 conctenated with arr
console.log("\n");

console.log(arr.reverse()); //it will reverse the arr
console.log("\n");

//sort method
let arr3=[12,23,43,73,32,46,54];
arr3.sort(); 
console.log(arr3);

//you can sort in any way assending, decending or any other way with help of function
let arr4=[43,54,23,46,76,45,34,56];
function des(a,b) {
    return b-a 
}
arr4.sort(des);
console.log(arr4);
console.log("\n");

//splice method : it modify original array while slice creates new array
let arr5=[123,342,445,234,578,867];
console.log(arr5);
arr5.splice(1,3);  //it will remove total three elements from index no.1
console.log(arr5); 
console.log("\n");

let arr6=[123,234,345,456,567]
console.log(arr6);
arr6.splice(0,2,"abc","bcd")  //it will replace total two elements from index no.0 
console.log(arr6);
console.log("\n");

//slice : it do not modify original array , it generates new which needs to be stored somewhere

let arr7=[1,2,3,4,5,6,7,8];
console.log(arr7);

let x = arr7.slice(3) //it will generate new array from index no.3 to end
console.log(x);

let y = arr7.slice(3,7) //it will generate new array from index no.3 to index no.6
console.log(y);
console.log("\n");

//array_to_string
let num = [11,22,33,44,55,66];
let b = num.toString(); //in the the values of array are stored as string
console.log(num,b);
console.log(typeof(b));
console.log("\n");

//join_method
let c= num.join("_"); // here _ will be joined between every element
console.log(num,c)
console.log("\n");

//pop
let d = num.pop();    //it will pop out the last element , means "66" from num will be stored in d
console.log(num,d);
console.log("\n");

//push 
let e = num.push(77); // 77 will be pushed in num and all the element stored in e
console.log(num , "  "+e+"(it is showing length)");
console.log("\n");

//shift   -> it will take out the first element from num or array
let f = num.shift();
console.log(num,f);
console.log("\n");

//unshift -> it will add value in starting of array
let g = num.unshift(200);
console.log(num,"  "+g+"(it is length of array)")
console.log("\n");



// printing array values with different loops
for(i=0; i<arr7.length; i++){               //for_loop
    console.log(arr7[i] +"for_loop");
}

arr7.forEach(i => {                         //forEach_loop
    console.log(i +"forEach_loop")
});

for (let key in arr7) {                      //forIN_loop  -> (key will print the index no.)
    console.log(key + " " + arr7[key])     
    }

for (let i of arr7) {                      //forOF_loop       
    console.log(i +" forOF")
}

// array.from  -> string will be converted into array
let str ="HELLO WORLD";
let z =Array.from(str);
console.log(z)

