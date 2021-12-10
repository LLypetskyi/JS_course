// Написати функцію яка приймає два масиви як аргумент, і повертає масив значень які є спільними для двох масивів.
// Для тестування буду пробувати масиви з різними типами даних і різною довжиною
// Наприклад:
// const arr1 = [1, 2];
// const arr2 = [2, 3];
// Спільне значення повертаємо - [2];

function CreateСommonNumbers(arr1, arr2) {
  let rezArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) rezArray.push(arr1[i]);
    }
  }
  return rezArray;
}

const arr1 = [1, 2, 5, 8, 10, 15, 3];
const arr2 = [2, 3, 15, 9, 17, 21, "Vova"];

// // const rezArray = мав би бути  [2, 15];

const rezArray = CreateСommonNumbers(arr1, arr2);

console.log("Це вхідний масив #1 ", arr1);
console.log("Це вхідний масив #2 ", arr2);
console.log(
  "Це результуючий масив спільних чисел двох вхідних масивів ",
  rezArray
);
