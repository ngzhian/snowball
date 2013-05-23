function Input(I) {
    I.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        ENTER: 13
    }

    I.down = {};

    I.mouseGlobalPosition = {};
    I.mouseCanvasPosition = {};
    I.mouseClickPosition = {};

    I.keyIsDown = function(keyCode) {
        return this.down[keyCode];
    }

    I.onKeydown = function(event) {
        if (paused) {
            I.handleKeyboardInputWhenPaused(event);
        } else {
            I.down[event.keyCode] = true;
        }
    }

    I.onKeyup = function(event) {
        delete I.down[event.keyCode];
    }

    I.onMousedown = function(event) {
        I.mouseClickPosition.x = event.clientX - canvas.offsetLeft;
        I.mouseClickPosition.y = event.clientY - canvas.offsetTop;
    }

    I.onMouseup = function(event) {
    }

    I.onMousemove = function(event) {
        I.mouseGlobalPosition.x = event.clientX;
        I.mouseGlobalPosition.y = event.clientY;
        I.mouseCanvasPosition.x = event.clientX - canvas.offsetLeft;
        I.mouseCanvasPosition.y = event.clientY - canvas.offsetTop;
    }

    I.handleInput = function(dt) {
        input.handleKeyboardInput(dt);
        input.handleMouseInput(dt);
    }

    I.handleKeyboardInput = function(dt) {
        if (paused) {
            I.handleKeyboardInputWhenPaused(dt);
        } else {
            I.handleKeyboardInputWhenPlaying(dt);
        }
    }

    I.handleKeyboardInputWhenPaused = function(event) {
        if (event.keyCode == input.keys.UP) {
            menu.selectPreviousMenuItem();
        }
        if (event.keyCode == input.keys.DOWN) {
            menu.selectNextMenuItem();
        }
        if (event.keyCode == input.keys.ENTER) {
            if (menu.startGameSelected()) {
                paused = false;
            }
        }
    }

    I.handleKeyboardInputWhenPlaying = function(dt) {
        if (input.keyIsDown(input.keys.LEFT)) {
            ball.goLeft(dt);
            camera.goLeft(dt);
        }
        if (input.keyIsDown(input.keys.RIGHT)) {
            ball.goRight(dt);
            camera.goRight(dt);
        }
    }

    I.handleMouseInput = function(dt) {
        if (menu.hoverOverStartButton(I.mouseCanvasPosition)) {
            menu.setSelected(0);
        }
        if (menu.hoverOverQuitButton(I.mouseCanvasPosition)) {
            menu.setSelected(1);
        }
        if (menu.clickOnStartButton(I.mouseClickPosition)) {
            paused = false;
        }
    }

    return I;
}
