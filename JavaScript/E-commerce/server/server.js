// Importación de módulos
const express = require("express");
const cors = require("cors");
const path = require("path");

// Importación SDK MercadoPago v2.x
const { MercadoPagoConfig, Preference } = require("mercadopago");

const app = express();

// Configuración del cliente de MercadoPago (SDK v2)
const client = new MercadoPagoConfig({
  accessToken:
    "APP_USR-xxxxxxxxxxxxxxxxxxxxxx",     
});

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Client")));
app.use(cors());

// Ruta principal para servir el archivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Client", "media", "index.html"));
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.description,
                    quantity: Number(req.body.quantity),
                    currency_id: "ARS",
                    unit_price: Number(req.body.price),
                },
            ],
            back_urls: {
                success: "https://github.com/Roberto-JLopez",
                failure: "https://github.com/Roberto-JLopez",
                pending: "https://github.com/Roberto-JLopez",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });

        console.log(result);
        res.status(200).json({
            preference_id: result.id,
            preference_url: result.init_point,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :(",
        });
    }
});


// Iniciar servidor
app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080 🚀");
});