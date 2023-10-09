const select1 = document.getElementById('1');
const select2 = document.getElementById('2');
const select3 = document.getElementById('3');
const select4 = document.getElementById('4');
const select5 = document.getElementById('5');

const escolha = document.getElementById('escolha');
const escolhido = document.getElementById('escolhido');
const submit = document.getElementById('submit');

const resposta = document.querySelector('.resposta');

let numero = null;

select1.addEventListener('click', () => {
    limpaClick();
    numero = 1;
    select1.classList.add('checked');
});

select2.addEventListener('click', () => {
    limpaClick();
    numero = 2;
    select2.classList.add('checked');
});

select3.addEventListener('click', () => {
    limpaClick();
    numero = 3;
    select3.classList.add('checked');
});

select4.addEventListener('click', () => {
    limpaClick();
    numero = 4;
    select4.classList.add('checked');
});

select5.addEventListener('click', () => {
    limpaClick();
    numero = 5;
    select5.classList.add('checked');
});

function limpaClick() {
    numero = null;
    select1.classList.remove('checked');
    select2.classList.remove('checked');
    select3.classList.remove('checked');
    select4.classList.remove('checked');
    select5.classList.remove('checked');
};

submit.addEventListener('click', () => {
    if (numero != null) {
        resposta.innerHTML = `
        You selected ${ numero } out of 5
        `
        escolha.classList.add('display-none');
        escolhido.classList.remove('display-none');
    } else {
        alert('You must select a number!');
    }
});