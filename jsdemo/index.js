//variables
//var
//let
//const

let A="sri"
console.log(A);

//operators

//assignment operator

let B=10;
let C=10;
console.log(B==C);

//addition 
console.log(B+C);
//multiplication
console.log(B*C);
//comparsion 
console.log(B>=C);
//arithmetic operators
console.log(B**C);
console.log(B/C);
console.log(B%C);
console.log(B++);
console.log(B);
console.log(C--);
console.log(C);


//function

function D(){
    let E=10;
    let F=12;
    console.log(E+F);
}
D()

//object

let G={
    name:"sri",
    age:22,
}
console.log(G);


//events(onclick)

function H(){
    let I="i am sri"
    console.log(I);
}


//return($ and `)

function J(){
   let sub="maths"
  let per="97%"
    return per;
}
console.log(`i have ${J()}`);

//parameters


function K(L,M){
    console.log(L);
    console.log(M);
}
K("Apple","Orange")

//string methods

let N="srikanth"
let O="  sri   "

console.log(N.charAt(0));
console.log(N.charCodeAt(7));
console.log(N.length);
console.log(N.concat(O));
console.log(N.padEnd("10","*"));
console.log(N.padStart("10","!"));
console.log(N.repeat(2));
console.log(N.replace("srikanth","SrIkAnTh"));
console.log(N.slice(3));
console.log(N.substring("0","3"));
console.log(N.toLowerCase());
console.log(N.toUpperCase());
console.log(O.trimStart());
console.log(O.trimEnd());

//array

let P=[1,2,3,4]
console.log(P);
console.log(P[2]);

//array methods

let Q=[1,2,3,4]
let R=[5,6,7,8]

console.log(Q.concat(R));
console.log(Q.copyWithin(1,0));//overwrite 2
console.log(Q.length);
console.log(Q.pop());
console.log(Q);
console.log(Q.push(5));
console.log(Q);
console.log(Q.shift());
console.log(Q);
console.log(Q.unshift(0));
console.log(Q);
console.log(delete R[0]);
console.log(R);

let S=[[1,2,3],[4,5,6],[7,8,9]]
console.log(S.flat());
console.log(S[1][2]);

//conditions

//IF

let T=10;
let U=20;
if(T<U){                    //con true res show otherwise not show
    console.log("true");
}

//IF Else

let V=15;
let W=20;
if(V>W){
    console.log("true");
}
else{
    console.log("false");       //con true or false it show result
}

//IF Else IF

let X=10;
let Y=20;
if(X==Y){
    console.log("hello");
}
else if(X>Y){
    console.log("alert");
}
else if(X>=Y){
    console.log("heyy");
}
else{
    console.log("something wrong");
}


//switch

let Z="bus";

switch(Z){
    case "train":
        console.log("10pm");
        break;
    case "bus":
        console.log("12AM");
        break;
}

//date get method

const AA=new Date()
console.log(AA);
console.log(AA.getDate());
console.log(AA.getDay());
console.log(AA.getFullYear());
console.log(AA.getHours());
console.log(AA.getMonth()); //etc...

//date set method



//math

let CC=3.9;
let DD=Math.round(CC)
console.log(DD);

let EE=Math.ceil(CC)
console.log(EE);

let FF=Math.floor(CC)
console.log(FF);        //similar to trunc

let GG=Math.sign(CC)
console.log(GG);

//random

let HH=Math.random()*10000
console.log(HH);

let II=Math.round(HH)
console.log(II);

//loop

//for
//while
//dowhile

//While                                                 //initialization
                                                        //condition
                                                        //updation
let JJ=20;

while(JJ==20){
    console.log("correct");
    JJ--;
}

//do while

let kk=330;
let ll=120;
do{
    console.log("hello");
    kk--;
}
while(kk>ll)


//for

for(let mm=30;mm<35;mm++){
    console.log("superrr!");
}

//2 type of for

//1.for of 
//2.for in          //this two type only for array to see the result


let nn=[1,2,3];
for(let result of nn){
    console.log(result);        //of /in(use)
}

//error handling

//three important methods

//try
//catch         (if we use try must use catch)
//finally

try{
    const oo=10;
    oo=9;
}
catch(e){
    console.log("error:You don't change the value");
}
finally{
    console.log("success");     //it works when the condition true or false
}

//throw     (it used for we predict the error,we create error)  
try {
    let pp = 30;
    if (pp < 35) {                          //doubt
        throw new Error("not valid");       //bug
    }
} catch (e) {
    console.log(e);
}

//this keyword

let qq={
    name:"sri",
    age:22,


    rr:function ss(){
        return this.name+""+this.age;
    }
}
console.log(qq);
console.log(qq.rr());


//arrow function

let tt=()=>{
    let uu=10;
    let vv=20;
    console.log(uu+vv);
}
tt()

//module(import and export)

import { ww,xx } from "./demo.js";

console.log(ww+xx);


//DOM

//selectors

//id selector

let hello=document.getElementById("hello")
console.log(hello);

//class selector

let heyy=document.getElementsByClassName("heyy")
console.log(heyy);

//tag name

let tag=document.getElementsByTagName("p")
console.log(tag);

//query selector

let query=document.querySelector("#hello")
console.log(query);


//changing html elements

let H1=document.getElementById("hello")
H1.innerHTML="<h6>helloo</h6>"
H1.style.color="green"
H1.style.fontVariant="small-caps"
H1.style.letterSpacing="5px"

//set attribute         (Doubt)

//adding and deleting elements

//adding;

let H2=document.createElement("h2")
H2.innerHTML="how r u"

let H3=document.getElementById("hello")
H3.appendChild(H2)

//replace;

let orange=document.createElement("li")
orange.innerHTML="orange"

let ul=document.getElementById("ul")
let apple=document.getElementById("li1")
let mango=document.getElementById("li2")
ul.replaceChild(orange,apple)

//deleting;

ul.removeChild(mango)

//write             (it simple tag used to create html text but we r don't use because it make error)
const BB = new Date();
BB.setDate(18);
console.log(BB); // This will show the updated date object
   //doubt

