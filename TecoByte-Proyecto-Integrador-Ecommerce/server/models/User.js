const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { 
    type: String, 
    required: [true, "El email es obligatorio."], 
    unique: true,
    lowercase: true,
    trim: true 
  },
  password: { 
    type: String, 
    required: [true, "La contraseña es obligatoria."]
  }
});

// Hook "pre-save": Se ejecuta ANTES de guardar un usuario
userSchema.pre("save", async function (next) {
  // Si la contraseña no se modificó, no hacer nada
  if (!this.isModified("password")) {
    return next();
  }

  try {
    // Generar "salt" y hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;