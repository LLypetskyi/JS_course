console.log('Hello');
//Опис завдання:
// Створити функцію з назвою isEven, яка буде приймати число
// і повертати булевий результат (True/False).
// True – число парне, False – число не парне.
// Результат повернути за допомогою ключового слова "return".

// function isEven(number) {
//   let rez = true;
//   if (number % 2 == 0) {
//     rez = true;
//   } else {
//     rez = false;
//   }
//   return (rez);
// }

// isEven(4);
// isEven(9);
// isEven(5);

// Опис завдання:
// Створити глобальну змінну senseOfLife = 42. Створити функцію, яка буде приймати параметр otherSenseOfLife. Якщо параметр передати, то функція має повернути його.
// А якщо не передати, то фунція має повернути глобальну змінну senseOfLife.

// let senseOfLife = 42;

// function showVariable(otherSenseOfLife) {
//   if (otherSenseOfLife) {
//     return otherSenseOfLife;
//   } else return senseOfLife;
// }

// showVariable();
// showVariable(1);
// showVariable(3);
// showVariable();
// showVariable();

// Опис завдання:
// Виберіть 3 DOM елемента:
// - зверніться до елемента <div id="test"></div> за id = "test"
//   та присвойте вибраний елемент змінній id.

// - зверніться до елемента <div class ="test"></div>
// за класом class = "test"
// та присвойте вибрані елементи змінній className

// - зверніться до елемента <div></div> за тегом
//    та присвойте вибрані елементи змінній tag

// let id = document.getElementById('test');
// let className = document.getElementsByClassName('test');
// let tag = document.getElementsByTagName('div');

// Опис завдання:
// У елемент <ul id="test"></ul> потрібно додати три <li></li> елементи.
// Вибрати <ul> елемент за допомогою id = “test”.
// Створити кожен новий <li></li> елемент за допомогою методу createElement()
// та додати до списоку за допомогою методу appendChild().

// let el = document.getElementById('test');
// let firstChild = document.createElement('li');
// let secondChild = document.createElement('li');
// let thirdChild = document.createElement('li');
// el.appendChild(firstChild);
// el.appendChild(secondChild);
// el.appendChild(thirdChild);

// Опис завдання:

// Створити функцію – калькулятор. Назва count. Функція приймає 3 параметра:

// перший параметр типу Number,
// другий парамерт типу Number,
// третій параметр типу String,

// в який передається значення операції.
// Значеннями операції можуть бути: «+», «-» , «*» і «/».
// Функція повинна повернути результат виконаної операції за допомогою return.
// * Підказка: використайте конструкцію switch.

function count(num1, num2, mark) {
  switch (mark) {
    case '+':
      //   return num1 + num2;
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      //   return num1 - num2;
      break;
    case '*':
      console.log(num1 * num2);
      //   return num1 * num2;
      break;
    case '/':
      console.log(num1 / num2);
      //   return num1 / num2;
      break;
  }
}

count(5, 6, '-');
count(5, 6, '*');
count(5, 6, '+');
count(5, 6, '/');
