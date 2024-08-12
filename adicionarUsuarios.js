let usuarios = require('./usuarios')

function adicionarUsuarios(usuario) {
    usuario.id = usuarios.length + 1;

    let jaExiste = usuarios.find(user => user.email == usuario.email) 
    if (jaExiste) {
        throw new Error("Já existe um usuário com esse email.")
    } else {
        usuarios.push(usuario)
    }
}


module.exports = adicionarUsuarios