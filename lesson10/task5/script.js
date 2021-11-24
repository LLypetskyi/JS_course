// Створіть функцію sayHi. Яка здоровається з тобою згідно з тим імям, яке ти введеш як параметер

console.log(" ---------function declaration -------");

function sayHi() {
  let userName = prompt("What is your name?");
  alert("Glad to see you, " + userName);
}
sayHi();

console.log(" ---------function expression -------");

let getName = function sayHi() {
  let userName = prompt("What is your name?");
  alert("Glad to see you, " + userName);
};
// sayHi();

getName();
