function Field(I) {
    I.width = 1920;
    I.height = 1280;

    I.draw = function() {
        renderer.drawBackground(this.src);
    }
    
    return I;
}
