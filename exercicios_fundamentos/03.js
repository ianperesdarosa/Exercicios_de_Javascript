const calculadora = function (horas, salario) {
    const horasTrablhadas = horas * salario;
    const bruto = horasTrablhadas * 31;

    console.log("Quanto ganha no dia: R$" + horasTrablhadas)
    console.log("Salario bruto: R$" + bruto)
}

calculadora(6, 8)

