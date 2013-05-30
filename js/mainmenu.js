function Menu(I) {
    // position of buttons are given from top left corner
    I.startButton = {
        p: { x: (CANVAS_WIDTH-240)/2, y: 110 },
        w: 240,
        h: 72,
        src: 'img/start.png',
        srcSelected: 'img/start-pressed.png',
        selected: false
    }

    I.instructions = {
        p: { x: (CANVAS_WIDTH-247)/2, y: 190 },
        w: 247,
        h: 60,
        src: 'img/instr.png',
    }

    I.muteButton = {
        p: { x: (CANVAS_WIDTH-30), y: 0 },
        w: 30,
        h: 30,
        src: 'img/sound.png',
		srcSelected: 'img/nosound.png',
        selected: false
    }

    I.mousedownOnStartButton = function(mousedownPosition) {
        if (I.mouseIsOverButton(mousedownPosition, I.startButton)) {
            return true;
        }
        return false;
    }

    I.mouseupOnStartButton = function(mouseupPosition) {
        if (I.mouseIsOverButton(mouseupPosition, I.startButton)) {
            return true;
        }
        return false;
    }

    I.mousedownOnMuteButton = function(mousedownPosition) {
        if (I.mouseIsOverButton(mousedownPosition, I.muteButton)) {
            return true;
        }
        return false;
    }

    I.mousemoveOutOfStartButton = function(mousePosition) {
        return !I.mousedownOnStartButton(mousePosition);
    }

    I.mouseIsOverButton = function(mousePos, button) {
        if (mousePos == undefined) {
            return false;
        }
        return mousePos.x <= button.p.x + button.w &&
            mousePos.x >= button.p.x &&
            mousePos.y <= button.p.y + button.h &&
            mousePos.y >= button.p.y;
    }

    I.startGameSelected = function() {
        return I.findIndexOfSelectedOption() == 0;
    }

    I.draw = function() {
        if (paused == true) {
            I.drawStartButton();
            I.drawInstructions();
        }
        I.drawMuteButton();
    }


    I.drawStartButton = function() {
        var src = I.startButton.selected ?
            I.startButton.srcSelected : I.startButton.src;
        ctx.drawImage(resources.get(src),
                I.startButton.p.x,
                I.startButton.p.y,
                I.startButton.w,
                I.startButton.h);
    }

    I.drawInstructions = function() {
        ctx.drawImage(resources.get(I.instructions.src),
                I.instructions.p.x,
                I.instructions.p.y,
                I.instructions.w,
                I.instructions.h);
    }

    I.drawMuteButton = function() {
		var src = I.muteButton.selected ?
			I.muteButton.srcSelected : I.muteButton.src;
        ctx.drawImage(resources.get(src),
                I.muteButton.p.x,
                I.muteButton.p.y,
                I.muteButton.w,
                I.muteButton.h);
    }

    return I;
}
