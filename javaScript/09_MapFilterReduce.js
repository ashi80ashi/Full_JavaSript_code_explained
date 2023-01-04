// map : it is little bit similar to forEach loop but the difference is that map creates new array
//        by performing some operation on each element 
//        and forEach is used only to print or perform any operation on array don't create new array

let arr =[1,2,3,4,5,6];
console.log(arr);

//let see difference between forEACH and MAP
let x = arr.map((value)=>{       //all the will increase by 1 and new array will be stored in x
    return value+1;
});
console.log(x ," (using map)");

let y = arr.forEach(value => {  //forEach can't create new array so value of y will be undefined
    {                            
        return value+1;
    }  
});
console.log(y," (using foreach)");
console.log("\n");


//Filter method  : used to filter an array
let z=arr.filter((value)=>{   
    return value>3            //values greater then 30 will be stored
})
console.log(z);
console.log("\n");


//reduce method : it reducde the array to a single value
let a = arr.reduce((value)=>{
    return value ;
})
console.log(a);
//example 2
let b = arr.reduce((value1,value2)=>{        // (1)+(2)=3 -> 3+(3)=6 -> 6+(4)=10 -> 10+(5)=15 -> 15+(6)=21
    return value1+value2 ;
})              
console.log(`${b}`);  