let usuarios = require('./usuarios')

function editarUsuarios(id, novoUsuario) {
    const index = usuarios.findIndex(usuario => usuario.id == id)
    if (index !== -1) {
        usuarios[index] = {id, ...novoUsuario}
    }
}

module.exports = editarUsuarios