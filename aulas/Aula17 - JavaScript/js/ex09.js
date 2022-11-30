var nome, idade, cpf

nome=prompt("Qual o seu nome?")
idade=prompt("Qual a sua idade?")

alert("Bem vindo " +nome+ "! Você tem " +idade+ " anos.")

if(idade>=18)
{
    cpf=prompt("Qual seu CPF?")
    alert(nome+", seu CPF é "+cpf+".")
    document.write("<h2>"+nome+", seu CPF é "+cpf+".<h2>")
}

else
{
    alert(nome+", você é menor de idade.")
    document.write("<h2>"+nome+", você é menor de idade. <h2>")
}