const submeterFormulario = () => {
    const rangeIncial = document.getElementById("rangeInicial").value;
    const rangeFinal = document.getElementById("rangeFinal").value;
    const minhaAposta = document.getElementById("minhaAposta").value;

    realizarSorteio(+rangeIncial, +rangeFinal, +minhaAposta);

}
const realizarSorteio = (rangeInicial, rangeFinal, minhaAposta) => {
    if (!rangeInicial) {
        alert("Informe o range Inicial");
        return;
    }

    if (!rangeFinal) {
        alert("Informe o range Final");
        return;
    }
    
    if (rangeInicial > rangeFinal) {
        alert("O range INICIAL nao pode ser maior que o range FINAL");
        return;
    }

    if ((minhaAposta > rangeFinal) || (minhaAposta < rangeInicial)) {
        alert("Minha aposta deve estar entre o range INICIAL e FINAL");
        return;
    }

    const numeroSorteado = novoSorteio(rangeInicial, rangeFinal);

    if (numeroSorteado === minhaAposta) {
        alert("parabens voce acertou ");
        return;
    
    }

    alert(`O numero sorteado foi ${numeroSorteado}`);
}

const novoSorteio = (rangeIncial, rangeFinal) => {
    return(Math.floor(Math.random() * (rangeFinal - rangeIncial + 1 )) + rangeIncial);
}