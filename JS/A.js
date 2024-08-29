//arrow function

let A =()=>{
   let D=10;
    let F=20;
    console.log(D+F);
}
A()



//this keyword

let report={
    name:"sri",
    grade:"A",

mark:function(){
    return this.name+" "+this.grade
}

}
console.log(report);
console.log(report.mark());

