// За допомогою циклів вивести фігуру - трикутник 10 x 10 - в консоль:
// Очікуваний результат (скрін з консолі):

// 1 version

console.log ("------------1 version---------------");

let Size = 10;
for (let i = 1; i <= Size; i++) {
  let rezString = "";
  for (let j = 1; j <= i; j++) {
    rezString = rezString + "*";
  }
  console.log(rezString);
}

// 2 version

console.log ("------------2 version---------------");

let size = 10;
let rezString = "";
for (let i = 1; i <= size; i++) {
  rezString = rezString + "*";
  console.log(rezString);
}