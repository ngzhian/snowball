function Field(I) {
    I.width = 1920;
    I.height = 1280;

    I.draw = function() {
        camera.drawImg(I.src, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    
    return I;
}
