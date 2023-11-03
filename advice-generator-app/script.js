const botao = document.querySelector('.botao')

botao.addEventListener('click', () => {
    const url = 'https://api.adviceslip.com/advice'
    fetch(url).then(response => { 
            return response.json() 
        }).then(adviceData => {
            const adviceObj = adviceData.slip
            document.querySelector('.numero-conselho').innerHTML = `#${adviceObj.id}`
            document.querySelector('.conselho').innerHTML = `"${adviceObj.advice}"`
        })
})