class Plant {
  constructor(plantImgUrl) {
    this.width = 32;
    this.height = 32;
    this.plantImage = new Image();
    this.plantImage.src = plantImgUrl;
  }
}

module.exports = Plant;
