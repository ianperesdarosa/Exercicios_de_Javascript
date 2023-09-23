class Pessoa {
    constructor(nome, sobreNome, idade) {
        this.nome = nome
        this.sobreNome = sobreNome
        this.idade = idade
    }

    set_nome(nome) {
        this.nome = nome
    }

    get_nome() {
        console.log(this.nome)
    }
}

const g = new Pessoa()
g.set_nome("Ian")
g.get_nome()
