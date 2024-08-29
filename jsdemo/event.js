let btn=document.getElementById("btn")
let popup=document.getElementById("alert")

btn.addEventListener("click",
()=>{
    let train=document.getElementById("text").value
    if(train=="pothigai"){
    popup.innerHTML="train arrive at 10PM"
    popup.style.color="green"
}

    else if(train=="thanjai"){
        popup.innerHTML="train arrive at 12PM"
        popup.style.color="green"
    }

    else if(train=="madurai"){
        popup.innerHTML="train arrive at 1AM"
        popup.style.color="green"
    }

    else{
        popup.innerHTML="no train available in this name"
        popup.style.color="red"
    }
}
)

btn.addEventListener("mouseover",
()=>{
    let train=document.getElementById("text").value
    if(train==""){
        alert("Error:Train name required!")
    }
})