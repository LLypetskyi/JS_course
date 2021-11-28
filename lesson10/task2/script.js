// Створіть аналогічну функцію ,але яка множить 2 цифри,
// 3 цифри,
// виводить (підносить?) першу цифру ( перший аргумент ) в степінь 2 цифри ( 2 аргумент )

console.log(" ---------function declaration -------");

function multTwoNumbers(firstArg, secondArg) {
  return firstArg * secondArg;
}

function multThreeNumbers(firstArg, secondArg, thirdArg) {
  return firstArg * secondArg * thirdArg;
}

function calcDegree(firstArg, secondArg) {
  return Math.pow(firstArg, secondArg);
}

console.log(
  "Результат множення двох чисел 22 та 66 - " + multTwoNumbers(22, 66)
);
console.log(
  "Результат множення трьох чисел 22, 66 та 100 - " +
  multThreeNumbers(22, 66, 100)
);
console.log("2 в степені 3 = " + calcDegree(2, 3));

console.log(" ---------function expression -------");

let multTwoNum = function multTwoNumbers(firstArg, secondArg) {
  return firstArg * secondArg;
};

let multThreeNum = function multThreeNumbers(firstArg, secondArg, thirdArg) {
  return firstArg * secondArg * thirdArg;
};

let elevationDegree = function degree(firstArg, secondArg) {
  return Math.pow(firstArg, secondArg);
};

console.log("Результат множення двох чисел 12 та 14 - " + multTwoNum(12, 14));
console.log(
  "Результат множення трьох чисел 12, 14 та 100 - " + multThreeNum(12, 14, 100)
);
console.log("3 в степені 4 = " + elevationDegree(3, 4));
