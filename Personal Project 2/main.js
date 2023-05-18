// Функція пошуку та фільтрації користувачів
function searchUsers(keyword) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Фільтруємо користувачів за введеним ключовим словом
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.surname} ${user.firstName}`.toLowerCase();
      return fullName.includes(keyword.toLowerCase());
    });
  
    // Очищаємо список користувачів на сторінці
    const userDataContainer = document.getElementById('user-data-container');
    userDataContainer.innerHTML = '';
  
    // Рендеримо відфільтрованих користувачів
    filteredUsers.forEach((user) => {
      renderUserData(user);
    });
  }
  
  // Обробка події подання форми пошуку
  document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const keyword = document.getElementById('search-input').value;
    searchUsers(keyword);
  
    document.getElementById('search-input').value = ''; // Очищення поля вводу
  });
  
  // Завантаження даних з LocalStorage
  function loadUserDataFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((user) => {
      renderUserData(user);
    });
  }
  
  // Рендеринг даних користувача на сторінці
  function renderUserData(user) {
    const userDataElement = document.createElement('div');
    userDataElement.innerHTML = `
      <p><strong>Прізвище:</strong> ${user.surname}</p>
      <p><strong>Ім'я:</strong> ${user.firstName}</p>
      <p><strong>Вік:</strong> ${user.age}</p>
      <p><strong>Освіта:</strong> ${user.education}</p>
      <p><strong>Бажана посада:</strong> ${user.desiredPosition}</p>
      <hr>
    `;
    document.getElementById('user-data-container').appendChild(userDataElement);
  }
  
  // Ініціалізація
  loadUserDataFromLocalStorage();