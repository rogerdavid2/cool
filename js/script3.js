"use strict";

const openModal = document.querySelector('[data-create]');
const exitModal = document.querySelector('[data-close]');
const saveBtn = document.querySelector('#save');

openModal.addEventListener('click', showModal);
exitModal.addEventListener('click', closeModal);
saveBtn.addEventListener('click', saveCard);


function saveCard() {
    let questionArea = document.querySelector('#question');
    let answerArea = document.querySelector('#answer');
    let showAlert = document.querySelector('.show-error-message');
    if (questionArea = null || questionArea.value == '') {
        if (answerArea = null || answerArea.value == '') {
            showAlert.classList.remove("hide-error");
        }
        setTimeout(() => {
            showAlert.classList.add("hide-error");
        }, 2000);
    } else {
        closeModal();
        createFlashCard();
        clearInput();
    }
}

function showModal(e) {
    let modal = document.querySelector('.modal-design');
    modal.classList.remove("is-hidden");
}

function closeModal() {
    let modal = document.querySelector('.modal-design');
    modal.classList.add('is-hidden');
}

function clearInput() {
    document.querySelector('.question-text').value = '';
    document.querySelector('.answer-text').value = '';
}

function createFlashCard() {
    let questionText = document.querySelector('.question-text').value;
    let answerText = document.querySelector('.answer-text').value;
    let cardSection = document.querySelector('.card-container');
    let createArticle = document.createElement('article');

    createArticle.className += "card";
    createArticle.innerHTML = `
    <div class="card-question-button">
        <h4 id="title">${questionText}</h4>
        <button id="show">x</button>
    </div>
    <div id="answer-card">
        <p id="answer-card-p">${answerText}</p>
    </div>`
        ;
    cardSection.append(createArticle);
    createArticle.addEventListener('click', function (e) {
        let questions = e.target.parentElement;
        questions.classList.toggle("show-text");
    })
}