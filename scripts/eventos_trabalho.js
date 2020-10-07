
function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = id;
    });
}


// documento carregado <-> void main(){ .....
/* window.onload garante que a pagina sera carregada
no browser do cliente, e apos o carregamento, pode-se
   definir os scripts que serao executados  */
// window.onload = function () { // js nativo

$(function () { // jquery

    console.log("documento carregado..");

    // exemplo de funcao definida inline (funcao anonima)
    $("#irParaSecao1").on("click", function () {
        scrollPara("#apresentacao1");
    });
v
    $("#irParaSecao2").on("click", function () {
        scrollPara("#apresentacao2");
    });

    $("#irParaSecao3").on("click", function () {
        scrollPara("#apresentacao3");
    });

    $("#irParaSecao4").on("click", function () {
        scrollPara("#apresentacao4");
    });

    $("#irParaSecao5").on("click", function () {
        scrollPara("#apresentacao5");
    });

    $("#irParaSecao6").on("click", function () {
        scrollPara("#apresentacao6");
    });

    $("#irParaSecao7").on("click", function () {
        scrollPara("#apresentacao7");
    });
    


});

