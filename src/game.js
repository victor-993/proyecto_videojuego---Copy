export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
  
    preload() {
      this.load.image('background', './public/images/background.png');
      this.load.image('gameover', 'images/gameover.png');
    }
  
    create() {
      this.add.image(410, 250, 'background');
    }
  
  }