//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//1 Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);
    //1.1 Show the overlay
    //1.2 Update overlay with the image linked in the link
    //1.3 Get child's alt attribute and set caption'
});
    

//2 Add ovrlay
    //2.1 an image
    //2.2 a caption

//3 when overlay is clicked
    //3.1 Hide the overlay