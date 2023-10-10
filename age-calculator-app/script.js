// Pegando data de hoje
const date = new Date()

// console.log(date)

const dayT = date.getDay()
const monthT = date.getMonth()
const yearT = date.getFullYear()

// console.log(yearT)
// console.log(monthT)
// console.log(dayT)

// 
const btn = document.querySelector('.button')

const respAno = document.querySelector('#years')
const respMes = document.querySelector('#months')
const respDia = document.querySelector('#days')

let dayR = null
let monthR = null
let yearR = null

btn.addEventListener('click', function(e) {
    e.preventDefault()

    const ano = document.querySelector('#ano')
    const mes = document.querySelector('#mes')
    const dia = document.querySelector('#dia')
    const valorAno = ano.value
    const valorMes = mes.value
    const valorDia = dia.value

    if (0 < valorDia <= 31 || 0 < valorMes <=12 || 0 < valorAno <= yearT) {
        if (yearT == valorAno) {
            if (monthT < valorMes) {
                alert('Insira a data anterior à atual.')

                var yearR = '--'
                var monthR = '--'
                var dayR = '--'
            } else if (monthT == valorMes && dayT < valorDia) {
                alert('Insira a data anterior à atual.')

                var yearR = '--'
                var monthR = '--'
                var dayR = '--'
            } else {
                var yearR = 0
                var monthR = Math.abs(monthT - valorMes)
                if (dayT < valorDia) {
                    monthR -= 1
                    var dayR = Math.abs(dayT + (31 - valorDia))
                } else {
                    var dayR = Math.abs(dayT - valorDia)
                }
            }
        } else {
            if (monthT < valorMes) {
                var yearR = Math.abs(valorAno - yearT) - 1
                var monthR = Math.abs(monthT - valorMes)
                if (dayT < valorDia) {
                    monthR -= 1
                    var dayR = Math.abs(dayT + (31 - valorDia))
                } else {
                    var dayR = Math.abs(dayT - valorDia)
                }
            } else if (monthT == valorMes) {
                var yearR = Math.abs(valorAno - yearT)
                var monthR = 0
                if (dayT < valorDia) {
                    var dayR = Math.abs(dayT + (31 - valorDia))
                } else {
                    var dayR = Math.abs(dayT - valorDia)
                }
            } else {
                var yearR = Math.abs(valorAno - yearT)
                var monthR = Math.abs(monthT - valorMes)
                if (dayT < valorDia) {
                    monthR -= 1
                    var dayR = Math.abs(dayT + (31 - valorDia))
                } else {
                    var dayR = Math.abs(dayT - valorDia)
                }
            }
        }
    }

    // Resposta no html
    respAno.innerHTML = `${yearR}`
    respMes.innerHTML = `${monthR}`
    respDia.innerHTML = `${dayR}`
})