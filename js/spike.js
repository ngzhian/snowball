/* Takes in the x, y coordinate of the tree, which is
 * assumed to be the top-centre of the tree.
 *
 * Because of perspective, the coordinates at which
 * we paint the Tree will have to change.
 * Each tree has its original w and h.
 * The painted height and width at which it appears on canvas
 * is a function of w, h and d (distance to ball).
 * d itself is a function of tree.x and ball.x
 */
function Spike(I) {
    I.src = 'img/spike.png';
    I.w = 50;
    I.h = 70;

    I.update = function(dt) {
    };

    I.draw = function() {
        renderer.drawImage(this.p, this.w, this.h, this.src);
    };

    return I;
}
