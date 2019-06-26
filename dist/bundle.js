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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBLFlBQVksbUJBQU8sQ0FBQyw4QkFBVTtBQUM5QixhQUFhLG1CQUFPLENBQUMsZ0NBQVc7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGdDQUFXOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN6YUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIENhdCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgdGhpcy5oZWlnaHQgPSAzMjtcbiAgICB0aGlzLm1haW5XaWR0aCA9IDEyODtcbiAgICB0aGlzLm1haW5IZWlnaHQgPSAxMjg7XG4gICAgdGhpcy54ID0gKHggLSB0aGlzLndpZHRoKSAvIDI7XG4gICAgdGhpcy55ID0gKHkgLSB0aGlzLmhlaWdodCkgLyAyO1xuICAgIHRoaXMubWFpblggPSAoeCAtIHRoaXMubWFpbldpZHRoKSAvIDI7XG4gICAgdGhpcy5tYWluWSA9ICh5IC0gdGhpcy5tYWluSGVpZ2h0KSAvIDI7XG4gICAgdGhpcy5jYXRfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNhdE1haW5wYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jYXRfaW1hZ2Uuc3JjID0gXCIuL3NyYy9pbWcvZmF0Y2F0LnBuZ1wiO1xuICAgIHRoaXMuY2F0TWFpbnBhZ2Uuc3JjID0gXCIuL3NyYy9pbWcvbWFpbi1jYXQucG5nXCI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXQ7XG4iLCJjbGFzcyBGb29kIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaW1nX3VybCkge1xuICAgIHRoaXMud2lkdGggPSAzMjtcbiAgICB0aGlzLmhlaWdodCA9IDMyO1xuICAgIHRoaXMuZm9vZF94ID0geDtcbiAgICB0aGlzLmZvb2RfeSA9IHk7XG4gICAgdGhpcy5mb29kX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5mb29kX2ltYWdlLnNyYyA9IGltZ191cmw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb29kO1xuIiwiY29uc3QgQ2F0ID0gcmVxdWlyZShcIi4vY2F0LmpzXCIpO1xuY29uc3QgV2FsbCA9IHJlcXVpcmUoXCIuL3dhbGwuanNcIik7XG5jb25zdCBGb29kID0gcmVxdWlyZShcIi4vZm9vZC5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICBsZXQgeSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICBsZXQgeGZyYW1lSWR4ID0gMDtcbiAgbGV0IHlmcmFtZUlkeCA9IDA7XG4gIGxldCBsaWZlID0gMztcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGxldmVsID0gMjtcbiAgbGV0IGZvb2RzO1xuICBsZXQgd2luID0gZmFsc2U7XG4gIGxldCBsb3NlID0gZmFsc2U7XG4gIGxldCBkb25vdGVhdGFycjtcbiAgbGV0IG1pc3MgPSBmYWxzZTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtcGFnZVwiKTtcbiAgbGV0IGdhbWVJbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbnRyb1wiKTtcbiAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKTtcbiAgbGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcbiAgbGV0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tcIik7XG5cbiAgY29uc3QgZm9vZF91cmxzID0gW1xuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYXBwbGUucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iYW5hbmEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9iZWVyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvYnVyZ2VyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvY2FrZS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2NoZXJyeS5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2Nvcm4ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZGFuZ28ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9kb251dC5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL2ZyaWVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvZ3JhcGVzLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvbGVtb24ucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9tZWF0LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGVhY2gucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9wZWFyLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGllLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2QvcGlzaGEucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9yYW1lbi5wbmdcIixcbiAgICBcIi4vc3JjL2ltZy9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zcGFnaGV0dGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICAgIFwiLi9zcmMvaW1nL2Zvb2Qvc3VzaGkucG5nXCIsXG4gICAgXCIuL3NyYy9pbWcvZm9vZC9zd2VldF9wb3RhdG8ucG5nXCJcbiAgXTtcbiAgbGV0IGZvb2RQb3M7XG4gIGxldCBmb29kc19pZHggPSBuZXcgU2V0KCk7XG4gIGxldCBkb25vdGVhdDtcblxuICAvLyAgIGNvbnN0IGZvb2RfY29yZCA9IFtbeCArIDkwLCB5ICsgOTBdLCBbeCArIDEwMCwgeSArIDEwMF1dO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBjb25zdCBjYXQgPSBuZXcgQ2F0KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCgpO1xuXG4gIGZ1bmN0aW9uIHNldFBvcygpIHtcbiAgICBmb29kUG9zID0gW107XG4gICAgbGV0IGFsbGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgZm9vZF94O1xuICAgIGxldCBmb29kX3k7XG4gICAgd2hpbGUgKCFhbGxkb25lKSB7XG4gICAgICBhbGxkb25lID0gdHJ1ZTtcbiAgICAgIGZvb2RfeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XG4gICAgICBmb29kX3kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGlmIChmb29kX3ggPCAyMiB8fCBmb29kX3ggPiBjYW52YXMud2lkdGggLSAyMikge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZvb2RfeSA8IDIyIHx8IGZvb2RfeSA+IGNhbnZhcy5oZWlnaHQgLSAyMikge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kUG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgKGZvb2RQb3NbaV1bMF0gLSBmb29kX3ggPCAtMjAgfHwgZm9vZFBvc1tpXVswXSAtIGZvb2RfeCA+IDIwKSAmJlxuICAgICAgICAgICAgKGZvb2RQb3NbaV1bMV0gLSBmb29kX3kgPCAtMjAgfHwgZm9vZFBvc1tpXVsxXSAtIGZvb2RfeSA+IDIwKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWxsZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICEoXG4gICAgICAgICAgKGNhdC54IC0gZm9vZF94IDwgLTIwIHx8IGNhdC54IC0gZm9vZF94ID4gMjApICYmXG4gICAgICAgICAgKGNhdC55IC0gZm9vZF95IDwgLTIwIHx8IGNhdC55IC0gZm9vZF95ID4gMjApXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBhbGxkb25lID0gZmFsc2U7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFsbGRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgZm9vZFBvcy5wdXNoKFtmb29kX3gsIGZvb2RfeV0pO1xuICAgICAgICByZXR1cm4gW2Zvb2RfeCwgZm9vZF95XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL3Bvc2l0aW9uIGNoZWNrXG5cbiAgLy9yYW5kb21seSBwaWNrIDEyIGZvb2QuLi5cbiAgZnVuY3Rpb24gcmFuZG9tX2Zvb2RfaWR4KCkge1xuICAgIGxldCBpZHggPSAyO1xuXG4gICAgd2hpbGUgKGZvb2RzX2lkeC5zaXplIDwgOCkge1xuICAgICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9vZF91cmxzLmxlbmd0aCk7XG4gICAgICBmb29kc19pZHguYWRkKGlkeCk7XG4gICAgfVxuICAgIGZvb2RzX2lkeC5mb3JFYWNoKGUgPT4ge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9vZF9pbml0KCkge1xuICAgIGZvb2RzID0ge307XG4gICAgcmFuZG9tX2Zvb2RfaWR4KCk7XG4gICAgZm9vZHNfaWR4LmZvckVhY2goaSA9PiB7XG4gICAgICBsZXQgbm90X2ltcG9ydGFudCA9IGZvb2RfdXJsc1tpXS5zcGxpdChcIi9cIik7XG4gICAgICBsZXQgZm9vZF9rZXkgPSBub3RfaW1wb3J0YW50W25vdF9pbXBvcnRhbnQubGVuZ3RoIC0gMV0uc2xpY2UoMCwgLTQpO1xuXG4gICAgICBsZXQgcG9zX2FyciA9IHNldFBvcygpO1xuICAgICAgZm9vZHNbZm9vZF9rZXldID0gbmV3IEZvb2QocG9zX2FyclswXSwgcG9zX2FyclsxXSwgZm9vZF91cmxzW2ldKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vZm9vZCBkcmF3aW5nIGZ1bmN0aW9uIVxuICBmdW5jdGlvbiBkcmF3Rm9vZFRlc3QoKSB7XG4gICAgbGV0IG9uZUZvb2QgPSBPYmplY3Qua2V5cyhmb29kcyk7XG4gICAgbGV0IGNob3NlbiA9IGZvb2RzW29uZUZvb2RbMF1dO1xuICAgIGxldCBpbm5lclBvc2l0aW9uID0gW1xuICAgICAgW2NhdC54IC0gMjgsIGNhdC55IC0gMjVdLFxuICAgICAgW2NhdC54ICsgNTUsIGNhdC55ICsgMzBdLFxuICAgICAgW2NhdC54IC0gNTAsIGNhdC55ICsgNjBdLFxuICAgICAgW2NhdC54ICsgMzAsIGNhdC55IC0gNjVdLFxuICAgICAgW2NhdC54ICsgNjAsIGNhdC55IC0gNDBdLFxuICAgICAgW2NhdC54ICsgMTUsIGNhdC55ICsgNzVdLFxuICAgICAgW2NhdC54IC0gNzUsIGNhdC55ICsgMl0sXG4gICAgICBbY2F0LnggLSAzNywgY2F0LnkgLSA3NV0sXG4gICAgICBbY2F0LnggKyA5NSwgY2F0LnkgLSAzMF0sXG4gICAgICBbY2F0LnggLSAxMDAsIGNhdC55IC0gODBdLFxuICAgICAgW2NhdC54ICsgMTAwLCBjYXQueSArIDcwXSxcbiAgICAgIFtjYXQueCArIDgwLCBjYXQueSAtIDEwMF0sXG4gICAgICBbY2F0LnggLSA1MCwgY2F0LnkgKyAxMDBdXG4gICAgXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5uZXJQb3NpdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgY2hvc2VuLmZvb2RfaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIGNob3Nlbi53aWR0aCxcbiAgICAgICAgY2hvc2VuLmhlaWdodCxcbiAgICAgICAgaW5uZXJQb3NpdGlvbltpXVswXSxcbiAgICAgICAgaW5uZXJQb3NpdGlvbltpXVsxXSxcbiAgICAgICAgY2hvc2VuLndpZHRoICogMC44LFxuICAgICAgICBjaG9zZW4uaGVpZ2h0ICogMC44XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGRyYXdfZm9vZCgpIHtcbiAgLy8gICBsZXQgZm9vZF9rZXlzID0gT2JqZWN0LmtleXMoZm9vZHMpO1xuICAvLyAgIGxldCBlYWNoRm9vZDtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2Rfa2V5cy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgZWFjaEZvb2QgPSBmb29kc1tmb29kX2tleXNbaV1dO1xuICAvLyAgICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgICAgZWFjaEZvb2QuZm9vZF9pbWFnZSxcbiAgLy8gICAgICAgMCxcbiAgLy8gICAgICAgMCxcbiAgLy8gICAgICAgZWFjaEZvb2Qud2lkdGgsXG4gIC8vICAgICAgIGVhY2hGb29kLmhlaWdodCxcbiAgLy8gICAgICAgZWFjaEZvb2QuZm9vZF94LFxuICAvLyAgICAgICBlYWNoRm9vZC5mb29kX3ksXG4gIC8vICAgICAgIGVhY2hGb29kLndpZHRoICogMC44LFxuICAvLyAgICAgICBlYWNoRm9vZC5oZWlnaHQgKiAwLjhcbiAgLy8gICAgICk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDgpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMjtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDE7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAoeGZyYW1lSWR4ID49IDIpIHtcbiAgICAgICAgeGZyYW1lSWR4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgeWZyYW1lSWR4ID0gMztcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHhmcmFtZUlkeCA+PSAyKSB7XG4gICAgICAgIHhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHlmcmFtZUlkeCA9IDA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd19jYXQoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGNhdC5jYXRfaW1hZ2UsXG4gICAgICB4ZnJhbWVJZHggKiBjYXQud2lkdGgsXG4gICAgICB5ZnJhbWVJZHggKiBjYXQuaGVpZ2h0ICsgMSxcbiAgICAgIGNhdC53aWR0aCxcbiAgICAgIGNhdC5oZWlnaHQsXG4gICAgICBjYXQueCxcbiAgICAgIGNhdC55LFxuICAgICAgY2F0LndpZHRoICogMS4yLFxuICAgICAgY2F0LmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKCkge1xuICAgIGxldCBmb29keDtcbiAgICBsZXQgZm9vZHk7XG4gICAgbGV0IGVhY2hGb29kO1xuICAgIGxldCBmb29kX2tleXMgPSBPYmplY3Qua2V5cyhmb29kcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kX2tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVhY2hGb29kID0gZm9vZHNbZm9vZF9rZXlzW2ldXTtcblxuICAgICAgZm9vZHggPSBlYWNoRm9vZC5mb29kX3g7XG4gICAgICBmb29keSA9IGVhY2hGb29kLmZvb2RfeTtcbiAgICAgIGlmIChcbiAgICAgICAgZm9vZHggLSA3IDw9IGNhdC54ICYmXG4gICAgICAgIGZvb2R4ICsgNDAgPj0gY2F0LnggKyBjYXQud2lkdGggJiZcbiAgICAgICAgZm9vZHkgLSA3IDw9IGNhdC55ICYmXG4gICAgICAgIGZvb2R5ICsgNDAgPj0gY2F0LnkgKyBjYXQuaGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgZG9ub3RlYXQuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICBpZiAoZm9vZF9rZXlzW2ldID09PSBlKSB7XG4gICAgICAgICAgICBsaWZlIC09IDE7XG4gICAgICAgICAgICBtaXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgZm9vZHNbZm9vZF9rZXlzW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb29kX3RvX2F2b2lkKGxldmVsKSB7XG4gICAgZG9ub3RlYXRhcnIgPSBbXTtcbiAgICBkb25vdGVhdCA9IG5ldyBTZXQoKTtcbiAgICB3aGlsZSAoZG9ub3RlYXQuc2l6ZSA8IGxldmVsKSB7XG4gICAgICBkb25vdGVhdC5hZGQoXG4gICAgICAgIE9iamVjdC5rZXlzKGZvb2RzKVtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBPYmplY3Qua2V5cyhmb29kcykubGVuZ3RoKVxuICAgICAgICBdXG4gICAgICApO1xuICAgIH1cbiAgICBkb25vdGVhdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgZG9ub3RlYXRhcnIucHVzaChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RleHQobGV2ZWwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5mb250ID0gXCI1MHB4IEhlbHZldGljYSwgc2Fuc1wiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC5maWxsVGV4dChgKiBMZXZlbCAke2xldmVsfSAqYCwgY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICBjdHguZmlsbFRleHQoYERvIG5vdCBlYXRgLCBjYW52YXMud2lkdGggLyAyLCAyMjApO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlKGUpIHtcbiAgICBkcmF3QmFja2dyb3VuZCgpO1xuICAgIGRyYXdUZXh0KDIpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGZvb2RzW2VdLmZvb2RfaW1hZ2UsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGZvb2RzW2VdLndpZHRoLFxuICAgICAgZm9vZHNbZV0uaGVpZ2h0LFxuICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGZvb2RzW2VdLndpZHRoLFxuICAgICAgY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICBmb29kc1tlXS53aWR0aCAqIDEuMixcbiAgICAgIGZvb2RzW2VdLmhlaWdodCAqIDEuMlxuICAgICk7XG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZmZjY1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIC8vZHJhdyB3YWxsc1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY2FudmFzLndpZHRoIC8gMzIgPiBpKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICB3YWxsLndhbGxJbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHQsXG4gICAgICAgIGkgKiB3YWxsLndpZHRoLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHdhbGwud2FsbEltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB3YWxsLndpZHRoLFxuICAgICAgICB3YWxsLmhlaWdodCxcbiAgICAgICAgaSAqIHdhbGwud2lkdGgsXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSB3YWxsLmhlaWdodCxcbiAgICAgICAgd2FsbC53aWR0aCxcbiAgICAgICAgd2FsbC5oZWlnaHRcbiAgICAgICk7XG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gZHJhd19mb29kKCk7XG4gICAgZHJhd0Zvb2RUZXN0KCk7XG4gICAgZHJhd19jYXQoKTtcblxuICAgIC8vICAgaWYgKHJpZ2h0UHJlc3NlZCAmJiBjYXQueCA8IGNhbnZhcy53aWR0aCAtIGNhdC53aWR0aCkge1xuXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCAmJiBjYXQueCA8IGNhbnZhcy53aWR0aCAtIGNhdC53aWR0aCAtIHdhbGwud2lkdGgpIHtcbiAgICAgIGNhdC54ICs9IDM7XG4gICAgfSBlbHNlIGlmIChsZWZ0UHJlc3NlZCAmJiBjYXQueCA+IHdhbGwud2lkdGgpIHtcbiAgICAgIGNhdC54IC09IDM7XG4gICAgfSBlbHNlIGlmICh1cFByZXNzZWQgJiYgY2F0LnkgPiB3YWxsLndpZHRoIC0gOSkge1xuICAgICAgY2F0LnkgLT0gMztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZG93blByZXNzZWQgJiZcbiAgICAgIGNhdC55IDwgY2FudmFzLmhlaWdodCAtIGNhdC53aWR0aCAtIHdhbGwud2lkdGggLSA1XG4gICAgKSB7XG4gICAgICBjYXQueSArPSAzO1xuICAgIH1cbiAgICBkZWxldGVJdGVtKCk7XG4gIH1cbiAgbGV0IGk7XG4gIGZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgaSsrO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGZvb2RfaW5pdCgpO1xuICAgICAgZm9vZF90b19hdm9pZChsZXZlbCk7XG5cbiAgICAgIGxldCBiZWZvcmVTZXRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBiZWZvcmUoZG9ub3RlYXRhcnIuc2hpZnQoKSk7XG4gICAgICAgIGlmICghZG9ub3RlYXRhcnIubGVuZ3RoKSBjbGVhckludGVydmFsKGJlZm9yZVNldEludGVydmFsKTtcbiAgICAgIH0sIDcwMCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZHJhd0NhdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghbWlzcykge1xuICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgICAgbWlzcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSkudGhlbihnYW1lKTtcbiAgfVxuXG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgLy9nYW1lIHN0YXJ0IGhlcmUgbWF5YmUuLi5cbiAgfSk7XG5cbiAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBnYW1lSW50cm8uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH0pO1xuICBtYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZ2FtZSgpO1xufSk7XG4iLCJjbGFzcyBXYWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aWR0aCA9IDMyO1xuICAgIHRoaXMuaGVpZ2h0ID0gMzI7XG4gICAgdGhpcy53YWxsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLndhbGxJbWFnZS5zcmMgPSBcIi4vc3JjL2ltZy9mZW5jZS5wbmdcIjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9