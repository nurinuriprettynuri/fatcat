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
  let startButton = document.getElementById("start");

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
    foods_idx.forEach(e => {
      console.log(e);
    });
  }

  function food_init() {
    foods = {};
    random_food_idx();
    foods_idx.forEach(i => {
      let not_important = food_urls[i].split("/");
      let food_key = not_important[not_important.length - 1].slice(0, -4);

      let pos_arr = setPos();
      foods[food_key] = new Food(pos_arr[0], pos_arr[1], food_urls[i]);
      console.log(foods[food_key]);
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
      console.log(foodx, foody);
      console.log(cat.x, cat.y);
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
    console.log(e);

    console.log(foods[e]);
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
            console.log("After");
            resolve();
          }
        }, 12);
      }, 3000);
    }).then(game);
  }

  startButton.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBLFlBQVksbUJBQU8sQ0FBQyw4QkFBVTtBQUM5QixhQUFhLG1CQUFPLENBQUMsZ0NBQVc7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGdDQUFXOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNsWkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIENhdCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLm1haW5XaWR0aCA9IDEyODtcbiAgICB0aGlzLm1haW5IZWlnaHQgPSAxMjg7XG4gICAgdGhpcy54ID0gKHggLSB0aGlzLndpZHRoKSAvIDI7XG4gICAgdGhpcy55ID0gKHkgLSB0aGlzLmhlaWdodCkgLyAyO1xuICAgIHRoaXMubWFpblggPSAoeCAtIHRoaXMubWFpbldpZHRoKSAvIDI7XG4gICAgdGhpcy5tYWluWSA9ICh5IC0gdGhpcy5tYWluSGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5jYXRfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNhdE1haW5wYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jYXRfaW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWcvZmF0Y2F0LnBuZ1wiO1xuICAgIHRoaXMuY2F0TWFpbnBhZ2Uuc3JjID0gXCIuL3NyYy9pbWcvbWFpbi1jYXQucG5nXCI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXQ7XG4iLCJjbGFzcyBGb29kIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaW1nX3VybCkge1xuICAgIHRoaXMud2lkdGggPSAzMjtcbiAgICB0aGlzLmhlaWdodCA9IDMyO1xuICAgIHRoaXMuZm9vZF94ID0geDtcbiAgICB0aGlzLmZvb2RfeSA9IHk7XG4gICAgdGhpcy5mb29kX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5mb29kX2ltYWdlLnNyYyA9IGltZ191cmw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb29kO1xuIiwiY29uc3QgQ2F0ID0gcmVxdWlyZShcIi4vY2F0LmpzXCIpO1xuY29uc3QgV2FsbCA9IHJlcXVpcmUoXCIuL3dhbGwuanNcIik7XG5jb25zdCBGb29kID0gcmVxdWlyZShcIi4vZm9vZC5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICBsZXQgeSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICBsZXQgeGZyYW1lSWR4ID0gMDtcbiAgbGV0IHlmcmFtZUlkeCA9IDA7XG4gIGxldCBsaWZlID0gMztcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGxldmVsID0gMjtcbiAgbGV0IGZvb2RzO1xuICBsZXQgd2luID0gZmFsc2U7XG4gIGxldCBsb3NlID0gZmFsc2U7XG4gIGxldCBkb25vdGVhdGFycjtcbiAgbGV0IG1pc3MgPSBmYWxzZTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG5cbiAgY29uc3QgZm9vZF91cmxzID0gW1xuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYXBwbGUucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iYW5hbmEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iZWVyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYnVyZ2VyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY2FrZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2NoZXJyeS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2Nvcm4ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZGFuZ28ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9kb251dC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2ZyaWVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZ3JhcGVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvbGVtb24ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9tZWF0LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGVhY2gucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9wZWFyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGllLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGlzaGEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9yYW1lbi5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zcGFnaGV0dGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3VzaGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zd2VldF9wb3RhdG8ucG5nXCJcbiAgXTtcbiAgbGV0IGZvb2RQb3M7XG4gIGxldCBmb29kc19pZHggPSBuZXcgU2V0KCk7XG4gIGxldCBkb25vdGVhdDtcblxuICAvLyAgIGNvbnN0IGZvb2RfY29yZCA9IFtbeCArIDkwLCB5ICsgOTBdLCBbeCArIDEwMCwgeSArIDEwMF1dO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBjb25zdCBjYXQgPSBuZXcgQ2F0KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCgpO1xuXG4gIGZ1bmN0aW9uIHNldFBvcygpIHtcbiAgICBmb29kUG9zID0gW107XG4gICAgbGV0IGFsbGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgZm9vZF94O1xuICAgIGxldCBmb29kX3k7XG4gICAgd2hpbGUgKCFhbGxkb25lKSB7XG4gICAgICBhbGxkb25lID0gdHJ1ZTtcbiAgICAgIGZvb2RfeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICBmb29kX3kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGlmIChmb29kX3ggPCAyMiB8fCBmb29kX3ggPiBjYW52YXMud2lkdGggLSAyMikge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZvb2RfeSA8IDIyIHx8IGZvb2RfeSA+IGNhbnZhcy5oZWlnaHQgLSAyMikge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kUG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgKGZvb2RQb3NbaV1bMF0gLSBmb29kX3ggPCAtMjAgfHwgZm9vZFBvc1tpXVswXSAtIGZvb2RfeCA+IDIwKSAmJlxuICAgICAgICAgICAgKGZvb2RQb3NbaV1bMV0gLSBmb29kX3kgPCAtMjAgfHwgZm9vZFBvc1tpXVsxXSAtIGZvb2RfeSA+IDIwKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICEoXG4gICAgICAgICAgKGNhdC54IC0gZm9vZF94IDwgLTIwIHx8IGNhdC54IC0gZm9vZF94ID4gMjApICYmXG4gICAgICAgICAgKGNhdC55IC0gZm9vZF95IDwgLTIwIHx8IGNhdC55IC0gZm9vZF95ID4gMjApXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFsbGRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgZm9vZFBvcy5wdXNoKFtmb29kX3gsIGZvb2RfeV0pO1xuICAgICAgICByZXR1cm4gW2Zvb2RfeCwgZm9vZF95XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL3JhbmRvbWx5IHBpY2sgMTIgZm9vZC4uLlxuICBmdW5jdGlvbiByYW5kb21fZm9vZF9pZHgoKSB7XG4gICAgbGV0IGlkeCA9IDI7XG5cbiAgICB3aGlsZSAoZm9vZHNfaWR4LnNpemUgPCA4KSB7XG4gICAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kX3VybHMubGVuZ3RoKTtcbiAgICAgIGZvb2RzX2lkeC5hZGQoaWR4KTtcbiAgICB9XG4gICAgZm9vZHNfaWR4LmZvckVhY2goZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvb2RfaW5pdCgpIHtcbiAgICBmb29kcyA9IHt9O1xuICAgIHJhbmRvbV9mb29kX2lkeCgpO1xuICAgIGZvb2RzX2lkeC5mb3JFYWNoKGkgPT4ge1xuICAgICAgbGV0IG5vdF9pbXBvcnRhbnQgPSBmb29kX3VybHNbaV0uc3BsaXQoXCIvXCIpO1xuICAgICAgbGV0IGZvb2Rfa2V5ID0gbm90X2ltcG9ydGFudFtub3RfaW1wb3J0YW50Lmxlbmd0aCAtIDFdLnNsaWNlKDAsIC00KTtcblxuICAgICAgbGV0IHBvc19hcnIgPSBzZXRQb3MoKTtcbiAgICAgIGZvb2RzW2Zvb2Rfa2V5XSA9IG5ldyBGb29kKHBvc19hcnJbMF0sIHBvc19hcnJbMV0sIGZvb2RfdXJsc1tpXSk7XG4gICAgICBjb25zb2xlLmxvZyhmb29kc1tmb29kX2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd19mb29kKCkge1xuICAgIGxldCBmb29kX2tleXMgPSBPYmplY3Qua2V5cyhmb29kcyk7XG4gICAgbGV0IGVhY2hGb29kO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZF9rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlYWNoRm9vZCA9IGZvb2RzW2Zvb2Rfa2V5c1tpXV07XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICBlYWNoRm9vZC5mb29kX2ltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBlYWNoRm9vZC53aWR0aCxcbiAgICAgICAgZWFjaEZvb2QuaGVpZ2h0LFxuICAgICAgICBlYWNoRm9vZC5mb29kX3gsXG4gICAgICAgIGVhY2hGb29kLmZvb2RfeSxcbiAgICAgICAgZWFjaEZvb2Qud2lkdGggKiAwLjgsXG4gICAgICAgIGVhY2hGb29kLmhlaWdodCAqIDAuOFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAzOSkge1xuICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh4ZnJhbWVJZHggPj0gOCkge1xuICAgICAgICB4ZnJhbWVJZHggPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB5ZnJhbWVJZHggPSAyO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM3KSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDgpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh4ZnJhbWVJZHggPj0gMikge1xuICAgICAgICB4ZnJhbWVJZHggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB5ZnJhbWVJZHggPSAzO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDQwKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDIpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM3KSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7XG4gICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3X2NhdCgpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgY2F0LmNhdF9pbWFnZSxcbiAgICAgIHhmcmFtZUlkeCAqIGNhdC53aWR0aCxcbiAgICAgIHlmcmFtZUlkeCAqIGNhdC5oZWlnaHQgKyAxLFxuICAgICAgY2F0LndpZHRoLFxuICAgICAgY2F0LmhlaWdodCxcbiAgICAgIGNhdC54LFxuICAgICAgY2F0LnksXG4gICAgICBjYXQud2lkdGggKiAxLjIsXG4gICAgICBjYXQuaGVpZ2h0ICogMS4yXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oKSB7XG4gICAgbGV0IGZvb2R4O1xuICAgIGxldCBmb29keTtcbiAgICBsZXQgZWFjaEZvb2Q7XG4gICAgbGV0IGZvb2Rfa2V5cyA9IE9iamVjdC5rZXlzKGZvb2RzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2Rfa2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWFjaEZvb2QgPSBmb29kc1tmb29kX2tleXNbaV1dO1xuXG4gICAgICBmb29keCA9IGVhY2hGb29kLmZvb2RfeDtcbiAgICAgIGZvb2R5ID0gZWFjaEZvb2QuZm9vZF95O1xuICAgICAgY29uc29sZS5sb2coZm9vZHgsIGZvb2R5KTtcbiAgICAgIGNvbnNvbGUubG9nKGNhdC54LCBjYXQueSk7XG4gICAgICBpZiAoXG4gICAgICAgIGZvb2R4IC0gNyA8PSBjYXQueCAmJlxuICAgICAgICBmb29keCArIDQwID49IGNhdC54ICsgY2F0LndpZHRoICYmXG4gICAgICAgIGZvb2R5IC0gNyA8PSBjYXQueSAmJlxuICAgICAgICBmb29keSArIDQwID49IGNhdC55ICsgY2F0LmhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIGRvbm90ZWF0LmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgaWYgKGZvb2Rfa2V5c1tpXSA9PT0gZSkge1xuICAgICAgICAgICAgbGlmZSAtPSAxO1xuICAgICAgICAgICAgbWlzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIGZvb2RzW2Zvb2Rfa2V5c1tpXV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZm9vZF90b19hdm9pZChsZXZlbCkge1xuICAgIGRvbm90ZWF0YXJyID0gW107XG4gICAgZG9ub3RlYXQgPSBuZXcgU2V0KCk7XG4gICAgd2hpbGUgKGRvbm90ZWF0LnNpemUgPCBsZXZlbCkge1xuICAgICAgZG9ub3RlYXQuYWRkKFxuICAgICAgICBPYmplY3Qua2V5cyhmb29kcylbXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogT2JqZWN0LmtleXMoZm9vZHMpLmxlbmd0aClcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9XG4gICAgZG9ub3RlYXQuZm9yRWFjaChlID0+IHtcbiAgICAgIGRvbm90ZWF0YXJyLnB1c2goZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdUZXh0KGxldmVsKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZm9udCA9IFwiNTBweCBIZWx2ZXRpY2EsIHNhbnNcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHguZmlsbFRleHQoYCogTGV2ZWwgJHtsZXZlbH0gKmAsIGNhbnZhcy53aWR0aCAvIDIsIDExMCk7XG4gICAgY3R4LmZpbGxUZXh0KGBEbyBub3QgZWF0YCwgY2FudmFzLndpZHRoIC8gMiwgMjIwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZShlKSB7XG4gICAgZHJhd0JhY2tncm91bmQoKTtcbiAgICBkcmF3VGV4dCgyKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcblxuICAgIGNvbnNvbGUubG9nKGZvb2RzW2VdKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZm9vZHNbZV0uZm9vZF9pbWFnZSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgZm9vZHNbZV0ud2lkdGgsXG4gICAgICBmb29kc1tlXS5oZWlnaHQsXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gZm9vZHNbZV0ud2lkdGgsXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMixcbiAgICAgIGZvb2RzW2VdLndpZHRoICogMS4yLFxuICAgICAgZm9vZHNbZV0uaGVpZ2h0ICogMS4yXG4gICAgKTtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmNjXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgLy9kcmF3IHdhbGxzXG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlICgyNSA+IGkpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgaSAqIHdhbGwud2lkdGgsXG4gICAgICAgIDAsXG4gICAgICAgIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgd2FsbC53YWxsSW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwuaGVpZ2h0LFxuICAgICAgICBpICogd2FsbC53aWR0aCxcbiAgICAgICAgNjA4LFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgaSAqIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgd2FsbC53YWxsSW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHdhbGwud2lkdGgsXG4gICAgICAgIHdhbGwuaGVpZ2h0LFxuICAgICAgICA3NjgsXG4gICAgICAgIGkgKiB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICBkcmF3X2Zvb2QoKTtcbiAgICBkcmF3X2NhdCgpO1xuXG4gICAgLy8gICBpZiAocmlnaHRQcmVzc2VkICYmIGNhdC54IDwgY2FudmFzLndpZHRoIC0gY2F0LndpZHRoKSB7XG5cbiAgICBpZiAocmlnaHRQcmVzc2VkICYmIGNhdC54IDwgY2FudmFzLndpZHRoIC0gY2F0LndpZHRoIC0gd2FsbC53aWR0aCkge1xuICAgICAgY2F0LnggKz0gMztcbiAgICB9IGVsc2UgaWYgKGxlZnRQcmVzc2VkICYmIGNhdC54ID4gd2FsbC53aWR0aCkge1xuICAgICAgY2F0LnggLT0gMztcbiAgICB9IGVsc2UgaWYgKHVwUHJlc3NlZCAmJiBjYXQueSA+IHdhbGwud2lkdGggLSA5KSB7XG4gICAgICBjYXQueSAtPSAzO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBkb3duUHJlc3NlZCAmJlxuICAgICAgY2F0LnkgPCBjYW52YXMuaGVpZ2h0IC0gY2F0LndpZHRoIC0gd2FsbC53aWR0aCAtIDVcbiAgICApIHtcbiAgICAgIGNhdC55ICs9IDM7XG4gICAgfVxuICAgIGRlbGV0ZUl0ZW0oKTtcbiAgfVxuICBsZXQgaTtcbiAgZnVuY3Rpb24gZ2FtZSgpIHtcbiAgICBpKys7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgZm9vZF9pbml0KCk7XG4gICAgICBmb29kX3RvX2F2b2lkKGxldmVsKTtcblxuICAgICAgbGV0IGJlZm9yZVNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGJlZm9yZShkb25vdGVhdGFyci5zaGlmdCgpKTtcbiAgICAgICAgaWYgKCFkb25vdGVhdGFyci5sZW5ndGgpIGNsZWFySW50ZXJ2YWwoYmVmb3JlU2V0SW50ZXJ2YWwpO1xuICAgICAgfSwgNzAwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBkcmF3Q2F0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCFtaXNzKSB7XG4gICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZHJhd0NhdCk7XG4gICAgICAgICAgICBtaXNzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFmdGVyXCIpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSkudGhlbihnYW1lKTtcbiAgfVxuXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgLy9nYW1lIHN0YXJ0IGhlcmUgbWF5YmUuLi5cbiAgICBnYW1lKCk7XG4gIH0pO1xufSk7XG4iLCJjbGFzcyBXYWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy53YWxsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLndhbGxJbWFnZS5zcmMgPSBcIi4vc3JjL2ltZy9icmlja3dhbGwucG5nXCI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==