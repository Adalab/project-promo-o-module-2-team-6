'use strict';

const createButton = document.querySelector('.js-submit');
const createLink = document.querySelector('.js-link-card');
const createButtonTw = document.querySelector('.js-twitter');

function handleChangeInputs() {
  let allReqFilled = true;
  for (const eachInput of allInput) {
    if (eachInput.required && eachInput.value === '' && allReqFilled) {
      allReqFilled = false;
    }
  }
  if (allReqFilled) {
    createButton.disabled = false;
  } else {
    createButton.disabled = true;
  }
}

for (const eachInput of allInput) {
  eachInput.addEventListener('change', handleChangeInputs);
}

function handleCreateCard(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createLink.href = data.cardURL;
      createLink.innerHTML = data.cardURL;
      console.log(data.cardURL);
      createButtonTw.innerHTML = `<a href="https://twitter.com/intent/tweet?text=¡Hola!%20Mira%20mi%20tarjeta%20de%20presentación%20de%20Awesome%20Cards%20&url=${data.cardURL}" target="_blank" title="twitter">Compartir en twitter</a>`;
    });
}

createButton.addEventListener('click', handleCreateCard);
