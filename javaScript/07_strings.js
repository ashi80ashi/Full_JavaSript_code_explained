let name1 ="ASHISH"; //declaring with double quote
let name2 ='ASHI..'; //declaring with single quate

console.log(name1);
console.log(name1[0]); //using index no.

//using template literal
console.log(`${name2} is nick name of ${name1}`);


//some methods of string
console.log(name1.length); //length of string

console.log(name1.indexOf("H")); //it will show index of 1st H

console.log(name1.includes("HI")); //it will check "HI" is present in sting or not

console.log(name1.substring(1,3));  // it will return sttring from index no.1 upto index no.2

console.log(name1.toLowerCase());  //change to lower case

console.log(name1.slice(1,4)); //it will give output from inedx no. 1 to 3

console.log(name1.slice(2)); //it will print whole string strating from index no.2

console.log(name1.replace("ASH","MAN")); //it will replace ASH with MAN , so ASHISH will become MANISH

console.log(name1.concat(" is good boy")); //it will be joined after ASHISH

console.log(name1.concat(name2)); //name2 will be joined after name1

console.log(name2.concat(" is nick name of " ,name1));

let name3 = "         ankit      ";

console.log(name3);
console.log(name3.trim()); //this trim will remove all extra space from name3

//using loop to print all character of sting
for (let key in name2) {
    console.log(key + " " + name2[key])
    }

for(let i=0; i<name2.length; i++){
    console.log(name2[i]);
}

for (let i of name1) {
    console.log(i)
}