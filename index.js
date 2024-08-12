
const prompt = require('prompt-sync')()
let usuarios = require('./usuarios')
const listarUsuarios = require('./listarUsuarios')
const adicionarUsuarios = require('./adicionarUsuarios')
const editarUsuarios = require('./editarUsuarios')
const deletarUsuarios = require('./deletarUsuarios')

function menu() {
    console.log(`Bem vindo! O que deseja?\n1. Listar contatos\n2. Adicionar contatos\n3. Editar contatos\n4. Deletar contatos\n5. Sair`)
    const opcao = prompt("Escolha uma opção: ")
    let index

    switch (opcao) {
        case '1':
            if(usuarios.length === 0) {
                console.log("Não há usuários cadastrados.")
                menu()
            } else {
                listarUsuarios()
                menu()
            }
            break;
        case '2':
            let nome = prompt("Nome: ")
            let email = prompt("Email: ")
            let telefones = []
            let telefone
            while ((telefone = prompt('Digite um telefone ou deixe branco para sair. '))) {
                telefones.push(telefone)
            }
            adicionarUsuarios({nome: nome, email: email, telefone: telefones})
            console.log('Adicionado com sucesso!')
            menu()
            break;
        case '3':
            if (usuarios.length === 0) {
                console.log("Não há usuários cadastrados.")
            } else {
                listarUsuarios()
                let pergunta = parseInt(prompt("Digite o ID do usuário a editar: "))
                    let novoNome = prompt("Novo nome: ")
                    let novoEmail = prompt("Novo email: ")
                    let novoTelefones = []
                    while ((novoTelefone = prompt("Digite um novo telefone ou deixe branco pra sair."))) {
                        novoTelefones.push(novoTelefone)
                    }
                    editarUsuarios(pergunta, {nome: novoNome, email: novoEmail, telefone: novoTelefone})
                    console.log('Usuário editado com sucesso.')
                    menu()
            }
            break;
        case '4':
            if (usuarios.length === 0) {
                console.log('Não há usuários cadastrados.')
                menu()
            } else {
                listarUsuarios()
                pergunta = parseInt(prompt("Digite o ID do usuário a ser deletado: "))
                let confirmacao = prompt('Tem certeza? ')

                if(deletarUsuarios(pergunta, confirmacao)) {
                    console.log('Usuário removido com sucesso.')
                } else {
                    console.log('Operação cancelada')
                }
                menu()
            }
            break;
        case '5':
            console.log("Saindo do programa...")
            break;
        default:
            console.log("Opção inválida!")
            break;
    }
}

menu()