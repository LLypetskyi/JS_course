// Створіть аналогічну функцію ,але яка множить 2 цифри, 
// 3 цифри, 
// виводить (підносить?) першу цифру ( перший аргумент ) в степінь 2 цифри ( 2 аргумент )

console.log(" ---------function declaration -------");

function multTwoNumbers (firstArg, secondArg){
  let rezOfMultiplication = firstArg * secondArg;
  return rezOfMultiplication;
  }

function multThreeNumbers(firstArg, secondArg, thirdArg){
  let rezOfMultiplication = firstArg * secondArg * thirdArg;
  return rezOfMultiplication;
}

function degree (firstArg, secondArg){
let rezOfDegree = Math.pow(firstArg, secondArg);
return rezOfDegree;
}

console.log ('Результат множення двох чисел 22 та 66 - ' + multTwoNumbers(22, 66));
console.log ('Результат множення трьох чисел 22, 66 та 100 - ' + multThreeNumbers(22, 66, 100));
console.log ('2 в степені 3 = ' + degree(2, 3));

console.log(" ---------function expression -------");

let multTwoNum = function multTwoNumbers (firstArg, secondArg){
  let rezOfMultiplication = firstArg * secondArg;
  return rezOfMultiplication;
  }

let multThreeNum = function multThreeNumbers(firstArg, secondArg, thirdArg){
  let rezOfMultiplication = firstArg * secondArg * thirdArg;
  return rezOfMultiplication;
}

let elevationDegree = function degree (firstArg, secondArg){
let rezOfDegree = Math.pow(firstArg, secondArg);
return rezOfDegree;
}

console.log ('Результат множення двох чисел 12 та 14 - ' + multTwoNum (12, 14));
console.log ('Результат множення трьох чисел 12, 14 та 100 - ' + multThreeNum (22, 66, 100));
console.log ('3 в степені 4 = ' + elevationDegree (3, 4));