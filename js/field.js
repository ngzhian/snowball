function Field(I) {
    I.layers = {};
    I.layers.snow = {
        src: 'img/snowballground.png',
        w: 1600,
        h: 1066,
    }
    I.layers.snow.scale = I.layers.snow.h / CANVAS_HEIGHT;
    I.layers.snow.dw = I.layers.snow.w / I.layers.snow.scale;
    I.layers.snow.x = -(I.layers.snow.dw - CANVAS_WIDTH)/2;
    I.layers.snow.y = -110;
    I.layers.snow.dh = CANVAS_HEIGHT - I.layers.snow.y;

    I.layers.mountains = {
        src: 'img/paranmic.jpg',
        w: 3200,
        h: 1066,
    }
    I.layers.mountains.scale = I.layers.mountains.h / CANVAS_HEIGHT;
    I.layers.mountains.dh = CANVAS_HEIGHT;
    I.layers.mountains.dw = I.layers.mountains.w / I.layers.mountains.scale;
    I.layers.mountains.original_x = -(I.layers.mountains.dw - CANVAS_WIDTH)/2;
    I.layers.mountains.x= I.layers.mountains.original_x;
    I.layers.mountains.y = 0;

    I.layers.sky = {
    }

    I.update = function(dt) {
        I.layers.mountains.x = I.layers.mountains.original_x - ball.p.x/22;
    }

    I.draw = function() {
        renderer.drawBackground(I.layers.mountains);
        renderer.drawBackground(I.layers.snow);
    }
    
    return I;
}
