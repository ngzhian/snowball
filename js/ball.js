function Ball(I) {
    I.sprite = Sprite({
        url: 'img/ball-sprite.png',
        pos: {x: 0, y: 0},
        size: {w: 100, h: 75},
        frames: [3, 2, 1, 0],
        rate: 10,
        index: 0
    });

    I.update = function(dt) {
        this.sprite.update(dt)
        this.p.y -= dt * rollingSpeed;
        this.p.z += dt * rollingSpeed;
    }

    I.draw = function() {
        renderer.drawSprite(this.sprite, this.p, 200, 200, this.sprite.url);
    }

    I.goLeft = function(dt) {
        x = this.p.x - dt*sideSpeed;
        this.p.x = x;
    }
    I.goRight = function(dt) {
        this.p.x += dt * sideSpeed;
    }

    return I;
}
