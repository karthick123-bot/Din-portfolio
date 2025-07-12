 
 var popupoverlay=document.querySelector(".popup-overlay")
 var skills=document.querySelector(".skill")
 var showpopup=document.getElementById("show-popup")


 showpopup.addEventListener("click",function(){
   
  popupoverlay.style.display="block"
    skills.style.display="block"
    
 })

 
 var popupcancel=document.getElementById("popup-cancel")

  popupcancel.addEventListener("click",function(){
   
  popupoverlay.style.display="none"
    skills.style.display="none"
    
 })


 var showpopup4=document.getElementById("show-popup4")
 var about=document.querySelector(".about")

 showpopup4.addEventListener("click",function(){
   
  popupoverlay.style.display="block"
    about.style.display="block"

 })

 var cancelabout=document.getElementById("cancel-about")

  cancelabout.addEventListener("click",function(){
   
  popupoverlay.style.display="none"
    about.style.display="none"
    
})


  var showpopup3=document.getElementById("show-popup3")
  var contact=document.querySelector(".contact")
  var verticalline=document.querySelector(".vertical-line")


  showpopup3.addEventListener("click",function(){
   
  popupoverlay.style.display="block"
  contact.style.display="block"
  verticalline.style.display="block"

})


var cancelcontact=document.getElementById("cancel-contact")


cancelcontact.addEventListener("click",function(){
   
  popupoverlay.style.display="none"
    contact.style.display="none"
    verticalline.style.display="none"
})


var showpopup1=document.getElementById("show-popup1")
var project=document.querySelector(".project")

showpopup1.addEventListener("click",function(){

  popupoverlay.style.display="block"
  project.style.display="block"
})


var cancelproject=document.getElementById("cancel-project")


cancelproject.addEventListener("click",function(){
   
  popupoverlay.style.display="none"
  project.style.display="none"
    
})




