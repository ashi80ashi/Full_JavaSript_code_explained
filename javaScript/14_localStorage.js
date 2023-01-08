//local storage and session storage

//session storage stores data for a singal session , means if you refresh the browser no chagnes 
//will be made to data but if you open new tab you will not see the data in session storage

let inp = document.getElementById("inp");    // accessed input tag ,stored in inp variable
let btn = document.getElementById("mybtn");  // accessed button tag , stored in btn variable

let btnfun = ()=>{
    alert(inp.value)
    sessionStorage.setItem("key1",inp.value)     //data given by user is stored in session storage
}

btn.addEventListener("click",btnfun)        // added event listner on btn 


let p = document.getElementById("data");

//get item and remove item  properties 
let dlt = document.getElementById("dlt")
dlt.addEventListener("click",()=>{
    let txt = sessionStorage.getItem("key1")    
    p.innerHTML=`${txt} is deleted`
    sessionStorage.removeItem("key1")              //this will delete only key1 data
})

//sessionStorage.key()  it will access data index-wise , you needed to give index number inside key()
//sessionStorage.clear() it will erase whole data

//local storage is similar to session storage the only difference is that local storage keeps the data 
//you might open as many as new tab you want your data will not be changed or deleted 

