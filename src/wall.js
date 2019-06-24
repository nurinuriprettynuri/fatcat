class Wall {
  constructor() {
    this.width = 32;
    this.height = 32;
    this.wallImage = new Image();
    this.wallImage.src = "./src/img/brickwall.png";
  }
}

module.exports = Wall;
