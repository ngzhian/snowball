/* Draws images, shapes onto the canvas
 */
function Renderer(I) {
    I.toTopLeft = function(p, w, h) {
        tl_x = p.x - w/2;
        tl_y = p.y - h;
        return { 'x': tl_x, 'y': tl_y };
    }

    I.screenToCanvas = function(p) {
        var x = CANVAS_WIDTH/2 + p.x;
        var y = -p.y;
        return {x: x, y: y};
    }

    I.drawRect = function(p, w, h) {
        // don't draw if object is behind camera!
        // prevents divide by zero error in camera.translatePoint
        if (p.z < camera.p.z) return;
        // ! what is a good way to decide when to not paint?
        // when it is out of horizontal view?
        // trade off between checking if it is in view and
        // just painting anyway.
        screen_point = camera.translatePoint(p);
        canvas_point = this.screenToCanvas(screen_point);
        c_w = camera.scale(w, p.z);
        c_h = camera.scale(h, p.z);
        tl_p = I.toTopLeft(canvas_point, c_w, c_h);
        pdeb('print rect w:'+c_w+' h:'+c_h+' at ('+tl_p.x+','+tl_p.y+')');
        ctx.fillRect(tl_p.x, tl_p.y, c_w, c_h);
    }

    I.drawImage = function(p, w, h, src) {
        screen_point = camera.translatePoint(p);
        canvas_point = this.screenToCanvas(screen_point);
        c_w = camera.scale(w, p.z);
        c_h = camera.scale(h, p.z);
        tl_p = I.toTopLeft(canvas_point, c_w, c_h);
        pdeb('print rect w:'+c_w+' h:'+c_h+' at ('+tl_p.x+','+tl_p.y+')');
        ctx.drawImage(resources.get(src), tl_x, tl_y, c_w, c_h);
    }

    I.drawBackground = function(src) {
        ctx.drawImage(resources.get(src), 0, 0, CANVAS_WIDTH,
            CANVAS_HEIGHT);
    }

    return I;
}
