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
const spanElement = document.querySelector('span');
header.style.fontSize = '40px';
header.style.textAlign = 'left';
header.style.backgroundColor = 'lightgreen';
div.style.flexDirection = 'column';
div.style.alignItems = 'left';
paragraphs[0].style.fontWeight = 'bold';
paragraphs[1].style.color = 'red';
paragraphs[2].style.textDecoration = 'underline';
paragraphs[3].style.fontStyle = 'italic';
document.addEventListener("DOMContentLoaded", function() {
listItems.forEach(item => {
item.style.display = 'inline-block';
item.style.marginRight = '10px';
item.style.whiteSpace = 'nowrap';
});
});
spanElement.style.display = 'none';