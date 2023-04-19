// Завдання 2
console.log("Cherevatyi");

// Завдання 3
let x = 13;
let y = 26;
console.log('x:', x);
console.log('y:', y);
x = y;
console.log('Значення змінних після копіювання');
console.log('x:', x);
console.log('y:', y);

// Завдання 4
let myPersonalData = {
    name: 'Andrii',
    age: 32,
    isUserLoggedIn: true,
    password: undefined,
    email: null
  };
  console.log(`Name: ${myPersonalData.name}, type: ${typeof (myPersonalData.name)}`);
  console.log(`Age: ${myPersonalData.age}, type: ${typeof (myPersonalData.age)}`);
  console.log(`IsUserLoggedIn: ${myPersonalData.isUserLoggedIn}, type: ${typeof (myPersonalData.isUserLoggedIn)}`);
  console.log(`Password: ${myPersonalData.password}, type: ${typeof (myPersonalData.password)}`);
  console.log(`Email: ${myPersonalData.email}, type: ${typeof (myPersonalData.email)}`);

// Завдання 5
const isAdult = confirm('Ви вже досягли повнолітнього віку?');
console.log('Результат запиту:', isAdult);

// Завдання 7
let login = prompt('Enter your Login:');
let useremail = prompt('Enter your User email:');
let userpassword = prompt('Enter your User password:');
console.log(`Dear User ${login}`);
console.log(`your email is ${useremail}`);
console.log(`your password is  ${userpassword}`)

// Завдання 8
const secondsInHour = 60 * 60;
const secondsInDay = 24 * secondsInHour;
const secondsInMonth = 30 * secondsInDay;
console.log(`Seconds in hour ${secondsInHour}`);
console.log(`Seconds in a Day ${secondsInDay}`);
console.log(`Seconds in a Month ${secondsInMonth}`);
