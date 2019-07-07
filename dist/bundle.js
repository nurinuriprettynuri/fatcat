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

/***/ "./src/angrycat.js":
/*!*************************!*\
  !*** ./src/angrycat.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class AngryCat {
  constructor() {
    this.width = 480;
    this.height = 384;
    this.angryCatImage = new Image();
    this.angryCatImage.src = "./src/img/angrycat/angrycat.png";
  }
}

module.exports = AngryCat;


/***/ }),

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

/***/ "./src/foodUrls.js":
/*!*************************!*\
  !*** ./src/foodUrls.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = food_urls;


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
const food_urls = __webpack_require__(/*! ./foodUrls.js */ "./src/foodUrls.js");
const AngryCat = __webpack_require__(/*! ./angrycat.js */ "./src/angrycat.js");

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

  const plantUrls = [
    // "./src/img/plant/cactus.png",
    // "./src/img/plant/herb.png",
    "./src/img/plant/mangotree.png",
    "./src/img/plant/palm.png"
    // "./src/img/plant/sunflower.png"
    // "./src/img/plant/tulip.png"
  ];

  // const angryCats = [
  //   "./src/img/angrycat/angrycat.png",
  //   "./src/img/angrycat/angrycat2.png",
  //   "./src/img/angrycat/angrycat3.png"
  // ];

  let foodPos;
  let foods_idx = new Set();
  let donoteat;
  const cat = new Cat(canvas.width, canvas.height);
  const wall = new Wall();
  const angryCat = new AngryCat();

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
    // if (life === 0) {
    //   console.log("??");
    //   return;
    // }
    cat.x = (canvas.width - cat.width) / 2;
    cat.y = (canvas.height - cat.height) / 2;
    return new Promise(function(resolve, reject) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      food_init(level);
      food_to_avoid(level + 1);

      if (life > 0) {
        if (life >= 3) {
          let beforeSetInterval = setInterval(function() {
            before(donoteatarr.shift());
            if (!donoteatarr.length) clearInterval(beforeSetInterval);
          }, 700);
        } else {
          setTimeout(() => {
            let beforeSetInterval = setInterval(function() {
              before(donoteatarr.shift());
              if (!donoteatarr.length) clearInterval(beforeSetInterval);
            }, 700);
          }, 900);
        }
      }
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
            //lost page (angry cat)
            console.log("1");

            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            clearInterval(drawCat);
            let test = setInterval(() => {
              ctx.drawImage(
                angryCat.angryCatImage,
                0,
                0,
                angryCat.width,
                angryCat.height,
                0,
                0,
                angryCat.width,
                angryCat.height
              );
            }, 12);
            setTimeout(() => {
              clearInterval(test);
            }, 400);
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
    gameIntro.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuZ3J5Y2F0LmpzIiwid2VicGFjazovLy8uL3NyYy9jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvb2RVcmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbGZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBBbmdyeUNhdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud2lkdGggPSA0ODA7XG4gICAgdGhpcy5oZWlnaHQgPSAzODQ7XG4gICAgdGhpcy5hbmdyeUNhdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5hbmdyeUNhdEltYWdlLnNyYyA9IFwiLi9zcmMvaW1nL2FuZ3J5Y2F0L2FuZ3J5Y2F0LnBuZ1wiO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQW5ncnlDYXQ7XG4iLCJjbGFzcyBDYXQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy5tYWluV2lkdGggPSAxMjg7XG4gICAgdGhpcy5tYWluSGVpZ2h0ID0gMTI4O1xuICAgIHRoaXMueCA9ICh4IC0gdGhpcy53aWR0aCkgLyAyO1xuICAgIHRoaXMueSA9ICh5IC0gdGhpcy5oZWlnaHQpIC8gMjtcbiAgICB0aGlzLm1haW5YID0gKHggLSB0aGlzLm1haW5XaWR0aCkgLyAyO1xuICAgIHRoaXMubWFpblkgPSAoeSAtIHRoaXMubWFpbkhlaWdodCkgLyAyO1xuICAgIHRoaXMuY2F0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jYXRNYWlucGFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY2F0X2ltYWdlLnNyYyA9IFwiLi9zcmMvaW1nL2ZhdGNhdC5wbmdcIjtcbiAgICB0aGlzLmNhdE1haW5wYWdlLnNyYyA9IFwiLi9zcmMvaW1nL21haW4tY2F0LnBuZ1wiO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2F0O1xuIiwiY2xhc3MgRm9vZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGltZ191cmwpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLmZvb2RfeCA9IHg7XG4gICAgdGhpcy5mb29kX3kgPSB5O1xuICAgIHRoaXMuZm9vZF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZm9vZF9pbWFnZS5zcmMgPSBpbWdfdXJsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vZDtcbiIsImNvbnN0IGZvb2RfdXJscyA9IFtcbiAgXCIuL3NyYy9pbWcvZm9vZC9hcHBsZS5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9iYW5hbmEucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2QvYmVlci5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9idXJnZXIucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2QvY2FrZS5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9jaGVycnkucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2QvY29ybi5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2QvY3VzdGFyZC5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9kYW5nby5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9kb251dC5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9mcmllcy5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9ncmFwZXMucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL2xlbW9uLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL21lYXQucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL3BlYWNoLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL3BlYXIucG5nXCIsXG4gIFwiLi9zcmMvaW1nL2Zvb2QvcGllLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL3BpbmVhcHBsZS5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9waXNoYS5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9yYW1lbi5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9zaGF2ZWRfaWNlLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL3NwYWdoZXR0aS5wbmdcIixcbiAgXCIuL3NyYy9pbWcvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL3N1c2hpLnBuZ1wiLFxuICBcIi4vc3JjL2ltZy9mb29kL3N3ZWV0X3BvdGF0by5wbmdcIlxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmb29kX3VybHM7XG4iLCJjb25zdCBDYXQgPSByZXF1aXJlKFwiLi9jYXQuanNcIik7XG5jb25zdCBXYWxsID0gcmVxdWlyZShcIi4vd2FsbC5qc1wiKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKFwiLi9mb29kLmpzXCIpO1xuY29uc3QgUGxhbnQgPSByZXF1aXJlKFwiLi9wbGFudC5qc1wiKTtcbmNvbnN0IGZvb2RfdXJscyA9IHJlcXVpcmUoXCIuL2Zvb2RVcmxzLmpzXCIpO1xuY29uc3QgQW5ncnlDYXQgPSByZXF1aXJlKFwiLi9hbmdyeWNhdC5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICBsZXQgeSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICBsZXQgeGZyYW1lSWR4ID0gMDtcbiAgbGV0IHlmcmFtZUlkeCA9IDA7XG4gIGxldCBsaWZlID0gMztcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGxldmVsID0gMTtcbiAgbGV0IGZvb2RzO1xuICBsZXQgd2luID0gZmFsc2U7XG4gIGxldCBsb3NlID0gZmFsc2U7XG4gIGxldCBkb25vdGVhdGFycjtcbiAgbGV0IG1pc3MgPSBmYWxzZTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtcGFnZVwiKTtcbiAgbGV0IGdhbWVJbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbnRyb1wiKTtcbiAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgbGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcbiAgbGV0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG4gIGxldCBwYXNzID0gZmFsc2U7XG5cbiAgY29uc3QgcGxhbnRVcmxzID0gW1xuICAgIC8vIFwiLi9zcmMvaW1nL3BsYW50L2NhY3R1cy5wbmdcIixcbiAgICAvLyBcIi4vc3JjL2ltZy9wbGFudC9oZXJiLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL3BsYW50L21hbmdvdHJlZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9wbGFudC9wYWxtLnBuZ1wiXG4gICAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvc3VuZmxvd2VyLnBuZ1wiXG4gICAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvdHVsaXAucG5nXCJcbiAgXTtcblxuICAvLyBjb25zdCBhbmdyeUNhdHMgPSBbXG4gIC8vICAgXCIuL3NyYy9pbWcvYW5ncnljYXQvYW5ncnljYXQucG5nXCIsXG4gIC8vICAgXCIuL3NyYy9pbWcvYW5ncnljYXQvYW5ncnljYXQyLnBuZ1wiLFxuICAvLyAgIFwiLi9zcmMvaW1nL2FuZ3J5Y2F0L2FuZ3J5Y2F0My5wbmdcIlxuICAvLyBdO1xuXG4gIGxldCBmb29kUG9zO1xuICBsZXQgZm9vZHNfaWR4ID0gbmV3IFNldCgpO1xuICBsZXQgZG9ub3RlYXQ7XG4gIGNvbnN0IGNhdCA9IG5ldyBDYXQoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKCk7XG4gIGNvbnN0IGFuZ3J5Q2F0ID0gbmV3IEFuZ3J5Q2F0KCk7XG5cbiAgbGV0IHBvc2l0aW9uU2V0ID0gW1xuICAgIFtcbiAgICAgIFtjYXQueCAtIDI4LCBjYXQueSAtIDI1XSxcbiAgICAgIFtjYXQueCArIDU1LCBjYXQueSArIDMwXSxcbiAgICAgIFtjYXQueCAtIDUwLCBjYXQueSArIDYwXSxcbiAgICAgIFtjYXQueCArIDMwLCBjYXQueSAtIDY1XSxcbiAgICAgIFtjYXQueCArIDYwLCBjYXQueSAtIDQwXSxcbiAgICAgIFtjYXQueCArIDE1LCBjYXQueSArIDc1XSxcbiAgICAgIFtjYXQueCAtIDc1LCBjYXQueSArIDJdLFxuICAgICAgW2NhdC54IC0gMzcsIGNhdC55IC0gNzVdLFxuICAgICAgW2NhdC54ICsgOTUsIGNhdC55IC0gMzBdLFxuICAgICAgW2NhdC54IC0gMTAwLCBjYXQueSAtIDgwXSxcbiAgICAgIFtjYXQueCArIDEwMCwgY2F0LnkgKyA3MF0sXG4gICAgICBbY2F0LnggKyA4MCwgY2F0LnkgLSAxMDBdLFxuICAgICAgW2NhdC54IC0gNTAsIGNhdC55ICsgMTAwXSxcbiAgICAgIFtjYXQueCAtIDExMCwgY2F0LnkgKyA1MF0sXG4gICAgICBbY2F0LnggLSAxMCwgY2F0LnkgLSAxMTBdXG4gICAgXSxcblxuICAgIFtcbiAgICAgIFtjYXQueCAtIDQ4LCBjYXQueSAtIDU1XSxcbiAgICAgIFtjYXQueCArIDU3LCBjYXQueSArIDIwXSxcbiAgICAgIFtjYXQueCAtIDMwLCBjYXQueSArIDYwXSxcbiAgICAgIFtjYXQueCArIDM1LCBjYXQueSAtIDM1XSxcbiAgICAgIFtjYXQueCAtIDE0LCBjYXQueSAtIDMwXSxcbiAgICAgIFtjYXQueCArIDE5LCBjYXQueSArIDU1XSxcbiAgICAgIFtjYXQueCAtIDUwLCBjYXQueSArIDJdLFxuICAgICAgW2NhdC54ICsgNjcsIGNhdC55IC0gNzVdLFxuICAgICAgW2NhdC54ICsgOTUsIGNhdC55IC0gMzBdLFxuICAgICAgW2NhdC54IC0gMTAwLCBjYXQueSAtIDgwXSxcbiAgICAgIFtjYXQueCArIDcwLCBjYXQueSArIDgwXSxcbiAgICAgIFtjYXQueCArIDEwLCBjYXQueSAtIDkwXSxcbiAgICAgIFtjYXQueCAtIDgwLCBjYXQueSArIDMwXSxcbiAgICAgIFtjYXQueCAtIDEwLCBjYXQueSArIDEwMF0sXG4gICAgICBbY2F0LnggKyAxMTAsIGNhdC55ICsgMzBdXG4gICAgXSxcbiAgICBbXG4gICAgICBbY2F0LnggLSA4LCBjYXQueSAtIDM1XSxcbiAgICAgIFtjYXQueCArIDU3LCBjYXQueSArIDIwXSxcbiAgICAgIFtjYXQueCAtIDMwLCBjYXQueSArIDYwXSxcbiAgICAgIFtjYXQueCArIDM1LCBjYXQueSAtIDQwXSxcbiAgICAgIFtjYXQueCAtIDQ0LCBjYXQueSArIDE4XSxcbiAgICAgIFtjYXQueCArIDE5LCBjYXQueSArIDY1XSxcbiAgICAgIFtjYXQueCAtIDgwLCBjYXQueSArIDQ1XSxcbiAgICAgIFtjYXQueCArIDY3LCBjYXQueSAtIDkwXSxcbiAgICAgIFtjYXQueCArIDk1LCBjYXQueSAtIDMwXSxcbiAgICAgIFtjYXQueCAtIDYwLCBjYXQueSAtIDkwXSxcbiAgICAgIFtjYXQueCArIDczLCBjYXQueSArIDkwXSxcbiAgICAgIFtjYXQueCAtIDQwLCBjYXQueSAtIDYwXSxcbiAgICAgIFtjYXQueCAtIDcwLCBjYXQueSArIDg1XSxcbiAgICAgIFtjYXQueCAtIDEwLCBjYXQueSArIDEwMF0sXG4gICAgICBbY2F0LnggKyAxMTAsIGNhdC55ICsgMzBdXG4gICAgXVxuICBdO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBmdW5jdGlvbiBwbGFudEluaXQocGxhbnRVcmxzKSB7XG4gICAgbGV0IHBsYW50QXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFudFVybHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYW50QXJyLnB1c2gobmV3IFBsYW50KHBsYW50VXJsc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcGxhbnRBcnI7XG4gIH1cblxuICAvL3JhbmRvbWx5IHBpY2sgeCBmb29kLi4uXG4gIGZ1bmN0aW9uIHJhbmRvbV9mb29kX2lkeChsZXZlbCkge1xuICAgIGxldCBpZHggPSAyO1xuXG4gICAgbGV0IGZvb2RDb3VudDtcblxuICAgIGlmIChsZXZlbCA8IDQpIHtcbiAgICAgIGZvb2RDb3VudCA9IDg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvb2RDb3VudCArPSA2O1xuICAgIH1cblxuICAgIHdoaWxlIChmb29kc19pZHguc2l6ZSA8PSBmb29kQ291bnQpIHtcbiAgICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZvb2RfdXJscy5sZW5ndGgpO1xuICAgICAgZm9vZHNfaWR4LmFkZChpZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZvb2RfaW5pdChsZXZlbCkge1xuICAgIGZvb2RzID0ge307XG4gICAgcmFuZG9tX2Zvb2RfaWR4KGxldmVsKTtcbiAgICBsZXQgcmFuZEFyciA9IHBvc2l0aW9uU2V0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc2l0aW9uU2V0Lmxlbmd0aCldO1xuICAgIGxldCBqID0gMDtcbiAgICBmb29kc19pZHguZm9yRWFjaChpID0+IHtcbiAgICAgIGxldCBub3RfaW1wb3J0YW50ID0gZm9vZF91cmxzW2ldLnNwbGl0KFwiL1wiKTtcbiAgICAgIGxldCBmb29kX2tleSA9IG5vdF9pbXBvcnRhbnRbbm90X2ltcG9ydGFudC5sZW5ndGggLSAxXS5zbGljZSgwLCAtNCk7XG5cbiAgICAgIGxldCBwb3NfYXJyID0gcmFuZEFycltqXTtcbiAgICAgIGZvb2RzW2Zvb2Rfa2V5XSA9IG5ldyBGb29kKHBvc19hcnJbMF0sIHBvc19hcnJbMV0sIGZvb2RfdXJsc1tpXSk7XG4gICAgICBqKys7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlcVNldChhcywgYnMpIHtcbiAgICBpZiAoYXMuc2l6ZSAhPT0gYnMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIGEgb2YgYXMpIGlmICghYnMuaGFzKGEpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3X2Zvb2QoKSB7XG4gICAgbGV0IGZvb2Rfa2V5cyA9IE9iamVjdC5rZXlzKGZvb2RzKTtcbiAgICBsZXQgZWFjaEZvb2Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kX2tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVhY2hGb29kID0gZm9vZHNbZm9vZF9rZXlzW2ldXTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGVhY2hGb29kLmZvb2RfaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGVhY2hGb29kLndpZHRoLFxuICAgICAgICBlYWNoRm9vZC5oZWlnaHQsXG4gICAgICAgIGVhY2hGb29kLmZvb2RfeCxcbiAgICAgICAgZWFjaEZvb2QuZm9vZF95LFxuICAgICAgICBlYWNoRm9vZC53aWR0aCAqIDAuOCxcbiAgICAgICAgZWFjaEZvb2QuaGVpZ2h0ICogMC44XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDI7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzcpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh4ZnJhbWVJZHggPj0gOCkge1xuICAgICAgICB4ZnJhbWVJZHggPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB5ZnJhbWVJZHggPSAxO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7XG4gICAgICB1cFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSAyKSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDM7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh4ZnJhbWVJZHggPj0gMikge1xuICAgICAgICB4ZnJhbWVJZHggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB5ZnJhbWVJZHggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAzOSkge1xuICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzcpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDQwKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdfY2F0KCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBjYXQuY2F0X2ltYWdlLFxuICAgICAgeGZyYW1lSWR4ICogY2F0LndpZHRoLFxuICAgICAgeWZyYW1lSWR4ICogY2F0LmhlaWdodCArIDEsXG4gICAgICBjYXQud2lkdGgsXG4gICAgICBjYXQuaGVpZ2h0LFxuICAgICAgY2F0LngsXG4gICAgICBjYXQueSxcbiAgICAgIGNhdC53aWR0aCAqIDEuMixcbiAgICAgIGNhdC5oZWlnaHQgKiAxLjJcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShsaWZlKSB7XG4gICAgbGV0IGZvb2R4O1xuICAgIGxldCBmb29keTtcbiAgICBsZXQgZWFjaEZvb2Q7XG4gICAgbGV0IGZvb2Rfa2V5cyA9IE9iamVjdC5rZXlzKGZvb2RzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2Rfa2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWFjaEZvb2QgPSBmb29kc1tmb29kX2tleXNbaV1dO1xuXG4gICAgICBmb29keCA9IGVhY2hGb29kLmZvb2RfeDtcblxuICAgICAgZm9vZHkgPSBlYWNoRm9vZC5mb29kX3k7XG4gICAgICBpZiAoXG4gICAgICAgIGZvb2R4IC0gMjAgPD0gY2F0LnggKyAzICYmXG4gICAgICAgIGZvb2R4ICsgZWFjaEZvb2Qud2lkdGggPj0gY2F0LnggKyBjYXQud2lkdGggLSAzICYmXG4gICAgICAgIGZvb2R5IC0gMjAgPD0gY2F0LnkgKyAzICYmXG4gICAgICAgIGZvb2R5ICsgZWFjaEZvb2QuaGVpZ2h0ID49IGNhdC55ICsgY2F0LmhlaWdodCAtIDNcbiAgICAgICkge1xuICAgICAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgIGlmIChmb29kX2tleXNbaV0gPT09IGUpIHtcbiAgICAgICAgICAgIG1pc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBmb29kc1tmb29kX2tleXNbaV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vY3JlYXRlIGZvb2QgbGlzdCB0aGF0IHlvdSBzaG91bGQgbm90IGVhdFxuICBmdW5jdGlvbiBmb29kX3RvX2F2b2lkKGxldmVsKSB7XG4gICAgZG9ub3RlYXRhcnIgPSBbXTtcbiAgICBkb25vdGVhdCA9IG5ldyBTZXQoKTtcbiAgICB3aGlsZSAoZG9ub3RlYXQuc2l6ZSA8IGxldmVsKSB7XG4gICAgICBkb25vdGVhdC5hZGQoXG4gICAgICAgIE9iamVjdC5rZXlzKGZvb2RzKVtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBPYmplY3Qua2V5cyhmb29kcykubGVuZ3RoKVxuICAgICAgICBdXG4gICAgICApO1xuICAgIH1cbiAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgZG9ub3RlYXRhcnIucHVzaChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RleHQobGV2ZWwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEhlbHZldGljYSwgc2Fuc1wiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChgKiBMZXZlbCAke2xldmVsfSAqYCwgY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICBjdHguZmlsbFRleHQoYERvIG5vdCBlYXRgLCBjYW52YXMud2lkdGggLyAyLCAxNTApO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlKGUpIHtcbiAgICBkcmF3QmFja2dyb3VuZCgpO1xuICAgIGRyYXdUZXh0KGxldmVsKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBmb29kc1tlXS5mb29kX2ltYWdlLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBmb29kc1tlXS53aWR0aCxcbiAgICAgIGZvb2RzW2VdLmhlaWdodCxcbiAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBmb29kc1tlXS53aWR0aCxcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyLFxuICAgICAgZm9vZHNbZV0ud2lkdGggKiAxLjIsXG4gICAgICBmb29kc1tlXS5oZWlnaHQgKiAxLjJcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdyhsaWZlKSB7XG4gICAgLy8gd2hpbGUgKGRvbm90ZWF0ID09PSBuZXcgU2V0KE9iamVjdC5rZXlzKGZvb2RzKSkpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZWtla2VrZT9cIik7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgaWYgKGVxU2V0KGRvbm90ZWF0LCBuZXcgU2V0KE9iamVjdC5rZXlzKGZvb2RzKSkpKSB7XG4gICAgICBwYXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmY2NcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvL2RyYXcgd2FsbHNcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGNhbnZhcy53aWR0aCAvIHdhbGwud2lkdGggPiBpKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICB3YWxsLndhbGxJbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHQsXG4gICAgICAgIGkgKiB3YWxsLndpZHRoLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgaSAqIHdhbGwud2lkdGgsXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSB3YWxsLmhlaWdodCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHRcbiAgICAgICk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIGxldCBqID0gMTtcbiAgICBsZXQgcGxhbnRBcnIgPSBwbGFudEluaXQocGxhbnRVcmxzKTtcbiAgICB3aGlsZSAoKGNhbnZhcy5oZWlnaHQgLSAyICogd2FsbC53aWR0aCkgLyB3YWxsLndpZHRoID49IGopIHtcbiAgICAgIGxldCBpZHggPSBqICUgcGxhbnRBcnIubGVuZ3RoO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgcGxhbnRBcnJbaWR4XS5wbGFudEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBwbGFudEFycltpZHhdLndpZHRoLFxuICAgICAgICBwbGFudEFycltpZHhdLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgcGxhbnRBcnJbaWR4XS5oZWlnaHQgKiBqLFxuICAgICAgICBwbGFudEFycltpZHhdLndpZHRoICogMC43LFxuICAgICAgICBwbGFudEFycltpZHhdLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHBsYW50QXJyW2lkeF0ucGxhbnRJbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgcGxhbnRBcnJbaWR4XS53aWR0aCxcbiAgICAgICAgcGxhbnRBcnJbaWR4XS5oZWlnaHQsXG4gICAgICAgIGNhbnZhcy53aWR0aCAtIHBsYW50QXJyW2lkeF0ud2lkdGgsXG4gICAgICAgIHBsYW50QXJyW2lkeF0uaGVpZ2h0ICogaixcbiAgICAgICAgcGxhbnRBcnJbaWR4XS53aWR0aCAqIDAuNyxcbiAgICAgICAgcGxhbnRBcnJbaWR4XS5oZWlnaHRcbiAgICAgICk7XG4gICAgICBqKys7XG4gICAgfVxuXG4gICAgZHJhd19mb29kKCk7XG4gICAgZHJhd19jYXQoKTtcblxuICAgIGlmIChyaWdodFByZXNzZWQgJiYgY2F0LnggPCBjYW52YXMud2lkdGggLSBjYXQud2lkdGggLSB3YWxsLndpZHRoKSB7XG4gICAgICBjYXQueCArPSAzO1xuICAgIH0gZWxzZSBpZiAobGVmdFByZXNzZWQgJiYgY2F0LnggPiB3YWxsLndpZHRoKSB7XG4gICAgICBjYXQueCAtPSAzO1xuICAgIH0gZWxzZSBpZiAodXBQcmVzc2VkICYmIGNhdC55ID4gd2FsbC53aWR0aCAtIDkpIHtcbiAgICAgIGNhdC55IC09IDM7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGRvd25QcmVzc2VkICYmXG4gICAgICBjYXQueSA8IGNhbnZhcy5oZWlnaHQgLSBjYXQud2lkdGggLSB3YWxsLndpZHRoIC0gNVxuICAgICkge1xuICAgICAgY2F0LnkgKz0gMztcbiAgICB9XG4gICAgZGVsZXRlSXRlbShsaWZlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhbWUobGV2ZWwsIGxpZmUpIHtcbiAgICAvLyBpZiAobGlmZSA9PT0gMCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCI/P1wiKTtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgY2F0LnggPSAoY2FudmFzLndpZHRoIC0gY2F0LndpZHRoKSAvIDI7XG4gICAgY2F0LnkgPSAoY2FudmFzLmhlaWdodCAtIGNhdC5oZWlnaHQpIC8gMjtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBmb29kX2luaXQobGV2ZWwpO1xuICAgICAgZm9vZF90b19hdm9pZChsZXZlbCArIDEpO1xuXG4gICAgICBpZiAobGlmZSA+IDApIHtcbiAgICAgICAgaWYgKGxpZmUgPj0gMykge1xuICAgICAgICAgIGxldCBiZWZvcmVTZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYmVmb3JlKGRvbm90ZWF0YXJyLnNoaWZ0KCkpO1xuICAgICAgICAgICAgaWYgKCFkb25vdGVhdGFyci5sZW5ndGgpIGNsZWFySW50ZXJ2YWwoYmVmb3JlU2V0SW50ZXJ2YWwpO1xuICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYmVmb3JlU2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgYmVmb3JlKGRvbm90ZWF0YXJyLnNoaWZ0KCkpO1xuICAgICAgICAgICAgICBpZiAoIWRvbm90ZWF0YXJyLmxlbmd0aCkgY2xlYXJJbnRlcnZhbChiZWZvcmVTZXRJbnRlcnZhbCk7XG4gICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgIH0sIDkwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZHJhd0NhdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghbWlzcyAmJiBsaWZlID4gMCkge1xuICAgICAgICAgICAgLy9ub3JtYWwgcGxheVxuICAgICAgICAgICAgY29uc29sZS5sb2cobGlmZSk7XG4gICAgICAgICAgICBkcmF3KGxpZmUpO1xuICAgICAgICAgICAgaWYgKHBhc3MpIHtcbiAgICAgICAgICAgICAgcGFzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICBsZXZlbCArPSAxO1xuICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZHJhd0NhdCk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1pc3MgJiYgbGlmZSA+IDApIHtcbiAgICAgICAgICAgIC8vbWlzc1xuICAgICAgICAgICAgbGlmZSAtPSAxO1xuICAgICAgICAgICAgLy9sb3N0IHBhZ2UgKGFuZ3J5IGNhdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcblxuICAgICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgICAgbGV0IHRlc3QgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgYW5ncnlDYXQuYW5ncnlDYXRJbWFnZSxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgYW5ncnlDYXQud2lkdGgsXG4gICAgICAgICAgICAgICAgYW5ncnlDYXQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBhbmdyeUNhdC53aWR0aCxcbiAgICAgICAgICAgICAgICBhbmdyeUNhdC5oZWlnaHRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sIDEyKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRlc3QpO1xuICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9sb3N0XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiLS1cIikpO1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChkcmF3Q2F0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWU9VIGxvc2UuLi5cIik7XG4gICAgICAgICAgICAvLyBsaWZlID0gMztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEyKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0pLnRoZW4oKCkgPT4gZ2FtZShsZXZlbCwgbGlmZSksIGVyciA9PiBjb25zb2xlLmxvZyhcIm5vcGVcIikpO1xuICB9XG5cbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAvL2dhbWUgc3RhcnQgaGVyZSBtYXliZS4uLlxuICAgIGdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZ2FtZShsZXZlbCwgbGlmZSk7XG4gIH0pO1xuXG4gIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9KTtcbiAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcbiIsImNsYXNzIFBsYW50IHtcbiAgY29uc3RydWN0b3IocGxhbnRJbWdVcmwpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLnBsYW50SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYW50SW1hZ2Uuc3JjID0gcGxhbnRJbWdVcmw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGFudDtcbiIsImNsYXNzIFdhbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLndhbGxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMud2FsbEltYWdlLnNyYyA9IFwiLi9zcmMvaW1nL2ZlbmNlLnBuZ1wiO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=