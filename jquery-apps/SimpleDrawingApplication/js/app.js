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
$('#revealColorSelect').click(function(){
    //Show #colorselect or hide #colorselect
    changeColor();
    $('#colorSelect').toggle();
});

//update the new color span
function changeColor () {
    var r = $('#red').val();
    var g = $('#green').val();
    var b = $('#blue').val();
    $('#newColor').css("background-color", "rgb("+r+","+g+","+b+")");
}

//When color sliders change
$('input[type=range]').change(changeColor)
    //update the new color span

//When add color is pressed 
    //append the color to the controls ul
    //select the new color

//On mouse events on the canvas
    //Draw lines