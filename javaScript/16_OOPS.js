//first lets understand pass by value and pass by refernce

//pass by value            //it is seen in permitive
// let a = 20;
// let b=a;                //it is pass bye value becoz b is gettin the value only
// console.log("a=",a);
// console.log("b=",b);
// a=30 ;                  //we updated value of a as 30 but no change will be seen in b
// console.log("a=",a);
// console.log("b=",b);

//pass by refernce         //it is seen in non peritive
// let p={
//     "name":"ashish",
//     "class":"MCA"
// };
// let q=p;                //q is storing the address of p , so if any change made to p will also be saved in q also
// console.log("p=",p);
// console.log("q=",q);
// p.roll=5;
// console.log("p=",p);
// console.log("q=",q);    //you will see roll also got updated in q also

//------------------------------------------------------------

//creating an object
// let enemy ={
//     height:1000,
//     weight:500,
//     Blood:"green",
//     quote:()=>{
//         console.log("enemys Ahead")
//     }
// };
// console.log(enemy)
// console.log(enemy.quote())

//------------------------------------------------------------

//creating object template  ==> this is also called factory function

// function enemy(h,w,b){
//     return{
//         height:h,
//         weight:w,
//         Blood:b
//     }
// }
// console.log(enemy(100,200,"B+"))
// console.log(enemy(500,100,"A-"))

//OR

// function enemy(h,w,b){
//     let enmy ={
//         height:h,
//         weight:w,
//         Blood:b
//     }
//     return enmy ;
// }
// let e1 = enemy(100,800,"B+");
// console.log(e1);

// let e2=enemy(400,100,"A-");
// console.log(e2);

//----------------------------------------------------------------------------------

//constructor function
// function enemy(h,w,b){
//     this.height=h;
//     this.weight=w;
//     this.blood=b
// }
// let e1 = new enemy(200,500,"A+");
// console.log(e1);
// console.log(e1.constructor);  //to see what was actual function code

//other way

// let enemy = new Object({height:200,weight:500,blood:"B+"})
// enemy.size="huge"
// console.log(enemy)

//----------------------------------------------------------------------------------
//inheriting the property in prototype of new object ==> new object will seems to be
//empty but it will be having all properties in the prototype

// let car = {
//   tyre: 4,
//   color: "white",
// };
// let verna = Object.create(car); //now all property of car is in verna but if you console you will see empty object
// console.log(verna);             //because those proerties are stored in prototype of verna you can access them by verna.tyre
// console.log(verna.tyre)

//----------------------------------------------------------------------------------
//using (define property) method

// let employee =  {
//     name : "ashish",
//     designation: "software engineer"
// }
// Object.defineProperty(employee,"salary",{   //define property
//     value:"3 lakhs",
//     enumerable:true      //if you remove it or give false value then you will see error
// })
// console.log(employee);       //you can see salary is added inside object
// console.log(employee.name);
// console.log(employee.salary);    //you can access easily

// for (const key in employee) {
//     console.log(key)            //here you see error because salary is not iterable, you need to make that iterable first
// }

//----------------------------------------------------------------------------------

//create 100 objects
// function enemy(h,w,b){     
//     this.height=h;                  //this keyword can not be used in arrow function
//     this.weight=w;
//     this.blood=b
// }

// for (let index = 500; index<=600; index++) {
//     let e =new enemy(index,index+100,"A+");
//     console.log(e)

// }
