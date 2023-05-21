// Завдання 1 

function getPromise(message, delay) {
return new Promise(function(resolve) {
setTimeout(function() {
resolve(message);
}, delay);
});
}

getPromise("test promise", 2000).then(function(data) {
console.log(data);
});

// Завдання 2

function calcArrProduct(arr) {
return new Promise(function(resolve, reject) {
let product = 1;
for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === "number") {
product *= arr[i];
} else {
reject("Error! Incorrect array!");
return;
}
}
resolve(product);
});
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

// Завдання 3

