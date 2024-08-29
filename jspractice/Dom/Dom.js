//Selectors
//id
// let H1 = document.getElementById("h1");
// console.log(H1);
// //class

// let  p = document.getElementsByClassName("P");
// console.log(p);

// // TagName

// let H3 = document.getElementsByTagName("h3");
// console.log(H3);

// // name

// let Form  = document.getElementsByName("Form")
// console.log(Form);

let P = document.querySelectorAll(".P");

console.log(P);

let H3 = document.getElementById("h3");
console.log(H3);

H3.innerHTML="<h1>Hello!</h1>";
H3.id="H";
H3.style.background="Blue";
H3.setAttribute("class","A");
H3.className="A"//two methods to set attribute





let Btn = document.getElementById("btn");
let Result = document.getElementById("Res");


Btn.addEventListener("click",()=>{
    let Input = document.getElementById("search").value;

switch(Input){
    case "pothigai" :
    Result.innerHTML = "Monday";
    break;

    case "Qln" :
    Result.innerHTML = "Wednesday";
    break;

    default:
        Result.innerHTML = "No Train Avail This Name!"

}
})


Btn.removeEventListener("dblclick",()=>{
    let Input = document.getElementById("search").value;

    if (Input=="") {
        alert("Enter Some Train Name")
        
    }


})



//BOM(browser object model)

let W=window.innerHeight;
console.log(W);

let S=window.screen.width;
console.log(S);

// window.open("https://www.google.com/search?q=cricbuzz&oq=&gs_lcrp=EgZjaHJvbWUqCQgDECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAuGCcY6gLSAQsxMzEzNDIyajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8");

// // window.close()
// window.moveTo("https://www.w3schools.com/js/tryit.asp?filename=tryjs_win_inner")


//screen

let scr=window.screen.pixelDepth;
console.log(scr);

//location

window.location.protocol;
console.log(loc);


function back(){
    window.history.back()       //minimum 2 html file required
}

