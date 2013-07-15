function Trees(I) {
    // trees are in nearest to furthest order
    I.all = [];
    I.size = 0;
    I.GRIDSIZE = 5000;
    I.TREESTOMAKE = 15;
    I.CROWDFACTOR = I.GRIDSIZE/I.TREESTOMAKE * 2;
    I.STARTZ = ball.p.z + 190;
    I.gridSpawnedFor = -1;

    I.spawnTrees = function() {
        /* Rules for spawning trees
         * 1) Trees spawn by grid set (a set of 5 grids)
         * 2) Next grid set spawned when ball crosses first
         * grid of the set
         */
        if (I.needToSpawnNextGrid(ball.p.z)) {
            I.gridSpawnedFor++;
            I.spawnGrid(I.gridSpawnedFor);
        }
    }

    I.needToSpawnNextGrid = function(ballZ) {
        if (I.gridSpawnedFor < 0) {
            return true;
        }
        var gridNum = I.getCurrentGridNum(ballZ);
        var z = I.getBallZInGrid(ballZ, gridNum);
        if (z > 100 && I.gridSpawnedFor <= gridNum) {
            return true;
        }
        return false;
    }

    I.getCurrentGridNum = function(z) {
        return Math.floor((z - I.STARTZ) / I.GRIDSIZE);
    }

    I.getBallZInGrid = function(ballZ, gridNum) {
        return ball.p.z - I.STARTZ - gridNum * I.GRIDSIZE;
    }

    I.spawnGrid = function(gridNum) {
        console.log(gridNum);
        console.log(ball.p.z);
        I.makeFirstTreeInGrid(gridNum);
        for (var i = 1; i < I.TREESTOMAKE; i++) {
            var x = I.getRandomX();
            var z = I.getRandomZ(gridNum);
            var tree = I.makeTree({x: x, y: -z, z: z});
            I.addTree(tree);
        }
    }

    I.makeFirstTreeInGrid = function(num) {
        return I.STARTZ + num * I.GRIDSIZE +
            Math.random()*I.CROWDFACTOR;
    }

    I.getRandomX = function() {
        return Math.random() * 1000 - 500;
    }

    I.getRandomZ = function(gridNum) {
        if (trees.size == 0) {
            return I.STARTZ + gridNum * I.GRIDSIZE +
                Math.random()*I.CROWDFACTOR;
        } else {
            var furthestTree = trees.all[trees.size-1];
            var zOfFurthestTree = furthestTree.p.z;
            return zOfFurthestTree + Math.random()*I.CROWDFACTOR;
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

    I.update = function(dt) {
        for (var i = I.size - 1; i >= 0; i--) {
            trees.all[i].update(dt);
        }
        I.removeOutOfViewTrees();
        I.spawnTrees();
    }

    I.draw = function() {
        for (var i = I.size - 1; i >= 0; i--) {
            trees.all[i].draw();
        }
    }
    return I;
}
