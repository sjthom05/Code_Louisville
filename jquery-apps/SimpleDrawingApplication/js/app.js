//Problem: No user interaction causes no change to applicaiton
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css('background-color');

//When clicking on control list items
$(".controls li").click(function(){
    //Deselect sibling elements
    $(this).siblings().removeClass('selected');
    //Select clicked element
    $(this).addClass('selected')
    //cache current color
    color = $(this).css('background-color');
});
    

//When new color is pressed
    //Show #colorselect or hide #colorselect

//When color sliders change
    //update the new color span

//When add color is pressed 
    //append the color to the controls ul
    //select the new color

//On mouse events on the canvas
    //Draw lines