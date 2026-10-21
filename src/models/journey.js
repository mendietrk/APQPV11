const mongoose = require("mongoose");

// Tiempo acumulado por actividad durante la jornada
const actividadSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true, maxlength: 40 },
    milisegundos: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

// Cada cambio de estado (tramo de tiempo en una actividad)
const cambioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true, maxlength: 40 },
    inicio: { type: Date, required: true },
    fin: { type: Date, required: true },
  },
  { _id: false }
);

const journeySchema = new mongoose.Schema(
  {
    usuario: { type: String, trim: true, default: "" },
    inicio: { type: Date, required: true }, // checada de entrada
    fin: { type: Date, required: true }, // checada de salida
    totalMs: { type: Number, min: 0 }, // duración total de la jornada
    actividades: { type: [actividadSchema], default: [] },
    cambios: { type: [cambioSchema], default: [] },
  },
  { timestamps: true }
);

// Calcula la duración total antes de guardar
journeySchema.pre("validate", function (next) {
  if (this.inicio && this.fin) {
    this.totalMs = this.fin - this.inicio;
  }
  next();
});

// Para consultar jornadas por usuario y fecha
journeySchema.index({ usuario: 1, inicio: -1 });

module.exports = mongoose.model("Journey", journeySchema);
