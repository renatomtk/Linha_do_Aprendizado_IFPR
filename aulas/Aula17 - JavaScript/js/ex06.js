var nome, n1, n2, div

nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=parseFloat(prompt(nome+" digite outro valor: "))
div=n1/n2
alert(nome+", a divisão é "+ div)

document.write("<h2>"+nome+", o resultado é "+div+ "</h2>")

if(n2==0){
    alert(nome+" não existe divisão por zero")
}

else{
    divisao=n1/n2
    alert(nome+" o resultado da divisão é "+divisao)
}