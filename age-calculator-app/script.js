// Pegando data de hoje
const date = new Date

const dayT = date.getDay()
const monthT = date.getMonth()
const yearT = date.getFullYear()

// 
const btn = document.querySelector('.button')

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
        var date1 = new Date(dayT+'/'+monthT+'/'+yearT)
        var date2 = new Date(valorDia+'/'+valorMes+'/'+valorAno)
        var timeDiff = Math.abs(date2.getTime() - date1.getTime())
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
        var diffYear = Math.ceil(diffDays / 365)
        console.log(diffYear)
    }
})