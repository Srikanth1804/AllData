// $(document).ready(function(){
//   $("#demo").dblclick(function(){
//     alert("hello makkaley!")
//   })


// // $("#Div").on(
// //   {
// //     mouseenter:()=>{
// //       $(this).css("background-color","red")
// //     }
// //   }
// // )
// $("#Div").on({
//   mouseenter: function() {
//       $(this).css("background-color", "red");
//   },
//   mouseleave: function() {
//       $(this).css("background-color", "lightblue");
//   }

// })}

$(document).ready(function() {
  $("#demo").dblclick(function() {
      alert("hello makkaley!");
  });

  $("#Div").on({
      mouseenter: function() {
          $(this).css("background-color", "red");
      },
      mouseleave: function() {
          $(this).css("background-color", "lightblue");
      },

      click:function(){
        alert("Than for Clicking!")

      }
  });


$("#p1").click(function(){
  $(this).hide()
})

$("#p2").click(function(){
  $(this).hide()
})





// let TC = Boolean(TBTNV)
// console.log(TC);

// if(TBTNV == "show"){
// TBTN.innerText="hide"
// }
// else{
//   TBTN.setAttribute("value","show")
// }


// $("#show").click(()=>{
//   $("#D1").toggle()
 
// })
$("#show").click(function() {
  $("#D1").slideDown(10000);
  let TBTN = document.getElementById("show");
  if (TBTN.innerHTML === "Show") {
      TBTN.innerHTML = "Hide";
  } else {
      TBTN.innerHTML = "Show";
  }
});  
});
