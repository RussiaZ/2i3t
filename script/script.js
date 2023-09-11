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

//attempt 4 (2x² - 0x - 0 = 0)
//escrever(equacao2Grau(2,0,0));

//attempt 3 (3x² - 2x - 1 = 0)
escrever(equacao2Grau(3,-2, -1));

//attempt 1
//escrever(soma(10,8));

//attempt 2
//escrever(soma(1000, mult(1000,div(22,1000))));