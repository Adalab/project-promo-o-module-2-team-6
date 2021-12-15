'use strict';

/* --------------------------- Collapsables ----------------------------*/

/* --- Función colapsar titulos formularios ---*/
function handlerClickCollapsable(event) {
  event.currentTarget.parentNode.classList.toggle('collapsed');
}

/* --- Collapsable Design --- */
const collapsableDesign = document.querySelector('.js-design__title');
collapsableDesign.addEventListener('click', handlerClickCollapsable);

/* --- Collapsable Fill --- */
const collapsableFill = document.querySelector('.js-fill__title');
collapsableFill.addEventListener('click', handlerClickCollapsable);

/* --- Collapsable Share --- */
const collapsableShare = document.querySelector('.js-share__title');
collapsableShare.addEventListener('click', handlerClickCollapsable);

/* ----------------------------- Preview ------------------------------*/

/* --- Input variables --- */
const allInput = document.querySelectorAll('.js-input');

/* --- Preview variables --- */
const namePreview = document.querySelector('.js-preview-name');
const jobPreview = document.querySelector('.js-preview-job');
const emailPreview = document.querySelector('.js-preview-email');
const phonePreview = document.querySelector('.js-preview-phone');
const linkedinPreview = document.querySelector('.js-preview-linkedin');
const githubPreview = document.querySelector('.js-preview-github');

/* --- All --- */
const data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};

function handleWriteInput(event) {
  const userInput = event.target.name;
  const userValue = event.target.value;

  if (userInput === 'name') {
    data.name = userValue;
  } else if (userInput === 'job') {
    data.job = userValue;
  } else if (userInput === 'email') {
    data.email = userValue;
  } else if (userInput === 'phone') {
    data.phone = userValue;
  } else if (userInput === 'linkedin') {
    data.linkedin = userValue;
  } else if (userInput === 'github') {
    data.github = userValue;
  }
  renderPreview();
}

function renderPreview() {
  if (data.name === '') {
    namePreview.innerHTML = 'Nombre Apellido';
  } else {
    namePreview.innerHTML = data.name;
  }
  if (data.job === '') {
    jobPreview.innerHTML = 'Front-End developer';
  } else {
    jobPreview.innerHTML = data.job;
  }
  if (data.email === '') {
    emailPreview.href = '';
  } else {
    emailPreview.href = `mailto:${data.email}`;
  }
  if (data.linkedin === '') {
    linkedinPreview.href = '';
  } else {
    linkedinPreview.href = `https://www.linkedin.com/in/·${data.linkedin}`;
  }
  if (data.github === '') {
    githubPreview.href = '';
  } else {
    githubPreview.href = `https://github.com/${data.github}`;
  }
  if (data.phone === '') {
    phonePreview.href = '';
  } else {
    phonePreview.href = `tel:${data.phone}`;
  }
}

for (const eachInput of allInput) {
  eachInput.addEventListener('keyup', handleWriteInput);
}
