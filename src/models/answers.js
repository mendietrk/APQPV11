const mongoose = require('mongoose');

// Subdocumento para cada respuesta individual
const RespuestaSchema = new mongoose.Schema({
    pregunta: {
        type: String, // texto de la pregunta
        required: true
    },
    valor: {
        type: mongoose.Schema.Types.Mixed, // puede ser string, número o array (checkbox)
        required: true
    }
});

// Schema principal de respuestas
const AnswerSchema = new mongoose.Schema({
    formularioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Formulario',
        required: true
    },
    parteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'part',
        required: true
    },
    respuestas: [RespuestaSchema]
}, {
    timestamps: true // createdAt y updatedAt
});

module.exports = mongoose.model('Answer', AnswerSchema);