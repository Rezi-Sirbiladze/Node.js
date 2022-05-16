const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    name: String,
    email: String
});

const Usuario = mongoose.model('Usuarios', usuarioSchema);

module.exports = Usuario;