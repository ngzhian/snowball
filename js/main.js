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
        'img/snowball1.png',
        'img/ball-sprite.png',
        'img/tree-sprite.png',
        'img/paranmic.jpg',
        'img/snowballground.png'
        ]);
resources.onReady(init);

var pause = true;
var rollingSpeed = 0200;
var sideSpeed = 1000;
var renderer = Renderer({});
var camera = Camera({p: {x: 0, y: 0, z: 0}, angle: 0.32, depth: 200});
var trees = []
trees.push(Tree({p: {x:190, y:-1120, z: 1120}, w: 50, h: 640}));
trees.push(Tree({p: {x:-190, y:-2400, z: 2400}, w: 50, h: 640}));
trees.push(Tree({p: {x:-190, y:-3300, z: 3300}, w: 50, h: 640}));
trees.push(Tree({p: {x:-290, y:-6000, z: 6000}, w: 50, h: 640}));
trees.push(Tree({p: {x:-190, y:-4000, z: 4000}, w: 50, h: 640}));
trees.push(Tree({p: {x:090, y:-1440, z: 1440}, w: 50, h: 640}));
trees.push(Tree({p: {x:000, y:-8000, z: 8000}, w:50, h:640}));
var ball = Ball({p: {x: 0, y: -530, z: 310}, w: 150, h: 150});
var field = Field({src: "img/bg with view.jpg"});
var score;
var pauseScreenSelections = [true, false];
var prevX=0;
var prevY=0;
var prevZ=0;

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

function update(dt) { 
    handleInput(dt);
    if (!pause) {
        trees.forEach(function(tree) { tree.update(dt); });
        ball.update(dt);
        camera.update(dt);
        checkCollisionTree(ball,trees);
        // update entities
        // handle collision
        // update score
    } else {
        //pause;
    }
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
    if (keydown.down) {
        selectNextMenuItem();
    }
    if (keydown.up) {
    }
}

function render() {
    if (pause) {
        drawPauseScreen();
    }
    ctx.clearRect(0, 0, 480, 320);
    field.draw();
    trees.forEach(function(tree) { tree.draw(); });
    ball.draw();
}
