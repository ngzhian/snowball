function Sounds(I) {
    I.source;
    I.buffer;
    I.audioData;

    I.init = function() {
        if (typeof AudioContext !== "undefined") {
            audioContext = new AudioContext();
        } else if (typeof webkitAudioContext !== "undefined") {
            audioContext = new webkitAudioContext();
        } else {
            throw new Error('AudioContext not supported. :(');
                    }
    }

    I.init();

    I.loadBgSound = function(url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function() {
            I.audioData = request.response;
            I.buffer = audioContext.createBuffer(I.audioData, false);
            I.pausedTime = 0;
            audioGraph(I.audioData);
        }
        request.send();
    }
    I.loadBgSound('../sounds/test.mp3');

    function audioGraph(audioData) {
        I.playSound(audioData);
    }

    I.playSound = function(audioData) {
        I.source = audioContext.createBufferSource();
        I.source.connect(audioContext.destination);
        I.source.buffer = I.buffer;
        I.source.loop = true;
        I.source.start(0, I.pausedTime);
    }

    I.stopSound = function() {
        I.pausedTime = audioContext.currentTime;
        I.source.stop(0);
    }

    I.update = function(dt) {
    }

    I.toggleSound = function() {
        if (menu.muteButton.selected) {
            console.log('playing');
            I.stopSound();
        } else {
            console.log('stopping');
            I.playSound();
        }
    }

    return I;
}

