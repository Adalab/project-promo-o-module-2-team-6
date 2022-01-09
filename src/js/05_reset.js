/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

/* ----------------------------- Reset ------------------------------*/

function handleResetCard() {
  document.querySelector('.js-form').reset();
  data.name = '';
  data.job = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';
  data.palette = 1;

  renderPreview();
  handleColorChange();

  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';

  handleResetShare();
  createButton.disabled = true;
  deleteFromLocalStorage();
}

function handleResetShare() {
  createLink.innerHTML = '';
  createButtonTw.innerHTML = '';
}

resetButton.addEventListener('click', handleResetCard);
