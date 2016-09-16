var menuState = {
	
	create: function() {
		game.add.image(0, 0, "background");

		var nameLabel = game.add.text(game.width/2, -50, "Super Coin Box", { font: "70px Geo", fill: "#ffffff" });
		nameLabel.anchor.setTo(0.5, 0.5);

/*		var scoreLabel = game.add.text(game.width/2, game.height/2, "Score: " + game.global.score, { font: "25px Arial", fill: "#ffffff" });
		scoreLabel.anchor.setTo(0.5, 0.5);*/

		var startLabel = game.add.text(game.width/2, game.height-80, "press the up arrow key to start", { font: "25px Arial", fill: "#ffffff" });
		startLabel.anchor.setTo(0.5, 0.5);

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);

		game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
		game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 1000).to({angle: 0}, 500).loop().start();

		if (!localStorage.getItem("bestScore")) {
			localStorage.setItem("bestScore", 0);
		}

		if (game.global.score > localStorage.getItem("bestScore")) {
			localStorage.setItem("bestScore", game.global.score);
		}

		var text = "Score: " + game.global.score + "\nBest Score: " + localStorage.getItem("bestScore");
		var scoreLabel = game.add.text(game.width/2, game.height/2, text, { font: "25px Arial", fill: "#ffffff", align: "center"});
		scoreLabel.anchor.setTo(0.5, 0.5);

		this.muteButton = game.add.button(20, 20, "mute", this.toggleSound, this);
	},

	start: function() {
		game.state.start("play");
	},

	toggleSound: function() {
		game.sound.mute = !game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	},
};