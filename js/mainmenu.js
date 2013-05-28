function Menu(I) {
    I.options = [false];
    I.startButton = {
        p: { x: 0, y: -210, z: 310 },
        w: 200,
        h: 60,
        src: 'img/start.png',
        srcSelected: 'img/start-pressed.png',
        selected: false
    }

    I.instructions = {
        p: { x: -200, y: -550, z: 310 },
        w: 247,
        h: 60,
        src: 'img/instr.png',
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

    I.mouseIsOverButton = function(mousePos, button) {
        if (mousePos == undefined) {
            return false;
        }
        var canvasMid = renderer.screenToCanvas(
                camera.translatePoint(button.p));
        return mousePos.x <= canvasMid.x + button.w/2 &&
            mousePos.x >= canvasMid.x - button.w/2 &&
            mousePos.y <= canvasMid.y + button.h/2 &&
            mousePos.y >= canvasMid.y - button.h/2;
    }

    I.setSelected = function(idx) {
        if (idx >= I.options.length) {
            idx -= I.options.length;
        } else if (idx < 0) {
            idx += I.options.length;
        }
        for (var i = 0; i < I.options.length; i++) {
            I.options[i] = false;
        }
        I.options[idx] = true;
    }

    I.startGameSelected = function() {
        return I.findIndexOfSelectedOption() == 0;
    }

    I.draw = function() {
        I.drawStartButton();
        I.drawInstructions();
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
    
    return I;
}
