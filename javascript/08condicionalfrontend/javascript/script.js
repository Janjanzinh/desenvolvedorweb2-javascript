// Comando dom e evento de click
document.getElementById("btnVerificar").addEventListener("click", verificar);

//função
function verificar() {
    const input = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    const numero = Number(input);

    if (numero > 10) {
        resultado.innerHTML = "O número é maior que 10.";
        resultado.style.color = "green";

    } else if (numero == 10) {
        resultado.innerHTML = "o numero é igual 10.";
        resultado.style.color = "orange";
    } else {
        resultado.innerHTML = "O numero é menor que 10.";
        resultado.style.color = "blue";
    }

}