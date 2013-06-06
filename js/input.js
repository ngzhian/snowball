function Input(I) {
    I.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        ENTER: 13
    }
    I.down = {};
    I.mousePosition = {};
    I.mousedownPosition;
    I.mouseupPosition;

    I.handleInput = function(dt) {
        if (!paused) {
            input.handleKeyboardInput(dt);
        }
    }

    I.handleKeyboardInput = function(dt) {
        if (input.keyIsDown(input.keys.LEFT)) {
            ball.goLeft(dt);
            camera.goLeft(dt);
        }
        if (input.keyIsDown(input.keys.RIGHT)) {
            ball.goRight(dt);
            camera.goRight(dt);
        }
    }

    I.keyIsDown = function(keyCode) {
        return this.down[keyCode];
    }

    I.onKeydown = function(event) {
        I.down[event.keyCode] = true;
    }

    I.onKeyup = function(event) {
        delete I.down[event.keyCode];
    }

    I.onMousedown = function(event) {
        mousedownPosition = I.getMouseCanvasPosition(event);
        if (menu.mousedownOnStartButton(mousedownPosition)) {
            if (!paused) return;
            menu.startButton.selected = true;        
        } else if (menu.mousedownOnMuteButton(mousedownPosition)) {
            menu.muteButton.selected = !menu.muteButton.selected;
            sounds.toggleSound();
        }
    }

    I.onMouseup = function(event) {
        mouseupPosition = I.getMouseCanvasPosition(event);
        if (menu.mouseupOnStartButton(mouseupPosition)) {
            if (dead || !paused) return;
            if (menu.startButton.selected) {
                reset();
                paused = false;
            }
        }
    }

    I.onMousemove = function(event) {
        mousePosition = I.getMouseCanvasPosition(event);
        if (menu.mousemoveOutOfStartButton(mousePosition)) {
            menu.startButton.selected = false;        
        }
    }

    I.getMouseCanvasPosition = function(event) {
        return {
            x: event.clientX - canvas.offsetLeft,
            y: event.clientY - canvas.offsetTop
        }
    }

    return I;
}
