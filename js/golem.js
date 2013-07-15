function Golem(I) {
    I.sprite = Sprite({
        url: 'img/golem-sprite.png',
        pos: {x: 0, y: 0},
        size: {w: 260, h: 277},
        frames: [2, 1, 0],
        rate: 5,
        index: Math.random() * 3
    })


    I.update = function(dt) {
		this.p.x -= 5;
        this.sprite.update(dt);

    }

    I.draw = function() {
        renderer.drawSprite(this.sprite, this.p, 260, 277);
    }

    return I;
}
