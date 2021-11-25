// Створіть функцію перевірки віку користувача при вході на сайт.
// Якщо користувачу менше 18 років.
// Більше 18 років.
// Менше 0 років.
// Більше 99 років.
// Більше 120 років.

console.log(" ---------function declaration -------");

function chekAge(Age){
  let userAge = prompt("How old are you?");
  if (userAge >= 18 && userAge < 99){
    alert("You have passed the test");
  } else if (userAge < 18) {
    alert("You have not passed the test");
  } else if (userAge >= 99 && userAge < 120){
    alert("Super cool!");
  } else if (userAge >= 120){
    alert("Is it you, Duncan MacLeod ?");
  } else alert("Please enter a numeric value");
}
chekAge();

console.log(" ---------function expression -------");

let chekAgeSecond = function chekAge(Age){
  let userAge = prompt("How old are you?");
  if (userAge >= 18 && userAge < 99){
    alert("You have passed the test");
  } else if (userAge < 18){
    alert("You have not passed the test");
  } else if (userAge >= 99 && userAge < 120){
    alert("Super cool!");
  } else if (userAge >= 120){
    alert("Is it you, Duncan MacLeod ?");
  } else alert("Please enter a numeric value");
};
chekAgeSecond();
