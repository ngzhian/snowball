function Menu(I) {
    I.options = [true, false];
    I.startButton = {
        p: {
            x: 0,
            y: -210,
            z: 310
        },
        w: 80,
        h: 20,
        colour: 'red',
    }
    I.quitButton = {
        p: {
            x: 0,
            y: -310,
            z: 310
        },
        w: 80,
        h: 20,
        colour: 'blue',
    }

    I.mouseInRect = function(mousePos, shape) {
        var canvasMid = renderer.screenToCanvas(
                camera.translatePoint(shape.p));
        return mousePos.x <= canvasMid.x + shape.w/2 &&
            mousePos.x >= canvasMid.x - shape.w/2 &&
            mousePos.y <= canvasMid.y + shape.h/2 &&
            mousePos.y >= canvasMid.y - shape.h/2;
    }

    I.hoverOverStartButton = function(mouseCanvasPosition) {
        var screenMidpoint = camera.translatePoint(I.startButton.p);
        var canvasMidpoint = renderer.screenToCanvas(screenMidpoint);
        if (I.mouseInRect(mouseCanvasPosition, I.startButton)) {
            return true;
                }
        return false;
    }

    I.clickOnStartButton = function(mouseClickPosition) {
        var screenMidpoint = camera.translatePoint(I.startButton.p);
        var canvasMidpoint = renderer.screenToCanvas(screenMidpoint);
        if (I.mouseInRect(mouseClickPosition, I.startButton)) {
            return true;
                }
        return false;
    }

    I.hoverOverQuitButton = function(mouseCanvasPosition) {
        var screenMidpoint = camera.translatePoint(I.quitButton.p);
        var canvasMidpoint = renderer.screenToCanvas(screenMidpoint);
        if (I.mouseInRect(mouseCanvasPosition, I.quitButton)) {
            return true;
                }
        return false;
    }

    I.setSelected = function(idx) {
        for (var i = 0; i < I.options.length; i++) {
            I.options[i] = false;
        }
        I.options[idx] = true;
    }

    I.findIndexOfSelectedOption = function() {
        var i = 0;
        while (i < I.options.length) {
            if (I.options[i] == true) {
                return i;
            }
            i++
        }
    }

    I.startGameSelected = function() {
        return I.findIndexOfSelectedOption() == 0;
    }

    I.draw = function() {
        I.drawResumeGame(I.options[0]);
        I.drawNewGame(I.options[1]);
    }

    I.drawResumeGame = function(selected) {
        if (selected) {
            renderer.drawRectWithBorder({x:0,y:-210,z:310},80,20, 'red');
        } else {
            renderer.drawRect({x:0,y:-210,z:310},80,20, 'red');
        }
    }

    I.drawNewGame = function(selected) {
        if (selected) {
            renderer.drawRectWithBorder({x:0,y:-310,z:310},80,20, 'blue');
        } else {
            renderer.drawRect({x:0,y:-310,z:310},80,20, 'blue');
        }
    }

    I.selectNextMenuItem = function() {
        var i = I.findIndexOfSelectedOption();
        I.options[i] = false;
        I.options[(i+1) % I.options.length] = true;
    }

    I.selectPreviousMenuItem = function() {
        var i = I.findIndexOfSelectedOption();
        I.options[i] = false;
        I.options[(i-1+I.options.length) % I.options.length] = true;
    }
    
    return I;
}
