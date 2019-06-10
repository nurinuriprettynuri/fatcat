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
    this.x = (x - this.width) / 2;
    this.y = (y - this.height) / 2;
    this.cat_image = new Image();
    this.cat_image.src = "./src/img/fatcat.png";
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
const Food = __webpack_require__(/*! ./food.js */ "./src/food.js");

document.addEventListener("DOMContentLoaded", () => {
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
  let foods = {};
  let win = false;
  let lose = false;
  let donoteatarr = [];
  let miss = false;

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
  let foodPos = [];
  let foods_idx = new Set();
  let donoteat = new Set();

  //   const food_cord = [[x + 90, y + 90], [x + 100, y + 100]];

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  const cat = new Cat(canvas.width, canvas.height);

  function setPos() {
    let alldone = false;
    let food_x;
    let food_y;
    while (!alldone) {
      alldone = true;
      food_x = Math.floor(Math.random() * canvas.width);
      food_y = Math.floor(Math.random() * canvas.height);
      if (food_x < 32 || food_x > canvas.width - 32) {
        alldone = false;
        continue;
      }
      if (food_y < 32 || food_y > canvas.height - 32) {
        alldone = false;
        continue;
      }
      for (let i = 0; i < foodPos.length; i++) {
        if (
          !(
            (foodPos[i][0] - food_x < -50 || foodPos[i][0] - food_x > 50) &&
            (foodPos[i][1] - food_y < -50 || foodPos[i][1] - food_y > 50)
          )
        ) {
          alldone = false;
        }
      }
      if (
        !(
          (cat.x - food_x < -50 || cat.x - food_x > 50) &&
          (cat.y - food_y < -50 || cat.y - food_y > 50)
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
      if (
        foodx <= cat.x &&
        foodx + 32 >= cat.x &&
        foody <= cat.y &&
        foody + 32 >= cat.y
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

  // class Before{
  //   constructor(){
  //     this.foods =
  //   }

  // }

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

    draw_food();
    draw_cat();

    //   if (rightPressed && cat.x < canvas.width - cat.width) {

    if (rightPressed) {
      cat.x += 3;
    } else if (leftPressed) {
      cat.x -= 3;
    } else if (upPressed) {
      cat.y -= 3;
    } else if (downPressed) {
      cat.y += 3;
    }
    deleteItem();
  }

  function game() {
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
          miss = false;
          clearInterval(drawCat);
          this.game();
        }
      }, 12);
    }, 3000);
  }
  game();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEEsWUFBWSxtQkFBTyxDQUFDLDhCQUFVO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBDYXQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy54ID0gKHggLSB0aGlzLndpZHRoKSAvIDI7XG4gICAgdGhpcy55ID0gKHkgLSB0aGlzLmhlaWdodCkgLyAyO1xuICAgIHRoaXMuY2F0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jYXRfaW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWcvZmF0Y2F0LnBuZ1wiO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2F0O1xuIiwiY2xhc3MgRm9vZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGltZ191cmwpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLmZvb2RfeCA9IHg7XG4gICAgdGhpcy5mb29kX3kgPSB5O1xuICAgIHRoaXMuZm9vZF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZm9vZF9pbWFnZS5zcmMgPSBpbWdfdXJsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vZDtcbiIsImNvbnN0IENhdCA9IHJlcXVpcmUoXCIuL2NhdC5qc1wiKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKFwiLi9mb29kLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICBsZXQgeSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICBsZXQgeGZyYW1lSWR4ID0gMDtcbiAgbGV0IHlmcmFtZUlkeCA9IDA7XG4gIGxldCBsaWZlID0gMztcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGxldmVsID0gMjtcbiAgbGV0IGZvb2RzID0ge307XG4gIGxldCB3aW4gPSBmYWxzZTtcbiAgbGV0IGxvc2UgPSBmYWxzZTtcbiAgbGV0IGRvbm90ZWF0YXJyID0gW107XG4gIGxldCBtaXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9vZF91cmxzID0gW1xuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYXBwbGUucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iYW5hbmEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iZWVyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYnVyZ2VyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY2FrZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2NoZXJyeS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2Nvcm4ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZGFuZ28ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9kb251dC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2ZyaWVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZ3JhcGVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvbGVtb24ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9tZWF0LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGVhY2gucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9wZWFyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGllLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGlzaGEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9yYW1lbi5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zcGFnaGV0dGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3VzaGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zd2VldF9wb3RhdG8ucG5nXCJcbiAgXTtcbiAgbGV0IGZvb2RQb3MgPSBbXTtcbiAgbGV0IGZvb2RzX2lkeCA9IG5ldyBTZXQoKTtcbiAgbGV0IGRvbm90ZWF0ID0gbmV3IFNldCgpO1xuXG4gIC8vICAgY29uc3QgZm9vZF9jb3JkID0gW1t4ICsgOTAsIHkgKyA5MF0sIFt4ICsgMTAwLCB5ICsgMTAwXV07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG4gIGNvbnN0IGNhdCA9IG5ldyBDYXQoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICBmdW5jdGlvbiBzZXRQb3MoKSB7XG4gICAgbGV0IGFsbGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgZm9vZF94O1xuICAgIGxldCBmb29kX3k7XG4gICAgd2hpbGUgKCFhbGxkb25lKSB7XG4gICAgICBhbGxkb25lID0gdHJ1ZTtcbiAgICAgIGZvb2RfeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICBmb29kX3kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGlmIChmb29kX3ggPCAzMiB8fCBmb29kX3ggPiBjYW52YXMud2lkdGggLSAzMikge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZvb2RfeSA8IDMyIHx8IGZvb2RfeSA+IGNhbnZhcy5oZWlnaHQgLSAzMikge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kUG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgKGZvb2RQb3NbaV1bMF0gLSBmb29kX3ggPCAtNTAgfHwgZm9vZFBvc1tpXVswXSAtIGZvb2RfeCA+IDUwKSAmJlxuICAgICAgICAgICAgKGZvb2RQb3NbaV1bMV0gLSBmb29kX3kgPCAtNTAgfHwgZm9vZFBvc1tpXVsxXSAtIGZvb2RfeSA+IDUwKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICEoXG4gICAgICAgICAgKGNhdC54IC0gZm9vZF94IDwgLTUwIHx8IGNhdC54IC0gZm9vZF94ID4gNTApICYmXG4gICAgICAgICAgKGNhdC55IC0gZm9vZF95IDwgLTUwIHx8IGNhdC55IC0gZm9vZF95ID4gNTApXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFsbGRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgZm9vZFBvcy5wdXNoKFtmb29kX3gsIGZvb2RfeV0pO1xuICAgICAgICByZXR1cm4gW2Zvb2RfeCwgZm9vZF95XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL3JhbmRvbWx5IHBpY2sgMTIgZm9vZC4uLlxuICBmdW5jdGlvbiByYW5kb21fZm9vZF9pZHgoKSB7XG4gICAgbGV0IGlkeCA9IDI7XG5cbiAgICB3aGlsZSAoZm9vZHNfaWR4LnNpemUgPCA4KSB7XG4gICAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kX3VybHMubGVuZ3RoKTtcbiAgICAgIGZvb2RzX2lkeC5hZGQoaWR4KTtcbiAgICB9XG4gICAgZm9vZHNfaWR4LmZvckVhY2goZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvb2RfaW5pdCgpIHtcbiAgICByYW5kb21fZm9vZF9pZHgoKTtcbiAgICBmb29kc19pZHguZm9yRWFjaChpID0+IHtcbiAgICAgIGxldCBub3RfaW1wb3J0YW50ID0gZm9vZF91cmxzW2ldLnNwbGl0KFwiL1wiKTtcbiAgICAgIGxldCBmb29kX2tleSA9IG5vdF9pbXBvcnRhbnRbbm90X2ltcG9ydGFudC5sZW5ndGggLSAxXS5zbGljZSgwLCAtNCk7XG5cbiAgICAgIGxldCBwb3NfYXJyID0gc2V0UG9zKCk7XG4gICAgICBmb29kc1tmb29kX2tleV0gPSBuZXcgRm9vZChwb3NfYXJyWzBdLCBwb3NfYXJyWzFdLCBmb29kX3VybHNbaV0pO1xuICAgICAgY29uc29sZS5sb2coZm9vZHNbZm9vZF9rZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdfZm9vZCgpIHtcbiAgICBsZXQgZm9vZF9rZXlzID0gT2JqZWN0LmtleXMoZm9vZHMpO1xuICAgIGxldCBlYWNoRm9vZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2Rfa2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWFjaEZvb2QgPSBmb29kc1tmb29kX2tleXNbaV1dO1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgZWFjaEZvb2QuZm9vZF9pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgZWFjaEZvb2Qud2lkdGgsXG4gICAgICAgIGVhY2hGb29kLmhlaWdodCxcbiAgICAgICAgZWFjaEZvb2QuZm9vZF94LFxuICAgICAgICBlYWNoRm9vZC5mb29kX3ksXG4gICAgICAgIGVhY2hGb29kLndpZHRoICogMC44LFxuICAgICAgICBlYWNoRm9vZC5oZWlnaHQgKiAwLjhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDgpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMjtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDE7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDIpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMztcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSAyKSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd19jYXQoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGNhdC5jYXRfaW1hZ2UsXG4gICAgICB4ZnJhbWVJZHggKiBjYXQud2lkdGgsXG4gICAgICB5ZnJhbWVJZHggKiBjYXQuaGVpZ2h0ICsgMSxcbiAgICAgIGNhdC53aWR0aCxcbiAgICAgIGNhdC5oZWlnaHQsXG4gICAgICBjYXQueCxcbiAgICAgIGNhdC55LFxuICAgICAgY2F0LndpZHRoICogMS4yLFxuICAgICAgY2F0LmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKCkge1xuICAgIGxldCBmb29keDtcbiAgICBsZXQgZm9vZHk7XG4gICAgbGV0IGVhY2hGb29kO1xuICAgIGxldCBmb29kX2tleXMgPSBPYmplY3Qua2V5cyhmb29kcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kX2tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVhY2hGb29kID0gZm9vZHNbZm9vZF9rZXlzW2ldXTtcblxuICAgICAgZm9vZHggPSBlYWNoRm9vZC5mb29kX3g7XG5cbiAgICAgIGZvb2R5ID0gZWFjaEZvb2QuZm9vZF95O1xuICAgICAgaWYgKFxuICAgICAgICBmb29keCA8PSBjYXQueCAmJlxuICAgICAgICBmb29keCArIDMyID49IGNhdC54ICYmXG4gICAgICAgIGZvb2R5IDw9IGNhdC55ICYmXG4gICAgICAgIGZvb2R5ICsgMzIgPj0gY2F0LnlcbiAgICAgICkge1xuICAgICAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgIGlmIChmb29kX2tleXNbaV0gPT09IGUpIHtcbiAgICAgICAgICAgIGxpZmUgLT0gMTtcbiAgICAgICAgICAgIG1pc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBmb29kc1tmb29kX2tleXNbaV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZvb2RfdG9fYXZvaWQobGV2ZWwpIHtcbiAgICB3aGlsZSAoZG9ub3RlYXQuc2l6ZSA8IGxldmVsKSB7XG4gICAgICBkb25vdGVhdC5hZGQoXG4gICAgICAgIE9iamVjdC5rZXlzKGZvb2RzKVtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBPYmplY3Qua2V5cyhmb29kcykubGVuZ3RoKVxuICAgICAgICBdXG4gICAgICApO1xuICAgIH1cbiAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgZG9ub3RlYXRhcnIucHVzaChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RleHQobGV2ZWwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5mb250ID0gXCI1MHB4IEhlbHZldGljYSwgc2Fuc1wiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChgKiBMZXZlbCAke2xldmVsfSAqYCwgY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICBjdHguZmlsbFRleHQoYERvIG5vdCBlYXRgLCBjYW52YXMud2lkdGggLyAyLCAyMjApO1xuICB9XG5cbiAgLy8gY2xhc3MgQmVmb3Jle1xuICAvLyAgIGNvbnN0cnVjdG9yKCl7XG4gIC8vICAgICB0aGlzLmZvb2RzID1cbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZShlKSB7XG4gICAgZHJhd0JhY2tncm91bmQoKTtcbiAgICBkcmF3VGV4dCgyKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcblxuICAgIGNvbnNvbGUubG9nKGZvb2RzW2VdKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZm9vZHNbZV0uZm9vZF9pbWFnZSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgZm9vZHNbZV0ud2lkdGgsXG4gICAgICBmb29kc1tlXS5oZWlnaHQsXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gZm9vZHNbZV0ud2lkdGgsXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMixcbiAgICAgIGZvb2RzW2VdLndpZHRoICogMS4yLFxuICAgICAgZm9vZHNbZV0uaGVpZ2h0ICogMS4yXG4gICAgKTtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmNjXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBkcmF3X2Zvb2QoKTtcbiAgICBkcmF3X2NhdCgpO1xuXG4gICAgLy8gICBpZiAocmlnaHRQcmVzc2VkICYmIGNhdC54IDwgY2FudmFzLndpZHRoIC0gY2F0LndpZHRoKSB7XG5cbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICBjYXQueCArPSAzO1xuICAgIH0gZWxzZSBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgIGNhdC54IC09IDM7XG4gICAgfSBlbHNlIGlmICh1cFByZXNzZWQpIHtcbiAgICAgIGNhdC55IC09IDM7XG4gICAgfSBlbHNlIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgY2F0LnkgKz0gMztcbiAgICB9XG4gICAgZGVsZXRlSXRlbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZm9vZF9pbml0KCk7XG4gICAgZm9vZF90b19hdm9pZChsZXZlbCk7XG5cbiAgICBsZXQgYmVmb3JlU2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGJlZm9yZShkb25vdGVhdGFyci5zaGlmdCgpKTtcbiAgICAgIGlmICghZG9ub3RlYXRhcnIubGVuZ3RoKSBjbGVhckludGVydmFsKGJlZm9yZVNldEludGVydmFsKTtcbiAgICB9LCA3MDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGRyYXdDYXQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFtaXNzKSB7XG4gICAgICAgICAgZHJhdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pc3MgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgIHRoaXMuZ2FtZSgpO1xuICAgICAgICB9XG4gICAgICB9LCAxMik7XG4gICAgfSwgMzAwMCk7XG4gIH1cbiAgZ2FtZSgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9