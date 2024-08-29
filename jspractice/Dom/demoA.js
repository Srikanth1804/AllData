function A(){
    let O ={
        Name:"Sri",
        Age:"20"
    }
    console.log(O);
    return O
}



let H1 = document.createElement("h1")
let H2 = document.createElement("h2")
H1.innerText="Vanakkam";
H2.innerText="ABCD"
console.log(H1);

let A1   = document.getElementById("hello");
A1.appendChild(H1)
A1.append(H2)


document.write("ABVCGSVMHJB<K")     //don't use

let B=document.createElement("h3")
console.log(B);
B.innerHTML="heyy!"
let C=document.getElementById("para")
C.append(B)

let D=document.createElement("p")
console.log(D);
D.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia minima libero facilis, consequuntur et adipisci nobis quos ullam repellendus a nulla sunt distinctio illum ducimus cupiditate maxime doloribus harum"

let E=document.getElementById("just")
E.append(D)

D.style.color="orange"
D.style.backgroundColor="black"
let ol = document.getElementsByTagName("ol");
let li = document.createElement("li");
li.innerText = "f";

ol.append(li)

