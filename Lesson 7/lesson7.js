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
function changeCSS() {
const text = document.getElementById("text");
text.style.color = "orange";
text.style.fontSize = "20px";
text.style.fontFamily = "Comic Sans MS";
}

// Завдання 3
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const link = document.getElementById('link');
btn1.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});
btn2.addEventListener('dblclick', () => {
  document.body.style.backgroundColor = 'pink';
});
btn3.addEventListener('mousedown', () => {
  document.body.style.backgroundColor = 'brown';
});
btn3.addEventListener('mouseup', () => {
  document.body.style.backgroundColor = 'white';
});
link.addEventListener('mouseenter', () => {
  document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseleave', () => {
  document.body.style.backgroundColor = 'white';
});

// Завдання 4
function deleteSelected() {
    var selectElement = document.getElementById("mySelect");
    selectElement.remove(selectElement.selectedIndex);
}

// Завдання 5
var myBtn = document.getElementById("myBtn");
var myDiv = document.getElementById("myDiv");
myBtn.addEventListener("click", function() {
  myDiv.innerHTML = "I was pressed!";
});
myBtn.addEventListener("mouseenter", function() {
  myDiv.innerHTML = "Mouse on me!";
});
myBtn.addEventListener("mouseleave", function() {
  myDiv.innerHTML = "Mouse is not on me!";
});

// Завдання 6
function resize() {
var width = window.innerWidth;
var height = window.innerHeight;
document.getElementById("page-width").textContent = width;
document.getElementById("result-height").textContent = height;
}
window.addEventListener("resize", resize);
resize();


// Завдання 7
const citiesByCountry = {
    USA: ['New-York', 'Washington', 'Boston', 'Chikago'],
    Ukraine: ['Kyiv', 'Ivano-Frankivs\'k', 'Lviv', 'Odesa'],
    Germany: ['Berlin', 'Dresden', 'Hannover', 'Bonn'],
  };
const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const resultParagraph = document.querySelector('#result-city');
countrySelect.addEventListener('change', () => {
const selectedCountry = countrySelect.value;
citiesSelect.innerHTML = '';
citiesByCountry[selectedCountry].forEach(city => {
const option = document.createElement('option');
option.value = city;
option.textContent = city;
citiesSelect.appendChild(option);
  });
const selectedCity = citiesSelect.value;
resultParagraph.textContent = `${selectedCountry} - ${selectedCity}`;
  });
citiesSelect.addEventListener('change', () => {
const selectedCity = citiesSelect.value;
const selectedCountry = countrySelect.value;
document.getElementById('result').textContent = `${selectedCountry} - ${selectedCity}`;
  });