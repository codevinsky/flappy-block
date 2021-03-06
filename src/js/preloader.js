(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.image('pipe', 'assets/pipe.png');
      this.load.image('background', 'assets/Argyle-Pattern.jpg');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');

      this.load.audio('jump', 'assets/jump.wav');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('game');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['flappy-block'] = window['flappy-block'] || {};
  window['flappy-block'].Preloader = Preloader;

}());
