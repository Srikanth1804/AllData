function train(){
    let text=document.getElementById("text").value
    let btn=document.getElementById("btn")
    let pop=document.getElementById("pop")

switch(text){
    case "pothigai":
    pop.innerHTML="train arrive at 10pm"
    pop.style.color="green"
    break;

    case "chennai":
    pop.innerHTML="no tain by the name"
    pop.style.color="red"
    break;
}
}


function popup(){
    let product=document.getElementById("product").value
    let submit=document.getElementById("submit")
    let content=document.getElementById("content")


    if(product=="facewash"){
        content.innerHTML="product available"
        content.style.color="green"
    }
    else{
        content.innerHTML="product unavailable"
        content.style.color="red"
    }

}