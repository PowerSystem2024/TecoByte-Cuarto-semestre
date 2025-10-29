-- Init script corregido para crear tablas y relaciones sin errores de sintaxis
-- Crear la tabla usuarios primero, luego tareas y finalmente agregar las columnas/constraints necesarias

CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) UNIQUE NOT NULL,
    descripcion TEXT
);

-- Agregar columna usuario_id a tareas con referencia a usuarios
ALTER TABLE tareas
    ADD COLUMN IF NOT EXISTS usuario_id INTEGER REFERENCES usuarios(id);

-- Agregar columna gravatar a usuarios si no existe
ALTER TABLE usuarios
    ADD COLUMN IF NOT EXISTS gravatar VARCHAR(255);