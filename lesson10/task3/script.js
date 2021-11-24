// Створіть функцію question.
// Якщо користувач натисне yes - виконайте функцію sayYes,
// якщо No - виконайте функцію sayNo

console.log(" ---------function declaration -------");

function sayYes() {
  alert("Прошу проходити!");
}

function sayNo() {
  alert("Можливо, молока ?");
}

function question(sayYes, sayNo) {
  let answer = confirm("Ви повнолітні ?");
  if (answer) {
    sayYes();
  } else {
    sayNo();
  }
}

question(sayYes, sayNo);

console.log(" ---------function expression -------");

let userSayYes = function sayYes() {
  alert("Прошу проходити!");
}

let userSayNo = function sayNo() {
  alert("Можливо, молока ?");
}

let userAnswer = function question(sayYes, sayNo) {
  let answer = confirm("Ви повнолітні ?");
  if (answer) {
    userSayYes();
  } else {
    userSayNo();
  }
}

userAnswer();