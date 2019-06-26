const Cat = require("./cat.js");
const Wall = require("./wall.js");
const Food = require("./food.js");

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
  let level = 2;
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
  let foodPos;
  let foods_idx = new Set();
  let donoteat;

  //   const food_cord = [[x + 90, y + 90], [x + 100, y + 100]];

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const cat = new Cat(canvas.width, canvas.height);
  const wall = new Wall();

  function setPos() {
    foodPos = [];
    let alldone = false;
    let food_x;
    let food_y;
    while (!alldone) {
      alldone = true;
      food_x = Math.floor(Math.random() * canvas.width);
      food_y = Math.floor(Math.random() * canvas.height);
      if (food_x < 22 || food_x > canvas.width - 22) {
        alldone = false;
        continue;
      }
      if (food_y < 22 || food_y > canvas.height - 22) {
        alldone = false;
        continue;
      }
      for (let i = 0; i < foodPos.length; i++) {
        if (
          !(
            (foodPos[i][0] - food_x < -20 || foodPos[i][0] - food_x > 20) &&
            (foodPos[i][1] - food_y < -20 || foodPos[i][1] - food_y > 20)
          )
        ) {
          alldone = false;
        }
      }
      if (
        !(
          (cat.x - food_x < -20 || cat.x - food_x > 20) &&
          (cat.y - food_y < -20 || cat.y - food_y > 20)
        )
      ) {
        alldone = false;
        continue;
      }
      if (alldone === true) {
        foodPos.push([food_x, food_y]);
        return [food_x, food_y];
      }
    }
  }

  //position check

  //randomly pick 12 food...
  function random_food_idx() {
    let idx = 2;

    while (foods_idx.size < 8) {
      idx = Math.floor(Math.random() * food_urls.length);
      foods_idx.add(idx);
    }
    foods_idx.forEach(e => {});
  }

  function food_init() {
    foods = {};
    random_food_idx();
    foods_idx.forEach(i => {
      let not_important = food_urls[i].split("/");
      let food_key = not_important[not_important.length - 1].slice(0, -4);

      let pos_arr = setPos();
      foods[food_key] = new Food(pos_arr[0], pos_arr[1], food_urls[i]);
    });
  }

  //food drawing function!
  function drawFoodTest() {
    let oneFood = Object.keys(foods);
    let chosen = foods[oneFood[0]];
    let innerPosition = [
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
      [cat.x - 50, cat.y + 100]
    ];

    for (let i = 0; i < innerPosition.length; i++) {
      ctx.drawImage(
        chosen.food_image,
        0,
        0,
        chosen.width,
        chosen.height,
        innerPosition[i][0],
        innerPosition[i][1],
        chosen.width * 0.8,
        chosen.height * 0.8
      );
    }
  }

  // function draw_food() {
  //   let food_keys = Object.keys(foods);
  //   let eachFood;
  //   for (let i = 0; i < food_keys.length; i++) {
  //     eachFood = foods[food_keys[i]];
  //     ctx.drawImage(
  //       eachFood.food_image,
  //       0,
  //       0,
  //       eachFood.width,
  //       eachFood.height,
  //       eachFood.food_x,
  //       eachFood.food_y,
  //       eachFood.width * 0.8,
  //       eachFood.height * 0.8
  //     );
  //   }
  // }

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

  function deleteItem() {
    let foodx;
    let foody;
    let eachFood;
    let food_keys = Object.keys(foods);
    for (let i = 0; i < food_keys.length; i++) {
      eachFood = foods[food_keys[i]];

      foodx = eachFood.food_x;
      foody = eachFood.food_y;
      if (
        foodx - 7 <= cat.x &&
        foodx + 40 >= cat.x + cat.width &&
        foody - 7 <= cat.y &&
        foody + 40 >= cat.y + cat.height
      ) {
        donoteat.forEach(e => {
          if (food_keys[i] === e) {
            life -= 1;
            miss = true;
          }
        });
        delete foods[food_keys[i]];
      }
    }
  }

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
    ctx.font = "50px Helvetica, sans";
    ctx.textAlign = "center";
    ctx.fillText(`* Level ${level} *`, canvas.width / 2, 110);
    ctx.fillText(`Do not eat`, canvas.width / 2, 220);
  }

  function before(e) {
    drawBackground();
    drawText(2);

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
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffcc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw walls
    let i = 0;
    while (canvas.width / 32 > i) {
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

    // draw_food();
    drawFoodTest();
    draw_cat();

    //   if (rightPressed && cat.x < canvas.width - cat.width) {

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
    deleteItem();
  }
  let i;
  function game() {
    i++;
    return new Promise(function(resolve, reject) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      food_init();
      food_to_avoid(level);

      let beforeSetInterval = setInterval(function() {
        before(donoteatarr.shift());
        if (!donoteatarr.length) clearInterval(beforeSetInterval);
      }, 700);

      setTimeout(() => {
        let drawCat = setInterval(function() {
          if (!miss) {
            draw();
          } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(drawCat);
            miss = false;
            resolve();
          }
        }, 12);
      }, 3000);
    }).then(game);
  }

  aboutButton.addEventListener("click", () => {
    about.style.display = "flex";
    gameIntro.style.display = "none";
  });

  startButton.addEventListener("click", () => {
    main.style.display = "flex";
    //game start here maybe...
  });

  backButton.addEventListener("click", () => {
    about.style.display = "none";
    gameIntro.style.display = "";
  });
  main.style.display = "flex";
  game();
});
