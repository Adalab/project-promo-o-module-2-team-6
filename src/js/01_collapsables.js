'use strict';

/* --------------------------- Collapsables ----------------------------*/

//Collapse form titles
function handlerClickCollapsable(event) {
  const formDesign = document.querySelector('.form__design');
  const formFill = document.querySelector('.form__fill');
  const formShare = document.querySelector('.form__share');
  formDesign.classList.add('collapsed');
  formFill.classList.add('collapsed');
  formShare.classList.add('collapsed');
  const formTitleChevron = document.querySelectorAll('.form__title--chevron');

  for (const eachChevron of formTitleChevron) {
    eachChevron.classList.add('fa-chevron-down');
    eachChevron.classList.remove('fa-chevron-up');
  }
  const selectedChevron = event.currentTarget.querySelector(
    '.form__title--chevron'
  );
  selectedChevron.classList.add('fa-chevron-up');
  selectedChevron.classList.remove('fa-chevron-down');
  event.currentTarget.parentNode.classList.toggle('collapsed');
}

//Collapsable Design
const collapsableDesign = document.querySelector('.js-design__title');
collapsableDesign.addEventListener('click', handlerClickCollapsable);

//Collapsable Fill
const collapsableFill = document.querySelector('.js-fill__title');
collapsableFill.addEventListener('click', handlerClickCollapsable);

//Collapsable Share
const collapsableShare = document.querySelector('.js-share__title');
collapsableShare.addEventListener('click', handlerClickCollapsable);
