let url = "https://catfact.ninja/fact" ;
let h2 = document.querySelector("h2")
//
// async function fetchdata(){
//     let response = await fetch(url);     //fetch returns promise so you need to wait for it if you dont wait then promise will be shown pending
//     console.log(response);

//     let data = await response.json();    //if you remove await you see pending promise
//     console.log(data)

//     h2.innerHTML=data.fact;
// }
// fetchdata();


//you can use .catch if promise not returned or failed
//for e.g url is not proper then data will not  be returned 

// let url2 = "https://catfact.ninja/fact" ;
// async function fetchdata(){
//     let response = await fetch(url2);    
//     console.log(response);

//     let data = await response.json();   
//     console.log(data)

//     h2.innerHTML=data.fact;
// }
// fetchdata().catch((error)=>{       //this part will execute only when there is any error  [do some change in url if you want to see the error]   
//     console.log(error)
//     console.log("unable to fetch")
// });
