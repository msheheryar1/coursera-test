// JavaScript Document

$(document).ready(function(e) {
    
	
	$("#right img").click(function(e) {
        
		$("#main").animate({right:"100%"},500);
		
		
    });
	$("#left img").click(function(e) {
        
		$("#main").animate({right:"0%"},500);
		
		
    });
	
});