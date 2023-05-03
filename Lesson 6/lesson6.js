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
header.style.fontSize = '48px';
header.style.textAlign = 'center';
div.style.backgroundColor = '#F5F5F5';
div.style.border = '2px solid black';
div.style.padding = '10px';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
listItems.forEach(item => {
  item.style.display = 'inline-block';
  item.style.marginRight = '10px';
});
span.style.display = 'none';