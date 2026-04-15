const mongoose = require('mongoose');

const pmsSchema = new mongoose.Schema({

    // Información general
    numeroParte: {
        type: String,
        required: true,
        trim: true
    },
    maquina: {
        type: String,
        required: true,
        trim: true
    },

    // Timestamp
    timestamp: {
        type: Date,
        default: Date.now
    },

    // Parámetros generales
    P001: Number,
    P002: Number,
    P003: Number,
    P004: Number,
    P005: Number,
    P006: Number,
    P007: Number,
    P010: Number,
    P011: String,

    // Temperaturas
    P015: Number,
    P016: Number,
    P017: Number,
    P018: Number,
    P019: Number,
    P020: Number,
    P021: Number,
    P022: Number,
    P023: Number,
    P024: Number,

    // Proceso
    P026: Number,
    P027: Number,
    P028: Number,
    P029: Number,
    P032: Number,
    P033: Number,
    P034: Number,
    P035: Number,
    P036: Number,
    P037: Number,
    P038: Number,
    P039: Number,
    P040: Number,
    P041: Number,
    P042: Number,
    P043: Number,

    // Información adicional
    P044: String,
    P045: String,

    // Perfiles pistón
    P046: Number,
    P047: Number,
    P048: Number,
    P049: Number,
    P050: Number,
    P051: Number,

    // Perfiles trefilado
    P061: Number,
    P062: Number,
    P063: Number,
    P064: Number,
    P065: Number,
    P066: Number,

    // Perfiles boquilla
    P071: Number,
    P072: Number,
    P073: Number,
    P074: Number,
    P075: Number,
    P076: Number,
    P077: Number,
    P078: Number,
    P079: Number,
    P080: Number,
    P081: Number,
    P082: Number,
    P083: Number,
    P084: Number,
    P085: Number,
    P086: Number,
    P087: Number,
    P088: Number,
    P089: Number,
    P090: Number,
    P091: Number,
    P092: Number,
    P093: Number,
    P094: Number,
    P095: Number,
    P096: Number,
    P097: Number,
    P098: Number,
    P099: Number,
    P100: Number,
    P101: Number,
    P102: Number,
    P103: Number,
    P104: Number,
    P105: Number,
    P106: Number,
    P107: Number,

    // Final
    P110: Number,
    P111: Number,
    P112: Number,
    P113: Number,
    P114: Number

}, {
    timestamps: true // createdAt y updatedAt automáticos
});

module.exports = mongoose.model('PMS', pmsSchema);