let Input = document.getElementById("input");
let OPDIV = document.getElementById("OPDIV");

// function ImgCreation(src) {
//     var Img  = document.createElement("img")
//     Img.src=src;
//     return Img
    
// }


let Img1 = "https://images.unsplash.com/photo-1559554498-13ec30537909?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 

let ClassName = "Images"

function ShowResult() {
  

    switch(Input.value){
        case "swizerland":
        OPDIV.innerHTML=`<img class=${ClassName} src=${Img1}/>`
            break;

            default:
                alert("Error!")

    }
    
}
