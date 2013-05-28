function Sound(I) = {
	I.context;
	window.addEventListener('load', init, false);
	I.init= function() {
		try {
    // Fix up for prefixing
			window.AudioContext = window.AudioContext||window.webkitAudioContext;
			context = new AudioContext();
		}
	catch(e) {
		alert('Web Audio API is not supported in this browser');
		}
	}
	I.soundBgBuffer = null;
// Fix up prefixing
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	I.context = new AudioContext();



I.loadBgSound = function(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
		I.playSound(buffer);
    }, function(){console.log('')});
  }
  request.send();
}


window.AudioContext = window.AudioContext || window.webkitAudioContext;
I.context = new AudioContext();

I.playSound = function(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0); 
  source.loop = true;// play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}
I.stopSound = function(buffer){
	var source=context.createBufferSource();
	source.buffer = buffer;
	source.stop(1);
	}
	
I.loadBgSound('../sounds/in_the_box_mellow_techno_trance_loop_120_bpm.mp3');
I.update = function(dt) {}
return I;
}

