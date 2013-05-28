function Trees(I) {
    // trees are in nearest to furthest order
    I.all = [];
    I.size = 0;
    I.GRIDSIZE = 500;
    I.TREESTOMAKE = 3;
    I.STARTZ = ball.p.z + 190;
    I.gridSpawnedFor = -1;

    I.update = function(dt) {
        I.removeOutOfViewTrees();
        I.spawnTrees();
    }

    I.spawnTrees = function() {
        /* Rules for spawning trees
         * 1) Trees spawn by grid set (a set of 5 grids)
         * 2) Next grid set spawned when ball crosses first
         * grid of the set
         */
        if (I.needToSpawnNextGrid(ball.p.z)) {
            console.log(ball.p.z);
            console.log('need to spawn for ' + (I.gridSpawnedFor + 1));
            I.gridSpawnedFor++;
            I.spawnGrid(I.gridSpawnedFor);
        }
    }

    I.needToSpawnNextGrid = function(ballZ) {
        if (I.gridSpawnedFor < 0) {
            return true;
        }
        var gridNum = I.getCurrentGridNum(ballZ);
        console.log(gridNum);
        if (ballZ - (I.GRIDSIZE * gridNum) >= 0.5 * I.GRIDSIZE) {
            if (I.gridSpawnedFor < gridNum) {
                return true;
            }
        }
        return false;
    }

    I.getCurrentGridNum = function(z) {
        return Math.floor((z - I.STARTZ) / I.GRIDSIZE);
    }

    I.spawnGrid = function(gridNum) {
        //var z = I.STARTZ + gridNum * I.GRIDSIZE;
        for (var i = 0; i < I.TREESTOMAKE; i++) {
            var newX = Math.random() * 1000 - 500;
            var newZ;
            if (trees.size != 0) {
                newZ = trees.all[trees.size-1].p.z +
                    Math.random()*10;
            } else {
                newZ = I.STARTZ;
            }
            var tree = I.makeTree({x: newX, y: -newZ, z: newZ});
            I.addTree(tree);
        }
    }

    // x is always [-500, 500]
    I.makeTree = function(point) {
        var tree = Tree({
            p: point,
            w: 50,
            h: 640
        });
        return tree;
    }

    I.addTree = function(tree) {
        I.all.push(tree);
        I.size++;
    }

    I.removeOutOfViewTrees = function() {
        // remove trees that we won't see
        var i = 0;
        while (I.size > 0 && I.all[0].p.z - 100 < camera.p.z) {
            I.deleteTree(0);
        }
    }

    I.deleteTree = function(i) {
        if (I.size > i) {
            I.all.splice(i, i+1);
            I.size--;
        }
    }

    I.draw = function() {
        for (var i = I.size - 1; i >= 0; i--) {
            trees.all[i].draw();
        }
    }
    return I;
}
