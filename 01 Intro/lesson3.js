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

function randArray(k) {
    const arr = [];
    for (let i = 0; i < k; i++) {
      const randomNum = Math.floor(Math.random() * 500) + 1;
      arr.push(randomNum);
    }
    return arr;
  }
  
  const myArray = randArray(5);
  console.log(myArray);

  // Завдання 4

  function compact(arr) {
    const uniqueArr = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
    return uniqueArr;
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2);

  // Завдання 5

  