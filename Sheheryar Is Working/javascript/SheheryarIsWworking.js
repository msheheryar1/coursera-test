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

  	$("#as-b").click(function(){
		var c;
		c=document.getElementById("as-a").value;
		if(c=="SubhanAllah"){
		$("#abcd").css("opacity","100");
		}
		else{
			}
		
		});
	
});