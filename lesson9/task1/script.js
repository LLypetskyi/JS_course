// 1 version

console.log("------------1 version---------------");

let Size = 10;
for (let i = 1; i <= Size; i++) {
  let rezString = "";
  for (let j = 1; j <= i; j++) {
    rezString += "*";
  }
  console.log(rezString);
}

// 2 version

console.log("------------2 version---------------");

let size = 10;
let rezString = "";
for (let i = 1; i <= size; i++) {
  rezString += "*";
  console.log(rezString);
}
