function inverterString(string) {
    let stringInvertida = "";
    //percorre a string original de trás para frente
    for (let i = string.length - 1; i >= 0; i--) {
        //Adiciona cada caractere ao resultado da string invertida
        stringInvertida += string[i];
    }
    return stringInvertida;
}

let resultado = inverterString("target");
console.log(resultado); // Saída: "tegrat"
