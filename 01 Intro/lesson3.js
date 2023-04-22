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
    return arr.reduce((acc, item) => {
      if (typeof item === 'number' || (Array.isArray(item) && item.some(subItem => typeof subItem === 'number'))) {
        acc[0].push(item);
      } else if (typeof item === 'string' || (Array.isArray(item) && item.some(subItem => typeof subItem === 'string'))) {
        acc[1].push(item);
      }
      return acc;
    }, [[], []]);
  }
  let arr3 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrNew = separateArrays(arr3);
  console.log(arrNew);

    // Завдання 6 

