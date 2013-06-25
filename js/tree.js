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
function Tree(I) {
    I.sprite = Sprite({
        url: 'img/tree-sprite.png',
        pos: {x: 0, y: 0},
        size: {w: 118, h: 200},
        frames: [0, 1, 0, 2],
        rate: 3,
        index: 0
    });

    I.update = function(dt) {
        this.sprite.update(dt);
    };

    I.draw = function() {
        renderer.drawSprite(this.sprite, this.p, 118, 200);
    };

    return I;
}

