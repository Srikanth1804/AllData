//variable

let A="sri";
console.log(A);

const A1="sri";
console.log(A1);

var A2="sri";
console.log(A2);

//operators

//1.arithmetic operators

let A3=54;
let A4=49;
console.log(A3+A4);
console.log(A3-A4);
console.log(A3*A4);
console.log(A3/A4);
console.log(A3%A4);
console.log(A3++);
console.log(A3);
console.log(A4--);
console.log(A4);

//2.assignment oparators

let A5=45;
let A6=5;
console.log(A5==A6);
console.log(A5>=A6);

//3.logical operatrors

let S=12;
let S1=10;

//AND gate

console.log(S==S1&&S>S1);

//OR gate

console.log(S==S1||S>S1);

//NOT gate

console.log(!(S>13));


//string methods

let D="srikanth";
let F="SRI"

console.log(D.charAt(0));
console.log(D.charCodeAt(2));
console.log(D.concat(F));
console.log(D.length);
console.log(D.repeat(2));
console.log(D.padEnd("10","@"));
console.log(D.padStart("10","$"));
console.log(D.replace("srikanth","SRikaNTH"));
console.log(D.slice(2));
console.log(D.substring(0,3));
console.log(D.toUpperCase());
console.log(F.toLowerCase());
console.log( typeof D.toString());

let G="   sri    "

console.log(G.trim());
console.log(G.trimStart());
console.log(G.trimEnd());

//function

function data(){
    let bio={
        name:"sri",
        age:21,
    }
    console.log(bio);
}

// object

let subject={
    sub1:"tamil",
    sub2:"english"
}
console.log(subject);


//Array 

let W=[1,2,3,4]
let E=[5,6,7,8]

console.log(W);


//Array methods

let R=[3,4,5,7,]
let T=[1,3,5,6,7]

console.log(R.length);
console.log(R);
console.log(R.pop());
console.log(R);
console.log(R.push(3));
console.log(R);
console.log(R.shift());
console.log(R);
console.log(R.unshift(0));
console.log(R);
console.log(R.concat(T));
console.log(R.copyWithin(2,0));
console.log(typeof R.toString());
console.log(typeof R);
console.log(T.splice(3,3,7));
console.log(T);
console.log(delete T[2]);
console.log(T);

let J=[[1,3,4],[5,6,7],[8,9,0]]
console.log(J.flat());
console.log(J[2][2]);


//conditions

//if

let B="sri";

if(B="sri"){
    console.log("true");
}
if(B=0){
    console.log("true");
}

//if else

let B1=3;

if(B1>5){
    console.log("true");
}
else{
    console.log("false");
}

//if else if

let B2=100;

if(B2>550){
    console.log("true");
}
else if(B2<100){
    console.log("correct");
}
else if(B2==300){
    console.log("no");
}
else{
    console.log("false");
}

//switch

let AA="train";

switch(AA){
    case"trainq":
    console.log("yes");
    break;
    case"bus":
    console.log("correct");
    break;  
    
    default:
        console.log("opps!");
}


// const d = new Date();

// console.log(d);

// console.log(Math.ceil(-4.2));

 
// let Round = Math.round(Math.random()*10000)
// console.log(Round);

let date=new Date();
console.log(date);

let date1=new Date("2024-04-08");
console.log(date1);

let date2=new Date("2023-04-18,10:30:33")
console.log(date2);

let date3=new Date(100000)
console.log(date3);
console.log(date3.toDateString());
console.log(date3.toTimeString());


let date4=new Date()
console.log(date4.getDate());
console.log(date4.getDay());
console.log(date4.getFullYear());
console.log(date4.getHours());
console.log(date4.getMilliseconds());
console.log(date4.getMinutes());
console.log(date4.getMonth());
console.log(date4.getSeconds());
console.log(date4.getTime());
console.log(date4.getTimezoneOffset());


//math

console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.E);
console.log(Math.LN2);
//etc..
       
let sum=4.4;
let sum1=4.7;
let sum2=-3.2;

console.log(Math.round(sum));
console.log(Math.round(sum1));
console.log(Math.ceil(sum));
console.log(Math.ceil(sum1));
console.log(Math.floor(sum));
console.log(Math.floor(sum1));
console.log(Math.trunc(sum2))
console.log(Math.sign(sum));
console.log(Math.sign(sum2));


//random

console.log(Math.random());


let OTP=Math.random()*1000000
let OTP1=Math.round(OTP);
console.log(OTP1);



const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const d=new Date();
const today=days[d.getDay()]
console.log(today);



// Initiazilation
// Condition
// updation


// While Loop
let init = 5;
while(init <= 5){
    console.log("ABCD!");
    init--;
}


let Init2 = 1;

do{
    console.log("Sri Kanth!");
    Init2++;
}
while (Init2 <= 5)







