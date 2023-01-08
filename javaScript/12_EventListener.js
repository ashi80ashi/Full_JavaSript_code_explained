let btn = document.getElementById("btn");
let box1 = document.getElementById("b1");
let box2 = document.getElementById("b2");
let box3 = document.getElementById("b3");
let heading = document.querySelector("h1")
//addEventListner 

btn.addEventListener("click",()=>{                 // here event is added , so when the user click on
    btn.style.background="pink";                   // the button he will see the changes whatever given
                                                   // in the function.
    let nw = document.createElement("div");        // 
    nw.setAttribute("class","mydiv");              //
    nw.innerText=`box`;
    document.body.append(nw);
})

box1.addEventListener("mouseover",()=>{            //it is similar as hover 
    box1.style.filter="blur(10px)";
    box1.style.transform="scale(1.3)"
    box2.style.filter="blur(50px)";
})
box1.addEventListener("mouseout",()=>{             //when mouse is out of box blur will be 0
    box1.style.filter="blur(0px)";
    box1.style.transform=""
})
    
box2.addEventListener("dblclick",()=>{             //on doblue click box will be blur
box2.style.filter="grayscale(100)"
})

box3.addEventListener("dblclick",()=>{
    box3.style.position="relative";
    box3.style.left="15px";
    box3.style.border="none"
})

heading.addEventListener("mousemove",()=>{
    heading.style.filter="blur(1px)"
    heading.style.letterSpacing="5px"
})