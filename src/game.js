export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
  
    preload() {
      this.load.image('background', 'assets/images/background.png');
      this.load.image('platform', 'assets/images/platform.png');
    }
  
    create() {
      this.add.image(410, 250, 'background');
      this.platform = this.physics.add.image(400, 460, 'platform');
    }
  
  }