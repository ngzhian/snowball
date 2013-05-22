function drawPauseScreen() {
    drawResumeGame(pauseScreenSelections[0]);
    drawNewGame(pauseScreenSelections[1]);
    //renderer.drawRectWithBorder({x:0,y:-310,z:310},80,20, 'yellow');
}

function drawResumeGame(selected) {
    if (selected) {
        renderer.drawRectWithBorder({x:0,y:-210,z:310},80,20, 'red');
    } else {
        renderer.drawRect({x:0,y:-210,z:310},80,20, 'red');
    }
}

function drawNewGame(selected) {
    if (selected) {
        renderer.drawRectWithBorder({x:0,y:-310,z:310},80,20, 'blue');
    } else {
        renderer.drawRect({x:0,y:-310,z:310},80,20, 'blue');
    }
}

function selectNextMenuItem() {
    var i = 0;
    while (i < pauseScreenSelections.length &&
            pauseScreenSelections[i] != true) {
                i++;
            }
        pauseScreenSelections[i] = false;
        pauseScreenSelections[(i+1)%pauseScreenSelections.length] = true;
}
