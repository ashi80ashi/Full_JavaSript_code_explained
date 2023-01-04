const inp = document.getElementById("noOfWords");
let a = document.querySelector(".container")

const genWords = ()=>{
    let word="";
    const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<=navigator; i++)
    {
        var random = (Math.random()*25).toFixed(0)
        word += letters[random];
        console.log(random)
    }
    
    return word;
}


const genPara = () => {
   let para= document.createElement("p");
   para.innerHTML="sample paragraph";
   para.setAttribute("class","paras")
   
   a.append(para)
}
console.log(a)

