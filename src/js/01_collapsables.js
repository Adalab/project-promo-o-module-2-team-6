'use strict';

/* --------------------------- Collapsables ----------------------------*/

/* --- Función colapsar titulos formularios ---*/
function handlerClickCollapsable(event) {
  event.currentTarget.parentNode.classList.toggle('collapsed');
  const formTitleChevron = document.querySelectorAll('.form__title--chevron');
  for (let index = 0; index < formTitleChevron.length; index++) {
    const selectedChvron = event.currentTarget.querySelector(
      '.form__title--chevron'
    );

    selectedChvron.classList.toggle('fa-chevron-down');
    selectedChvron.classList.toggle('fa-chevron-up');
  }
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
