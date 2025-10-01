import { pool } from "../db.js";


export const listarTareas = (req, res) => res.send("Obteniendo tareas");

export const listarTarea =(req, res) => res.send("Obteniendo tarea unica");

export const crearTarea = async(req, res) => {
    const { titulo, descripcion } = req.body;
    


try{   
    const{rows} = await pool.query("INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)", [titulo, descripcion]);
    console.log(rows);
    res.send("Creando tarea");


}catch (error){
    console.log("algo salio mal ");
}}

export const actualizarTarea = (req, res) => res.send("Actualizando tarea unica");

export const eliminarTarea = (req, res) => res.send("Eliminando tarea unica");