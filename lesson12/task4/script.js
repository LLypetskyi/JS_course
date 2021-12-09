//Написати функцію, яка пройдеться по масиву,
// і поверне масив у якому не буде значень які повторювалися.
// Тобто початковий масив - [1, 3, 5, 3, 2, 6, 3, 6, 2],
// має стати  [1, 3, 5, 2, 6].
// Для тестування буду пробувати масиви з різними типами даних і різною довжиною

// Усі ф-ції в дз мають бути чисті та зберігати вхідний масив і утворюють новий результуючий масив
//  НЕ ПРАЦЮЄ ПОКИ :)

function returnClearArray(inputArray) {
  const outputArray = [];
  inputArray.sort();
  // console.log(inputArray);
  for (const item of inputArray) {
    if (item[0] !== item[1]) {
      outputArray.push(item[0]); //додаєм перший елемент в рез масив
      // inputArray.shift(); //видаляєм перший елемент з вхідного масиву
    }
  }
  return outputArray;
}

const inputArray = [1, 3, 5, 3, 2, 6, 3, 6, 2];

console.log("this is the original input array ", inputArray);
console.log("this is the result array ", returnClearArray(inputArray));
