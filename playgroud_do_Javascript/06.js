class Pessoa {
    constructor(nome, sobreNome, idade) {
        this.nome = nome
        this.sobreNome = sobreNome
        this.idade = idade
    }

    set nome(nome) {
        this.nome = nome
    }

    get nome() {
        console.log(this.nome)
    }
}

const g = new Pessoa()
g.nome("Ian")
g.nome();