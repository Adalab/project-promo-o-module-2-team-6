"use strict";

const createButton = document.querySelector(".js-submit");
const createLink = document.querySelector('.js-link-card');

function handleCreateCard(event) {
  event.preventDefault();
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createLink.href = data.cardURL
      createLink.innerHTML = data.cardURL
    });
}

createButton.addEventListener("click", handleCreateCard);
