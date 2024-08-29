import{A,B,C}from "./demo1.js"

console.log(A+B+C);


let S=()=>{
    let D=10;   
    console.log(D)      //arrow function
}
S()



let exam={
    subject:"maths",
    mark:100,

    total:function(){
        return this.subject+" "+this.mark
    }

}
console.log(exam);
console.log(exam.total());


function AA(){
    let B=10;
    let C=15;
    console.log(B+C);
}
AA()


let BB=()=>{
    let Z=12;
    let Y=10;
    console.log(Z+Y);
}
BB()