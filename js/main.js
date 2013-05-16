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
var ctx = jQuery('canvas').attr('width', CANVAS_WIDTH)
                            .attr('height', CANVAS_HEIGHT)
                            .css('border', '1px solid black')
                            .get(0).getContext("2d");
var lastTime;
var debug = false;

function pdeb(str) {
    if (debug) {
        console.log(str);
    }
}

resources.load([
        'img/bg.jpg',
        'img/bg-Recovered.jpg',
        'img/bg with view.jpg',
        'img/snowball1.png'
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
var rollingSpeed = 300;
var sideSpeed = 200;
var renderer = Renderer({});
var camera = Camera({p: {x: 0, y: 0, z: 0}, angle: 0.32, depth: 480});
var trees = []
trees.push(Tree({p: {x:190, y:-960, z: 1120}, w: 50, h: 640}));
trees.push(Tree({p: {x:090, y:-1280, z: 1440}, w: 50, h: 640}));
var ball = Ball({p: {x: 0, y: -640, z: 640}, w: 150, h: 150});
var field = Field({src: "img/bg with view.jpg"});
var score;

function update(dt) { 
    handleInput(dt);
    trees.forEach(function(tree) { tree.update(dt); });
    ball.update(dt);
    camera.update(dt);
    // update entities
    // handle collision
    // update score
}

function handleInput(dt) {
    if (keydown.left) {
        ball.goLeft(dt);
        camera.goLeft(dt);
    }
    if (keydown.right) {
        ball.goRight(dt);
        camera.goRight(dt);
    }
}

function render() {
    ctx.clearRect(0, 0, 480, 320);
    field.draw();
    trees.forEach(function(tree) { tree.draw(); });
    ball.draw();
}
