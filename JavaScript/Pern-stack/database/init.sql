CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(250) UNIQUE NOT NULL,
    descripcion TEXT
)