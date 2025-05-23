const { default: mongoose } = require("mongoose")


const usuarioSchema = new moongoose.Schema({
    nome:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        ruquired: true
    },
})

const Usuario = mongoose.model('Usuário',usuarioSchema,'usuarios');
module.exports = Usuario;
