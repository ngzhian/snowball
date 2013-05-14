var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var canvas = jQuery('canvas').attr('width', CANVAS_WIDTH)
                            .attr('height', CANVAS_HEIGHT)
                            .get(0).getContext("2d");
var lastTime;

resources.load([
        'img/bg.jpg'
        ]);
resources.onReady(init);

function init() {
    lastTime = Date.now();
    main();
}

function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};


//setInterval(function() { update(); draw(); }, 1000/FPS);
var FPS = 30;
var rollingSpeed = 100;
var trees = []
trees.push(Tree({x:90, y:-290}), Tree({x:200, y:-390}));
var delta_x = 5;
var delta_y = 5;
var camera = Camera({});
var field = Field({src: "img/bg.jpg"});
var ball = Ball({});
var score

function update(dt) { 
    if (keydown.left) {
        camera.x--;
        ball.x--;
    }
    if (keydown.right) {
        camera.x++;
        ball.x++;
    }
    trees.forEach(function(tree) { tree.update(dt); });
    ball.update(dt);
    camera.update(dt);
    // handle input
    // update entities
    // handle collision
    // update score
}

function render() {
    field.draw();
    trees.forEach(function(tree) { tree.draw(); });
    ball.draw();
}
