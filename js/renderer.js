/* Draws images, shapes onto the canvas
 */
function Renderer(I) {
    I.toTopLeft = function(p, w, h) {
        tl_x = p.x - w/2;
        tl_y = p.y - h/2;
        return { 'x': tl_x, 'y': tl_y };
    }

    I.screenToCanvas = function(p) {
        var x = CANVAS_WIDTH/2 + p.x;
        var y = -p.y;
        return {x: x, y: y};
    }

    I.drawImage = function(p, w, h, src) {
        if (p.z < camera.p.z) return;
        screen_point = camera.translatePoint(p);
        canvas_point = this.screenToCanvas(screen_point);
        c_w = camera.scale(w, p.z);
        c_h = camera.scale(h, p.z);
        tl_p = I.toTopLeft(canvas_point, c_w, c_h);
        //pdeb('draw image w:'+c_w+' h:'+c_h+' at ('+tl_p.x+','+tl_p.y+')');
        ctx.drawImage(resources.get(src), tl_p.x, tl_p.y, c_w, c_h);
    }

    I.drawSprite = function(sprite, p, w, h) {
        if (p.z < camera.p.z) return;
        screen_point = camera.translatePoint(p);
        canvas_point = this.screenToCanvas(screen_point);
        c_w = camera.scale(w, p.z);
        c_h = camera.scale(h, p.z);
        tl_p = I.toTopLeft(canvas_point, c_w, c_h);
        //pdeb('draw spite w:'+c_w+' h:'+c_h+' at ('+tl_p.x+','+tl_p.y+')');
        // sprite knows how to render itself, just needs
        // to provide destination position and size
        sprite.render(tl_p.x, tl_p.y, c_w, c_h);
    }

    I.drawBackground = function(layer) {
        ctx.drawImage(resources.get(layer.src),
                layer.x, layer.y,
                layer.dw, layer.dh);
    }

    I.drawText = function(text, x, y) {
        ctx.font = "30px Trebuchet MS";
        ctx.fillStyle = "#0a4c7e";
        ctx.fillText(text, x, y);
    }

    return I;
}
