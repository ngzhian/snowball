var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = jQuery("<canvas width='" + CANVAS_WIDTH +
        "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

var FPS = 30;
setInterval(function() { update(); draw(); }, 1000/FPS);

var rollingSpeed = 3;

var trees = []
trees.push(Tree({x:90, y:10}), Tree({x:200, y:100}));

var delta_x = 5;
var delta_y = 5;

var camera = Camera({});
var ball = Ball({});

function update() { 
    if (keydown.left) {
        camera.x--;
        ball.x--;
    }
    if (keydown.right) {
        camera.x++;
        ball.x++;
    }
}

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ball.draw();
    trees.forEach(function(tree) { tree.draw(); });
}
