var nome, n1, n2, sub

nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=parseFloat(prompt(nome+" digite outro valor: "))
sub=n1-n2
alert(nome+", a subtração é "+ sub)

document.write("<h2>"+nome+", o resultado é "+sub+ "</h2>")