//let's create a promise

// let pr =  new Promise((resolve,reject)=>{
//    //resolve("congrats !! promise is resolved")    //you can pass only one either resolve or reject
//    reject("sorry! promise is rejected")
// })
// pr.then((para)=>{                 //In .then we pass 2 arrow function 1st for resolved and 2nd for reject 
//     console.log(para)
// },(para2)=>{
//     console.log(para2)
// })
//                                  //insted of passing 2 arraow function in .then we can also use .then.catch
// pr.then((para)=>{                  
//    console.log(para)
// }).catch((error)=>{
//     console.log(error)
// })



//creating a promise in function
let arr= [];
let fetchData = (ar=[])=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            ar.push(2,3,44,5,66)                   //if you give value here then data will be pushed and promise will be resolved otherwise rejected
            if (ar.length>0) {
                resolve("data fetched sucessfully")
            } else {
                reject("data is not fetchewd")
            }
            console.log(ar)
        }, 4000);
        
    })
}
fetchData(arr).then((para)=>{
    console.log(para)
}).catch((error)=>{console.log(error)
})