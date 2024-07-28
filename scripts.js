// Variáveis - É FORMA UMA DE IDENTIFICAR QUEM É QUEM  
// DÁ UM NOME PARA UM PEDACINHO DE CÓDIGO
// É COMO SE CRIASSE UMA PASTA,PARA GUARDAR O QUISER

// Funções
// É um trecho de código que só executa, quando é chamado

// querySelector = busca o que eu quiser que ele busque 
// Document = ir no HTML

let formulario = document.querySelector(".formulario")

function aparecerformulario() {
    formulario.style.left = "50%"

}

function desaparecerformulario() {
    formulario.style.left = "-50%"

}
