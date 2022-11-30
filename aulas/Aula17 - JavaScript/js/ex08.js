var nome, n

nome=prompt("Qual o seu nome?")
n=parseFloat(prompt(nome+", digite um valor:"))

if(n%7==0 && n%3==0)
{
    alert(nome+", o número "+n+" é divisível por 3 e 7")
    document.write("<h2>"+nome+", o número "+n+" é divisível por 3 e 7 <h2>")
}

if(n%7==0)
{
    alert(nome+", o número "+n+" é divisível por 7")
    document.write("<h2>"+nome+", o número "+n+" é divisível por 7 <h2>")
}

if(n%3==0)
{
    alert(nome+", o número "+n+" é divisível por 3")
    document.write("<h2>"+nome+", o número "+n+" é divisível por 3 <h2>")
}

if(n%3!=0 && n%7!=0)
{
    alert(nome+", o número "+n+" não é divisível por 3 e 7")
    document.write("<h2>"+nome+", o número "+n+" não é divisível por 3 e 7 <h2>")
}