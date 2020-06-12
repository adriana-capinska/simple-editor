import '../scss/main.scss';

/* place your code below */

const textarea = document.querySelector('#yourText');
const buttonLoad = document.querySelector('.button-load');
const buttonSave = document.querySelector('.button-save');
const text = localStorage.setItem('text','');
const test = localStorage.getItem('text');
let result = '';


buttonLoad.addEventListener('click', () => {
    textarea.value = localStorage.getItem('text');
 
})



buttonSave.addEventListener('click', () => {
    localStorage.setItem('text', textarea.value);
})


