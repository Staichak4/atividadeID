let usuarios = require('./usuarios')

function deletarUsuarios(id) {
    const index = usuarios.findIndex(usuario => usuario.id == id)
    if (index !== -1) {
    usuarios.splice(index, 1);
    }
}

module.exports = deletarUsuarios;