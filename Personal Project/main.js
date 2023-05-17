const addForm = document.getElementById('addForm');
const list = document.getElementById('list');
class Shoe {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
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
    this.shoes.forEach((shoe, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${shoe.name}</span> - ${shoe.brand}, Ціна: ${shoe.price} грн`;
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'deleteBtn';
      deleteBtn.innerText = 'Видалити';
      deleteBtn.addEventListener('click', () => {
        this.removeShoe(index);
        this.displayShoes();
      });
      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);
    });
  }
}
const store = new Store();
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const brand = document.getElementById('brand').value;
  const price = parseFloat(document.getElementById('price').value);
  const shoe = new Shoe(name, brand, price);
  store.addShoe(shoe);
  store.displayShoes();
  addForm.reset();
});