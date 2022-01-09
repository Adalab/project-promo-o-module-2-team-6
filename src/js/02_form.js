/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

/* ----------------------------- Local Storage ------------------------------*/

const getFromLocalStorage = () => {
  const localStorageData = localStorage.getItem('userData');
  if (localStorageData !== null) {
    data = JSON.parse(localStorageData);
    autoCompleteInputs();
    renderPreview();
    handleColorChange();
    handleChangeInputs();
  }
};

function autoCompleteInputs() {
  for (const eachInput of allInput) {
    eachInput.value = data[eachInput.name];
  }
  for (const eachRadio of allRadio) {
    const valueRadio = parseInt(eachRadio.value);
    const valueRadioLS = parseInt(data.palette);
    if (valueRadio === valueRadioLS) {
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

/* ----------------------------- Render ------------------------------*/

//Content functions
function handleWriteInput(event) {
  const userInput = event.target.name;
  const userValue = event.target.value;
  data[userInput] = userValue;
  renderPreview();
  setInLocalStorage();
  handleResetShare();
}

function handleWriteRadio(event) {
  const userValue = event.target.value;
  data.palette = parseInt(userValue);
  setInLocalStorage();
  handleResetShare();
  handleChangeInputs();
}

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

//Style functions
function colorChange(eachRadio, add, remove1, remove2) {
  const inputIcons = document.querySelectorAll('.js-icons');
  const borderIcons = document.querySelectorAll('.js-border');
  const borderText = document.querySelector('.js-borderleft');
  if (eachRadio.value === add && eachRadio.checked) {
    namePreview.classList.add(`text${add}`);
    namePreview.classList.remove(`text${remove1}`, `text${remove2}`);
    for (const eachIcon of inputIcons) {
      eachIcon.classList.add(`icon${add}`);
      eachIcon.classList.remove(`icon${remove1}`, `icon${remove2}`);
    }
    for (const eachBorder of borderIcons) {
      eachBorder.classList.add(`border-icon${add}`);
      eachBorder.classList.remove(`border-icon${remove1}`, `border-icon${remove2}`);
    }
    borderText.classList.add(`border-text${add}`);
    borderText.classList.remove(`border-text${remove1}`, `border-text${remove2}`);
  }
}

function handleColorChange() {
  const inputRadio = document.querySelectorAll('.js-radio');
  for (const eachRadio of inputRadio) {
    colorChange(eachRadio, '1', '2', '3');
    colorChange(eachRadio, '2', '1', '3');
    colorChange(eachRadio, '3', '2', '1');
  }
}

for (const eachColors of inputColors) {
  eachColors.addEventListener('click', handleColorChange);
}

getFromLocalStorage();
