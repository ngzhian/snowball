function changeAngle() {
    console.log(camera.angle);
    var angle = $( "#angle" ).slider( "value" );
    var radians = angle * Math.PI / 180;
    camera.angle = radians;
}
function changeSpeed() {
    //  console.log(rollingSpeed);
    rollingSpeed = $('#speed').slider('value');
}
function changeDepth() {
    console.log(camera.depth);
    camera.depth = $('#depth').slider('value');
}
$(function() {
    $("#angle").slider({
        orientation: "horizontal",
    range: "min",
    max: 90,
    value: 20,
    slide: changeAngle,
    change: changeAngle
    });
    $('#speed').slider({
        orientation: "horizontal",
        range: "min",
        max: 10000,
        value: 300,
        slide: changeSpeed,
        change: changeSpeed
    });
    $('#depth').slider({
        orientation: "horizontal",
        range: "min",
        max: 2000,
        value: 200,
        slide: changeDepth,
        change: changeDepth
    });
});
