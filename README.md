# FATCAT - In Progress

[Live Demo](https://nurinuriprettynuri.github.io/fatcat/)

An interactive game which tests users’ short-term memory… also there’s a cat!

![](fatcat.gif)

# Technologies

FATCAT is built using JavaScript, HTML Canvas, CSS

# Features

## Collision detection between objects
The code snippet below is in index.js file which handles the interaction between the cat and the food items

```
// index.js
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
```

This code snippet shows the check for collision between the cat and the food items. The function keep checking the distance between cat and food items and once they're positions are overlapped, food disappear! If the cat hit the position of the forbidden food position, it's going to miss one life
