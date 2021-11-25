// *Напишіть функцію, яка повертає всі цілі числа в діапазоні використовуючи рекурсію (x, y )

let x = +prompt("Enter the beginning of the numeric range");
let y = +prompt("Enter the end of the numeric range");

function getIntNumbers(x, y) {
  console.log(x);
  x++;
  if (x > y) {
    return x;
  }
  getIntNumbers(x, y);
}
getIntNumbers(x, y);
