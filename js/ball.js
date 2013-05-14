function Ball(I) {
    I.x = 100;
    I.y = 200;
    I.r = 20;

    I.update = function() {
    }

    I.draw = function() {
        canvas.fillStyle = "#dd6565";
        camera.drawRect(this.x, this.y, 10, 10);
    };

    return I;
}
