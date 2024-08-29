// // String->"",'';
// //Number->1.1.1
// // Object->
// //function
// ///boolean-> true,false
// //undefined
// // null

// var Bag = "Laptop@200"; 
// console.log( Bag);

// let Age=40;
// console.log(Age);
//  const Do_You_Have_A_LAPTOP=false ;
//  console.log(Do_You_Have_A_LAPTOP);
//  let Height=null;
//  console.log(Height);


//  let name="srikanth";
//  console.log(name);
//  let age=21;
//  console.log(age);
//  let Do_You_Have_A_BIKE=true;
//  console.log(Do_You_Have_A_BIKE);
//  let Do_You_Have_A_BIKES;
//  console.log(Do_You_Have_A_BIKES);
//  let Do_You_Have_A_CAR=null;
//  console.log(Do_You_Have_A_CAR);

// let showname="WWE";
// console.log(showname);
// let time=7.30;
// console.log(time);
// let Is_that_match_between_roman_and_goldberg=true;
// console.log(Is_that_match_between_roman_and_goldberg);



// // x=5;
// // y=10;
// // let z=x+y;
// // console.log(z);

// let A=10;
// A+=5
// console.log(A);



// // let A=5;
// // A--;
// // console.log(A);
// // console.log(A**2);




// // let A1=20;
// // let B1=20;
// // console.log(A1==B1&&A>=B1);


// // logical operator

// //&& || !


// let N="A";
// let N1="B";
// console.log(!N=="A");

// //arithematic operator
// let S=10;
// let D=10;
// console.log(S+D);
// console.log(S-D);
// console.log(S*D);
// console.log(S/D);
// console.log(S%D);
// console.log(S++);
// console.log(S);
// console.log(D--);
// console.log(D);
// console.log(S**2);      //doubt


// //assignment operator

// let f=3;
// let g=4;
// console.log(f+=g);
// console.log(f/=g);
// console.log(f*=g);
// console.log(f<g);       //doubt
// console.log(f>g);       //doubt


// let Z=20;
// let V=20;
// console.log(Z<=V);


// //logical operators

// let AB=10;
// let BC=20;
// console.log(AB>BC&&AB<=BC);
// console.log(AB>BC||AB<=BC);
// console.log(!(AB==BC));           //doubt


// let a=2+10*5;
// console.log(a);


// function A2(){
//     let A1=10;
//     console.log(A1);
// }



// A2();
// A2();




// let B=10;



// let B1={
//     name:"sri",
//     age:20,
   

// }





// console.log(B1.C());


//onclick
function Data(){
    let bio={
        name:"sri",
        age:"21",
        edu:"bsc",
    }
 console.log(bio);

}

function A(){
    let Name="sri";
    let age=21;
    console.log(Name);
    console.log(age);

return age;
}
console.log(`i am ${A()}`);


//parameter

function mobile(m1,m2){
    console.log(m1);
    console.log(m2);
}
mobile()
mobile("vivo","oppo")

//template string(`)-located in(~ key)
let S=`"hello's"`;
console.log(S);




let Name="srikanth ";
let initial=" P";

console.log(Name.charAt(1));
console.log(Name.charCodeAt(2));
console.log(Name.concat(initial));
console.log(Name.length);
console.log(Name.padEnd("10","#"));
console.log(Name.padStart("10","."));
console.log(Name.repeat(2));
console.log(Name.slice(3));
console.log(Name.substring(0,3));
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.replace("srikanth","SriKAnth"));


let Name1="        srikanth        "

console.log(Name1.trim());
console.log(Name1.trimStart());
console.log(Name1.trimEnd());
console.log(Name1.length);


//Conditions:
//if
//if else
//if else if
//switch

//if
let Z =10;
if(Z==20){
console.log("yes");
}

let Z1=10;
if(Z1==10){
    console.log("yes");
}


//if else

let Y=50;
if(Y>100){
    console.log("true");
}
else{
    console.log("false")
}

//if else if

let X=30;

if(X==10){
    console.log("good");
}
else if(X==20){
    console.log("nice");
} 
else if(X==30){
    console.log("better");
}
else{
    console.log("bad");
}
let X1=100;

if(X1==10){
    console.log("good");
}
else if(X1==20){
    console.log("nice");
} 
else if(X1==30){
    console.log("better");
}
else{
    console.log("bad");
}



//switch

let U="bus";
switch(U){
    case "bus":
        console.log("redbus");
        break;                              //doubt

    case "train":
        console.log("express");
        break;
}

let U1="train";
switch(U1){
    case "bus":
        console.log("redbus");
        break;                             

    case "train":
        console.log("express");
        break;
}

//for in /for of loop only used for array 

//normal array

let AA=[1,2,3,4,5];
console.log(AA[0]);
console.log(AA[1]);
console.log(AA[2]);
console.log(AA[3]);
console.log(AA[4]);//(only this way to see the whole array)


//but for 0f loop used to see the result simple

let BB=[1,2,3,4,5]
for(let output of BB ){
    console.log(output);
}
                                // both (in and of )are provide same results 
let CC=[1,2,3,4,5]
for(let output of CC ){
    console.log(output);
}

//error handling


finally{
    console.log("success");
}
try{
    const DD="sri";
     DD="s"
    console.log(DD);

}
catch(e){
        console.log("error")
}


// //throw
// try {
//     if (10 > 20) {
//         throw new Error("not valid");
//     }
// } catch (e) {
//     console.log(e);
// }

