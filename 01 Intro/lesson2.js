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
    console.log("Ви досягли повнолітнього віку");
    console.log("-------------------");
} else {
    console.log("Ви ще надто молоді");
    console.log("-------------------");
}