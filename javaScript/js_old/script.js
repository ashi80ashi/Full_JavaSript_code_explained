// let a = document;
// console.log(a); 

//----------------------------------------------------select doc as aray---------------------------------

//let a = document.all;
//console.log(a); 


// -------------------------------------------select body of html document-------------------------------

// let a = document.body;
// console.log(a); 

// -------------------------------------------select elements and chnging style--------------------------

//  let i1=document.getElementById('i1');
//  i1.style.color='red';
//  i1.innerHTML=" this is added by js"

// let i2=document.getElementById('i2');
// i2.style.color='blue';

// let class2 = document.querySelector('.class2');
// class2.style.color='brown';

// --------------------------------------------selecting the children odf elements----------------------

//let i1=document.getElementById('i1');
//console.log(i1.childNodes);
//console.log(i1.children);

//let c1 = i1.childNodes[0];
//console.log(c1);

//let i1 = document.querySelector('#i1');
//console.log(i1.lastElementChild)

// ---------------------------------------------creating element , appending into other element----------

// let a = document.createElement('div');
// a.className='c1';
// a.innerHTML='<b>hi,added by js';
// let txt = document.createTextNode(' mai ek text node hu ')
// a.appendChild(txt);
// console.log(a);

// let div = document.querySelector('#i1')
// div.appendChild(a);

// ---------------------------------------------replacing the element-----------------------------------

// let a = document.createElement('div');
// let txt = document.createTextNode(' mai ek text node hu ')
// a.appendChild(txt);
// console.log(a);
// let div = document.querySelector('#i1')
// div.appendChild(a);

// let txt2 = document.createTextNode(' mai dusri text node hu ');
// txt.replaceWith(txt2)

// -------------------------------------------Events-----------------------------------------------------

// document.getElementById('i3').addEventListener('click',function() {
//     alert("yha click matt kr c")
// })

// document.getElementById('btn').addEventListener("click",function() {
//     document.getElementById('btn').style.color='pink';
//     alert(" left click  ")
// })

// ----------------------------------------------local storage-------------------------------------------

// localStorage.setItem('name1','ashi');
// localStorage.setItem('name2','anku');
// localStorage.setItem('name3','soni');
// // to see these values in console -> write window.localstorage in console and press enter
// 
// let name = localStorage.getItem('name2');   //to get item from local storage
// console.log(name)                   
// 
// localStorage.clear();    //to clear the storage
// 
// localStorage.removeItem('name2'); //removing a item

//-----------------------------------------storing an array in local storage-----------------------------

// let fruit = ['apple','bnana','mango','strwaberry','blue berry']
// localStorage.setItem('name1','ashi');
// localStorage.setItem('name2','anku');
// localStorage.setItem('name3','soni');                            
// localStorage.setItem('fruits', JSON.stringify(fruit));

// let name= JSON.parse(localStorage.getItem('fruits'));
// console.log(typeof(name));

//-------------------------------------------------------Date and Time----------------------------

// let a = new Date('09-04-2000 02:03:16');
// console.log(a);

// let b;
// b = a.getMonth();
// console.log(b);
// b=a.getMinutes();
// console.log(b);

// -----------------------------------------------------Maths---------------------------------------

// let a ;
// a= Math.round(4.2);
// a=Math.ceil(4.2);
// a=Math.floor(78.5);
// a=Math.sqrt(49);
// a=Math.pow(2,3);
// a=Math.max(23,32,12,43,12,6);

//     //   // generate random no.
// a =Math.ceil(10+(500-10)*Math.random());
// console.log(a);

//----------------------------------------------------object letral,constructor-----------------------

// let car ={                              //it is object letral
//     name :' maruti',
//     top_speed : '180',
//     run : function(){
//         console.log(`car is running`)
//     }
// }

// function car(gname,gspeed){                  //this is constructor object
//     this.name = gname;
//     this.speed = gspeed;
//     this.run = function(){
//         console.log(`${this.name} is running at ${this.speed}`);
//     }
// }
// car1 = new car('nissam',80);
// console.log(car1);
// car2 = new car('maruti',120);
// console.log(car2);

////-------------------------------------------------------  ES6 classes   ------------------------

// class student{
//     constructor(name , clas , rool_no){
//         this.name= name;
//         this.clas= clas;
//         this.rool_no= rool_no;
//     }
//     slogan(){
//         return `my name is  ${this.name} , i read in ${this.clas} class `
//     }
// }
// ashish = new student("ashish","MCA",1);
// console.log(ashish);

// megha = new student("megha", "bca", 12);
// console.log(megha);

//--------------------------------    inheritance of class  -----------------------------------------

// class student{
//     constructor(name , clas , rool_no){
//         this.name= name;
//         this.clas= clas;
//         this.rool_no= rool_no;
//     }
//     slogan(){
//         return `my name is  ${this.name} , i read in ${this.clas} class `
//     }
// }

// class programer extends student{
//     constructor(name , clas , rool_no, language){
//         super(name , clas , rool_no);
//         this.language=language;
//     }

// }

// ashish = new programer("ashish","MCA",1,"c++");
// console.log(ashish);
// console.log(ashish.name);
// console.log(ashish.language);
// console.log(ashish.slogan());


// ------------------------------------------------|| Asynchronous programming ||------------------

// setTimeout(() => {
//     for (let i = 0; i <=100; i++) {
//         console.log(i);

//     }
// }, 100);

// console.log("ashish is a bad boy")


//--------------------------------------------------|| call back functions example 1 ||-----------------------


// function add(a,b,callback){
//     this.a=a;
//     this.b=b;
//     addition=(this.a)+(this.b);
//     console.log(`sum of a and b is ${addition}`)
//     callback();
// }
// function print() {
//     console.log("alll tasks has been completed")
// }
// add(2,3,print)

//--------------------------------------------------|| call back functions ||-----------------------

// let students = [
//     {name: "ashish" , subject:"java"},
//     {name: "manish" , subject:"c++"}
// ]

// function enrollstudent(student,callback) {
//         students.push(student)
//         console.log(students)
//         callback();
// }

// function getstudents() {
//         let str="";
//         students.forEach(function(element){
//          str += `<li> ${element.name} </li>`;
//         });
//         document.getElementById('bche').innerHTML=str;
// }
// let s1={name:"megha",subject:"html"}
// enrollstudent(s1,getstudents);

//--------------------------------------------------||  promises  ||-----------------------

// function fun() {
//         return new Promise(function(resolve,reject){
//                 setTimeout(() => {
//                       const error = false;
//                       if(!error){
//                         console.log('your promise resolved') ;
//                         resolve();
//                       }
//                         else{
//                                 reject('rejected bro');
//                         }
//                 }, 2000);
//         })
// }
// fun().then(function(){
//         console.log('thanks to resolves')
// }).catch(function(){
//         console.log('rejected ')
// })

//----------------------------------------||  promises eg.2  ||--------------------------------------

// let students = [
//         { name: "ashish", subject: "java" },
//         { name: "manish", subject: "c++" }
// ]
// function enrollstudent(input_student) {
//         return new Promise(function (resolve, reject){
//                 setTimeout(() => {
//                                   students.push(input_student)
//                                   const error =false;
//                                   if (!error) {
//                                               resolve();
//                                                }
//                                   else {
//                                           reject();
//                                        }
//                                 }, 2000);
//               })
// }
// function getstudents() {
//         let str = "";
//         students.forEach(function (element) {
//                 str += `<li> ${element.name} </li>`;
//         });
//         document.getElementById('bche').innerHTML = str;
// }

// let s1 = { name: "megha", subject: "html" }
// enrollstudent(s1).then(function(){
//         getstudents();
//         console.log('peoblem solved')
// }).catch(function(){
//         console.log('error h bro')
// })


//--------------------------------------------------||  fetch API  ||---------------------
// function getdata() {
//   URL= "ashi.txt"
//         fetch(URL).then(function(response){
//                 return response.text();
//         }).then(function (data) {
//                 console.log(data);
//         })   
// }
// getdata();     


//--------------------------------||  Async / Await  ||----------------------- 

// async function ashi() {
//        let api = await fetch('ashi.txt');
//       return api.text();
// }
// let x = ashi();
// x.then(function (items) {
//         console.log(items)
// })

// console.log('1')                             //eg.2
// function callmanku() {
//         console.log('3')
//         return new Promise(function(resolve){
//                 setTimeout(() => {
//                        resolve("i love you motte") 
//                 }, 5000);
//         })
// }
// async function asyncCall() {   
//         console.log('2')
//         let result = await callmanku();
//         console.log(result); 
//         console.log('4')    
// }
// asyncCall();
// console.log('5')

//----------------------------------|| arrray{maps/filter} ||-----------------------------------

// let arr = [
//         { name: "ashish", age: 29, address: "rohtak" },
//         { name: "manish", age: 39, address: "bhiwani" },
//         { name: "satish", age: 49, address: "rohtak" },
//         { name: "rajnis", age: 19, address: "rohtak" },
//         { name: "megha", age: 17, address: "bhiwani" },
//         { name: "ridhi", age: 15, address: "ambala" }
// ]

// for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
// }

// arr.forEach(element => {
//                          console.log(element)
//                        }
// );

// let a = arr.filter(function(arr) {                 //filter
//         if(arr.address === "rohtak"){
//                 return true
//         }
// })
// console.log(a);

// arr.map(function(element) {                        //map
//         console.log(element.name)
// })


// let age=[12,23,45,57,2,3,56,345,3423,12,324,56,87,5435,32];

// print ages greater the 50 using normal loop and filter

// for (let i = 0; i < age.length; i++) {
//         if (age[i]>20){
//                         console.log(age[i])
//                       }
// }

// let a = age.filter(function (item) {                 //filter
//         if(item>20){
//                return item;
//         }
// })
// console.log(a);

// let a = age.filter((item)=>item>=20);
// console.log(a); 

// let a = age.map(triple);
// console.log(a)

//--------------------------------||  maps ||-------------------------------------

// let student= new Map();
// student.set(0,"ashi is good boy")
// student.set([2,3,4,],"")
// student.set(function anku() {
//         console.log('hii am anku')
// },"to ham kya kre bhai")
// console.log(student)

// student.forEach(function (k,v) {
//         console.log(`key is :${v}  value is : ${k}`)
// })

// for(let [key,value] of student){
//         console.log(key,value)
// }
