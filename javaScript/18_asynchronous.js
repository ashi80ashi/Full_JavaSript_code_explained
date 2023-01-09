// function myfun(name="ashish"){                                   //this e.g of synchronous program
//     for (let index = 0; index < 100 ; index++) {
//         console.log(name,index)                                  //this function will work in normal flow 
//     }                                                            //first name will be printed upto 100 
// }                                                                //in last "last_line" will be printed
// myfun();
// console.log("last_line")


// let see example of asynchronus program

function myfun(name="ashish"){                                   
  setTimeout(() => {                                             //as we used the set time out so tthis function will satrt working after 3sec.
    for (let index = 0; index < 100 ; index++) {
        console.log(name,index)                                  
    } 
  }, 3000);                                                            
}                                                                
myfun();
console.log("last_line")                                        //this will be printed first