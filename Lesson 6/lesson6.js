// Завдання 1
function showModal() {
    var list = document.getElementById("list").getElementsByTagName("li");
    var modalList = list[0].textContent + ", " + list[list.length - 1].textContent + ", " + list[1].textContent + ", " + list[3].textContent + ", " + list[2].textContent;
    document.getElementById("modal-list").textContent = modalList;
    document.getElementById("myModal").style.display = "block";
  }
  function hideModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Завдання 2
const header = document.querySelector('h1');
const div = document.getElementById('myDiv');
const paragraphs = div.getElementsByTagName('p');
const listItems = document.querySelectorAll('#myList li');
let text = '';
const spans = document.querySelectorAll('span');
header.style.fontSize = '40px';
header.style.lineHeight = '1.5';
header.style.textAlign = 'left';
header.style.backgroundColor = 'lightgreen';
header.style.marginTop = '20px';
div.style.flexDirection = 'column';
div.style.alignItems = 'left';
paragraphs[0].style.fontWeight = 'bold';
paragraphs[1].style.color = 'red';
paragraphs[2].style.textDecoration = 'underline';
paragraphs[3].style.fontStyle = 'italic';
paragraphs[0].style.lineHeight = '1.5';
paragraphs[1].style.lineHeight = '1.5';
paragraphs[2].style.lineHeight = '1.5';
paragraphs[3].style.lineHeight = '1.5';
listItems.forEach(item => {
text += item.textContent;
item.style.display = 'inline';
item.style.whiteSpace = 'nowrap';
item.style.lineHeight = '1.5';
});
text = text.replace(/\s/g, '');
const ul = document.querySelector('#myList');
ul.textContent = text;
ul.style.textIndent = '40px';
spans[1].style.display = 'none';

// Завдання 3
const mainElement = document.createElement('main');
mainElement.setAttribute('class', 'mainClass check item');
const divElement = document.createElement('div');
divElement.setAttribute('id', 'myDiv');
const pElement = document.createElement('p');
pElement.innerText = 'First paragraph';
divElement.appendChild(pElement);
mainElement.appendChild(divElement);
const bodyElement = document.getElementsByTagName('body')[0];
bodyElement.appendChild(mainElement);

// Завдання 4
const form = document.querySelector('.array fieldset');
const outBlock = document.querySelector('.out');
const submitBtn = document.querySelector('.btn');
submitBtn.addEventListener('click', () => {
const data = {};
const inputs = form.querySelectorAll('input.arr');
inputs.forEach(input => {
data[input.getAttribute('data-form')] = input.value;
});
outBlock.innerHTML = JSON.stringify(data);
});

// Завдання 5

const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
const animation = circle.dataset.anim;
circle.classList.add(animation);
circle.addEventListener('animationend', () => {
console.log('Animation applied!');
});
});
const circleEl = document.querySelector('.circle');
const classList = circleEl.classList;
const dataAnim = circleEl.getAttribute('data-anim');
circleEl.classList.add(dataAnim);

// Завдання 6

const priceElement = document.getElementById('outprice');
const colorElements = document.querySelectorAll('.color');
const sizeElements = document.querySelectorAll('.size');
const materialElements = document.querySelectorAll('.material');

let selectedColor = document.querySelector('.color.active');
let selectedSize = null;
let selectedMaterial = null;

colorElements.forEach(colorElement => {
  colorElement.addEventListener('click', () => {
    const price = colorElement.getAttribute('data-price');
    const image = colorElement.getAttribute('data-image');
    priceElement.innerText = price;
    shoeElement.src = image;
    selectedColor.classList.remove('active');
    colorElement.classList.add('active');
    selectedColor = colorElement;
  });
});

sizeElements.forEach(sizeElement => {
  sizeElement.addEventListener('click', () => {
    selectedSize = sizeElement.innerText;
    updatePrice();
  });
});

materialElements.forEach(materialElement => {
  materialElement.addEventListener('click', () => {
    const price = materialElement.getAttribute('data-price');
    selectedMaterial = materialElement.innerText;
    priceElement.innerText = price;
    updatePrice();
  });
});

function updatePrice() {
  if (selectedColor && selectedSize && selectedMaterial) {
    const basePrice = parseInt(selectedColor.getAttribute('data-price'));
    const sizePrice = getSizePrice(selectedSize);
    const materialPrice = parseInt(selectedMaterial.getAttribute('data-price'));
    const totalPrice = basePrice + sizePrice + materialPrice;
    priceElement.innerText = totalPrice;
  }
}
function getSizePrice(size) {
  switch (size) {
    case '6':
      return 10;
    case '7':
      return 15;
    case '8':
      return 20;
    case '9':
      return 25;
    case '10':
      return 