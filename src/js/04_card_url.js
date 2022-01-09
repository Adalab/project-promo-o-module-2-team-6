/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

/* ----------------------------- Fetch ------------------------------*/

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
  showErrorMesage(allReqFilled);
}

function showErrorMesage(allFilled) {
  if (allFilled) {
    textError.innerHTML = '';
  } else {
    textError.innerHTML =
      `¡Hola! Los campos con <span class="required">* </span>son obligatorios.`;
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
      createLink.innerHTML = `<h3 class="form__card--title">La tarjeta ha sido creada:</h3> <a class="form__card--link" href="${data.cardURL}"target="_blank" title="URL card">${data.cardURL}</a>`;
      createButtonTw.innerHTML = `<a class="form__twitter--link" href="https://twitter.com/intent/tweet?text=¡Hola!%20Mira%20mi%20tarjeta%20de%20presentación%20de%20Awesome%20Cards%20&url=${data.cardURL}" target="_blank" title="twitter"><i class="form__twitter--icon fab fa-twitter"></i>Compartir en twitter</a>`;
    });
  createButton.disabled = true;
}

createButton.addEventListener('click', handleCreateCard);
