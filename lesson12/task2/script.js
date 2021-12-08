// У вас є масиви (які складаються з двох елементів) в масиві.
// (Ось приблизний приклад: [[“name”, “Andrew”], [“age”, 24]]).
// Потрібно написати функцію яка поверне об`єкт
// ключ-значення такого типу {“name”: “Andrew”, “age”: 24}.
// Для тестування буду пробувати масиви з різними типами даних і різною довжиною

function returnObject(inputArray) {
  let outputObject = {};
  for (const item of inputArray) {
    outputObject[item[0]] = item[1];
  }
  return outputObject;
}

const inputArray = [
  ["name", "Igor"],
  ["age", 24],
  ["phone", "+380972326"],
  ["sity", "Lviv"],
  ["index", 79000],
];
console.log("this is the original input array ", inputArray);
console.log("this is the result object ", returnObject(inputArray));
