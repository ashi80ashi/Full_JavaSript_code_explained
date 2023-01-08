console.log(Math.round(4.5), "round")     //round return the nearest number 
console.log(Math.floor(4.9) ,"floor")    //it return the small number only
console.log(Math.ceil(4.3) ,"ceil")      //it return the bigger num. only
console.log(Math.trunc(4.934) ,"trunc")  //it just remove the digits after integer
console.log(Math.sign(123) ,"sign")       //return 1 for +ve no. , -1 for -ve no. , 0 for 0
console.log(Math.sign(-3423) ,"sign") 
console.log(Math.pow(2,3) ,"pow")       //2 raise to power 3 => (2*2*2)
console.log(Math.sqrt(81) ,"sqrt")    //return square root
console.log(Math.abs(-23) ,"abs")     // return only positive no. only 
console.log(Math.random()*10 ,"random number") //will generate random no. from 0 to 5
console.log(Math.trunc(Math.random()*5,"random number")) 
console.log("\n")

// DATE  !! check date in browser console !!

let date = new Date();    //it will show date in pre-defined method
console.log(date)

let date2 = new Date(1999,7,04);    //it will show date whatever we given but time as 00:00:00  
console.log(date2)
console.log(date2.getDate());
console.log(date2.getDay()) 
console.log(date2.getFullYear())

let date3 = new Date();             //here we get universal time in 12hr format
console.log(date3.toUTCString())