let size = 10;
for (let i = 1; i <= size; i++) {
  let rezString = "";
  for (let j = 10; j >= i; j--) {
    rezString += "*";
  }
  console.log(rezString);
}
