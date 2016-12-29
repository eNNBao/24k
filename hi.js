var num = 36;
var h = "h";
var g = "g";
var hd = "div.h";
var gd = "div.g";

$(document).ready(function (){

 killa(num, h, hd);
});


function killa(bm, w, q){
	console.log(bm);
	var div = ("<div></div>");

	for (var i=0; i<bm*bm; i++) {
		$("#c").append($(div).addClass("s"));	
	}

	var n = 720/bm;
	$(".s").css({"width": n, "padding-bottom": n});

	$(".s").on('mouseenter',function(){
		$(this).addClass(w);
		$(q).css("opacity", "+=0.03");
	});
}



function ask(){
	$(".s").removeClass("h");
	var answer = prompt("What's that sound?", "Insert Number").toUpperCase();

	if (answer === "24"){
		alert("Head to toe so playa!");
		$(".s").removeClass("h");
		tf();
		killa(answer, g, gd);
	}

	else {
			$(".s").remove();
			$("html").css({"background-color": "none"});
			$("button").css({"background-color": "#b3b3b3", "color": "grey", "font-family": "arial"});
			$("#c").css({"border": "2px solid #b3b3b3", "background-color": "#d3d3d3"})
			$("#top-left, #top-right, #bot-left, #bot-right").hide();
			$("button").text("What's That sound");
		killa(answer, h, hd);
		console.log(answer);
	}

}

function tf(){
	$("html").css({"background-color": "black"});
	$("button").css({"background-color": " #EBC314", "color": "white", "font-family": "times"});
	$("#c").css({"border": "4px solid #EBC314", "background-color": "black"})
	$("#top-left, #top-right, #bot-left, #bot-right").show();
	$("button").text("24K MAGIC");
	$(".s").remove();
}
