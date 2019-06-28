const Cat = require("./cat.js");
const Wall = require("./wall.js");
const Food = require("./food.js");
const Plant = require("./plant.js");

document.addEventListener("DOMContentLoaded", e => {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let rightPressed = false;
  let leftPressed = false;
  let upPressed = false;
  let downPressed = false;
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let xframeIdx = 0;
  let yframeIdx = 0;
  let life = 3;
  let score = 0;
  let level = 1;
  let foods;
  let win = false;
  let lose = false;
  let donoteatarr;
  let miss = false;
  let main = document.getElementById("main");
  let about = document.getElementById("about-page");
  let gameIntro = document.getElementById("game-intro");
  let startButton = document.getElementById("start");
  let aboutButton = document.getElementById("about");
  let backButton = document.getElementById("back");
  let pass = false;

  const food_urls = [
    "./src/img/food/apple.png",
    "./src/img/food/banana.png",
    "./src/img/food/beer.png",
    "./src/img/food/burger.png",
    "./src/img/food/cake.png",
    "./src/img/food/cherry.png",
    "./src/img/food/corn.png",
    "./src/img/food/croissant.png",
    "./src/img/food/custard.png",
    "./src/img/food/dango.png",
    "./src/img/food/donut.png",
    "./src/img/food/fries.png",
    "./src/img/food/grapes.png",
    "./src/img/food/ice_cream.png",
    "./src/img/food/lemon.png",
    "./src/img/food/meat.png",
    "./src/img/food/orange.png",
    "./src/img/food/peach.png",
    "./src/img/food/pear.png",
    "./src/img/food/pie.png",
    "./src/img/food/pineapple.png",
    "./src/img/food/pisha.png",
    "./src/img/food/ramen.png",
    "./src/img/food/shaved_ice.png",
    "./src/img/food/spaghetti.png",
    "./src/img/food/strawberry.png",
    "./src/img/food/sushi.png",
    "./src/img/food/sweet_potato.png"
  ];
  const plantUrls = [
    // "./src/img/plant/cactus.png",
    // "./src/img/plant/herb.png",
    "./src/img/plant/mangotree.png",
    "./src/img/plant/palm.png"
    // "./src/img/plant/sunflower.png"
    // "./src/img/plant/tulip.png"
  ];
  let foodPos;
  let foods_idx = new Set();
  let donoteat;
  const cat = new Cat(canvas.width, canvas.height);
  const wall = new Wall();

  let positionSet = [
    [
      [cat.x - 28, cat.y - 25],
      [cat.x + 55, cat.y + 30],
      [cat.x - 50, cat.y + 60],
      [cat.x + 30, cat.y - 65],
      [cat.x + 60, cat.y - 40],
      [cat.x + 15, cat.y + 75],
      [cat.x - 75, cat.y + 2],
      [cat.x - 37, cat.y - 75],
      [cat.x + 95, cat.y - 30],
      [cat.x - 100, cat.y - 80],
      [cat.x + 100, cat.y + 70],
      [cat.x + 80, cat.y - 100],
      [cat.x - 50, cat.y + 100],
      [cat.x - 110, cat.y + 50],
      [cat.x - 10, cat.y - 110]
    ],

    [
      [cat.x - 48, cat.y - 55],
      [cat.x + 57, cat.y + 20],
      [cat.x - 30, cat.y + 60],
      [cat.x + 35, cat.y - 35],
      [cat.x - 14, cat.y - 30],
      [cat.x + 19, cat.y + 55],
      [cat.x - 50, cat.y + 2],
      [cat.x + 67, cat.y - 75],
      [cat.x + 95, cat.y - 30],
      [cat.x - 100, cat.y - 80],
      [cat.x + 70, cat.y + 80],
      [cat.x + 10, cat.y - 90],
      [cat.x - 80, cat.y + 30],
      [cat.x - 10, cat.y + 100],
      [cat.x + 110, cat.y + 30]
    ],
    [
      [cat.x - 8, cat.y - 35],
      [cat.x + 57, cat.y + 20],
      [cat.x - 30, cat.y + 60],
      [cat.x + 35, cat.y - 40],
      [cat.x - 44, cat.y + 18],
      [cat.x + 19, cat.y + 65],
      [cat.x - 80, cat.y + 45],
      [cat.x + 67, cat.y - 90],
      [cat.x + 95, cat.y - 30],
      [cat.x - 60, cat.y - 90],
      [cat.x + 73, cat.y + 90],
      [cat.x - 40, cat.y - 60],
      [cat.x - 70, cat.y + 85],
      [cat.x - 10, cat.y + 100],
      [cat.x + 110, cat.y + 30]
    ]
  ];

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function plantInit(plantUrls) {
    let plantArr = [];
    for (let i = 0; i < plantUrls.length; i++) {
      plantArr.push(new Plant(plantUrls[i]));
    }
    return plantArr;
  }

  //randomly pick x food...
  function random_food_idx(level) {
    let idx = 2;

    let foodCount;

    if (level < 4) {
      foodCount = 8;
    } else {
      foodCount += 6;
    }

    while (foods_idx.size <= foodCount) {
      idx = Math.floor(Math.random() * food_urls.length);
      foods_idx.add(idx);
    }
  }

  function food_init(level) {
    foods = {};
    random_food_idx(level);
    let randArr = positionSet[Math.floor(Math.random() * positionSet.length)];
    let j = 0;
    foods_idx.forEach(i => {
      let not_important = food_urls[i].split("/");
      let food_key = not_important[not_important.length - 1].slice(0, -4);

      let pos_arr = randArr[j];
      foods[food_key] = new Food(pos_arr[0], pos_arr[1], food_urls[i]);
      j++;
    });
  }

  function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
  }

  function draw_food() {
    let food_keys = Object.keys(foods);
    let eachFood;
    for (let i = 0; i < food_keys.length; i++) {
      eachFood = foods[food_keys[i]];
      ctx.drawImage(
        eachFood.food_image,
        0,
        0,
        eachFood.width,
        eachFood.height,
        eachFood.food_x,
        eachFood.food_y,
        eachFood.width * 0.8,
        eachFood.height * 0.8
      );
    }
  }

  function keyDownHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = true;
      if (xframeIdx >= 8) {
        xframeIdx = 6;
      } else {
        xframeIdx += 1;
      }
      yframeIdx = 2;
    } else if (e.keyCode == 37) {
      leftPressed = true;
      if (xframeIdx >= 8) {
        xframeIdx = 6;
      } else {
        xframeIdx += 1;
      }
      yframeIdx = 1;
    } else if (e.keyCode == 38) {
      upPressed = true;
      if (xframeIdx >= 2) {
        xframeIdx = 0;
      } else {
        xframeIdx += 1;
      }
      yframeIdx = 3;
    } else if (e.keyCode == 40) {
      downPressed = true;
      if (xframeIdx >= 2) {
        xframeIdx = 0;
      } else {
        xframeIdx += 1;
      }
      yframeIdx = 0;
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = false;
    } else if (e.keyCode == 37) {
      leftPressed = false;
    } else if (e.keyCode == 38) {
      upPressed = false;
    } else if (e.keyCode == 40) {
      downPressed = false;
    }
  }

  function draw_cat() {
    ctx.drawImage(
      cat.cat_image,
      xframeIdx * cat.width,
      yframeIdx * cat.height + 1,
      cat.width,
      cat.height,
      cat.x,
      cat.y,
      cat.width * 1.2,
      cat.height * 1.2
    );
  }

  function deleteItem(life) {
    let foodx;
    let foody;
    let eachFood;
    let food_keys = Object.keys(foods);
    for (let i = 0; i < food_keys.length; i++) {
      eachFood = foods[food_keys[i]];

      foodx = eachFood.food_x;

      foody = eachFood.food_y;
      if (
        foodx - 20 <= cat.x + 3 &&
        foodx + eachFood.width >= cat.x + cat.width - 3 &&
        foody - 20 <= cat.y + 3 &&
        foody + eachFood.height >= cat.y + cat.height - 3
      ) {
        donoteat.forEach(e => {
          if (food_keys[i] === e) {
            miss = true;
          }
        });
        delete foods[food_keys[i]];
      }
    }
  }

  //create food list that you should not eat
  function food_to_avoid(level) {
    donoteatarr = [];
    donoteat = new Set();
    while (donoteat.size < level) {
      donoteat.add(
        Object.keys(foods)[
          Math.floor(Math.random() * Object.keys(foods).length)
        ]
      );
    }
    donoteat.forEach(e => {
      donoteatarr.push(e);
    });
  }

  function drawBackground() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawText(level) {
    ctx.fillStyle = "white";
    ctx.font = "30px Helvetica, sans";
    ctx.textAlign = "center";
    ctx.fillText(`* Level ${level} *`, canvas.width / 2, 110);
    ctx.fillText(`Do not eat`, canvas.width / 2, 150);
  }

  function before(e) {
    drawBackground();
    drawText(level);

    ctx.drawImage(
      foods[e].food_image,
      0,
      0,
      foods[e].width,
      foods[e].height,
      canvas.width / 2 - foods[e].width,
      canvas.height / 2,
      foods[e].width * 1.2,
      foods[e].height * 1.2
    );
  }

  function draw(life) {
    // while (donoteat === new Set(Object.keys(foods))) {
    //   console.log("ekekeke?");
    //   return;
    // }

    if (eqSet(donoteat, new Set(Object.keys(foods)))) {
      pass = true;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffcc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw walls
    let i = 0;
    while (canvas.width / wall.width > i) {
      ctx.drawImage(
        wall.wallImage,
        0,
        0,
        wall.width,
        wall.height,
        i * wall.width,
        0,
        wall.width,
        wall.height
      );
      ctx.drawImage(
        wall.wallImage,
        0,
        0,
        wall.width,
        wall.height,
        i * wall.width,
        canvas.height - wall.height,
        wall.width,
        wall.height
      );
      i++;
    }
    let j = 1;
    let plantArr = plantInit(plantUrls);
    while ((canvas.height - 2 * wall.width) / wall.width >= j) {
      let idx = j % plantArr.length;
      ctx.drawImage(
        plantArr[idx].plantImage,
        0,
        0,
        plantArr[idx].width,
        plantArr[idx].height,
        0,
        plantArr[idx].height * j,
        plantArr[idx].width * 0.7,
        plantArr[idx].height
      );
      ctx.drawImage(
        plantArr[idx].plantImage,
        0,
        0,
        plantArr[idx].width,
        plantArr[idx].height,
        canvas.width - plantArr[idx].width,
        plantArr[idx].height * j,
        plantArr[idx].width * 0.7,
        plantArr[idx].height
      );
      j++;
    }

    draw_food();
    draw_cat();

    if (rightPressed && cat.x < canvas.width - cat.width - wall.width) {
      cat.x += 3;
    } else if (leftPressed && cat.x > wall.width) {
      cat.x -= 3;
    } else if (upPressed && cat.y > wall.width - 9) {
      cat.y -= 3;
    } else if (
      downPressed &&
      cat.y < canvas.height - cat.width - wall.width - 5
    ) {
      cat.y += 3;
    }
    deleteItem(life);
  }

  function game(level, life) {
    if (life === 0) {
      return;
    }
    cat.x = (canvas.width - cat.width) / 2;
    cat.y = (canvas.height - cat.height) / 2;
    return new Promise(function(resolve, reject) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      food_init(level);
      food_to_avoid(level + 1);

      let beforeSetInterval = setInterval(function() {
        before(donoteatarr.shift());
        if (!donoteatarr.length) clearInterval(beforeSetInterval);
      }, 700);

      setTimeout(() => {
        let drawCat = setInterval(function() {
          if (!miss && life > 0) {
            //normal play
            console.log(life);
            draw(life);
            if (pass) {
              pass = false;
              level += 1;
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              clearInterval(drawCat);
              resolve();
            }
          } else if (miss && life > 0) {
            //miss
            life -= 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(drawCat);
            miss = false;
            resolve();
          } else {
            //lost
            reject(new Error("--"));
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(drawCat);
            console.log("YOU lose...");
            // life = 3;
          }
        }, 12);
      }, 3000);
    }).then(() => game(level, life), err => console.log("nope"));
  }

  aboutButton.addEventListener("click", () => {
    about.style.display = "flex";
    gameIntro.style.display = "none";
  });

  startButton.addEventListener("click", () => {
    main.style.display = "flex";
    //game start here maybe...
    game(level, life);
  });

  backButton.addEventListener("click", () => {
    about.style.display = "none";
    gameIntro.style.display = "";
  });
  main.style.display = "flex";
});
