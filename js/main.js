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
        'img/game-over-sprite.png'
        ]);
resources.onReady(init);

var paused = true;
var rollingSpeed = 500;
var sideSpeed = 1.75*rollingSpeed;
var renderer = Renderer({});
var camera = Camera({p: {x: 0, y: 0, z: 0}, angle: 0.32, depth: 200});
var menu = Menu({});
var ball = Ball({p: {x: 0, y: -530, z: 310}, w: 150, h: 150});
var trees = Trees({});
var audioContext;
var sounds = Sounds({});
var field = Field({});
var input = Input({});
var collision = Collision({});
var score;
var prevX = 0;
var prevY = 0;
var prevZ = 0;
var dead = false;

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

var gameover = GameOver({});
function update(dt) { 
    rollingSpeed += dt * 10;// max is 1500
    sideSpeed = 1.5 * rollingSpeed;
    input.handleInput(dt);
    sounds.update(dt);
    gameover.update(dt);
    if (!paused) {
        trees.update(dt);
        ball.update(dt);
        field.update(dt);
        camera.update(dt);
        if (collision.checkCollisionTree(ball,trees)) {
            dead = true;
            paused = true;
            gameover.index = 0;
            // draw dead animation
        }
        // update score
    } else {
        //paused;
    }
}

function GameOver(I) {
    I.sprite = Sprite({
        url: 'img/game-over-sprite.png',
    pos: { x: 0, y: 0 },
    size: { w: 960, h: 640 },
    frames: [2, 0, 1, 2,2,2,2,2,2],
    rate: 3,
    index: 0,
    loop: false
    })
    I.update = function(dt) {
        this.sprite.update(dt)
    }
    I.draw = function() {
        I.sprite.render(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    return I;
}

function reset() {
    rollingSpeed = 500;
    sideSpeed = 1.75*rollingSpeed;
    camera = Camera({p: {x: 0, y: 0, z: 0}, angle: 0.32, depth: 200});
    ball = Ball({p: {x: 0, y: -530, z: 310}, w: 150, h: 150});
    trees = Trees({});
    field = Field({});
    input = Input({});
    score = 0;
    prevX = 0;
    prevY = 0;
    prevZ = 0;
    dead = false;
}

function render() {
    ctx.clearRect(0, 0, 480, 320);
    field.draw();
    trees.draw();
    ball.draw();
    if (paused) {
        gameover.draw();
        menu.draw();
    }
}
