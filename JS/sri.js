function A(){
    let A=10;
    let B=3;
    console.log(A+B);
}

A();

let a1="sri";
console.log(a1);

//object

let name={
    name:"sri",
    age:21,
}
console.log(name);

function maths(){
    let C=30;
    let D=10;
    console.log(C+D);
    console.log(C-D);
    console.log(C*D);
    console.log(C/D);
    console.log(C%D);
    console.log(C++);
    console.log(C);
    console.log(D--);
    console.log(D);
    console.log(C==D&&C>D);
    console.log(C==D||C>D);
    console.log(!(C==D));
}
maths()




 function Data() {
     let bio={
         name:`srikanth"s`,
         age:21,
         edu:"bsc",
         place:"senthamaram",
    }   


    // let D = bio.name;

    // return D
    
    
 }


// console.log(`Hello My Name Is ${Data()}`);


//function P(A,B) {
    //console.log(A);
  //  console.log(B);
//}

//P("Hello","Vankkam");
//P("Hello1","Vankkam1");




//let H=new String("Srikanth")
//console.log( typeof(H));

//let H1="ABC";
//console.log(typeof H1)


//string methods

let Name = "      SriKanth";
let initial = "P";
console.log(Name.charAt(0));

console.log( Name.charCodeAt(0));

console.log(Name.slice(4));
console.log(Name.substring(0,3));
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

console.log(Name.concat(initial));
console.log(Name+ "  " + initial);

console.log(Name.trim());
console.log(Name.trimStart());
console.log(Name.trimEnd());

console.log(Name.length);
console.log(Name.padEnd(20,"."));

console.log(Name.repeat(3));
console.log(Name.replace("SriKanth","srikanth"));


//Array methods


let Array1=["sri","muthu","mani"]
let Array2=[1,2,3,4,5]
console.log(Array1);
console.log(Array1[0]);
console.log(Array1.length);
console.log(Array1.concat(Array2));
console.log(typeof Array2.toString());
console.log(typeof Array2);
console.log(Array1.push("sakthi"));
console.log(Array1);
console.log(Array1.pop());
console.log(Array1);
console.log(Array1.shift());
console.log(Array1);
console.log(Array1.unshift("kanna"));
console.log(Array1);
console.log(Array2.copyWithin(2,0));
console.log(Array1.splice(3,0,"sakthi"));
console.log(Array1);
console.log(delete Array1[0]);
console.log(Array1);
console.log(delete Array1[14]);  //bug
console.log(Array1);             //bug

let Array3=[[1,2,3],[4,5,6],[7,8,9]]
console.log(Array3[0][2]);
console.log(Array3.flat());




let AV=10;
//if 
// if else
// if else if
// switch


if(AV>20){
    console.log("Correct");
}
else{
    console.log("wrong");
}


// else if



// let TN="J";
// if(TN=="A"){
//     console.log("10AM");
// }
// else if(TN=="B"){
//     console.log("12 AM");
// }
// else if(TN=="C"){
//     console.log("3PM");
// }
// else{
//     console.log("No Train Available This Name");
// }

let TN1="A";
switch(TN1){
    case "A":
        console.log("107AM");
        break;                      //doubt

        case "B":
            console.log("10AM");
            break;
}


//loop:

//while

let object=5;
while(object>3){
    console.log("hello!");
    object--;
}


//do while

let object1=4;
do{
    console.log("alert!");
    object1++;
}
while(object1<8)

//for

for(let object2=12;object2>=10;object2--){
    console.log("heyyy!");
}




 let Data1 = [1,2,3,4];

for(let Result in Data1){


    console.log(Result);
}





try{
   if(20>10){
throw new Error("Not Valid")

   }
  
}
catch(e){
    console.log(e);
}
finally{

    console.log("Succedd");
  
}





// for(let T=0;T<=Data1.length;T++){
//     console.log(Data1[T]);
// }





function V(){
    console.log("Vannllam");
}

V()




