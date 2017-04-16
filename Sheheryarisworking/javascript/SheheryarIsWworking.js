// JavaScript Document

$(document).ready(function(){
	 $("#btn").click(function(){
        $("#myNavbar").slideToggle(500);
    });
	$("#myCarousel").swiperight(function() {  
      $("#myCarousel").carousel('prev');  
    });  
   $("#myCarousel").swipeleft(function() {  
      $("#myCarousel").carousel('next');  
   }); 
$("a").click(function() {  
      $("a").css("color","red");  
   }); 
  
	
});