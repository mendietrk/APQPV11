const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Subdocumento: cada fila del formulario
 */
const FilaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    nominal: {
        type: Number,
        default: null
    },
    lie: {
        type: Number,
        default: null
    },
    lse: {
        type: Number,
        default: null
    },
    lic: {
        type: Number,
        default: null
    },
    lsc: {
        type: Number,
        default: null
    },
    unidad: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Schema principal
 */
const Formulario2Schema = new Schema({
    titulo: {
        type: String,
        default: 'Formulario de Características',
        trim: true
    },

    // 🔗 Relación con número de parte (pa6)
  pa6: {
  type: String,
  required: true
},

    // 📋 Filas del formulario
    filas: {
        type: [FilaSchema],
        validate: {
            validator: function (v) {
                return v.length > 0;
            },
            message: 'Debe haber al menos una fila'
        }
    }

}, {
    timestamps: true
});

/**
 * Exportar modelo
 */
module.exports = mongoose.model('Formulario2', Formulario2Schema);