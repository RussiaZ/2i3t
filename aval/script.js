let lista_nome = ["Calebe", "Naiara", "Kessa"];
// Segundo I, numeros 5 e 10
function atualizar_lista(){
    let nomes = "";
    if(lista_nome.length > 0){
        for(let i=0; i < lista_nome.length; i++){
            nomes += lista_nome[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "Lista Vazia";

}

function insere_ultimo(){
    let nome = document.getElementById("nome").value;
    if(nome !=""){
    lista_nome.push(nome);
    atualizar_lista();
    }
}


function insere_pri(){
    let nome = document.getElementById("nome").value;
    if(nome !=""){
    lista_nome.unshift(nome);
    atualizar_lista();
    }
}

function del_pri(){ 
    lista_nome.pop()
    atualizar_lista();}

function del_ultimo(){
     lista_nome.shift()
     atualizar_lista();}

function limp(){
    lista_nome = [];
    atualizar_lista();
}


function comparar(a,b){
    return a-b; }

function ordZU(){
    lista_nome.sort(comparar);
    atualizar_lista();
 }


function ordUZ(){
    lista_nome.reverse(comparar);
    atualizar_lista();
 }

 
function ordAZ(){
    lista_nome.sort();
    atualizar_lista();
 }

 function ordZA(){
    lista_nome.reverse();
    atualizar_lista();
 }
 