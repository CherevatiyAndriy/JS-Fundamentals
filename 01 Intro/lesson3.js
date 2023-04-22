// Завдання 1
let arr = createArray(2, 9);
console.log(arr);
function createArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }

  // Завдання 2

  function printNumbers(a, b, i = a) {
    if (i > b) {
      return;
    }
    for (let j = 1; j <= i - a + 1; j++) {
      console.log(i);
    }
    printNumbers(a, b, i + 1);
  } 
  printNumbers(1, 3);

// Завдання 3 

