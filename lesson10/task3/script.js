// Створіть функцію question.
// Якщо користувач натисне yes - виконайте функцію sayYes,
// якщо No - виконайте функцію sayNo

console.log(" ---------function declaration -------");

function sayYes() {
  alert("Please pass!");
}

function sayNo() {
  alert("Maybe milk?");
}

function question(sayYes, sayNo) {
  let answer = confirm("Are you an adult ?");
  if (answer) {
    sayYes();
  } else {
    sayNo();
  }
}

question(sayYes, sayNo);

console.log(" ---------function expression -------");

let userSayYes = function sayYes() {
  alert("Please pass!");
}

let userSayNo = function sayNo() {
  alert("Maybe milk?");
}

let userAnswer = function question(sayYes, sayNo) {
  let answer = confirm("Are you an adult ?");
  if (answer) {
    userSayYes();
  } else {
    userSayNo();
  }
}

userAnswer();