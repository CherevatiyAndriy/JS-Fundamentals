// Завдання 1


// Завдання 2
let a = 1;
let b = 2;

let res1 = "" + a + b;
console.log(res1);
console.log(typeof res1);

let res2 = true + "" + b;
console.log(res2);
console.log(typeof res2); 

let res3 = (a < b);
console.log(res3); 
console.log(typeof res3);

let res4 = a / "qwerty";
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

// Завдання 6
let date = new Date();
let hour = date.getHours();

switch (true) {
case (hour >= 23 || hour < 5);
     console.log("Доброї ночі");
break;
case (hour >= 5 && hour < 11);
     console.log("Доброго ранку");
break;
case (hour >= 11 && hour < 17);
     console.log("Доброго дня");
break;
default:
     console.log("Доброго вечора");
}
