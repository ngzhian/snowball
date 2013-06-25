function GameOver(I) {
    I.sprite = Sprite({
        url: 'img/game-over-sprite.png',
    pos: { x: 0, y: 0 },
    size: { w: 960, h: 640 },
    frames: [0, 0, 1, 1,2,2,2,2,2],
    rate: 3,
    index: 0,
    loop: false
    })

    I.update = function(dt) {
        this.sprite.update(dt);
    }

    I.draw = function() {
        I.sprite.render(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    return I;
}
