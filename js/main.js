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
//var canvas = jQuery('canvas');
var canvas = document.getElementsByTagName('canvas')[0];
var ctx = $(canvas).attr('width', CANVAS_WIDTH)
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
        'img/snowballground.png',
        'img/instr.png',
        'img/start.png',
        'img/start-pressed.png',
		'img/nosound.png',
		'img/sound.png'
        ]);
resources.onReady(init);

var paused = true;
var rollingSpeed = 0200;
var sideSpeed = 1000;
var renderer = Renderer({});
var camera = Camera({p: {x: 0, y: 0, z: 0}, angle: 0.32, depth: 200});
var menu = Menu({});
var ball = Ball({p: {x: 0, y: -530, z: 310}, w: 150, h: 150});
var trees = Trees({});
var audioContext;
var sounds = Sounds({}); /*
trees.addTree(Tree({p: {x:190, y:-1120, z: 1120}, w: 50, h: 640}));
trees.addTree(Tree({p: {x:-190, y:-2400, z: 2400}, w: 50, h: 640}));
trees.addTree(Tree({p: {x:-190, y:-3300, z: 3300}, w: 50, h: 640}));
trees.addTree(Tree({p: {x:-290, y:-6000, z: 6000}, w: 50, h: 640}));
trees.addTree(Tree({p: {x:-190, y:-4000, z: 4000}, w: 50, h: 640}));
trees.addTree(Tree({p: {x:090, y:-1440, z: 1440}, w: 50, h: 640}));
trees.addTree(Tree({p: {x:000, y:-8000, z: 8000}, w:50, h:640}));
*/
var field = Field({src: "img/bg with view.jpg"});
var input = Input({});
var collision = Collision({});
var score;
var prevX = 0;
var prevY = 0;
var prevZ = 0;

function init() {
    lastTime = Date.now();
    window.addEventListener('load', sounds.init, false);
    window.addEventListener('keydown', input.onKeydown);
    window.addEventListener('keyup', input.onKeyup);
    window.addEventListener('mousedown', input.onMousedown);
    window.addEventListener('mouseup', input.onMouseup);
    window.addEventListener('mousemove', input.onMousemove);
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
    input.handleInput(dt);
    sounds.update(dt);
    if (!paused) {
        trees.update(dt);
        ball.update(dt);
        camera.update(dt);
        collision.checkCollisionTree(ball,trees);
        // update score
    } else {
        //paused;
    }
}

function render() {
    ctx.clearRect(0, 0, 480, 320);
    field.draw();
    trees.draw();
    ball.draw();
    if (paused) {
        menu.draw();
    }
}
