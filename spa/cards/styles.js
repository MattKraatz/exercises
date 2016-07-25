create.addEventListener("click", createCard);

function createCard() {
  cardContainer.innerHTML += "<div class='card'><button class='delete' onclick='deleteCard()'>Delete</button></div>";
}

function deleteCard() {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}
