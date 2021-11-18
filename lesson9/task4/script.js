// // За допомогою циклів вивести фігуру - прямокутник 10 x 10 - в консоль:
// Очікуваний результат (скрін з консолі):


let size = 10;
for (let i = 1; i <= size; i++) {
  let rezString = "";
  for (let j = 10; j >= i; j--) {
    rezString = rezString + "*";
  }
  console.log(rezString);
}



