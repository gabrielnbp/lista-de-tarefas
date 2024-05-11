$(document).ready(function () { //inicializar uma função em jQuery

    //adiciona uma nova tarefa
    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val(); //atribuo o conteúdo HTML a variavel
        const novaTarefa = $('<li></li>'); //crio uma variavel para receber o novo item da lista

        $(`<li>${nomeTarefa}</li>`).appendTo(novaTarefa); //adiciono o elemento desejado dentro da lista
        $(novaTarefa).appendTo('ul'); //adiciono a nova tarefa dentro do 'ul'

        $('#nome-tarefa').val('');

    })

    //riscar a tarefa 
    $('ul').on('click', 'li', function() { //função 'click' vai funcionar especificamente para o 'li'
        $(this).addClass('tarefa-feita'); //'this' define que o 'li' clicado, vai ser riscado
    })

})