$(function() {
	$("#accordion").accordion({
		collapsible : true
});
});
$( document ).ready(function() {
$(".exercise").click(function(){	
	var nameValue = $(this).attr("name");
	$("#frame").attr("src", window.location.protocol + "//" + window.location.host + nameValue);	
});
});



