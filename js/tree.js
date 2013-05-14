function Tree(I) {
    I.update = function() {
    };

    I.draw = function() {
        canvas.fillStyle = "#3232ee";
        camera.drawRect(this.x, this.y, 10, 10);
    };

    return I;
}

