//Repetição
for (let i = 0; i < 10; i++) {
    console.log("Hello, World!!!")
}


const cartao = {
    name: "Ian",
    age: 18,
    cd: 1857
}
//Use em objetos 
for (i in cartao) {
    console.log(i, cartao[i])
}


const alunos = ["Ana", "Gabi", "Juliha", "Anderson", "João"];
//So use em arrays
for (let list of alunos ) {
    console.log(list)
}
