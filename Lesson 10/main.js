// Завдання 1 

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};
let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f);
console.log(x);
console.log(fifth);

// Завдання 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// Завдання 3

function mul(...args) {
let result = 1;

for (let i = 0; i < args.length; i++) {
if (typeof args[i] === "number") {
result *= args[i];
}
}
return result;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// Завдання 4

function mapBuilder(keysArray, valuesArray) {
if (keysArray.length !== valuesArray.length) {
throw new Error("Довжина масивів keysArray та valuesArray повинна бути однаковою.");
}
const map = new Map();
for (let i = 0; i < keysArray.length; i++) {
map.set(keysArray[i], valuesArray[i]);
}
return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));