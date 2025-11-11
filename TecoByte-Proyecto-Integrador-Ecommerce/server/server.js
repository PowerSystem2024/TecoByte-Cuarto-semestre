// Importación de módulos
const express = require("express");
const cors = require("cors");
const path = require("path");
const { MercadoPagoConfig, Preference } = require("mercadopago");

// --- NUEVO: Importaciones para Autenticación y Base de Datos ---
const mongoose = require("mongoose");
const session = require("express-session"); // Para manejar sesiones de usuario
const bcrypt = require("bcryptjs"); // Para comparar contraseñas en el login
const User = require("./models/User"); // Importamos nuestro modelo de Usuario

// --- NUEVO: Conexión a MongoDB ---
mongoose.connect("mongodb://localhost:27017/tuEcommerceDB")
  .then(() => console.log("Conectado a MongoDB ✅"))
  .catch(err => console.error("Error al conectar a MongoDB ❌", err));

const app = express();

// Configuración del cliente de MercadoPago (SDK v2)
const client = new MercadoPagoConfig({
  accessToken:
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
});

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Corregido para apuntar a la carpeta /client
app.use(express.static(path.join(__dirname, "../client")));
app.use(cors());

// --- NUEVO: Configuración de Express Session ---
app.use(session({
  secret: "tu_secreto_aqui_super_seguro", // ¡Cambia esto!
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // Poner en true si usas HTTPS
    maxAge: 1000 * 60 * 60 * 24 // 1 día
  }
}));

// --- NUEVO: Middleware para verificar si el usuario está autenticado ---
const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ error: "No autorizado. Debes iniciar sesión." });
};

// --- RUTAS ---

// Ruta principal para servir el archivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "media", "index.html"));
});

// --- NUEVO: Rutas de API para Autenticación ---

// RUTA DE REGISTRO
app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son requeridos." });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El email ya está en uso." });
    }
    
    // La contraseña se hashea automáticamente por el hook en User.js
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: "Usuario registrado con éxito. Ahora puedes iniciar sesión." });
  } catch (error) {
    console.error("Error en /api/register:", error);
    res.status(500).json({ error: "Error en el registro." });
  }
});

// RUTA DE LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son requeridos." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email o contraseña incorrectos." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email o contraseña incorrectos." });
    }
    
    // Guardar usuario en la sesión
    req.session.userId = user._id;
    req.session.userEmail = user.email;

    res.status(200).json({ message: "Login exitoso.", email: user.email });
  } catch (error) {
    console.error("Error en /api/login:", error);
    res.status(500).json({ error: "Error en el login." });
  }
});

// RUTA DE LOGOUT
app.post("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar sesión." });
    }
    res.clearCookie('connect.sid'); // Limpia la cookie
    res.status(200).json({ message: "Sesión cerrada exitosamente." });
  });
});

// RUTA PARA VERIFICAR ESTADO DE LA SESIÓN (para el frontend)
app.get("/api/session-status", (req, res) => {
  if (req.session.userId) {
    res.status(200).json({
      isLoggedIn: true,
      email: req.session.userEmail,
    });
  } else {
    res.status(200).json({ isLoggedIn: false });
  }
});


// --- MODIFICADO: Endpoint para crear preferencia (AHORA PROTEGIDO) ---
app.post("/create_preference", isAuthenticated, async (req, res) => {
  
  const preference = new Preference(client);
  try {
    const data = await preference.create({
      body: {
        items: [
          {
            title: req.body.description,
            quantity: Number(req.body.quantity),
            currency_id: "ARS",
            unit_price: Number(req.body.price),
          },
        ],
        back_urls: {
          success: "http://localhost:8080/feedback", // Deberías crear esta página
          failure: "http://localhost:8080/feedback",
          pending: "http://localhost:8080/feedback",
        },
        payer: {
          email: req.session.userEmail // Asociamos el pago al email del usuario
        }
      },
    });
    
    res.status(200).json({
      preference_id: data.id,
      preference_url: data.init_point,
    });
  } catch (error) {
    console.error("Error al crear preferencia de MP:", error);
    res.status(500).json({ error: "Error creando la preferencia" });
  }
});

// Iniciar servidor
app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080 🚀");
});