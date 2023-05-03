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
const div = document.querySelector('#myDiv');
const listItems = document.querySelectorAll('#myList li');
const span = document.querySelector('span');
header.style.fontSize = '40px';
header.style.textAlign = 'left';
header.style.backgroundColor = 'lightgreen';
div.style.padding = '10px';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'left';
listItems.forEach(item => {
item.style.display = 'inline-block';
item.style.marginRight = '10px';
});
span.style.display = 'none';