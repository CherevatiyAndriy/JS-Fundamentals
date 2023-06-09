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

  function compact(arr1) {
    return Array.from(new Set(arr1));
  }
  const arr1 = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr1);
  console.log(arr2);

  // Завдання 5

  function separateArrays(arr) {
    const result = [[], []];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        const [nums, strs] = separateArrays(item);
        result[0].push(...nums);
        result[1].push(...strs);
      } else if (typeof item === 'number') {
        result[0].push(item);
      } else if (typeof item === 'string') {
        result[1].push(item);
      }
    });
    return result;
  }

    // Завдання 6 

    function calc(a, b, op) {
    let result;
    switch(op) {
    case 1:
    result = a - b;
    break;
    case 2:
    result = a * b;
    break;
    case 3:
    result = a / b;
    break;
    default:
    result = a + b;
    }
    console.log(result);
    return result;
}
calc(10, 3, 1);

//  Завдання 7

function findUnique(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return false;
      }
    }
    return true;
  }
  let arr4 = [1, 2, 3, 5, 3];
  console.log(findUnique(arr4));
  let arr5 = [1, 2, 3, 5, 11];
  console.log(findUnique(arr5));

  