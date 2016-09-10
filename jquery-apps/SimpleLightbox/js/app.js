//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add image to overlay
$overlay.append($image);

//add caption
$overlay.append($caption);

//Add ovrlay
$("body").append($overlay);
    
    

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var immageLocation = $(this).attr("href");
    
    //Update overlay with the image linked in the link
    $image.attr('src', immageLocation);

    //Get child's alt attribute and set caption'
    var captionText = $(this).children('img').attr('alt');
    $caption.text(captionText);

    //Show the overlay
    $overlay.show();
});

//When overlay is clicked
$overlay.click(function(){
    $overlay.hide();
});
    //Hide the overlay