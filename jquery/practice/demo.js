$(document).ready(function(){
    $("#click").click(function(){
        alert("Heyy Thanks for clicking!")
    })


$("#para").on({
    mouseenter:function(){
        $(this).css("background-color","red")
    },
    mouseleave:function(){
        $(this).css("background-color","blue")
    },
    click:function(){
        $(this).css("background-color","yellow")
    },
    dblclick:function(){
        $(this).css("background-color","orange")
    },
    // mouseup:function(){
    //     $(this).css("background-color","green")
    // },
    // mousedown:function(){
    //     $(this).css("background-color","black")
    // },
    
})
$("input").on({
    focus:function(){
        $(this).css("background-color","pink")
    },
    blur:function(){
        $(this).css("background-color","skyblue")
    }
})

$("#show").click(function(){
    $("#div").show()
})
$("#hide").click(function(){
    $("#div").hide()
})
$("#btn").click(function(){
    $("#toggle").toggle()

let btn=document.getElementById("btn")
if(btn.innerHTML=="Show"){
    btn.innerHTML="Hide"
}
else{
    btn.innerHTML="Show"
}


})

$("#fade").click(function(){
    $("#cont").fadeIn()
})
$("#fadeout").click(function(){
    $("#cont").fadeOut()
})

$("#fadetoggle").click(function(){
    $("#content").fadeToggle()
})
$("#fadeto").click(function(){
    $("#lorem").fadeTo("slow","0.2")
})

$("#slidedown").click(function(){
    $("#para1").slideDown()
})
$("#slideup").click(function(){
    $("#para1").slideUp()
})
$("#slidetoggle").click(function(){
    $("#para2").slideToggle(5000)
})
$("#startanimation").click(function(){
    $("#para3").animate({left:'250px'})
})
$("#multi").click(function(){
    $("#para4").animate({
        left:'250px',
        opacity:'1',
        width:'+=150px',
        height:'+=200px'
    })
})
$("#htog").click(function(){
    $("#para5").animate({
        height:'toggle'})
})
$("#queue").click(function(){
    var que=$("#para6")
    que.animate({height:'300px',opacity:'0.5'},"slow")
    que.animate({width:'300px',opacity:'0.5'},"slow")
    que.animate({width:'100px',opacity:'1'},"slow")
    que.animate({height:'100px',opacity:'1'},"slow")

})
$("#start").click(function(){
    $("#world").slideToggle(4000)
})
$("#stop").click(function(){
    $("#world").stop()
})
$("#callback").click(function(){
    $("#para7").fadeOut("slow",function(){
        alert("Content is fade")
    })
})
$("#chaining").click(function(){
    $("#para8").fadeOut("slow")
    .fadeIn("slow")
})
$("#btn1").click(function(){
    alert("text:"+$("#para9").text())
})
$("#btn2").click(function(){
    alert("html:"+$("#para9").html())
})
$("#btn3").click(function(){
    alert("Value:"+$("#input").val())
})
$("#btn4").click(function(){
    alert("Attribute:"+$("#input").attr("id"))
})
$("#btn5").click(function(){
    $("#para10").text("hello world")
})
$("#btn6").click(function(){
    $("#para10").html("<b>hello world</b>")
})
$("#btn7").click(function(){
    $("#input1").val("hello world")
})
$("#btn8").click(function(){
$("#para11").attr("href","https://chatgpt.com/c/57cabfa5-f19c-4d25-8854-7842d0637d74?oai-dm=1")
})
$("#btn9").click(function(){
    $("#para12").append("<b>heyy</b>")
})
$("#btn10").click(function(){
    $("#para13").prepend("<b>heyy</b>")
})
$("#btn11").click(function(){
    $("#para14").before("<b>heyy</b>")
})
$("#btn12").click(function(){
    $("#para15").after("<b>heyy</b>")
})
$("#btn13").click(function(){
    let txt1="<b>I</b>"
    let txt2=$("<b></b>").text("love")
    let txt3=document.createElement("b")
    txt3.innerHTML="Jquery"
    $("#para16").after(txt1,txt2,txt3)
})
$("#btn14").click(function(){
    $("#remove").remove()
})
$("#btn15").click(function(){
    $("#empty").empty()
})
$("#btn16").click(function(){
    $("p").remove(".para17")
})
$("#btn17").click(function(){
    $("#one,#two,#three").addClass("style")
    $("#four").addClass("style1")
})
$("#btn17").click(function(){
    $("#one,#two,#three").addClass("style")
    $("#four").addClass("style1")
})
$("#five,#six,#seven").addClass("style2")
$("#eight").addClass("style3")

$("#btn18").click(function(){
    $("#five,#six,#seven").removeClass("style2")
    $("#eight").removeClass("style3") 
})
$("#btn19").click(function(){
    $("#nine,#ten,#eleven").toggleClass("style4")
    $("#twelve").toggleClass("style5") 
})
$("#btn20").click(function(){
    $("#para19").css({"background-color":"orange","font-size":"200%"})
})
$("#btn21").click(function(){
    var txt = "";
    txt += "Width: " + $("#para20").width() + "</br>";
    txt += "Height: " + $("#para20").height();
    // txt += "Inner Width: " + $("#para20").innerwidth() + "</br>";
    // txt += "Inner Height: " + $("#para20").innerheight();
    // txt += "Outer Width: " + $("#para20").outerwidth() + "</br>";
    // txt += "Outer Height: " + $("#para20").outerheight();
    $("#para20").html(txt);
})
})