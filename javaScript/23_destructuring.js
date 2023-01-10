//After ES6 introduced , we got the feature of destructuring arrays or objects
let arr = [ "ashish",{company:"google",salary:"$50000"},9800000008];
let [nam,emp_detail,contact]=arr;  //here all the values of array got stored in these variable;
console.log(nam)                   //let's check either value store or not

//destruct an object
let car = {
    company : "Verna",
    gear : "automatic",
    tyre:4
}
let {company,gear,tyre}=car; //now company gear tyre are seperate variables
console.log(gear)

