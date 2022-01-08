/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';


/* ----------------------------- Preview ------------------------------*/

/* --- Input variables --- */
const allInput = document.querySelectorAll('.js-input');
const allRadio = document.querySelectorAll('.js-radio');

/* --- Preview variables --- */
const namePreview = document.querySelector('.js-preview-name');
const jobPreview = document.querySelector('.js-preview-job');
const emailPreview = document.querySelector('.js-preview-email');
const phonePreview = document.querySelector('.js-preview-phone');
const linkedinPreview = document.querySelector('.js-preview-linkedin');
const githubPreview = document.querySelector('.js-preview-github');
const textError = document.querySelector('.js-text-error');

/* --- All --- */
let data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};

