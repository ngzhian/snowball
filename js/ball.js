function Ball(I) {
    I.x = 220;
    I.y = -40;
    I.r = 20;

    I.update = function(dt) {
        I.y -= dt * rollingSpeed;
    }

    I.draw = function() {
        canvas.fillStyle = "#dd6565";
        camera.drawRect(this.x, this.y, 50, 50);
    };

    return I;
}
