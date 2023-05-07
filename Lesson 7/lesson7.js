// Завдання 1

const myWindow = window.open('', '', 'width=300,height=300');
setTimeout(() => {
  myWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
  myWindow.moveTo(200, 200);
}, 4000);
setTimeout(() => {
  myWindow.close();
}, 6000);

// Завдання 2

