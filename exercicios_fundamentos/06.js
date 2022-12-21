const inverso = function (valor) { 
    const tipo = typeof valor;
   
    if (tipo  == "boolean") { 
        return !valor 
    }
    else if (tipo  == "number") {
        return -valor
    } 
    else {
      return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}
console.log(inverso(2))