'use strict';

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

//console.log(formShare);
