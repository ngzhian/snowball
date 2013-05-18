function Sprite(I) {

    I.update = function(dt) {
        this.index += this.rate*dt;
    }

    I.render = function(dest_x, dest_y, dest_w, dest_h) {
        var i = Math.floor(this.index);
        var frame = this.frames[i % this.frames.length];
        var draw_x = this.pos.x + (this.frames[frame] * this.size.w);
        var draw_y = this.pos.y;
        ctx.drawImage(resources.get(this.url),
                draw_x, draw_y, this.size.w, this.size.h,
                dest_x, dest_y, dest_w, dest_h);
    }

    return I;
}
