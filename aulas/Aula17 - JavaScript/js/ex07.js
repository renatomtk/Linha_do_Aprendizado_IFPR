var nome, n

nome=prompt("Qual o seu nome?")
n=parseFloat(prompt(nome+", digite um valor:"))

if(n%2==0)
{
    alert(nome+", o número "+n+" é par")
    document.write("<h2>"+nome+", o número "+n+" é par <h2>")
}

else
{
    alert(nome+", o número "+n+" é ímpar")
    document.write("<h2>"+nome+", o número "+n+" é ímpar <h2>")
}