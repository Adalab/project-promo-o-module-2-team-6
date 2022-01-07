"use strict";

const resetButton = document.querySelector(".js-reset");

function handleResetCard() {
  document.querySelector(".js-form").reset();
  data.name = ""
  data.job = ""
  data.email = ""
  data.phone = ""
  data.linkedin = ""
  data.github = ""
  data.photo = ""
  data.palette = 1

  renderPreview();
  handleColorChange();

  profileImage.style.backgroundImage = "";
  profilePreview.style.backgroundImage = "";

  handleResetShare();
  createButton.disabled = true;
}

function handleResetShare() {
  createLink.innerHTML = '';
  createButtonTw.innerHTML = '';
}

resetButton.addEventListener("click", handleResetCard);
