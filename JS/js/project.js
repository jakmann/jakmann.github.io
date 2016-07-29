// click button
// go to #thumbnails
// get first img -> get index (where in line/order)
// click button
// get next img
// "   "


$(".thumb").click(function(){
	var imgSrc = $(this).attr("src");
	$("#bigimage").attr("src", imgSrc);
	// console.log($(this));
});

$("h1").click(function(){
    alert("Here's just a few things I really like about you x          PS: in case you click too fast or want to go back, just refresh the page to start again :)");
});

var index = false;
$("button").click(function(){
	if (index) {
		// console.log(index);
		// use index to get next image
		// and set the index value to current index plus 1
		if($('#thumbnails img:nth-child(' + (index + 1) + ')').attr("id") == "wallpaper") {
			$('body').css("background-color", "#9b59b6");
		}
		$("#bigimage").attr("src", $('#thumbnails img:nth-child(' + (index + 1) + ')').attr('src'));
		index = index + 1;
		if (index > 10) {
			index = 0;
    	$("button").html("Goodnight");
		}
	} else {
		// get first image
		// and set the index value
		$("#bigimage").attr("src", $('#thumbnails img:first-child').attr('src'));
		index = 1;
    	$("button").html("@BabyJS - Keep Clicking This Button");
	}
});

var messages = [
  'You love mac n cheese (this pic is from a MS (no W) recipe)!',
  'Your love for JB is the only thing comparable to your feelings toward delicious foods (and maybe sometimes kinda your family)',
  'You want Newfoundland puppies!',
  'That will grow into giant fluffy monsters!!!',
  "You're nice to me even though I suffer from short term memory loss and do lots of boneheaded things",
  "(Like I can't remember if your favorite is Gold Peak or Pure Leaf :/ )",
  "And you're down for food adventures, no matter how long overdue",
  'So many adventures all around the city...jk threw this in here because I like that I might be able to help teach you things like how to be safe and navigate this crazy island',
  'I like navy blue too! (and lavender....cooooool)  *NOTE* the whole background is supposed to turn purple now, and clearly it is not',
  "Overall, I'm just excited to get to hang out with you and accomplish our major life goals",
  "x"
];

var i = -1;

// $("#selector").click(function(){
//     $("#target").text(messages[i = ++i % messages.length]);
// });

$("#selector").click(function(){
    $("#target").html("<p>"+messages[i = ++i % messages.length]+"</p>");
});

// $('#wallpaper').click(function() {
// 	$('body').css("background-color", "#9b59b6");
// });


// $(".thumb").mouseover(function(){
// $(".thumb").css("background-color", "#9b59b6");

// $("button").click(function(){
//     $("h2").append("<p>Some text to be added...</p>");
// });

// var clicked= false;
// $('button').click(function() {
//   if(!clicked){
//     var add="<p>hello</p>";
//     $(this).parent().append(add);
//     clicked = true;
//   }
// });


// $("button").click(function(){
// 	$("h2").append("<p>hw</p>");	
// 	$("h3").append("<p>is</p>");	
// 	$("h4").append("<p>the</p>");	
// 	$("h5").append("<p>most</p>");	
// }); 
