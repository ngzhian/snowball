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
        renderer.drawSprite(this.sprite, this.p, 150, 150);
    }

    // playing field is from x = [-500, 500]
    I.goLeft = function(dt) {
        x = this.p.x - dt*sideSpeed;
        if (x < -500) {
            this.p.x = -500
        } else {
            this.p.x = x;
        }
    }

    I.goRight = function(dt) {
        x = this.p.x + dt*sideSpeed;
        if (x > 500) {
            this.p.x = 500;
        } else {
            this.p.x = x;
        }
    }

    return I;
}
