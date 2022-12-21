function inverso (valor) {
   const tipo = typeof valor

   if (tipo == Boolean) {
    return !valor;
   } 
   
   else if (tipo == Number) {
    return -valor;
   }

   else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
   }
}
inverso(2)