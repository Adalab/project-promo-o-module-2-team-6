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
const nameInput = document.querySelector('.js-name');
const jobInput = document.querySelector('.js-job');
const emailInput = document.querySelector('.js-email');
// const phoneInput = document.querySelector('.js-phone');
// const linkedinInput = document.querySelector('.js-linkedin');
// const githubInput = document.querySelector('.js-github');

/* --- Preview variables --- */
const namePreview = document.querySelector('.js-preview-name');
const jobPreview = document.querySelector('.js-preview-job');
const emailPreview = document.querySelector('.js-preview-email');
// const phonePreview = document.querySelector('.js-preview-phone');
// const linkedinPreview = document.querySelector('.js-preview-linkedin');
// const githubPreview = document.querySelector('.js-preview-github');

/* --- Name --- */
function handleKeyName() {
  namePreview.innerHTML = nameInput.value;
}
nameInput.addEventListener('keyup', handleKeyName);

/* --- Job --- */
function handleKeyJob() {
  jobPreview.innerHTML = jobInput.value;
}
jobInput.addEventListener('keyup', handleKeyJob);

/* --- Email --- */
function handleKeyEmail() {
  emailPreview.href = `mailto:${emailInput.value}`;
}
emailInput.addEventListener('keyup', handleKeyEmail);