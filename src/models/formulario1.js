const mongoose = require('mongoose');

// Subdocumento para cada campo del formulario
const CampoSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        enum: ['text', 'number', 'email', 'date', 'select', 'checkbox', 'radio']
    },
    requerido: {
        type: Boolean,
        default: false
    },
    opciones: {
        type: [String], // Para select, checkbox o radio
        default: []
    }
});

// Schema principal
const FormularioSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: ''
    },
    campos: [CampoSchema], // Array de campos dinámicos
}, {
    timestamps: true // createdAt y updatedAt
});

// Exportar modelo
module.exports = mongoose.model('Formulario', FormularioSchema);