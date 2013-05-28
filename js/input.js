function Input(I) {
    I.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        ENTER: 13
    }
    I.down = {};
    I.mouseCanvasPosition = {};
    I.mousedownPosition = {};
    I.mouseupPosition = {};

    I.handleInput = function(dt) {
        input.handleKeyboardInput(dt);
        input.handleMouseInput(dt);
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

    I.handleMouseInput = function(dt) {
        if (menu.mousedownOnStartButton(I.mousedownPosition)) {
            menu.startButton.selected = true;        
        }
        if (menu.mouseupOnStartButton(I.mouseupPosition) &&
                menu.startButton.selected == true) {
            paused = false; 
        }
		if(menu.mousedownOnMuteButton(I.mousedownPosition)) {
			menu.muteButton.selected = !menu.muteButton.selected;
		}
    }

    I.onKeydown = function(event) {
        I.down[event.keyCode] = true;
    }

    I.onKeyup = function(event) {
        delete I.down[event.keyCode];
    }

    I.onMousedown = function(event) {
        I.mousedownPosition.x = event.clientX - canvas.offsetLeft;
        I.mousedownPosition.y = event.clientY - canvas.offsetTop;
    }

    I.onMouseup = function(event) {
        I.mouseupPosition.x = event.clientX - canvas.offsetLeft;
        I.mouseupPosition.y = event.clientY - canvas.offsetTop;
    }

    I.onMousemove = function(event) {
        I.mouseCanvasPosition.x = event.clientX - canvas.offsetLeft;
        I.mouseCanvasPosition.y = event.clientY - canvas.offsetTop;
    }

    return I;
}
