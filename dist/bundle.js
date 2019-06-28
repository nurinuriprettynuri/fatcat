/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Cat {
  constructor(x, y) {
    this.width = 32;
    this.height = 32;
    this.mainWidth = 128;
    this.mainHeight = 128;
    this.x = (x - this.width) / 2;
    this.y = (y - this.height) / 2;
    this.mainX = (x - this.mainWidth) / 2;
    this.mainY = (y - this.mainHeight) / 2;
    this.cat_image = new Image();
    this.catMainpage = new Image();
    this.cat_image.src = "./src/img/fatcat.png";
    this.catMainpage.src = "./src/img/main-cat.png";
  }
}

module.exports = Cat;


/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Food {
  constructor(x, y, img_url) {
    this.width = 32;
    this.height = 32;
    this.food_x = x;
    this.food_y = y;
    this.food_image = new Image();
    this.food_image.src = img_url;
  }
}

module.exports = Food;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Cat = __webpack_require__(/*! ./cat.js */ "./src/cat.js");
const Wall = __webpack_require__(/*! ./wall.js */ "./src/wall.js");
const Food = __webpack_require__(/*! ./food.js */ "./src/food.js");
const Plant = __webpack_require__(/*! ./plant.js */ "./src/plant.js");

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


/***/ }),

/***/ "./src/plant.js":
/*!**********************!*\
  !*** ./src/plant.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Plant {
  constructor(plantImgUrl) {
    this.width = 32;
    this.height = 32;
    this.plantImage = new Image();
    this.plantImage.src = plantImgUrl;
  }
}

module.exports = Plant;


/***/ }),

/***/ "./src/wall.js":
/*!*********************!*\
  !*** ./src/wall.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Wall {
  constructor() {
    this.width = 32;
    this.height = 32;
    this.wallImage = new Image();
    this.wallImage.src = "./src/img/fence.png";
  }
}

module.exports = Wall;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYW50LmpzIiwid2VicGFjazovLy8uL3NyYy93YWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNYQSxZQUFZLG1CQUFPLENBQUMsOEJBQVU7QUFDOUIsYUFBYSxtQkFBTyxDQUFDLGdDQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsa0NBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3RlRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgQ2F0IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMud2lkdGggPSAzMjtcbiAgICB0aGlzLmhlaWdodCA9IDMyO1xuICAgIHRoaXMubWFpbldpZHRoID0gMTI4O1xuICAgIHRoaXMubWFpbkhlaWdodCA9IDEyODtcbiAgICB0aGlzLnggPSAoeCAtIHRoaXMud2lkdGgpIC8gMjtcbiAgICB0aGlzLnkgPSAoeSAtIHRoaXMuaGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5tYWluWCA9ICh4IC0gdGhpcy5tYWluV2lkdGgpIC8gMjtcbiAgICB0aGlzLm1haW5ZID0gKHkgLSB0aGlzLm1haW5IZWlnaHQpIC8gMjtcbiAgICB0aGlzLmNhdF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY2F0TWFpbnBhZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNhdF9pbWFnZS5zcmMgPSBcIi4vc3JjL2ltZy9mYXRjYXQucG5nXCI7XG4gICAgdGhpcy5jYXRNYWlucGFnZS5zcmMgPSBcIi4vc3JjL2ltZy9tYWluLWNhdC5wbmdcIjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhdDtcbiIsImNsYXNzIEZvb2Qge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBpbWdfdXJsKSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy5mb29kX3ggPSB4O1xuICAgIHRoaXMuZm9vZF95ID0geTtcbiAgICB0aGlzLmZvb2RfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmZvb2RfaW1hZ2Uuc3JjID0gaW1nX3VybDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb2Q7XG4iLCJjb25zdCBDYXQgPSByZXF1aXJlKFwiLi9jYXQuanNcIik7XG5jb25zdCBXYWxsID0gcmVxdWlyZShcIi4vd2FsbC5qc1wiKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKFwiLi9mb29kLmpzXCIpO1xuY29uc3QgUGxhbnQgPSByZXF1aXJlKFwiLi9wbGFudC5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICBsZXQgeSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICBsZXQgeGZyYW1lSWR4ID0gMDtcbiAgbGV0IHlmcmFtZUlkeCA9IDA7XG4gIGxldCBsaWZlID0gMztcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGxldmVsID0gMTtcbiAgbGV0IGZvb2RzO1xuICBsZXQgd2luID0gZmFsc2U7XG4gIGxldCBsb3NlID0gZmFsc2U7XG4gIGxldCBkb25vdGVhdGFycjtcbiAgbGV0IG1pc3MgPSBmYWxzZTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtcGFnZVwiKTtcbiAgbGV0IGdhbWVJbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbnRyb1wiKTtcbiAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgbGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcbiAgbGV0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG4gIGxldCBwYXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9vZF91cmxzID0gW1xuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYXBwbGUucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iYW5hbmEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iZWVyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYnVyZ2VyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY2FrZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2NoZXJyeS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2Nvcm4ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZGFuZ28ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9kb251dC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2ZyaWVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZ3JhcGVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvbGVtb24ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9tZWF0LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGVhY2gucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9wZWFyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGllLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGlzaGEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9yYW1lbi5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zcGFnaGV0dGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3VzaGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zd2VldF9wb3RhdG8ucG5nXCJcbiAgXTtcbiAgY29uc3QgcGxhbnRVcmxzID0gW1xuICAgIC8vIFwiLi9zcmMvaW1nL3BsYW50L2NhY3R1cy5wbmdcIixcbiAgICAvLyBcIi4vc3JjL2ltZy9wbGFudC9oZXJiLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL3BsYW50L21hbmdvdHJlZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9wbGFudC9wYWxtLnBuZ1wiXG4gICAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvc3VuZmxvd2VyLnBuZ1wiXG4gICAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvdHVsaXAucG5nXCJcbiAgXTtcbiAgbGV0IGZvb2RQb3M7XG4gIGxldCBmb29kc19pZHggPSBuZXcgU2V0KCk7XG4gIGxldCBkb25vdGVhdDtcbiAgY29uc3QgY2F0ID0gbmV3IENhdChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjb25zdCB3YWxsID0gbmV3IFdhbGwoKTtcblxuICBsZXQgcG9zaXRpb25TZXQgPSBbXG4gICAgW1xuICAgICAgW2NhdC54IC0gMjgsIGNhdC55IC0gMjVdLFxuICAgICAgW2NhdC54ICsgNTUsIGNhdC55ICsgMzBdLFxuICAgICAgW2NhdC54IC0gNTAsIGNhdC55ICsgNjBdLFxuICAgICAgW2NhdC54ICsgMzAsIGNhdC55IC0gNjVdLFxuICAgICAgW2NhdC54ICsgNjAsIGNhdC55IC0gNDBdLFxuICAgICAgW2NhdC54ICsgMTUsIGNhdC55ICsgNzVdLFxuICAgICAgW2NhdC54IC0gNzUsIGNhdC55ICsgMl0sXG4gICAgICBbY2F0LnggLSAzNywgY2F0LnkgLSA3NV0sXG4gICAgICBbY2F0LnggKyA5NSwgY2F0LnkgLSAzMF0sXG4gICAgICBbY2F0LnggLSAxMDAsIGNhdC55IC0gODBdLFxuICAgICAgW2NhdC54ICsgMTAwLCBjYXQueSArIDcwXSxcbiAgICAgIFtjYXQueCArIDgwLCBjYXQueSAtIDEwMF0sXG4gICAgICBbY2F0LnggLSA1MCwgY2F0LnkgKyAxMDBdLFxuICAgICAgW2NhdC54IC0gMTEwLCBjYXQueSArIDUwXSxcbiAgICAgIFtjYXQueCAtIDEwLCBjYXQueSAtIDExMF1cbiAgICBdLFxuXG4gICAgW1xuICAgICAgW2NhdC54IC0gNDgsIGNhdC55IC0gNTVdLFxuICAgICAgW2NhdC54ICsgNTcsIGNhdC55ICsgMjBdLFxuICAgICAgW2NhdC54IC0gMzAsIGNhdC55ICsgNjBdLFxuICAgICAgW2NhdC54ICsgMzUsIGNhdC55IC0gMzVdLFxuICAgICAgW2NhdC54IC0gMTQsIGNhdC55IC0gMzBdLFxuICAgICAgW2NhdC54ICsgMTksIGNhdC55ICsgNTVdLFxuICAgICAgW2NhdC54IC0gNTAsIGNhdC55ICsgMl0sXG4gICAgICBbY2F0LnggKyA2NywgY2F0LnkgLSA3NV0sXG4gICAgICBbY2F0LnggKyA5NSwgY2F0LnkgLSAzMF0sXG4gICAgICBbY2F0LnggLSAxMDAsIGNhdC55IC0gODBdLFxuICAgICAgW2NhdC54ICsgNzAsIGNhdC55ICsgODBdLFxuICAgICAgW2NhdC54ICsgMTAsIGNhdC55IC0gOTBdLFxuICAgICAgW2NhdC54IC0gODAsIGNhdC55ICsgMzBdLFxuICAgICAgW2NhdC54IC0gMTAsIGNhdC55ICsgMTAwXSxcbiAgICAgIFtjYXQueCArIDExMCwgY2F0LnkgKyAzMF1cbiAgICBdLFxuICAgIFtcbiAgICAgIFtjYXQueCAtIDgsIGNhdC55IC0gMzVdLFxuICAgICAgW2NhdC54ICsgNTcsIGNhdC55ICsgMjBdLFxuICAgICAgW2NhdC54IC0gMzAsIGNhdC55ICsgNjBdLFxuICAgICAgW2NhdC54ICsgMzUsIGNhdC55IC0gNDBdLFxuICAgICAgW2NhdC54IC0gNDQsIGNhdC55ICsgMThdLFxuICAgICAgW2NhdC54ICsgMTksIGNhdC55ICsgNjVdLFxuICAgICAgW2NhdC54IC0gODAsIGNhdC55ICsgNDVdLFxuICAgICAgW2NhdC54ICsgNjcsIGNhdC55IC0gOTBdLFxuICAgICAgW2NhdC54ICsgOTUsIGNhdC55IC0gMzBdLFxuICAgICAgW2NhdC54IC0gNjAsIGNhdC55IC0gOTBdLFxuICAgICAgW2NhdC54ICsgNzMsIGNhdC55ICsgOTBdLFxuICAgICAgW2NhdC54IC0gNDAsIGNhdC55IC0gNjBdLFxuICAgICAgW2NhdC54IC0gNzAsIGNhdC55ICsgODVdLFxuICAgICAgW2NhdC54IC0gMTAsIGNhdC55ICsgMTAwXSxcbiAgICAgIFtjYXQueCArIDExMCwgY2F0LnkgKyAzMF1cbiAgICBdXG4gIF07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHBsYW50SW5pdChwbGFudFVybHMpIHtcbiAgICBsZXQgcGxhbnRBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYW50VXJscy5sZW5ndGg7IGkrKykge1xuICAgICAgcGxhbnRBcnIucHVzaChuZXcgUGxhbnQocGxhbnRVcmxzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBwbGFudEFycjtcbiAgfVxuXG4gIC8vcmFuZG9tbHkgcGljayB4IGZvb2QuLi5cbiAgZnVuY3Rpb24gcmFuZG9tX2Zvb2RfaWR4KGxldmVsKSB7XG4gICAgbGV0IGlkeCA9IDI7XG5cbiAgICBsZXQgZm9vZENvdW50O1xuXG4gICAgaWYgKGxldmVsIDwgNCkge1xuICAgICAgZm9vZENvdW50ID0gODtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9vZENvdW50ICs9IDY7XG4gICAgfVxuXG4gICAgd2hpbGUgKGZvb2RzX2lkeC5zaXplIDw9IGZvb2RDb3VudCkge1xuICAgICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9vZF91cmxzLmxlbmd0aCk7XG4gICAgICBmb29kc19pZHguYWRkKGlkeCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZm9vZF9pbml0KGxldmVsKSB7XG4gICAgZm9vZHMgPSB7fTtcbiAgICByYW5kb21fZm9vZF9pZHgobGV2ZWwpO1xuICAgIGxldCByYW5kQXJyID0gcG9zaXRpb25TZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpb25TZXQubGVuZ3RoKV07XG4gICAgbGV0IGogPSAwO1xuICAgIGZvb2RzX2lkeC5mb3JFYWNoKGkgPT4ge1xuICAgICAgbGV0IG5vdF9pbXBvcnRhbnQgPSBmb29kX3VybHNbaV0uc3BsaXQoXCIvXCIpO1xuICAgICAgbGV0IGZvb2Rfa2V5ID0gbm90X2ltcG9ydGFudFtub3RfaW1wb3J0YW50Lmxlbmd0aCAtIDFdLnNsaWNlKDAsIC00KTtcblxuICAgICAgbGV0IHBvc19hcnIgPSByYW5kQXJyW2pdO1xuICAgICAgZm9vZHNbZm9vZF9rZXldID0gbmV3IEZvb2QocG9zX2FyclswXSwgcG9zX2FyclsxXSwgZm9vZF91cmxzW2ldKTtcbiAgICAgIGorKztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVxU2V0KGFzLCBicykge1xuICAgIGlmIChhcy5zaXplICE9PSBicy5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgYSBvZiBhcykgaWYgKCFicy5oYXMoYSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdfZm9vZCgpIHtcbiAgICBsZXQgZm9vZF9rZXlzID0gT2JqZWN0LmtleXMoZm9vZHMpO1xuICAgIGxldCBlYWNoRm9vZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2Rfa2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWFjaEZvb2QgPSBmb29kc1tmb29kX2tleXNbaV1dO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgZWFjaEZvb2QuZm9vZF9pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgZWFjaEZvb2Qud2lkdGgsXG4gICAgICAgIGVhY2hGb29kLmhlaWdodCxcbiAgICAgICAgZWFjaEZvb2QuZm9vZF94LFxuICAgICAgICBlYWNoRm9vZC5mb29kX3ksXG4gICAgICAgIGVhY2hGb29kLndpZHRoICogMC44LFxuICAgICAgICBlYWNoRm9vZC5oZWlnaHQgKiAwLjhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDgpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMjtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDE7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDIpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMztcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSAyKSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd19jYXQoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGNhdC5jYXRfaW1hZ2UsXG4gICAgICB4ZnJhbWVJZHggKiBjYXQud2lkdGgsXG4gICAgICB5ZnJhbWVJZHggKiBjYXQuaGVpZ2h0ICsgMSxcbiAgICAgIGNhdC53aWR0aCxcbiAgICAgIGNhdC5oZWlnaHQsXG4gICAgICBjYXQueCxcbiAgICAgIGNhdC55LFxuICAgICAgY2F0LndpZHRoICogMS4yLFxuICAgICAgY2F0LmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKGxpZmUpIHtcbiAgICBsZXQgZm9vZHg7XG4gICAgbGV0IGZvb2R5O1xuICAgIGxldCBlYWNoRm9vZDtcbiAgICBsZXQgZm9vZF9rZXlzID0gT2JqZWN0LmtleXMoZm9vZHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZF9rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlYWNoRm9vZCA9IGZvb2RzW2Zvb2Rfa2V5c1tpXV07XG5cbiAgICAgIGZvb2R4ID0gZWFjaEZvb2QuZm9vZF94O1xuXG4gICAgICBmb29keSA9IGVhY2hGb29kLmZvb2RfeTtcbiAgICAgIGlmIChcbiAgICAgICAgZm9vZHggLSAyMCA8PSBjYXQueCArIDMgJiZcbiAgICAgICAgZm9vZHggKyBlYWNoRm9vZC53aWR0aCA+PSBjYXQueCArIGNhdC53aWR0aCAtIDMgJiZcbiAgICAgICAgZm9vZHkgLSAyMCA8PSBjYXQueSArIDMgJiZcbiAgICAgICAgZm9vZHkgKyBlYWNoRm9vZC5oZWlnaHQgPj0gY2F0LnkgKyBjYXQuaGVpZ2h0IC0gM1xuICAgICAgKSB7XG4gICAgICAgIGRvbm90ZWF0LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgaWYgKGZvb2Rfa2V5c1tpXSA9PT0gZSkge1xuICAgICAgICAgICAgbWlzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIGZvb2RzW2Zvb2Rfa2V5c1tpXV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9jcmVhdGUgZm9vZCBsaXN0IHRoYXQgeW91IHNob3VsZCBub3QgZWF0XG4gIGZ1bmN0aW9uIGZvb2RfdG9fYXZvaWQobGV2ZWwpIHtcbiAgICBkb25vdGVhdGFyciA9IFtdO1xuICAgIGRvbm90ZWF0ID0gbmV3IFNldCgpO1xuICAgIHdoaWxlIChkb25vdGVhdC5zaXplIDwgbGV2ZWwpIHtcbiAgICAgIGRvbm90ZWF0LmFkZChcbiAgICAgICAgT2JqZWN0LmtleXMoZm9vZHMpW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE9iamVjdC5rZXlzKGZvb2RzKS5sZW5ndGgpXG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfVxuICAgIGRvbm90ZWF0LmZvckVhY2goZSA9PiB7XG4gICAgICBkb25vdGVhdGFyci5wdXNoKGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0JhY2tncm91bmQoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3VGV4dChsZXZlbCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggSGVsdmV0aWNhLCBzYW5zXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LmZpbGxUZXh0KGAqIExldmVsICR7bGV2ZWx9ICpgLCBjYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIGN0eC5maWxsVGV4dChgRG8gbm90IGVhdGAsIGNhbnZhcy53aWR0aCAvIDIsIDE1MCk7XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmUoZSkge1xuICAgIGRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgZHJhd1RleHQobGV2ZWwpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGZvb2RzW2VdLmZvb2RfaW1hZ2UsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGZvb2RzW2VdLndpZHRoLFxuICAgICAgZm9vZHNbZV0uaGVpZ2h0LFxuICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGZvb2RzW2VdLndpZHRoLFxuICAgICAgY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICBmb29kc1tlXS53aWR0aCAqIDEuMixcbiAgICAgIGZvb2RzW2VdLmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3KGxpZmUpIHtcbiAgICAvLyB3aGlsZSAoZG9ub3RlYXQgPT09IG5ldyBTZXQoT2JqZWN0LmtleXMoZm9vZHMpKSkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJla2VrZWtlP1wiKTtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICBpZiAoZXFTZXQoZG9ub3RlYXQsIG5ldyBTZXQoT2JqZWN0LmtleXMoZm9vZHMpKSkpIHtcbiAgICAgIHBhc3MgPSB0cnVlO1xuICAgIH1cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZjY1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIC8vZHJhdyB3YWxsc1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY2FudmFzLndpZHRoIC8gd2FsbC53aWR0aCA+IGkpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgaSAqIHdhbGwud2lkdGgsXG4gICAgICAgIDAsXG4gICAgICAgIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgd2FsbC53YWxsSW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwuaGVpZ2h0LFxuICAgICAgICBpICogd2FsbC53aWR0aCxcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIHdhbGwuaGVpZ2h0LFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgbGV0IGogPSAxO1xuICAgIGxldCBwbGFudEFyciA9IHBsYW50SW5pdChwbGFudFVybHMpO1xuICAgIHdoaWxlICgoY2FudmFzLmhlaWdodCAtIDIgKiB3YWxsLndpZHRoKSAvIHdhbGwud2lkdGggPj0gaikge1xuICAgICAgbGV0IGlkeCA9IGogJSBwbGFudEFyci5sZW5ndGg7XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICBwbGFudEFycltpZHhdLnBsYW50SW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHBsYW50QXJyW2lkeF0ud2lkdGgsXG4gICAgICAgIHBsYW50QXJyW2lkeF0uaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICBwbGFudEFycltpZHhdLmhlaWdodCAqIGosXG4gICAgICAgIHBsYW50QXJyW2lkeF0ud2lkdGggKiAwLjcsXG4gICAgICAgIHBsYW50QXJyW2lkeF0uaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgcGxhbnRBcnJbaWR4XS5wbGFudEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBwbGFudEFycltpZHhdLndpZHRoLFxuICAgICAgICBwbGFudEFycltpZHhdLmhlaWdodCxcbiAgICAgICAgY2FudmFzLndpZHRoIC0gcGxhbnRBcnJbaWR4XS53aWR0aCxcbiAgICAgICAgcGxhbnRBcnJbaWR4XS5oZWlnaHQgKiBqLFxuICAgICAgICBwbGFudEFycltpZHhdLndpZHRoICogMC43LFxuICAgICAgICBwbGFudEFycltpZHhdLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGorKztcbiAgICB9XG5cbiAgICBkcmF3X2Zvb2QoKTtcbiAgICBkcmF3X2NhdCgpO1xuXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCAmJiBjYXQueCA8IGNhbnZhcy53aWR0aCAtIGNhdC53aWR0aCAtIHdhbGwud2lkdGgpIHtcbiAgICAgIGNhdC54ICs9IDM7XG4gICAgfSBlbHNlIGlmIChsZWZ0UHJlc3NlZCAmJiBjYXQueCA+IHdhbGwud2lkdGgpIHtcbiAgICAgIGNhdC54IC09IDM7XG4gICAgfSBlbHNlIGlmICh1cFByZXNzZWQgJiYgY2F0LnkgPiB3YWxsLndpZHRoIC0gOSkge1xuICAgICAgY2F0LnkgLT0gMztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZG93blByZXNzZWQgJiZcbiAgICAgIGNhdC55IDwgY2FudmFzLmhlaWdodCAtIGNhdC53aWR0aCAtIHdhbGwud2lkdGggLSA1XG4gICAgKSB7XG4gICAgICBjYXQueSArPSAzO1xuICAgIH1cbiAgICBkZWxldGVJdGVtKGxpZmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZShsZXZlbCwgbGlmZSkge1xuICAgIGlmIChsaWZlID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhdC54ID0gKGNhbnZhcy53aWR0aCAtIGNhdC53aWR0aCkgLyAyO1xuICAgIGNhdC55ID0gKGNhbnZhcy5oZWlnaHQgLSBjYXQuaGVpZ2h0KSAvIDI7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgZm9vZF9pbml0KGxldmVsKTtcbiAgICAgIGZvb2RfdG9fYXZvaWQobGV2ZWwgKyAxKTtcblxuICAgICAgbGV0IGJlZm9yZVNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGJlZm9yZShkb25vdGVhdGFyci5zaGlmdCgpKTtcbiAgICAgICAgaWYgKCFkb25vdGVhdGFyci5sZW5ndGgpIGNsZWFySW50ZXJ2YWwoYmVmb3JlU2V0SW50ZXJ2YWwpO1xuICAgICAgfSwgNzAwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBkcmF3Q2F0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFtaXNzICYmIGxpZmUgPiAwKSB7XG4gICAgICAgICAgICAvL25vcm1hbCBwbGF5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaWZlKTtcbiAgICAgICAgICAgIGRyYXcobGlmZSk7XG4gICAgICAgICAgICBpZiAocGFzcykge1xuICAgICAgICAgICAgICBwYXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgIGxldmVsICs9IDE7XG4gICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChkcmF3Q2F0KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWlzcyAmJiBsaWZlID4gMCkge1xuICAgICAgICAgICAgLy9taXNzXG4gICAgICAgICAgICBsaWZlIC09IDE7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2xvc3RcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCItLVwiKSk7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZT1UgbG9zZS4uLlwiKTtcbiAgICAgICAgICAgIC8vIGxpZmUgPSAzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSkudGhlbigoKSA9PiBnYW1lKGxldmVsLCBsaWZlKSwgZXJyID0+IGNvbnNvbGUubG9nKFwibm9wZVwiKSk7XG4gIH1cblxuICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBnYW1lSW50cm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIC8vZ2FtZSBzdGFydCBoZXJlIG1heWJlLi4uXG4gICAgZ2FtZShsZXZlbCwgbGlmZSk7XG4gIH0pO1xuXG4gIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9KTtcbiAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcbiIsImNsYXNzIFBsYW50IHtcbiAgY29uc3RydWN0b3IocGxhbnRJbWdVcmwpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLnBsYW50SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYW50SW1hZ2Uuc3JjID0gcGxhbnRJbWdVcmw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGFudDtcbiIsImNsYXNzIFdhbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLndhbGxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMud2FsbEltYWdlLnNyYyA9IFwiLi9zcmMvaW1nL2ZlbmNlLnBuZ1wiO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=