function Spikes(I) {
    I.all = [];
    I.size = 0;
    I.GRIDSIZE = 4000;
    I.STARTZ = ball.p.z + 190;
    I.SPIKES_TO_SPAWN = 30;
    I.gridSpawnedFor = -1;

    I.spawnSpikes = function() {
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
        console.log(startZ);
        var startZ = I.STARTZ + (gridNum * I.GRIDSIZE);
        var interval = I.GRIDSIZE / I.SPIKES_TO_SPAWN;
        for (var i = 0; i < I.SPIKES_TO_SPAWN; i++) {
            var z = startZ + interval * i;
            var spikeLeft = I.makeSpike({x: -550, y: -z, z: z - 70/2});
            var spikeRight = I.makeSpike({x: 550, y: -z, z: z - 70/2});
            I.addSpike(spikeLeft);
            I.addSpike(spikeRight);
        }
    }

    // x is always [-500, 500]
    I.makeSpike = function(point) {
        var spike = Spike({
            p: point,
        });
        return spike;
    }

    I.addSpike = function(spike) {
        I.all.push(spike);
        I.size++;
    }

    I.removeOutOfViewSpikes = function() {
        var i = 0;
        while (I.size > 0 && I.all[0].p.z - 100 < camera.p.z) {
            I.deleteSpike(0);
        }
    }

    I.deleteSpike = function(i) {
        if (I.size > i) {
            I.all.splice(i, i+1);
            I.size--;
        }
    }

    I.update = function(dt) {
        I.removeOutOfViewSpikes();
        I.spawnSpikes();
    }

    I.draw = function() {
        for (var i = I.size - 1; i >= 0; i--) {
            spikes.all[i].draw();
        }
    }
    return I;
}
