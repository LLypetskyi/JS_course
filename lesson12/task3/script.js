// // Написати функцію в якому можна передати масив чисел
// у якому повторяються якісь числа - наприклад [1, 3, 5, 3, 2, 6, 3])
// і якесь число як параметр (наприклад - 3).
// Потрібно повернути масив без цього числа.
// Для тестування буду пробувати масиви з різними типами даних і різною довжиною
// Наприклад:
// const arr = [1, 3, 5, 3, 2, 6, 3];
// Має стати:
// const arr2 = [1, 5, 2, 6];

// Усі ф-ції в дз мають бути чисті та зберігати вхідний масив і утворюють новий результуючий масив

function returnClearArray(inputArray, number) {
  let outputArray = [];
  for (const item of inputArray) {
    if (item !== number) outputArray.push(item);
  }
  return outputArray;
}

const inputArray = [1, 3, 5, 3, 2, 6, 3, "ghg"];
const number = +prompt("Введіть небажане число :) ?");

console.log("this is the original input array ", inputArray);
console.log("this is the result array ", returnClearArray(inputArray, number));
