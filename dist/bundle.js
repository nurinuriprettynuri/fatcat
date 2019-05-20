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
  let level = 1;
  let foods = {};
  let miss;

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
        eachFood.width,
        eachFood.height
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
      cat.width,
      cat.height
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
            console.log(life);
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
  }

  function before() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    donoteat.forEach(e => {
      ctx.drawImage(
        foods[e].food_image,
        0,
        0,
        foods[e].width,
        foods[e].height,
        foods[e].food_x,
        foods[e].food_y,
        foods[e].width,
        foods[e].height
      );
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  food_init();
  food_to_avoid(level);
  before();
  setTimeout(() => {
    setInterval(draw, 12);
  }, 2000);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEEsWUFBWSxtQkFBTyxDQUFDLDhCQUFVO0FBQzlCLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBDYXQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy54ID0gKHggLSB0aGlzLndpZHRoKSAvIDI7XG4gICAgdGhpcy55ID0gKHkgLSB0aGlzLmhlaWdodCkgLyAyO1xuICAgIHRoaXMuY2F0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jYXRfaW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWcvZmF0Y2F0LnBuZ1wiO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2F0O1xuIiwiY2xhc3MgRm9vZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGltZ191cmwpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLmZvb2RfeCA9IHg7XG4gICAgdGhpcy5mb29kX3kgPSB5O1xuICAgIHRoaXMuZm9vZF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZm9vZF9pbWFnZS5zcmMgPSBpbWdfdXJsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vZDtcbiIsImNvbnN0IENhdCA9IHJlcXVpcmUoXCIuL2NhdC5qc1wiKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKFwiLi9mb29kLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICBsZXQgeSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICBsZXQgeGZyYW1lSWR4ID0gMDtcbiAgbGV0IHlmcmFtZUlkeCA9IDA7XG4gIGxldCBsaWZlID0gMztcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGxldmVsID0gMTtcbiAgbGV0IGZvb2RzID0ge307XG4gIGxldCBtaXNzO1xuXG4gIGNvbnN0IGZvb2RfdXJscyA9IFtcbiAgICBcIi4vc3JjL2ltZy9mb29kL2FwcGxlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYmFuYW5hLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYmVlci5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2J1cmdlci5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2Nha2UucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jaGVycnkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jb3JuLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY3JvaXNzYW50LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY3VzdGFyZC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2RhbmdvLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZG9udXQucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9mcmllcy5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2dyYXBlcy5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2ljZV9jcmVhbS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2xlbW9uLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvbWVhdC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL29yYW5nZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3BlYWNoLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGVhci5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3BpZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3BpbmVhcHBsZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3Bpc2hhLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcmFtZW4ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zaGF2ZWRfaWNlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3BhZ2hldHRpLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3RyYXdiZXJyeS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3N1c2hpLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3dlZXRfcG90YXRvLnBuZ1wiXG4gIF07XG4gIGxldCBmb29kUG9zID0gW107XG4gIGxldCBmb29kc19pZHggPSBuZXcgU2V0KCk7XG4gIGxldCBkb25vdGVhdCA9IG5ldyBTZXQoKTtcblxuICAvLyAgIGNvbnN0IGZvb2RfY29yZCA9IFtbeCArIDkwLCB5ICsgOTBdLCBbeCArIDEwMCwgeSArIDEwMF1dO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBjb25zdCBjYXQgPSBuZXcgQ2F0KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgZnVuY3Rpb24gc2V0UG9zKCkge1xuICAgIGxldCBhbGxkb25lID0gZmFsc2U7XG4gICAgbGV0IGZvb2RfeDtcbiAgICBsZXQgZm9vZF95O1xuICAgIHdoaWxlICghYWxsZG9uZSkge1xuICAgICAgYWxsZG9uZSA9IHRydWU7XG4gICAgICBmb29kX3ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xuICAgICAgZm9vZF95ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XG4gICAgICBpZiAoZm9vZF94IDwgMzIgfHwgZm9vZF94ID4gY2FudmFzLndpZHRoIC0gMzIpIHtcbiAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmb29kX3kgPCAzMiB8fCBmb29kX3kgPiBjYW52YXMuaGVpZ2h0IC0gMzIpIHtcbiAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZFBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIChmb29kUG9zW2ldWzBdIC0gZm9vZF94IDwgLTUwIHx8IGZvb2RQb3NbaV1bMF0gLSBmb29kX3ggPiA1MCkgJiZcbiAgICAgICAgICAgIChmb29kUG9zW2ldWzFdIC0gZm9vZF95IDwgLTUwIHx8IGZvb2RQb3NbaV1bMV0gLSBmb29kX3kgPiA1MClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGFsbGRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhKFxuICAgICAgICAgIChjYXQueCAtIGZvb2RfeCA8IC01MCB8fCBjYXQueCAtIGZvb2RfeCA+IDUwKSAmJlxuICAgICAgICAgIChjYXQueSAtIGZvb2RfeSA8IC01MCB8fCBjYXQueSAtIGZvb2RfeSA+IDUwKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbGxkb25lID09PSB0cnVlKSB7XG4gICAgICAgIGZvb2RQb3MucHVzaChbZm9vZF94LCBmb29kX3ldKTtcbiAgICAgICAgcmV0dXJuIFtmb29kX3gsIGZvb2RfeV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9yYW5kb21seSBwaWNrIDEyIGZvb2QuLi5cbiAgZnVuY3Rpb24gcmFuZG9tX2Zvb2RfaWR4KCkge1xuICAgIGxldCBpZHggPSAyO1xuXG4gICAgd2hpbGUgKGZvb2RzX2lkeC5zaXplIDwgOCkge1xuICAgICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9vZF91cmxzLmxlbmd0aCk7XG4gICAgICBmb29kc19pZHguYWRkKGlkeCk7XG4gICAgfVxuICAgIGZvb2RzX2lkeC5mb3JFYWNoKGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb29kX2luaXQoKSB7XG4gICAgcmFuZG9tX2Zvb2RfaWR4KCk7XG4gICAgZm9vZHNfaWR4LmZvckVhY2goaSA9PiB7XG4gICAgICBsZXQgbm90X2ltcG9ydGFudCA9IGZvb2RfdXJsc1tpXS5zcGxpdChcIi9cIik7XG4gICAgICBsZXQgZm9vZF9rZXkgPSBub3RfaW1wb3J0YW50W25vdF9pbXBvcnRhbnQubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTQpO1xuXG4gICAgICBsZXQgcG9zX2FyciA9IHNldFBvcygpO1xuICAgICAgZm9vZHNbZm9vZF9rZXldID0gbmV3IEZvb2QocG9zX2FyclswXSwgcG9zX2FyclsxXSwgZm9vZF91cmxzW2ldKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvb2RzW2Zvb2Rfa2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3X2Zvb2QoKSB7XG4gICAgbGV0IGZvb2Rfa2V5cyA9IE9iamVjdC5rZXlzKGZvb2RzKTtcbiAgICBsZXQgZWFjaEZvb2Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kX2tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVhY2hGb29kID0gZm9vZHNbZm9vZF9rZXlzW2ldXTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIGVhY2hGb29kLmZvb2RfaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGVhY2hGb29kLndpZHRoLFxuICAgICAgICBlYWNoRm9vZC5oZWlnaHQsXG4gICAgICAgIGVhY2hGb29kLmZvb2RfeCxcbiAgICAgICAgZWFjaEZvb2QuZm9vZF95LFxuICAgICAgICBlYWNoRm9vZC53aWR0aCxcbiAgICAgICAgZWFjaEZvb2QuaGVpZ2h0XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDI7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzcpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh4ZnJhbWVJZHggPj0gOCkge1xuICAgICAgICB4ZnJhbWVJZHggPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB5ZnJhbWVJZHggPSAxO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7XG4gICAgICB1cFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSAyKSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDM7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh4ZnJhbWVJZHggPj0gMikge1xuICAgICAgICB4ZnJhbWVJZHggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB5ZnJhbWVJZHggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAzOSkge1xuICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzcpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDQwKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdfY2F0KCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBjYXQuY2F0X2ltYWdlLFxuICAgICAgeGZyYW1lSWR4ICogY2F0LndpZHRoLFxuICAgICAgeWZyYW1lSWR4ICogY2F0LmhlaWdodCArIDEsXG4gICAgICBjYXQud2lkdGgsXG4gICAgICBjYXQuaGVpZ2h0LFxuICAgICAgY2F0LngsXG4gICAgICBjYXQueSxcbiAgICAgIGNhdC53aWR0aCxcbiAgICAgIGNhdC5oZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbSgpIHtcbiAgICBsZXQgZm9vZHg7XG4gICAgbGV0IGZvb2R5O1xuICAgIGxldCBlYWNoRm9vZDtcbiAgICBsZXQgZm9vZF9rZXlzID0gT2JqZWN0LmtleXMoZm9vZHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9vZF9rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlYWNoRm9vZCA9IGZvb2RzW2Zvb2Rfa2V5c1tpXV07XG5cbiAgICAgIGZvb2R4ID0gZWFjaEZvb2QuZm9vZF94O1xuXG4gICAgICBmb29keSA9IGVhY2hGb29kLmZvb2RfeTtcbiAgICAgIGlmIChcbiAgICAgICAgZm9vZHggPD0gY2F0LnggJiZcbiAgICAgICAgZm9vZHggKyAzMiA+PSBjYXQueCAmJlxuICAgICAgICBmb29keSA8PSBjYXQueSAmJlxuICAgICAgICBmb29keSArIDMyID49IGNhdC55XG4gICAgICApIHtcbiAgICAgICAgZG9ub3RlYXQuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICBpZiAoZm9vZF9rZXlzW2ldID09PSBlKSB7XG4gICAgICAgICAgICBsaWZlIC09IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaWZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgZm9vZHNbZm9vZF9rZXlzW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb29kX3RvX2F2b2lkKGxldmVsKSB7XG4gICAgd2hpbGUgKGRvbm90ZWF0LnNpemUgPCBsZXZlbCkge1xuICAgICAgZG9ub3RlYXQuYWRkKFxuICAgICAgICBPYmplY3Qua2V5cyhmb29kcylbXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogT2JqZWN0LmtleXMoZm9vZHMpLmxlbmd0aClcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgZm9vZHNbZV0uZm9vZF9pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgZm9vZHNbZV0ud2lkdGgsXG4gICAgICAgIGZvb2RzW2VdLmhlaWdodCxcbiAgICAgICAgZm9vZHNbZV0uZm9vZF94LFxuICAgICAgICBmb29kc1tlXS5mb29kX3ksXG4gICAgICAgIGZvb2RzW2VdLndpZHRoLFxuICAgICAgICBmb29kc1tlXS5oZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBkcmF3X2Zvb2QoKTtcbiAgICBkcmF3X2NhdCgpO1xuXG4gICAgLy8gICBpZiAocmlnaHRQcmVzc2VkICYmIGNhdC54IDwgY2FudmFzLndpZHRoIC0gY2F0LndpZHRoKSB7XG5cbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICBjYXQueCArPSAzO1xuICAgIH0gZWxzZSBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgIGNhdC54IC09IDM7XG4gICAgfSBlbHNlIGlmICh1cFByZXNzZWQpIHtcbiAgICAgIGNhdC55IC09IDM7XG4gICAgfSBlbHNlIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgY2F0LnkgKz0gMztcbiAgICB9XG4gICAgZGVsZXRlSXRlbSgpO1xuICB9XG5cbiAgZm9vZF9pbml0KCk7XG4gIGZvb2RfdG9fYXZvaWQobGV2ZWwpO1xuICBiZWZvcmUoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0SW50ZXJ2YWwoZHJhdywgMTIpO1xuICB9LCAyMDAwKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==