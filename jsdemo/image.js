let Text=document.getElementById("input")
let OPdiv=document.getElementById("OPDIV")
let classname="style"
let img1="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3ljbGV8ZW58MHx8MHx8fDA%3D"
let img2="https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGV8ZW58MHx8MHx8fDA%3D"
let img3="https://images.unsplash.com/photo-1623216216626-f8bfd191552d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGV8ZW58MHx8MHx8fDA%3D"

let car1="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww"
let car2="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
let car3="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"

let bike1="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D"
let bike2="https://images.unsplash.com/photo-1695013147209-1516a20f0cdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
let bike3="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJpa2VzJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"



let decorate="decorate"
let text="text"
let decorate1="decorate1"
let text1="text1"
let decorate2="decorate2"
let text2="text2"

function ShowResult(){
    switch(Text.value){
        case "cycle":
            OPdiv.innerHTML=
            `<div>
            <img class=${classname} id=${decorate} src=${img1}/>
            <h3 id=${text}>HERO</h3>
            <img class=${classname} id=${decorate1} src=${img2}/>
            <h3 id=${text1}>HERCULUS</h3>
            <img class=${classname} id=${decorate2} src=${img3}/>
            <h3 id=${text2}>ATLAS</h3>
            </div>
            `
        break;

        case "car":
        
        OPdiv.innerHTML=
        `<div>
        <img class=${classname} id=${decorate} src=${car1}/>
        <h3 id=${text}>BUGATI</h3>
        <img class=${classname} id=${decorate1} src=${car2}/>
        <h3 id=${text1}>BENZ</h3>
        <img class=${classname} id=${decorate2} src=${car3}/>
        <h3 id=${text2}>AUDI</h3>
        </div>
        `
    break;

        case "bike":
               
        OPdiv.innerHTML=
        `<div>
        <img class=${classname} id=${decorate} src=${bike1}/>
        <h3 id=${text}>DUKE</h3>
        <img class=${classname} id=${decorate1} src=${bike2}/>
        <h3 id=${text1}>MT15</h3>
        <img class=${classname} id=${decorate2} src=${bike3}/>
        <h3 id=${text2}>ROYAL ENFEILD</h3>
        </div>
        `
    break;
        default:
               alert("PLEASE ENTER A VALID NAME!")

    }
}