var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
        "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

var FPS = 30;
setInterval(function() {
    update();
    draw();
}, 1000/FPS);

var ball = {
    x: 100,
    y: 100,
    r: 20,
    draw: function() {
        canvas.fillStyle = "#dd6565";
        canvas.fillRect(this.x, this.y, 10, 10);
    }
}

var environment = {
    "trees" : [
    { x: 120, y: 120 }
        ],
    draw: function() {
        for (var i = 0; i < 10; i++) {
            console.log(environment.trees[i]);
            canvas.fillStyle = "#3232ee";
            canvas.fillRect(trees[i].x, trees[i].y, 10, 10);
        }
    }
}

var delta_x = 5;
var delta_y = 5;

function update() { 
    if (keydown.left) {
        ball.x--;
    }
    if (keydown.right) {
        ball.x++;
    }
}
    environment.draw();

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ball.draw();
}
