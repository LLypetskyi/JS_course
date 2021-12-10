//Написати функцію, яка пройдеться по масиву,
// і поверне масив у якому не буде значень які повторювалися.
// Тобто початковий масив - [1, 3, 5, 3, 2, 6, 3, 6, 2],
// має стати  [1, 3, 5, 2, 6].
// Для тестування буду пробувати масиви з різними типами даних і різною довжиною

// Варіант 1 через filter
const inputArrayOne = [1, 3, 5, 3, 2, 6, 3, 6, 2];

let resultArrayOne = inputArrayOne.filter(
  (item, index) => inputArrayOne.indexOf(item) === index
);
console.log("version #2 with method filter");
console.log("this is the original input array ", inputArrayOne);
console.log("this is the result array ", resultArrayOne);

// Варіант 2 через Set
const inputArrayTwo = [1, 3, 5, 3, 2, 6, 3, 6, 2];
let resultArrayTwo = Array.from(new Set(inputArrayTwo));
console.log("version #2 with method Set");
console.log("this is the original input array ", inputArrayTwo);
console.log("this is the result array ", resultArrayTwo);