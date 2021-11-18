// 1 version

console.log ("------------1 version---------------");
let size = 10;
let rezString = "**********";
for (let i = 1; i <= size; i++) {
  console.log(rezString);
}

console.log ("------------2 version---------------");

// 2 version

let Size = 10;
for (let i = 1; i <= Size; i++) {
  let rezString = "";
  for (let j = 1; j <= Size; j++) {
    rezString = rezString + "*";
  }
  console.log(rezString);
}
