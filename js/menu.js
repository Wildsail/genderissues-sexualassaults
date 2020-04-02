
$(document).ready(function(){

var menu = $(".wrap");


  $(".button").on("click", function(){
		if($(menu).css("marginBottom") == "-250px"){
			$(menu).animate({marginBottom: "0px"});
		}else if($(".menu").css("marginBottom") == "0px"){
			$(menu).animate({marginBottom: "-250px"});
		}
	});
});
