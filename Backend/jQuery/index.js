
$("h1").css("color", "blue");

//$("button").css("color", "red");

//$("h1").addClass("big-title margin");
//$("h1").removeClass("big-title margin");

$("h1").text("Pooja");

//$("button").html("<em>Don't click me</em>")

//$("a").attr("href","http://instagram.com");

//$("button").click(function() {
 // $("h1").css("color","yellow");
//});

//console.log($("img").attr("src"));

$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("h1").before("<button>New</button>");

$("button").on("click" ,function() {
    $("h1").toggle();
  });