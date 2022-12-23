
var origem = 0;
var destino = 0;
var conteudoOrigem = "";
var conteudoDestino = "";



function mudar (click) {
    if(origem == 0){
        //SE ORIGEM IGUAL A 0 PEGA O VALOR DO PRIMEIRO ELEMENTO CLICADO
        conteudoOrigem = click.innerHTML
        origem = click
    } else{
        //SENÃO PEGA O VALOR DO SEGUNDO ELEMENTO CLICADO E ARMAZENA PARA A TROCA
        conteudoDestino = click.innerHTML
        destino = click
    }
    if(origem != 0 && destino != 0){
        //SE ORIGEM E DESTINO DIFERENTES DE 0, ORIGEM RECEBE O CONTEUDO DESTINO E DESTINO RECEBE CONTEUDO ORIGEM ASSIM EFETUANDO A TROCA DE VALORES
        //ORIGEM E DESTINO IGUALADOS A 0 PARA QUE RESETE APOS SER FEITA A PRIMEIRA TROCA.
        origem.innerHTML = conteudoDestino
        destino.innerHTML = conteudoOrigem
        origem = 0
        destino = 0
    }
}

