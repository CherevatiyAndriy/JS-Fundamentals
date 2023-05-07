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


// Завдання 6
function resize() {
var width = window.innerWidth;
var height = window.innerHeight;
document.getElementById("page-width").textContent = width;
document.getElementById("result-height").textContent = height; // змінено id
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
const resultParagraph = document.querySelector('p');
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