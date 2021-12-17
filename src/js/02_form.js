'use strict';

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
    linkedinPreview.href = `https://www.linkedin.com/in/${data.linkedin}`;
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
