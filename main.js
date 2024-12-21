$(document).ready(function() { //longin usando o jquery

    $('header button').click(function() { //longin no botão no evento do click qua acina uma função
        $('form').slideDown() // função de abrir formulario suavimente
    })

    $('#cancelar-button').click(function() {  //longin no botão no evento do click qua acina uma função
        $('form').slideUp()// função de fechar formulario suavimente
    })

    $('form').on('submit',function(e) { // atribuir evento com .on de submit informação da qual aciona uma função 
        e.preventDefault() // previna ação padão do navegador 
        const endereçoDeTexto = $('#agenda').val()
        const novoItem = $('<li style="display: none;"></li>')
        $(`<p id="texto">${endereçoDeTexto}</p>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('#agenda').val('')
        $(endereçoDeTexto).click
    })

    $(document).on('click', '#lista-tarefas li', function () {
        $(this).toggleClass('riscar');
    })

})
