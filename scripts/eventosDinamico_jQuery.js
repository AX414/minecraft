
/**
 * Opcao de aumentar a fonte da pagina apos click do mouse
 */
function aumentarFonte() {
    console.log("funcao aumentar fonte, agora com jQuery");

    /* // comparacao - JS nativo! 
    var i;
    var paragrafos = document.getElementsByTagName("p"); // obter todos os paragrafos

    for (i=0; i < paragrafos.length; i++ ){
        paragrafos[i].style.fontSize = "2em"; // tamanho maior
    }*/

    // o que esta linha faz?
    $("p").css("font-size", "2em");
    //$("p").css("color", "gray"); // cor da fonte

}

/**
 * Opcao de diminuir a fonte da pagina apos click do mouse
 */
function diminuirFonte() {
    console.log("funcao diminuir fonte, agora com jQuery");

    /* comparacao - JS nativo! 
    var i;
    var paragrafos = document.getElementsByTagName("p");

    for (i=0; i < paragrafos.length; i++ ){
        paragrafos[i].style.fontSize = "1em"; // tamanho normal 
    }*/

    $("p").css("font-size", "1em");
}


function gerenciarAltoContraste() {
    console.log("funcao gerenciar alto contraste");

    /* // comparacao - JS nativo! 
    var corAtual, elementoBody;

    // buscando elemento body da pagina
    // elemento na primeira posicao da lista (body so tem um)
    elementoBody = document.getElementsByTagName("body")[0]; // 1° posicao
    
    corAtual = elementoBody.style.backgroundColor;     // obtem cor atual    
    console.log("cor atual: " + corAtual);
    
    if(corAtual == "black"){ // esta com fundo preto, ou seja, alto contraste
        elementoBody.style.backgroundColor = "lightblue"; // cor de fundo
        elementoBody.style.color = "black";               // cor da fonte
    } else {
        elementoBody.style.backgroundColor = "black";    // cor de fundo preta
        elementoBody.style.color = "white";              // cor da fonte branca
    } */

    // chaveamento, alterna
    $("body").toggleClass("cor-alto-contraste");

}

function calcularPreco() {
    /* comparacao - JS nativo! 
    var idade;
    
    // variavel idade recebe o valor digitado
    idade = document.getElementByid("idade").value; // value -> pegando o valor digitado no input

    // exibindo o valor digitado na tela de console (log)
    console.log("idade digitada: " + idade); // analogia ao printf, porem usa '+'
                                             // ex: printf("idade digitada: %d", idade)
    
    console.log("exibindo a idade e seu tipo:");
    console.log(idade); // console.log da variavel sozinha

    // convertendo a idade para valor numerico
    idade = parseInt(idade); // convertendo idade para inteiro --> em C:    (int) idade;
    console.log("idade digitada convertida para inteiro: " + idade); 

    if( idade >= 18 ){
        console.log("maior de idade, preço 50");
        document.getElementById("divResultadoPreco").innerHTML = "Maior de idade paga inteira: R$ 50,00";

    } else {
        console.log("menor de idade, preço 25");
        document.getElementById("divResultadoPreco").innerHTML = "Menor de idade paga meia: R$ 25,00";
    }*/

    var idade;

    // variavel idade recebe o valor digitado
    idade = $("#idade").val(); // funcao val -> pegando o valor digitado no input

    // exibindo o valor digitado na tela de console (log)
    console.log("idade digitada: " + idade); // analogia ao printf, porem usa '+'
    console.log(typeof(idade));
    idade = parseInt(idade);
    console.log(typeof(idade));
        
    if (idade >= 18) {
        console.log("maior de idade, preço 50");
        $("#divResultadoPreco").html("Maior de idade paga inteira: R$ 50,00");

    } else {
        console.log("menor de idade, preço 25");
        $("#divResultadoPreco").html("Menor de idade paga meia: R$ 25,00");
    }

}



// documento carregado <-> void main(){ .....
/* window.onload garante que a pagina sera carregada
no browser do cliente, e apos o carregamento, pode-se
   definir os scripts que serao executados  */
   // window.onload = function () { // nativo
$(document).ready(function(){ // jquery
    //  $(function(){ // ou jquery encurtado tbm pode ser

    //$("body").toggleClass("cor-alto-contraste");

    console.log("Entrou no window onload..funcionou o JS");
    //alert("Funcionou o javascript");


    /* // vincular, associar (bind, trigger, listener) -> JS nativo 
    
    document.getElementById("opAltoContraste").addEventListener("click", gerenciarAltoContraste); 

    document.getElementById("opAumentarFonte").addEventListener("click", aumentarFonte);
    document.getElementById("opDiminuirFonte").addEventListener("click", diminuirFonte);

    document.getElementById("btnCalcular").addEventListener("click", calcularPreco);    
    */

    // vincular, associar (bind, trigger, listener) -> jQuery
    //document.getElementById("btnCalcular").addEventListener("click", calcularPreco); // JS nativo
    $("#opAltoContraste").on("click", gerenciarAltoContraste);    // jQuery
    $("#opAumentarFonte").on("click", aumentarFonte);
    $("#opDiminuirFonte").on("click", diminuirFonte);
    $("#btnCalcular").on("click", calcularPreco);



});









