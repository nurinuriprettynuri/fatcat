class Cat {
  constructor(x, y) {
    this.width = 32;
    this.height = 32;
    this.x = (x - this.width) / 2;
    this.y = (y - this.height) / 2;
    this.cat_image = new Image();
    this.cat_image.src = "./src/img/fatcat.png";
  }
}

module.exports = Cat;
