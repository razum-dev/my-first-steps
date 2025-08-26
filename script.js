let clickCount = 0; // Переменная для хранения количества кликов

function greetUser() {
  let userName = document.getElementById("nameInput").value;
  
  if (userName.trim() === "") {
    alert("Введите имя, пожалуйста!");
    return;
  }
  
  let greetingElement = document.getElementById("greeting");
  greetingElement.innerHTML = "<h2>Рад встрече, " + userName + "!</h2>";
  
  // Увеличиваем счётчик и обновляем его на странице
  clickCount++;
  document.getElementById("counter").textContent = clickCount;
}