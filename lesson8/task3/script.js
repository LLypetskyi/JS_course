// 3) Повідомлення відносно ролі
// В системі є декілька користувачі із певними ролями

// Ігор - Адмін
// Сергій - Адмін
// Паша - Пацієнт
// Оля - Медсетсра
// Оксана - медсестра

// При запуску у вас питають як вас звати

// І в залежності від ролі яка у вас є - вам alert-ом виводиться інше мовідомлення

// Адмін -  привіт  адмін <name>
// Пацієнт -  привіт хворий <name>
// Медсестра -  вітання вам <name>

// приклад

// Ігор
// привіт  адмін Ігор

// Паша
// привіт хворий Паша

// Оля
// вітання вам Оля

// Микита
// Посторонім вхід заборонено, коронавірус

// Варіант №1 IF / ELSE

// const isName = prompt("Як Вас звати ? P.S. З великої букви");
// if (isName === "Ігор" || isName === "Сергій") {
//   alert("Привіт адмін " + isName);
// } else if (isName === "Паша") {
//   alert("Привіт хворий " + isName);
// } else if (isName === "Оля" || isName === "Оксана") {
//   alert("вітання Вам, " + isName);
// } else alert(isName + " ,посторонім вхід заборонено, коронавірус!");

// Варіант №2 SWITCH

const isName = prompt("Як Вас звати ? P.S. З великої букви");

switch (isName) {
  case "Ігор":
  case "Сергій": {
    alert("Привіт адмін " + isName);
    break;
  }

  case "Оля":
  case "Оксана": {
    alert("вітання вам " + isName);
    break;
  }
  case "Паша": {
    alert("привіт хворий " + isName);
    break;
  }

  default: {
    alert(isName + ", посторонім вхід заборонено, коронавірус!");
  }
}
