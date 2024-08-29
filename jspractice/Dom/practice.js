let Head=document.getElementById("hello")
console.log(Head);

let classname=document.getElementsByClassName("h3")
console.log(classname);

let paragraph=document.getElementsByTagName("p")
console.log(paragraph);

let query=document.querySelector("h1")
console.log(query);

let all=document.querySelectorAll("h3")
console.log(all);


function biodata(){
    let myself={
        name:"sri",
        age:"21",
}

return myself

}

console.log(biodata());



//changing html elements

let element=document.getElementById("html")
console.log(element);

element.innerHTML="<h1>JAVASCRIPT!</h1>"
element.style.background="orange"

let hey=document.getElementById("just")
console.log(hey);

hey.id="hello"

hey.setAttribute("id","name")
hey.id="heyy"


Head.style.textAlign="center"
hey.style.fontVariant="small-caps";
hey.style.color="green"
hey.style.letterSpacing="3px"


let button=document.getElementById("btn")
console.log(button);

button.style.backgroundColor="pink"
button.style.borderRadius="5px"
button.style.position="relative"
button.style.left="500px"