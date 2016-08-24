$(document).ready(function(){
// the document ready is an anonymous function that will execute callbacks when the document is ready. 
$(".btn3").on("click", function(){
	
		$('.hline').css('backgroundColor','rgb('+randomColorNumber()+','+randomColorNumber()+','+randomColorNumber()+')');
	});
//jQuery can call styles from the css style sheet when .css is used. The above calls css styles to define the background color of the box with the headline in it. The rgb call defines the color palette to be used and the three randomColorNumbers select the 0-255 number for each the red, green and blue colors.

function randomColorNumber(){
	return Math.floor(Math.random()*255);
}
//Math.floor rounds numbers down to the closest integer. Use it when a random color is to be called so that a round number between 0 and 255 will be randomly selected.

$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").fadeOut()
    });
    $(".btn2").click(function(){
        $("p").fadeIn(2000);    
    });
    //the .fadeIn above has a time set of 2 seconds
        $(".btn4").click(function(){
    		$(".box").slideUp(1000).slideDown(1000);//code here will slide the box up and then down again. Cam, this box jumps. I can't figure out why.
    });
});
//the above code is for the buttons. The .click function is coded with the .fadeOut, .fadeIn, .slideUp, .slideDown and will activate these functions when the mouse is clicked on the assigned buttons.

var someFunction=function(){
	alert("hello world");
}
//alerts create a pop-up window that must be clicked to close.
$(".justPlaying").animate({
	opacity: 0

},15000);
//The code above will fade the purple square out over 15 seconds

function something(anyFunction)
{console.log(2+2); anyFunction();}

something(someFunction);
//console.log returns the function in the javascript console and confirms your code is correct.
	
});
