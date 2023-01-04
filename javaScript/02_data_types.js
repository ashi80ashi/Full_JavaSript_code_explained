//there are 2 types of data in javascript :

//----------1.permitive(nn bb ss u)--------------

  //1.null 
    let a = null;
  //2.number
    let b = 5;
  //3.boolen
    let c = true; //false can also be there
  //4.bigInt
    let d =BigInt("567");
  //5.string
    let e ="ashish";
  //6.symbol
    let f =Symbol("am symbol");
  //7.undefined
    let g ;

    console.log(a,b,c,d,e,f,g);
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));
    console.log(typeof(f));
    console.log(typeof(g));
    console.log("\n");


//-----------2.non-permitive--------------
  //1.object
  let student1={
    name : "ashish",
    class : "MCA",
    roll_No : 5,
    result : undefined
  }
  console.log(student1);
  console.log(student1["class"]);
  console.log(typeof(student1));
  student1.address="Rohtak"; //adding new key : value in object
  console.log(student1);
  console.log("\n");

  //2.array --->it is also a regular object
  let arr=[1,2,3,4,5];
  console.log((arr));
  console.log(arr[1]);
  console.log(typeof (arr))