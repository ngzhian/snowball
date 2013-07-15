function Collision(I) {
    I.checkCollision = function(ball, trees, golems) {
        var hit;
        trees.all.forEach(function(tree) {
            if(ball.p.z-180 > tree.p.z &&
                prevZ-180 < tree.p.z &&
                Math.abs((ball.p.x+prevX)/2-tree.p.x) < 30 &&
                Math.abs((ball.p.y+prevY)/2-(tree.p.y-tree.h/2)) < 110) {
                    console.log("hit");
                    hit = true;
                    return;
                }
			
        }
        );
        golems.all.forEach(function(golem) {
            if(ball.p.z-180 > golem.p.z &&
                prevZ-180 < golem.p.z &&
                Math.abs((ball.p.x+prevX) / 2 - golem.p.x) < 100 &&
                Math.abs((ball.p.y+prevY) / 2 - (golem.p.y - golem.h/2)) < 110) {
                    console.log("hit");
                    hit = true;
                    return;
                }
			
        }
        );
        prevZ=ball.p.z;
        prevX=ball.p.x;
        prevY=ball.p.y;
        return hit;
    }
    
    return I;
}
