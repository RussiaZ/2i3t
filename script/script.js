

function alo_mundo () {
  alert ("projeto iniciado! alo!")
}

let a  = "";
let b  = "";
let valor = "";
let executar  = ""; 
let temPonto = false;
let desligada = false;


escrever = msg => alert(msg);
soma = (a,b) => Number(a)+Number(b);
sub = (a,b) => Number(a)-Number(b);
mult = (a,b) => Number(a)*Number(b);
div = (a,b) => Number(a)/Number(b);
raiz = a => Math.sqrt(Number(a));
equacao2Grau = (a,b,c) => {

   let delta = sub(mult(b,b),mult(4,mult(a,c)));

   if (delta<0) return "Não possui raiz real.";
   if (delta==0) return "X1 = X2 = " + div(-b,mult(2,a)); 

   return "A raiz do X1 é de = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
          ", enquanto a raiz de X2 é = " + div(sub(-b,raiz(delta)),mult(2,a));
}
valor = "";


function mostrar_resultado(){
   document.getElementById("resultado").value = valor;
}


function calcular(){
  if (desligada) return;
  if (executar != ""){
   b=valor;
   if (executar == "soma") valor = soma(a,b);
   if (executar == "sub")  valor = sub(a,b);
   if (executar == "div")  valor = div(a,b);
   if (executar == "mult")  valor = mult(a,b);
   mostrar_resultado();
   executar = "";
   a  = "";
   b  = "";
   valor = "";
   temPonto = false;
  }
  
}


function desliga(){
  if (desligada){
    desligada=false;
   zerar();
  } else {
   zerar();
   mostrar_resultado();    
   desligada= true;
  }
  return desligada;

}



function raiz_quadrada(){
  valor = raiz(valor);
 mostrar_resultado();
 }
 
 function porcentagem(){
   if(executar == "mult"){
     b = valor;
     valor= div(mult(a,b),100);
     mostrar_resultado();
     valor= "";
   }
 }
 
 

// function digitando(tecla){
//  if(executar == ""){
//    a += tecla;
//    alert(a);
//
//  }else{
//    b += tecla;
//  }
// }

function zerar(){
  a="";
  b="";
  valor = "0";
  executar = "";
  mostrar_resultado();
  valor = "";
}


function operacao(op){
  executar = op;
  a = valor;
  valor = "";
}

 function digitando(tecla){
  if(tecla=="."){
    if(!temPonto){
      valor = valor + tecla;
      mostrar_resultado();
      temPonto = true;
    }
    return;
  }

  valor = valor + tecla;
  mostrar_resultado();
 }