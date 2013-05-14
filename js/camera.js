function Camera(I) {
    I.x = 0;
    I.y = 0;

    function convertX(x) {
        return x - I.x;
    }
    function convertY(y) {
        return CANVAS_HEIGHT - (I.y - y);
    }

    I.inView = function(x, y) {
        return x > I.x && x < I.x+CANVAS_WIDTH &&
            y < I.y && y > I.y - CANVAS_HEIGHT;
    }

    I.drawRect = function(x, y, w, h) {
        if (I.inView(x, y)) {
            canvas.fillRect(convertX(x), convertY(y), w, h);
        }
    }

    I.drawImg = function(src) {
        canvas.drawImage(resources.get(src), 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    I.update = function(dt) {
        I.y -= dt * rollingSpeed;
    }

    return I;
}
