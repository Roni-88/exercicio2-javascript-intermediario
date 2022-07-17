const itemPerguntasERespostas = document.querySelectorAll (".item")

itemPerguntasERespostas.forEach (function (item) {
    item.addEventListener ("click", function () {
        const itemAtivoAtual = document.querySelector (".ativo")

        if (itemAtivoAtual) {
        itemAtivoAtual.classList.remove ("ativo")
        }

        item.classList.add ("ativo")
    })
})

//Deixei sem a classe ATIVO no HTML para que não seja mostrada nenhuma resposta assim que abrir o site, apenas quando o cliente selecionar uma opção.
