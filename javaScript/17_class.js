//creating a class

// class myclass{
//     a=10;
//     b=30;
//     print(){
//         console.log("i am myclass")
//     }
// }
// let obj =new myclass();      //creating object of that class
// console.log(obj)
// obj.print()                  //accessing the function of that class


// class myclass{
//     #a;
//     #b;
//     constructor(value1,value2){
//         this.#a=value1;
//         this.#b=value2
//     }
//     data(){
//         return this.#a
//     }
//     get data1(){                  //if you use get before any fuction then that function can be used  as property
//         return this.#b
//     }
//     set setA(val){                    //using set
//         this.#a=val;
//     }
//     print(){
//         console.log("i am myclass")
//     }
// }
// let obj =new myclass(550,700);      //passing value to variable inside the class

// console.log(obj)
// obj.print()  
// console.log(obj.data())             
// console.log(obj.data1)             // no need to use () 
// obj.setA=7;                // setA is used as property so no need of ()
// console.log(obj)           // you can see value of a changed



//Inheritance

// class animal{
//     #leg;
//     #tail;
//     constructor(l,t) {
//         this.#leg=l;
//         this.#tail=t;
//     }
// }
// class wildAnimal extends animal{
//     #place;
//     constructor(l,t,p){
//         super(l,t)
//         this.#place=p;
//     }
// }
// let dog = new animal(4,1);
// console.log(dog)

// let lion = new wildAnimal(4,1,"forest");
// console.log(lion)



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
