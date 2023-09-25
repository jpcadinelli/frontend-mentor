function validate() {
    if (document.getElementById('p1').checked) {
        $('pergunta').addClass('clique');
        $('clique').removeClass('pergunta');
    } else {
        $('clique').addClass('pergunta');
        $('pergunta').removeClass('clique');
    }
}