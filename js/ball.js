function Ball(I) {
    I.sprite = Sprite({
        url: 'img/ball-sprite.png',
        pos: {x: 0, y: 0},
        size: {w: 100, h: 75},
        frames: [3, 2, 1, 0],
        rate: 10,
        index: 0
    })

    I.originalRadius = I.r;

    I.update = function(dt) {
        I.sprite.update(dt);
        I.p.y -= dt * rollingSpeed;
        I.p.z += dt * rollingSpeed;
        I.r = I.originalRadius + score.points/10;
    }

    I.draw = function() {
        renderer.drawSprite(I.sprite, I.p, I.r, I.r);
    }

    I.outOfPlayingField = function(x) {
        return x >= 500 || x <= -500;
    }

    // playing field is from x = [-500, 500]
    I.goLeft = function(dt) {
        x = I.p.x - dt*sideSpeed;
        if (I.outOfPlayingField(x)) {
            I.p.x = -500
        } else {
            I.p.x = x;
        }
    }

    I.goRight = function(dt) {
        x = I.p.x + dt*sideSpeed;
        if (I.outOfPlayingField(x)) {
            I.p.x = 500;
        } else {
            I.p.x = x;
        }
    }

    return I;
}
