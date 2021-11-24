// * Створіть функцію, яка загадує рандомне число від 1 до 10.
// Ти повинен вгадати, яке число загадав комп'ютер ввівши його в відповідному prompt().
// Після цього комп'ютер говорить тобі чи ти вгадав загадане ним число чи ні

let userNumber = +prompt("Please guess the number from 1 to 10");

// let randNumber =
function randomNumber() {
  let rez = Math.floor(Math.random() * 11);
  console.log("Сomputer selected number - " + rez);
  if (rez === userNumber) {
    alert("Сongratulations! You guessed the number");
  } else alert("Unfortunately you didn't guess");
}

randomNumber();
