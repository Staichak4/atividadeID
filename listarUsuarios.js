let usuarios = require('./usuarios')

function listarUsuarios() {
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Email: ${usuario.email}, Telefone: ${usuario.telefone}`)
    })
}

module.exports = listarUsuarios;