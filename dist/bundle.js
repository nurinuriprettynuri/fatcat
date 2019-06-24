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
    while (25 > i) {
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
        608,
        wall.width,
        wall.height
      );
      ctx.drawImage(
        wall.wallImage,
        0,
        0,
        wall.width,
        wall.height,
        0,
        i * wall.width,
        wall.width,
        wall.height
      );
      ctx.drawImage(
        wall.wallImage,
        0,
        0,
        wall.width,
        wall.height,
        768,
        i * wall.width,
        wall.width,
        wall.height
      );
      i++;
    }

    draw_food();
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
    console.log("kkkk");
    about.style.display = "block";
    gameIntro.style.display = "none";
  });

  startButton.addEventListener("click", () => {
    console.log(".s.s");
    main.style.display = "flex";
    //game start here maybe...
    game();
  });
});


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
    this.wallImage.src = "./src/img/brickwall.png";
  }
}

module.exports = Wall;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBLFlBQVksbUJBQU8sQ0FBQyw4QkFBVTtBQUM5QixhQUFhLG1CQUFPLENBQUMsZ0NBQVc7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGdDQUFXOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ3BaRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgQ2F0IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMud2lkdGggPSAzMjtcbiAgICB0aGlzLmhlaWdodCA9IDMyO1xuICAgIHRoaXMubWFpbldpZHRoID0gMTI4O1xuICAgIHRoaXMubWFpbkhlaWdodCA9IDEyODtcbiAgICB0aGlzLnggPSAoeCAtIHRoaXMud2lkdGgpIC8gMjtcbiAgICB0aGlzLnkgPSAoeSAtIHRoaXMuaGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5tYWluWCA9ICh4IC0gdGhpcy5tYWluV2lkdGgpIC8gMjtcbiAgICB0aGlzLm1haW5ZID0gKHkgLSB0aGlzLm1haW5IZWlnaHQpIC8gMjtcbiAgICB0aGlzLmNhdF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY2F0TWFpbnBhZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNhdF9pbWFnZS5zcmMgPSBcIi4vc3JjL2ltZy9mYXRjYXQucG5nXCI7XG4gICAgdGhpcy5jYXRNYWlucGFnZS5zcmMgPSBcIi4vc3JjL2ltZy9tYWluLWNhdC5wbmdcIjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhdDtcbiIsImNsYXNzIEZvb2Qge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBpbWdfdXJsKSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy5mb29kX3ggPSB4O1xuICAgIHRoaXMuZm9vZF95ID0geTtcbiAgICB0aGlzLmZvb2RfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmZvb2RfaW1hZ2Uuc3JjID0gaW1nX3VybDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb2Q7XG4iLCJjb25zdCBDYXQgPSByZXF1aXJlKFwiLi9jYXQuanNcIik7XG5jb25zdCBXYWxsID0gcmVxdWlyZShcIi4vd2FsbC5qc1wiKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKFwiLi9mb29kLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBlID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBsZXQgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgdXBQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgeCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gIGxldCB5ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gIGxldCB4ZnJhbWVJZHggPSAwO1xuICBsZXQgeWZyYW1lSWR4ID0gMDtcbiAgbGV0IGxpZmUgPSAzO1xuICBsZXQgc2NvcmUgPSAwO1xuICBsZXQgbGV2ZWwgPSAyO1xuICBsZXQgZm9vZHM7XG4gIGxldCB3aW4gPSBmYWxzZTtcbiAgbGV0IGxvc2UgPSBmYWxzZTtcbiAgbGV0IGRvbm90ZWF0YXJyO1xuICBsZXQgbWlzcyA9IGZhbHNlO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbGV0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1wYWdlXCIpO1xuICBsZXQgZ2FtZUludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWludHJvXCIpO1xuICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuICBsZXQgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xuXG4gIGNvbnN0IGZvb2RfdXJscyA9IFtcbiAgICBcIi4vc3JjL2ltZy9mb29kL2FwcGxlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYmFuYW5hLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYmVlci5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2J1cmdlci5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2Nha2UucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jaGVycnkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jb3JuLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY3JvaXNzYW50LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY3VzdGFyZC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2RhbmdvLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZG9udXQucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9mcmllcy5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2dyYXBlcy5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2ljZV9jcmVhbS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2xlbW9uLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvbWVhdC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL29yYW5nZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3BlYWNoLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGVhci5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3BpZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3BpbmVhcHBsZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3Bpc2hhLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcmFtZW4ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zaGF2ZWRfaWNlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3BhZ2hldHRpLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3RyYXdiZXJyeS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3N1c2hpLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3dlZXRfcG90YXRvLnBuZ1wiXG4gIF07XG4gIGxldCBmb29kUG9zO1xuICBsZXQgZm9vZHNfaWR4ID0gbmV3IFNldCgpO1xuICBsZXQgZG9ub3RlYXQ7XG5cbiAgLy8gICBjb25zdCBmb29kX2NvcmQgPSBbW3ggKyA5MCwgeSArIDkwXSwgW3ggKyAxMDAsIHkgKyAxMDBdXTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbiAgY29uc3QgY2F0ID0gbmV3IENhdChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjb25zdCB3YWxsID0gbmV3IFdhbGwoKTtcblxuICBmdW5jdGlvbiBzZXRQb3MoKSB7XG4gICAgZm9vZFBvcyA9IFtdO1xuICAgIGxldCBhbGxkb25lID0gZmFsc2U7XG4gICAgbGV0IGZvb2RfeDtcbiAgICBsZXQgZm9vZF95O1xuICAgIHdoaWxlICghYWxsZG9uZSkge1xuICAgICAgYWxsZG9uZSA9IHRydWU7XG4gICAgICBmb29kX3ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgZm9vZF95ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XG4gICAgICBpZiAoZm9vZF94IDwgMjIgfHwgZm9vZF94ID4gY2FudmFzLndpZHRoIC0gMjIpIHtcbiAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmb29kX3kgPCAyMiB8fCBmb29kX3kgPiBjYW52YXMuaGVpZ2h0IC0gMjIpIHtcbiAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZFBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIChmb29kUG9zW2ldWzBdIC0gZm9vZF94IDwgLTIwIHx8IGZvb2RQb3NbaV1bMF0gLSBmb29kX3ggPiAyMCkgJiZcbiAgICAgICAgICAgIChmb29kUG9zW2ldWzFdIC0gZm9vZF95IDwgLTIwIHx8IGZvb2RQb3NbaV1bMV0gLSBmb29kX3kgPiAyMClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGFsbGRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhKFxuICAgICAgICAgIChjYXQueCAtIGZvb2RfeCA8IC0yMCB8fCBjYXQueCAtIGZvb2RfeCA+IDIwKSAmJlxuICAgICAgICAgIChjYXQueSAtIGZvb2RfeSA8IC0yMCB8fCBjYXQueSAtIGZvb2RfeSA+IDIwKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbGxkb25lID09PSB0cnVlKSB7XG4gICAgICAgIGZvb2RQb3MucHVzaChbZm9vZF94LCBmb29kX3ldKTtcbiAgICAgICAgcmV0dXJuIFtmb29kX3gsIGZvb2RfeV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9yYW5kb21seSBwaWNrIDEyIGZvb2QuLi5cbiAgZnVuY3Rpb24gcmFuZG9tX2Zvb2RfaWR4KCkge1xuICAgIGxldCBpZHggPSAyO1xuXG4gICAgd2hpbGUgKGZvb2RzX2lkeC5zaXplIDwgOCkge1xuICAgICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9vZF91cmxzLmxlbmd0aCk7XG4gICAgICBmb29kc19pZHguYWRkKGlkeCk7XG4gICAgfVxuICAgIGZvb2RzX2lkeC5mb3JFYWNoKGUgPT4ge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9vZF9pbml0KCkge1xuICAgIGZvb2RzID0ge307XG4gICAgcmFuZG9tX2Zvb2RfaWR4KCk7XG4gICAgZm9vZHNfaWR4LmZvckVhY2goaSA9PiB7XG4gICAgICBsZXQgbm90X2ltcG9ydGFudCA9IGZvb2RfdXJsc1tpXS5zcGxpdChcIi9cIik7XG4gICAgICBsZXQgZm9vZF9rZXkgPSBub3RfaW1wb3J0YW50W25vdF9pbXBvcnRhbnQubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTQpO1xuXG4gICAgICBsZXQgcG9zX2FyciA9IHNldFBvcygpO1xuICAgICAgZm9vZHNbZm9vZF9rZXldID0gbmV3IEZvb2QocG9zX2FyclswXSwgcG9zX2FyclsxXSwgZm9vZF91cmxzW2ldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdfZm9vZCgpIHtcbiAgICBsZXQgZm9vZF9rZXlzID0gT2JqZWN0LmtleXMoZm9vZHMpO1xuICAgIGxldCBlYWNoRm9vZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2Rfa2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWFjaEZvb2QgPSBmb29kc1tmb29kX2tleXNbaV1dO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgZWFjaEZvb2QuZm9vZF9pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgZWFjaEZvb2Qud2lkdGgsXG4gICAgICAgIGVhY2hGb29kLmhlaWdodCxcbiAgICAgICAgZWFjaEZvb2QuZm9vZF94LFxuICAgICAgICBlYWNoRm9vZC5mb29kX3ksXG4gICAgICAgIGVhY2hGb29kLndpZHRoICogMC44LFxuICAgICAgICBlYWNoRm9vZC5oZWlnaHQgKiAwLjhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDgpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMjtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDE7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDIpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMztcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSAyKSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd19jYXQoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGNhdC5jYXRfaW1hZ2UsXG4gICAgICB4ZnJhbWVJZHggKiBjYXQud2lkdGgsXG4gICAgICB5ZnJhbWVJZHggKiBjYXQuaGVpZ2h0ICsgMSxcbiAgICAgIGNhdC53aWR0aCxcbiAgICAgIGNhdC5oZWlnaHQsXG4gICAgICBjYXQueCxcbiAgICAgIGNhdC55LFxuICAgICAgY2F0LndpZHRoICogMS4yLFxuICAgICAgY2F0LmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKCkge1xuICAgIGxldCBmb29keDtcbiAgICBsZXQgZm9vZHk7XG4gICAgbGV0IGVhY2hGb29kO1xuICAgIGxldCBmb29kX2tleXMgPSBPYmplY3Qua2V5cyhmb29kcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kX2tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVhY2hGb29kID0gZm9vZHNbZm9vZF9rZXlzW2ldXTtcblxuICAgICAgZm9vZHggPSBlYWNoRm9vZC5mb29kX3g7XG4gICAgICBmb29keSA9IGVhY2hGb29kLmZvb2RfeTtcbiAgICAgIGlmIChcbiAgICAgICAgZm9vZHggLSA3IDw9IGNhdC54ICYmXG4gICAgICAgIGZvb2R4ICsgNDAgPj0gY2F0LnggKyBjYXQud2lkdGggJiZcbiAgICAgICAgZm9vZHkgLSA3IDw9IGNhdC55ICYmXG4gICAgICAgIGZvb2R5ICsgNDAgPj0gY2F0LnkgKyBjYXQuaGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgZG9ub3RlYXQuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICBpZiAoZm9vZF9rZXlzW2ldID09PSBlKSB7XG4gICAgICAgICAgICBsaWZlIC09IDE7XG4gICAgICAgICAgICBtaXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgZm9vZHNbZm9vZF9rZXlzW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb29kX3RvX2F2b2lkKGxldmVsKSB7XG4gICAgZG9ub3RlYXRhcnIgPSBbXTtcbiAgICBkb25vdGVhdCA9IG5ldyBTZXQoKTtcbiAgICB3aGlsZSAoZG9ub3RlYXQuc2l6ZSA8IGxldmVsKSB7XG4gICAgICBkb25vdGVhdC5hZGQoXG4gICAgICAgIE9iamVjdC5rZXlzKGZvb2RzKVtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBPYmplY3Qua2V5cyhmb29kcykubGVuZ3RoKVxuICAgICAgICBdXG4gICAgICApO1xuICAgIH1cbiAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgZG9ub3RlYXRhcnIucHVzaChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RleHQobGV2ZWwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5mb250ID0gXCI1MHB4IEhlbHZldGljYSwgc2Fuc1wiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChgKiBMZXZlbCAke2xldmVsfSAqYCwgY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICBjdHguZmlsbFRleHQoYERvIG5vdCBlYXRgLCBjYW52YXMud2lkdGggLyAyLCAyMjApO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlKGUpIHtcbiAgICBkcmF3QmFja2dyb3VuZCgpO1xuICAgIGRyYXdUZXh0KDIpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGZvb2RzW2VdLmZvb2RfaW1hZ2UsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGZvb2RzW2VdLndpZHRoLFxuICAgICAgZm9vZHNbZV0uaGVpZ2h0LFxuICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGZvb2RzW2VdLndpZHRoLFxuICAgICAgY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICBmb29kc1tlXS53aWR0aCAqIDEuMixcbiAgICAgIGZvb2RzW2VdLmhlaWdodCAqIDEuMlxuICAgICk7XG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZjY1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIC8vZHJhdyB3YWxsc1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoMjUgPiBpKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICB3YWxsLndhbGxJbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHQsXG4gICAgICAgIGkgKiB3YWxsLndpZHRoLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgaSAqIHdhbGwud2lkdGgsXG4gICAgICAgIDYwOCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHRcbiAgICAgICk7XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICB3YWxsLndhbGxJbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIGkgKiB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgNzY4LFxuICAgICAgICBpICogd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHRcbiAgICAgICk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgZHJhd19mb29kKCk7XG4gICAgZHJhd19jYXQoKTtcblxuICAgIC8vICAgaWYgKHJpZ2h0UHJlc3NlZCAmJiBjYXQueCA8IGNhbnZhcy53aWR0aCAtIGNhdC53aWR0aCkge1xuXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCAmJiBjYXQueCA8IGNhbnZhcy53aWR0aCAtIGNhdC53aWR0aCAtIHdhbGwud2lkdGgpIHtcbiAgICAgIGNhdC54ICs9IDM7XG4gICAgfSBlbHNlIGlmIChsZWZ0UHJlc3NlZCAmJiBjYXQueCA+IHdhbGwud2lkdGgpIHtcbiAgICAgIGNhdC54IC09IDM7XG4gICAgfSBlbHNlIGlmICh1cFByZXNzZWQgJiYgY2F0LnkgPiB3YWxsLndpZHRoIC0gOSkge1xuICAgICAgY2F0LnkgLT0gMztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZG93blByZXNzZWQgJiZcbiAgICAgIGNhdC55IDwgY2FudmFzLmhlaWdodCAtIGNhdC53aWR0aCAtIHdhbGwud2lkdGggLSA1XG4gICAgKSB7XG4gICAgICBjYXQueSArPSAzO1xuICAgIH1cbiAgICBkZWxldGVJdGVtKCk7XG4gIH1cbiAgbGV0IGk7XG4gIGZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgaSsrO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGZvb2RfaW5pdCgpO1xuICAgICAgZm9vZF90b19hdm9pZChsZXZlbCk7XG5cbiAgICAgIGxldCBiZWZvcmVTZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBiZWZvcmUoZG9ub3RlYXRhcnIuc2hpZnQoKSk7XG4gICAgICAgIGlmICghZG9ub3RlYXRhcnIubGVuZ3RoKSBjbGVhckludGVydmFsKGJlZm9yZVNldEludGVydmFsKTtcbiAgICAgIH0sIDcwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZHJhd0NhdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghbWlzcykge1xuICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSkudGhlbihnYW1lKTtcbiAgfVxuXG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJra2trXCIpO1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIi5zLnNcIik7XG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgLy9nYW1lIHN0YXJ0IGhlcmUgbWF5YmUuLi5cbiAgICBnYW1lKCk7XG4gIH0pO1xufSk7XG4iLCJjbGFzcyBXYWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy53YWxsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLndhbGxJbWFnZS5zcmMgPSBcIi4vc3JjL2ltZy9icmlja3dhbGwucG5nXCI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==