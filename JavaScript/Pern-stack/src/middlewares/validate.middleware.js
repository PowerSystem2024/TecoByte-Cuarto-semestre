export const validateSchema = (schema) => async (req, res, next) => {
    try {
        // Normalize English field names to Spanish to match schema/controller
        if (req.body) {
            if (req.body.title && !req.body.titulo) req.body.titulo = req.body.title;
            if (req.body.description && !req.body.descripcion) req.body.descripcion = req.body.description;
        }
        await schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error)
        if (Array.isArray(error.errors)) {
            return res.status(400).json(error.errors.map((error) => error.message))
        }
    }
}