var ffmetadata = require("ffmetadata");

// Read song.mp3 metadata
ffmetadata.read("sound.wav", function(err, data) {
	if (err) console.error("Error reading metadata", err);
	else console.log(data);
});

