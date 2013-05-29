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
        src: 'img/instr.png',
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
        if (I.startButton.selected) {
            renderer.drawImage(I.startButton.p, I.startButton.w,
                    I.startButton.h, I.startButton.srcSelected);
        } else {
            renderer.drawImage(I.startButton.p, I.startButton.w,
                    I.startButton.h, I.startButton.src);
        }
    }

    I.drawInstructions = function() {
        renderer.drawImage(I.instructions.p, I.instructions.w,
                I.instructions.h, I.instructions.src);
    }
	
	I.drawMuteButton = function() {
		ctx.drawImage(resources.get(I.muteButton.src), 300, 210, 100, 100);
	}
    
    return I;
}
