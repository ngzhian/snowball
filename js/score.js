function Score(I) {
    I.points = 0;

    I.add = function(points) {
        I.points += points;
    }

    I.update = function(dt) {
        var dz = ball.p.z - prevZ;
        I.points += Math.floor(dz)/100;
    }

    I.draw = function() {
        renderer.drawText(Math.floor(I.points), 10, 30);
    }

    return I;
}
