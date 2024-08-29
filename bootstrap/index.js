function myresult(){
let text=document.getElementById("text").value
let btn=document.getElementById("btn")
let output=document.getElementById("output")

if(text<=50){
    output.innerHTML="Improve your study!"
    output.style.color="red"
    output.style.fontWeight="1000"
}
else if(text>=60 && text<=79){
    output.innerHTML="Good job!"
    output.style.color="orange"
    output.style.fontWeight="1000"
}
else if(text>=80 && text<=100){
    output.innerHTML="Excellent!"
    output.style.color="green"
    output.style.fontWeight="1000"
}
}


