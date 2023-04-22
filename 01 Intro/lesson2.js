// Завдання 1
const e = 3;
const f = 6;
const g = 9;
if (e < f && f < g) {
    console.log("Висловлювання істинне");
} else {
    console.log("Висловлювання хибне");
}

// Завдання 2
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = true + "" + y;
console.log(res2);
console.log(typeof res2); 

let res3 = (x < y);
console.log(res3); 
console.log(typeof res3);

let res4 = x / "qwerty";
console.log(res4);
console.log(typeof res4);

// Завдання 3
const isAdult = +prompt('Ви вже досягли повнолітнього віку?');
console.log('Результат запиту:', isAdult);
if (isAdult >= 18) {
     console.log("Ви досягли повнолітнього віку!");
} else {
     console.log("Ви ще надто молоді!");
}

// Завдання 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let counts = {};
for (let num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
let maxCount = 0;
let data;
for (let num in counts) {
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    data = num;
  }
}
let newArr = [data];
arr = arr.filter(num => num !== parseInt(data));
console.log(newArr); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]

// Завдання 5 


// Завдання 6
let date = new Date();
let hour = date.getHours();

switch (true) {
case (hour >= 23 || hour < 5):
     console.log("Доброї ночі");
break;
case (hour >= 5 && hour < 11):
     console.log("Доброго ранку");
break;
case (hour >= 11 && hour < 17):
     console.log("Доброго дня");
break;
default:
     console.log("Доброго вечора");
}

let dates = new Date();
let hours = date.getHours();

if (hour >= 23 || hour < 5) {
    console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
    console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
    console.log("Доброго дня");
} else {
    console.log("Доброго вечора");
}