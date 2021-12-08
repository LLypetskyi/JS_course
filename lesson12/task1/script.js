console.log(" ----------------------------------");

const inputArray = [1, 2, 3, 4, 5, 6, 9, 10];

function createReverseArray(inputArray) {
  let outputArray = [];
  for (const item of inputArray) {
    outputArray.unshift(item);
  }
  return outputArray;
}

console.log("this is the original input array", inputArray);
console.log(" ----------------------------------");
console.log(
  "this is new reverse output array ",
  createReverseArray(inputArray)
);
console.log(" ----------------------------------");
