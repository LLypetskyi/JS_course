// * Функція яка повертає факторіал параметра використовуючи рекурсію

let number = prompt("What number factorial should be calculated??");
let factorial = 1;
let i = 0;

function calcFactorial(number) {
  i++;
  factorial *= i;
  // console.log (factorial);
  if (i > number - 1) {
    return console.log(
      "Factorial of a given number " + number + " - " + factorial
    );
  }
  calcFactorial(number);
}

calcFactorial(number);
