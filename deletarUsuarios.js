let usuarios = require('./usuarios')

function deletarUsuarios(id, confirmacao) {
    const index = usuarios.findIndex(usuario => usuario.id == id)
    if (index !== -1) {
        if (confirmacao.toLowerCase() === 'sim') {
            usuarios.splice(index, 1);
            return true
        } else {
            return false
        }
    
    }
}

module.exports = deletarUsuarios;