import { pool } from "../db.js";

export const signin = (req, res) => res.send("ingresando");

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  res.send("registrando");

  const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)", [
    name,
    email,
    password,
  ])
  console.log(result);
};

export const logout = (req, res) => res.send("cerrando sesion");

export const profile = (req, res) => res.send("perfil de usuario");
