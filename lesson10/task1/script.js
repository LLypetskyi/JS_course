// // Створіть функцію, яка додає 3 цифри і виводить результат в перемінну, в консоль, в алерт

console.log(" ---------function declaration -------");

function sumThreeNumbers(a, b, c) {
  let sum = a + b + c;
  return sum;
}

let rezult = sumThreeNumbers(5, 15, 45);
console.log(
  "Результат виконання функції суми трьох заданих чисел 5, 15, 45 виведений в змінну  - " +
    rezult
);

console.log(
  "Результат виконання функції суми трьох заданих чисел 4, 5, 50 виведений в консоль  - " +
    sumThreeNumbers(4, 5, 50)
);

alert(
  "Результат виконання функції суми трьох заданих чисел 6, 7, 8 - виведений алертом " +
    sumThreeNumbers(6, 7, 8)
);


console.log(" ---------function expression -------");

let rezultSumm = function sumThreeNumbers(a, b, c) {
  let sum = a + b + c;
  return sum;
};

let rez = rezultSumm(5, 15, 45);

console.log(
  "Результат виконання функції суми трьох заданих чисел 5, 15, 45 виведений в змінну  - " +
    rez
);

console.log(
  "Результат виконання функції суми трьох заданих чисел 4, 5, 50 виведений в консоль  - " +
    rezultSumm(4, 5, 50)
);

alert(
  "Результат виконання функції суми трьох заданих чисел 6, 7, 8 - виведений алертом " +
    rezultSumm(6, 7, 8)
);
