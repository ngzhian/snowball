/* Translates game world coordinates into
 * screen coordinates to be painted by renderer.
 * The coordinates returned by camera is in the
 * 2 dimensional Cartesian coordinate system, i.e.
 * -----------------------------
 * |             |             |
 * |  (-4,1) x   |(0,0)        |
 * |-------------x-------------|
 * |             |  x (3,-1)   |
 * |             |             |
 * -----------------------------
 * It is the job of the renderer to translate this system
 * into the HTML5 Canvas system.
 */
function Camera(I) {
    I.deltay = I.depth * Math.tan(I.angle);

    I.scale = function(l, z) {
        r_z = z - this.p.z;
        s = camera.depth / r_z;
        //if (s > 0.9) console.log('1');
        return s*l;
    }

    I.translatePoint = function(p) {
        I.deltay = I.depth * Math.tan(I.angle);
        point = {};
        // get coords relative to camera
        r_x = p.x - this.p.x;
        r_y = p.y - this.p.y;
        r_z = p.z - this.p.z;
        s = this.depth / r_z;
        // project coordinates to (0, CANVAS_HEIGHT + I.deltay)
        s_x = r_x * s;
        s_y = r_y * s;
        // subtract delta due to angled camera
        point.x = s_x;
        point.y = s_y + this.deltay;

        /*
        pdeb('orig p:('+this.p.x+','+this.p.y+','+this.p.z+')'+
                    ' rel p:('+r_x+','+r_y+','+r_z+')' +
                        ' s:'+s+'scaled p:('+s_x+','+s_y+')' +
                            ' screen p:(' +point.x+','+point.y+')');
                            */
        return point;
    }

    I.update = function(dt) {
        this.p.y -= dt * rollingSpeed;
        this.p.z += dt * rollingSpeed;
    }

    I.goLeft = function(dt) {
        x = this.p.x - dt*sideSpeed;
        if (x < -500) {
            this.p.x = -500
        } else {
            this.p.x = x;
        }
    }
    I.goRight = function(dt) {
        x = this.p.x + dt*sideSpeed;
        if (x > 500) {
            this.p.x = 500;
        } else {
            this.p.x = x;
        }
    }

    return I;
}
