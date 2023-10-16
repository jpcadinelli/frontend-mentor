const gor5Btn = document.querySelector('#gor-5')
const gor10Btn = document.querySelector('#gor-10')
const gor15Btn = document.querySelector('#gor-15')
const gor25Btn = document.querySelector('#gor-25')
const gor50Btn = document.querySelector('#gor-50')
const reset = document.querySelector('#reset')

let gorjeta = null
let gorjetaP = null
let contaP = null
let gorPessoa = document.querySelector('#gor-pessoa')
let contPessoa = document.querySelector('#cont-pessoa')
let conta = document.querySelector('#conta')
let valorConta = null
let gorCustom = document.querySelector('#gor-custom')
let valorCustom = null
let total = null
let pessoas = document.querySelector('#pessoas')
let numPessoas = null

function limpaClasseBtn() {
    gor5Btn.classList.remove('selecionado')
    gor10Btn.classList.remove('selecionado')
    gor15Btn.classList.remove('selecionado')
    gor25Btn.classList.remove('selecionado')
    gor50Btn.classList.remove('selecionado')
}

function limpaCustom() {
    gorCustom.value = ''
}

function limpaConta() {
    conta.value = ''
}

function limpaPessoas() {
    pessoas.value = ''
}

function limpaResposta() {
    gorPessoa.innerHTML = '$0.00'
    contPessoa.innerHTML = '$0.00'
}

function calculoTotal() {
    if (valorConta > 0 && gorjeta >= 0 && numPessoas > 0) {
        document.querySelector('#aviso-pessoa').classList.add('oculto')
        pessoas.classList.remove('erro')
        total = ( Number(valorConta) + ( Number(valorConta) * Number(gorjeta) ) )
        gorjetaP = valorConta * gorjeta / numPessoas
        contaP = total / numPessoas
        gorPessoa.innerHTML = '$'+gorjetaP.toFixed(2)
        contPessoa.innerHTML = '$'+contaP.toFixed(2)
    } else if (numPessoas == 0) {
        document.querySelector('#aviso-pessoa').classList.remove('oculto')
        pessoas.classList.add('erro')
    } else {
        console.log('Ainda não terminou de preencher')
    }
}

conta.onblur = function() {
    valorConta = conta.value
    calculoTotal()
}

gorCustom.onblur = function() {
    valorCustom = gorCustom.value
    limpaClasseBtn()
    gorjeta = valorCustom / 100
    calculoTotal()
}

pessoas.onblur = function() {
    numPessoas = pessoas.value
    calculoTotal()
}

gor5Btn.addEventListener('click', () => {
    limpaClasseBtn()
    limpaCustom()
    gor5Btn.classList.add('selecionado')
    gorjeta = 0.05
    calculoTotal()
})

gor10Btn.addEventListener('click', () => {
    limpaClasseBtn()
    limpaCustom()
    gor10Btn.classList.add('selecionado')
    gorjeta = 0.1
    calculoTotal()
})

gor15Btn.addEventListener('click', () => {
    limpaClasseBtn()
    limpaCustom()
    gor15Btn.classList.add('selecionado')
    gorjeta = 0.15
    calculoTotal()
})

gor25Btn.addEventListener('click', () => {
    limpaClasseBtn()
    limpaCustom()
    gor25Btn.classList.add('selecionado')
    gorjeta = 0.25
    calculoTotal()
})

gor50Btn.addEventListener('click', () => {
    limpaClasseBtn()
    limpaCustom()
    gor50Btn.classList.add('selecionado')
    gorjeta = 0.5
    calculoTotal()
})

reset.addEventListener('click', () => {
    limpaClasseBtn()
    limpaCustom()
    limpaConta()
    limpaPessoas()
    limpaResposta()
    valorConta = null
    gorjeta = null
    numPessoas = null
})