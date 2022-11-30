var cont, resposta

cont=0

while(cont<2)

{
    alert("Como irritar o usuário com while "+cont)
    cont++
}

for(cont=0; cont<2; cont++)

{
    alert("Como irritar o usuário com for "+cont)
}

do {
    resposta=prompt("Prosseguir")
}while(resposta=="sim")