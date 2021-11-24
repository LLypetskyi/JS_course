// // Створіть функцію, яка додає 3 цифри і виводить результат в перемінну, в консоль, в алерт

console.log(" ---------function declaration -------");

function getSumThreeNumbers(a, b, c) {
  return a + b + c;
}

let rezult = getSumThreeNumbers(5, 15, 45);
console.log(
  "Результат виконання функції суми трьох заданих чисел 5, 15, 45 виведений в змінну  - " +
    rezult
);

console.log(
  "Результат виконання функції суми трьох заданих чисел 4, 5, 50 виведений в консоль  - " +
    getSumThreeNumbers(4, 5, 50)
);

alert(
  "Результат виконання функції суми трьох заданих чисел 6, 7, 8 - виведений алертом " +
    getSumThreeNumbers(6, 7, 8)
);


console.log(" ---------function expression -------");

let getRezultSumm = function getSumThreeNumbers(a, b, c) {
  return a + b + c; 
};

let rez = getRezultSumm(5, 15, 45);

console.log(
  "Результат виконання функції суми трьох заданих чисел 5, 15, 45 виведений в змінну  - " +
    rez
);

console.log(
  "Результат виконання функції суми трьох заданих чисел 4, 5, 50 виведений в консоль  - " +
    getRezultSumm(4, 5, 50)
);

alert(
  "Результат виконання функції суми трьох заданих чисел 6, 7, 8 - виведений алертом " +
    getRezultSumm(6, 7, 8)
);
