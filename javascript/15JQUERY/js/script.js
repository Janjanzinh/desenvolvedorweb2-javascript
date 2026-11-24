// 1. execução com javascript puro (vanilla)
document.getElementById('btn-js').addEventListener('click', function () {

    //seleciona todos os checkboxes marcados
    const marcados = document.querySelectorAll('input[name="tarefa"]:checked');
    const divResultado = document.getElementById('resultado');

    if (marcados.length === 0) {
        divResultado.innerHTML = '<strong>[JavaScript]</strong> Nenhum item selecionado.';
        return;
    }
    //extrai os valores para um array

    const itens = Array.from(marcados).map(checkbox => checkbox.value);

    //exibe na tela
    divResultado.innerHTML = `
    <strong>[Executado via JavaScript]</strong>
    <ul>${itens.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
});

// 2 execução com jquery
$(document).ready(function () {
    $('#btn-jq').on('click', function () {

        const marcados = $('input[name="tarefa"]:checked');
        const $resultado = $('#resultado');

        if(marcados.length === 0){
            $resultado.html('<strong>[jQuery]</strong> Nenhum item selecionado.');
            return;
        }

        //mapeia os valores usando $.map() e .get() para converter em array comum
        const itens = marcados.map(function(){
            return $(this).val();
        }).get();

        //exibe na tela
        const listaHtml = itens.map(item => `<li>${item}</li>`).join('');
        $resultado.html(`
            <strong>[Executado via jQuery]</strong
            <ul>${listaHtml}</ul>
            `);

    });
});