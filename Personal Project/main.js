const addForm = document.getElementById('addForm');
const list = document.getElementById('list');
const gallery = document.getElementById('gallery');

class Shoe {
  constructor(name, brand, price, image) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.image = image;
  }
}

class Store {
  constructor() {
    this.shoes = [];
  }

  addShoe(shoe) {
    this.shoes.push(shoe);
  }

  removeShoe(index) {
    this.shoes.splice(index, 1);
  }

  displayShoes() {
    list.innerHTML = '';
    gallery.innerHTML = '';

    this.shoes.forEach((shoe, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${shoe.name}</span> - ${shoe.brand}, Ціна: ${shoe.price} грн`;
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');
      const selectBtn = document.createElement('button');
      selectBtn.innerText = 'Вибрати';
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Видалити';

      selectBtn.addEventListener('click', () => {
        // Дії при натисканні кнопки "Вибрати"
        console.log(`Вибрано кросівку: ${shoe.name}`);
      });

      deleteBtn.addEventListener('click', () => {
        this.removeShoe(index);
        this.displayShoes();
      });

      buttonContainer.appendChild(selectBtn);
      buttonContainer.appendChild(deleteBtn);
      listItem.appendChild(buttonContainer);
      list.appendChild(listItem);

      const shoeImage = document.createElement('img');
      shoeImage.src = shoe.image;
      shoeImage.alt = shoe.name;
      gallery.appendChild(shoeImage);
    });
  }
}

const store = new Store();

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const brand = document.getElementById('brand').value;
  const price = parseFloat(document.getElementById('price').value);
  const image = prompt('Введіть URL зображення для кросівки:');
  const shoe = new Shoe(name, brand, price, image);
  store.addShoe(shoe);
  store.displayShoes();
  addForm.reset();
});