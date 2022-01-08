/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

//Local storage
const getFromLocalStorage = () => {
  const localStorageData = localStorage.getItem('userData');
  if (localStorageData !== null) {
    data = JSON.parse(localStorageData);
    autoCompleteInputs();
    renderPreview();
    handleColorChange();
  }
};

function autoCompleteInputs() {
  for (const eachInput of allInput) {
    eachInput.value = data[eachInput.name];
  }
  for (const eachRadio of allRadio) {
    if (eachRadio.id === `chooseColor${parseInt(data.palette)}`) {
      eachRadio.checked =  true;
    }
  }
}

const setInLocalStorage = () => {
  const stringifyForm = JSON.stringify(data);
  localStorage.setItem('userData', stringifyForm);
};

const deleteFromLocalStorage = () => {
  localStorage.removeItem('userData');
};

//Handler Input & Radio
function handleWriteInput(event) {
  const userInput = event.target.name;
  const userValue = event.target.value;
  data[userInput] = userValue;
  renderPreview();
  handleResetShare();
  setInLocalStorage();
}

function handleWriteRadio(event) {
  const userValue = event.target.value;
  data.palette = parseInt(userValue);
  handleResetShare();
  setInLocalStorage();
}

//Render functions
function renderItemText(objectProperty, where, defaultText) {
  if (objectProperty === '') {
    where.innerHTML = defaultText;
  } else {
    where.innerHTML = objectProperty;
  }
}

function renderItemLink(objectProperty, where, link) {
  if (objectProperty === '') {
    where.href = '#';
    where.target = '_self';
  } else {
    where.href = link;
    where.target = '_blank';
  }
}

function renderPreview() {
  renderItemText(data.name, namePreview, 'Nombre Apellido');
  renderItemText(data.job, jobPreview, 'Front-End developer');
  renderItemLink(data.email, emailPreview, `mailto:${data.email}`);
  renderItemLink(data.linkedin, linkedinPreview, `https://www.linkedin.com/in/${data.linkedin}`);
  renderItemLink(data.github, githubPreview, `https://github.com/${data.github}`);
  renderItemLink(data.phone, phonePreview, `tel:${data.phone}`);
}

for (const eachInput of allInput) {
  eachInput.addEventListener('keyup', handleWriteInput);
}

for (const eachRadio of allRadio) {
  eachRadio.addEventListener('click', handleWriteRadio);
}

// COLORES
//Declarar variables:

const inputColors = document.querySelectorAll('.js-palette');

//Funciones:

function handleColorChange() {
  const inputRadio = document.querySelectorAll('.js-radio');
  const inputIcons = document.querySelectorAll('.js-icons');
  const borderIcons = document.querySelectorAll('.js-border');
  const borderText = document.querySelector('.js-borderleft');
  for (const eachRadio of inputRadio) {
    if (eachRadio.value === '1' && eachRadio.checked) {
      namePreview.classList.add('colorgreen');
      namePreview.classList.remove('colorred');
      namePreview.classList.remove('coloryellow');
      for (const eachIcon of inputIcons) {
        eachIcon.classList.add('colourgreen');
        eachIcon.classList.remove('colourred');
        eachIcon.classList.remove('colouryellow');
      }
      for (const eachBorder of borderIcons) {
        eachBorder.classList.add('bordergreen');
        eachBorder.classList.remove('borderred');
        eachBorder.classList.remove('borderyellow');
      }
      borderText.classList.add('leftgreen');
      borderText.classList.remove('leftred');
      borderText.classList.remove('leftyellow');
    } else if (eachRadio.value === '2' && eachRadio.checked) {
      namePreview.classList.remove('colorgreen');
      namePreview.classList.add('colorred');
      namePreview.classList.remove('coloryellow');
      for (const eachIcon of inputIcons) {
        eachIcon.classList.remove('colourgreen');
        eachIcon.classList.add('colourred');
        eachIcon.classList.remove('colouryellow');
      }
      for (const eachBorder of borderIcons) {
        eachBorder.classList.remove('bordergreen');
        eachBorder.classList.add('borderred');
        eachBorder.classList.remove('borderyellow');
      }
      borderText.classList.remove('leftgreen');
      borderText.classList.add('leftred');
      borderText.classList.remove('leftyellow');
    } else if (eachRadio.value === '3' && eachRadio.checked) {
      namePreview.classList.remove('colorgreen');
      namePreview.classList.remove('colorred');
      namePreview.classList.add('coloryellow');
      for (const eachIcon of inputIcons) {
        eachIcon.classList.remove('colourgreen');
        eachIcon.classList.remove('colourred');
        eachIcon.classList.add('colouryellow');
      }
      for (const eachBorder of borderIcons) {
        eachBorder.classList.remove('bordergreen');
        eachBorder.classList.remove('borderred');
        eachBorder.classList.add('borderyellow');
      }
      borderText.classList.remove('leftgreen');
      borderText.classList.remove('leftred');
      borderText.classList.add('leftyellow');
    }
  }
}
//Hacer un evento:

for (const eachColors of inputColors) {
  eachColors.addEventListener('click', handleColorChange);
}

getFromLocalStorage();
