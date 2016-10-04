//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
var box = {
    height:20,
    weight: 20,
    volume: 20
}
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
/*
$('#HeightDecrease').click(function(){
    box.height = box.height - 1
});

$('#HeightIncrease').click(function(){
    box.height = box.height + 1
});
*/
//Create a button that prints the object and its attributes to the page (use the span "output".
 $('#Print').click(function(){
     $('#output').html("Height: " + box.height + "<br/>" +
     "Weight: " + box.weight + "<br/>" +
     "Volume: " + box.volume);
 });

//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume
$('.btn').click(function(){
    var id = $(this).attr('id')
    switch(id) {
        case "HeightDecrease":
            decrease("height")
            break;
        case "HeightIncrease":
            increase("height")
            break;
        case "WeightDecrease":
            decrease("weight")
            break;
        case "WeightIncrease":
            increase("weight")
            break;
        case "VolumeDecrease":
            decrease("volume")
            break;
        case "VolumeIncrease":
            increase("volume")
            break;
    }

});


function decrease (pram) {
    box[pram]--
}

function increase (pram) {
    box[pram]++
}