// function myfn(name,time){
//     document.write(`heyy ${name}, Good ${time} Welcome to web page`)
// }
// setTimeout(myfn, 2000 ,"ashish","morning")  // set time out function will call the myfun after 2 sec.


//other way of settimeout
// setTimeout(()=>{                                            //we can also use arrow function for set time out
//     document.writeln("<br>this second TimeOut function")
// },5000)

// setTimeout((x)=>{                                            //we can pass refference in arrow function for set time out
//     document.writeln(`<br> this is ${x} TimeOut function`)
// },7000,"3rd")

//clearTimeOut is use to clear the function before it get called
// document.querySelector("button").addEventListener("click",()=>{   //first function i.e. myfun will not be called
//     clearTimeout(1)
// })

//set TIME interval is repeats the function after given time
//for e.g you gave 2 sec. then the function will be called after every 2 sec.

// setInterval(()=>{                                             //this function will repeate after every 2sec.
//     document.writeln("<br>i will repeate me after every 2 sec.")
// },2000)

