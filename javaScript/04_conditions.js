//conditional statements  *{ternory operator also in this file}
let a=2;
if (a>5){
    console.log("kid will get addmission"); 
}

if(a<5){
    console.log("kidd will not get addimission");
}

//if-else_condition
let age=18;
if(age>18){
    console.log("you can drive");
}
else{
    console.log("you can't drive");
}

//if-else-if_condition
let b=5;
if (b>5){
    console.log("kid will get addmission"); 
}
else if(b==5){
    console.log("kidd might get addimission");
}
else{
    console.log("you can't get addmission");
}

//---   switch-case statement  ------
let fruit="mango";
switch (fruit) {
    case "apple":
        console.log("apple is best fruit")
        break;
    case "mango":
        console.log("mango is my fav. fruit")
        break;
    case "grapes":
        console.log("grapes are like small marbaṇṇls")
        break;
    default:
        break;
}

//----------- ternary operator ---------

let age2=26;
age2>18? console.log("you can enter CLUB" ) : console.log("you can't eneter");