//we will see alert , prompt and confirm
console.log('ashish'); //it will shown in console of your web page

alert("hello your script works"); //used to give alert to user

var a = prompt("enter you name");  //it takes input from user and store in any variable

var b = confirm("do you want to print your name");
if(b){
    document.write(a);
}
else {
    document.write("you denied to print your name");
}


