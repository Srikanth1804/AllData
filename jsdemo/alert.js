function myFunction() {
   let person=prompt("enter your name:")
   let para=document.getElementById("para");
   if(person==null||person==""){
    para.innerHTML="user cancelled the prompt"
   }
   else{
        para.innerHTML="Hello"+" "+person+ " " +"How are you?"
   }
}