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

  function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = a; j <= i; j++) {
        console.log(i);
      }
    }
  }
  printNumbers(1, 3);

// Завдання 3 

