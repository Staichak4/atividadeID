let usuarios = require('./usuarios')

function adicionarUsuarios(usuario) {
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
}


module.exports = adicionarUsuarios