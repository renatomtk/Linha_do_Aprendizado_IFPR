var nome, n1, n2, mult

nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=parseFloat(prompt(nome+" digite outro valor: "))
mult=n1*n2
alert(nome+", a multiplicação é "+ mult)

document.write("<h2>"+nome+", o resultado é "+mult+ "</h2>")