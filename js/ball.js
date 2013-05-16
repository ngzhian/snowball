function Ball(I) {

    I.update = function(dt) {
        I.p.y -= dt * rollingSpeed;
        I.p.z += dt * rollingSpeed;
    }

    I.draw = function() {
        renderer.drawImage(this.p,
                200, 200, 'img/snowball1.png');
    }

    I.goLeft = function(dt) {
        this.p.x -= dt * sideSpeed;
    }
    I.goRight = function(dt) {
        this.p.x += dt * sideSpeed;
    }

    return I;
}
