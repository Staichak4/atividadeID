let usuarios = require('./usuarios')

function editarUsuarios(id, novoUsuario) {
    let index = usuarios.findIndex(user => user.id === id)
    

    let jaExiste = usuarios.find(user => user.email === novoUsuario.email) 
    if (jaExiste) {
        throw new Error("Já existe um usuário com esse email.")
    } else {
        usuarios[index] = {id, ...novoUsuario}
    }
}

module.exports = editarUsuarios