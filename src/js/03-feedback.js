import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
    // const textarea = document.querySelector('.feedback-form textarea');
    // const input = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    message: '',
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
// textarea.addEventListener('input', throttle(onTextareaInput, 500));
// input.addEventListener('input', throttle(onInput, 500));


// Варіант-1 як зберегти набрані поля:

if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    form.querySelector('[name="email"]').value = formData.email;
    form.querySelector('[name="message"]').value = formData.message;
};


function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// populateInput()
// populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
};

// function onTextareaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// };


// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     };
// };


// Варіант-2 як зберегти набрані поля:

// function populateInput() {
    
//     if (localStorage.getItem(STORAGE_KEY)) {
//         const parseValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
//         const formElements = form.elements;
//         const valueElementStorage = Object.values(parseValue);
//         const keyElementStorage = Object.keys(parseValue);

//         for (let i = 0; i < keyElementStorage.length; i += 1) {
//             for (let i = 0; i < valueElementStorage.length; i += 1) {
//                 for (const formElement of formElements) {
//                     if (formElement['name'] === keyElementStorage[i]) {
//                         formElement['value'] = valueElementStorage[i];
//                     };
//                 };
//             };
//         };
//     };
// };