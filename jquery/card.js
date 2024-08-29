$(document).ready(function(){
    $("#btn").click(function(){
        $("#card").slideToggle(1000)


        let btn=document.getElementById("btn")
        if(btn.innerHTML=="show image"){
            btn.innerHTML="hide image"
        }
        else{
            btn.innerHTML="show image"
        }
    }) 



})
