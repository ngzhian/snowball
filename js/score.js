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
        if (dead || paused) {
            renderer.drawText('High Score: ' + 
                    I.get_previous_high_score() | '0', 10, 30);
        } else {
            renderer.drawText(Math.floor(I.points), 10, 30);
        }
    }

    I.has_local_storage = function() {
        try {
            return 'localStorage' in window &&
                window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    I.update_high_score = function() {
        prev = I.get_previous_high_score();
        if (prev == null || prev < Math.floor(I.points)) {
            localStorage["highscore"] = Math.floor(I.points);
        }
    }

    I.get_previous_high_score = function() {
        if (I.has_local_storage()) {
            return localStorage["highscore"];
        }
    }

    return I;
}
