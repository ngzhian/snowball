function Golems(I) {
    // trees are in nearest to furthest order
    I.all = [];
    I.size = 0;
    I.GRIDSIZE = 4000;
    I.GOLEMSTOMAKE = 5;
    I.CROWDFACTOR = I.GRIDSIZE/I.GOLEMSTOMAKE * 2;
    I.STARTZ = ball.p.z + 190;
    I.gridSpawnedFor = -1;

    I.spawnGolems = function() {
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
        I.makeFirstGolemInGrid(gridNum);
        for (var i = 1; i < I.GOLEMSTOMAKE; i++) {
            var x = I.getRandomX();
            var z = I.getRandomZ(gridNum);
            var golem = I.makeGolem({x: x, y: -z, z: z});
            I.addGolem(golem);
        }
    }

    I.makeFirstGolemInGrid = function(num) {
        return I.STARTZ + num * I.GRIDSIZE +
            Math.random()*I.CROWDFACTOR;
    }

    I.getRandomX = function() {
        return Math.random() * 1000 + 1000;
    }

    I.getRandomZ = function(gridNum) {
        if (golems.size == 0) {
            return I.STARTZ + gridNum * I.GRIDSIZE +
                Math.random()*I.CROWDFACTOR;
        } else {
            var furthestGolem = golems.all[golems.size-1];
            var zOfFurthestGolem = furthestGolem.p.z;
            return zOfFurthestGolem + Math.random()*I.CROWDFACTOR;
        }
    }

    // x is always [-500, 500]
    I.makeGolem = function(point) {
        var golem = Golem({
            p: point,
            w: 50,
            h: 640
        });
        return golem;
    }

    I.addGolem = function(golem) {
        I.all.push(golem);
        I.size++;
    }

    I.removeOutOfViewGolems = function() {
        // remove trees that we won't see
        var i = 0;
        while (I.size > 0 && I.all[0].p.z - 100 < camera.p.z) {
            I.deleteGolem(0);
        }
    }

    I.deleteGolem = function(i) {
        if (I.size > i) {
            I.all.splice(i, i+1);
            I.size--;
        }
    }

    I.update = function(dt) {
        for (var i = I.size - 1; i >= 0; i--) {
            golems.all[i].update(dt);
        }
        I.removeOutOfViewGolems();
        I.spawnGolems();
    }

    I.draw = function() {
        for (var i = I.size - 1; i >= 0; i--) {
            golems.all[i].draw();
        }
    }
    return I;
}
