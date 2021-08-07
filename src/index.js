import './styles.css';
import menu from './menu.json';
import cardTemplate from './templates/menu.hbs';

const refs = {
  gallery: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

console.log(refs.body);
const markup = cardTemplate(menu);
refs.gallery.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(e) {
  e.preventDefault();
  if (e.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const currentTheme = localStorage.getItem('theme');

setupTheme(currentTheme);

function setupTheme(currentTheme) {
  if (!currentTheme) {
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(currentTheme);
  }
}

moveProperPositionOnCheckbox(currentTheme);

function moveProperPositionOnCheckbox(currentTheme) {
  if (currentTheme === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}
