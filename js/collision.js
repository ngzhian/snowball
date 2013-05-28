function Collision(I) {
    I.checkCollisionTree = function(ball,trees) {
        trees.all.forEach(function(tree) {
            if(ball.p.z-200 > tree.p.z &&
                prevZ-200 < tree.p.z &&
                Math.abs((ball.p.x+prevX)/2-tree.p.x) < 30 &&
                Math.abs((ball.p.y+prevY)/2-(tree.p.y-tree.h/2)) < 110) {
                    console.log("hit");
                }
        }
        );
        prevZ=ball.p.z;
        prevX=ball.p.x;
        prevY=ball.p.y;
    }
    
    return I;
}
