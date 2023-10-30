

function alo_mundo () {
  alert ("projeto iniciado! alo!")
}

let a  = "";
let b  = "";
let c  = "";
let sa  = "+";
let sb  = "+";
let sc  = "+";
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

const calcular_equacao = () => {
    if(a != "" && a != "0")
     if(a != "+"){ a = -(Number(a))} else {a=Number(a);}
     if(b != "+"){ b = -(Number(b))} else {b=Number(b);}
     if(c != "+"){ c = -(Number(c))} else {c=Number(c);}    

    document.getElementById("raiz").innerHTML = equacao2Grau(a,b,c);

}

const set_sinal_a = () => {
  sa = document.getElementById("sinal_a").value;
  calcular_equacao();
  
}

const set_sinal_b = () => {
  sb = document.getElementById("sinal_b").value;
  calcular_equacao();
}

const set_sinal_c = () => {
  sc = document.getElementById("sinal_c").value;
  calcular_equacao(); 
}

const set_valor_a = () => {
  a = document.getElementById("valor_a").value;
  calcular_equacao();
}

const set_valor_b = () => {
  b = document.getElementById("valor_b").value;
  calcular_equacao();
}

const set_valor_c = () => {
  c = document.getElementById("valor_c").value;
  calcular_equacao();
}





