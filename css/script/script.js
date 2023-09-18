function alo_mundo () {
  alert ("projeto iniciado! alo!")
}

escrever = msg => alert(msg);

soma = (a,b) => a+b;
sub = (a,b) => a-b;
mult = (a,b) => a*b;
div = (a,b) => a/b;
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) => {

   let delta = sub(mult(b,b),mult(4,mult(a,c)));

   if (delta<0) return "Não possui raiz real.";
   if (delta==0) return "X1 = X2 = " + div(-b,mult(2,a)); 

   return "A raiz do X1 é de = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
          ", enquanto a raiz de X2 é = " + div(sub(-b,raiz(delta)),mult(2,a));
          
}

 const  set_resultado = documento.getElementBy("resutado").value
let a  = 0;
let b  = 0;
let resultado  = 0;
let executar  = ""; 

caucular = () =>{
  if (executar != "") soma; {
  
  if (executar = "+") mostrar-resultado(soma(a,b));
  if (executar = "-")  mostrar-resultado(sub(a,b));
  if (executar = "/")  mostrar-resultado(div(a,b));
  if (executar = "*")  mostrar-resultado(mult(a,b));
  exxecutar = "";
  a  = "";
  b  = "" ;

  }
  
}
 function digitando(tecla){
  if(executar == ""){
    a += tecla;
    alert(a);

  }else{
    b += tecla;
  }
  

 }