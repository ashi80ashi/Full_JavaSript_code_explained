//prototype
//AS we all knows all non permitive data are object , even string dataType is also derived from object
//so if we set any property in prototype of object then that property can be accessed in any dataTyoe. means you 
//can access that in array and string also



// Object.prototype.ashish=(a)=>{
//     console.log(`ashish is setted prototype of object `)
// }
// //now you can see this ashish property in protoType of object , array or strings

// let obj ={
//     namee :"ashish",
//     class : "mca",
//     roll_no : 5
// }
// obj.ashish();   //ashish is present in proto of objects

// let arr=[1,2,3,4,5];
// arr.ashish();    //ashish is present in proto of objects

// let str ="ashish is a good boy"
// str.ashish();    //ashish is present in proto of objects




//if you want to set property in protoType of only array or only string , then set property only in array or string 

// Array.prototype.short= ()=>{                                  //short property will be seen only in aray neither in obj
//     console.log("sorry bro i can't short your array")         //nor in string
// }

// let newarr=[78,89,78,56,34];
// newarr.short();




// if you want properties of an object into the prototype of another then you can use __proto__

// let car={
//     color:"white",
//     sunRoof:"NO"
// }

// let verna ={
//     price:"5 Lakh",
//     gear : "Automatic",
//     __proto__:car     //properties of car fatched into its prototype           
// }
// console.log(verna)
// //other method is verna.__proto__=car   //Or you can also do  let verna=object.create(car)
 //modern syntax for same is Object.setPrototypeOf(verna,car)




 //create a method for string which give the true length of string for e.g  "  ashish     " , length should be 6        

//  String.prototype.trueLength=function(){console.log(`tru length is ${this.trim().length}`)}

//  let str ="    ashish     ";
//  console.log(str.length)
//  str.trueLength();