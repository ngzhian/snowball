function Camera(I) {
    I.x = 0;
    I.y = 320;

    I.inView = function(x, y) {
        return x > I.x && x < I.x+CANVAS_WIDTH &&
            y > I.y-CANVAS_HEIGHT && y < I.y;
    }

    I.drawRect = function(x, y, w, h) {
        if (I.inView(x, y)) {
            canvas.fillRect(x - I.x, I.y-CANVAS_HEIGHT+y, w, h);
        }
    }

    I.update = function() {
    }

    return I;
}
