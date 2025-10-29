import { Card, Button } from "../ui";
import { useTareas } from "../../context/TareasContext";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md"; // ✅ Íconos confiables

export function CardTareas({ tarea }) {
    const { eliminarTarea } = useTareas();
    const navigate = useNavigate();

    return (
        <Card key={tarea.id} className="py-4 px-7 justify-center flex flex-col">
            <div>
                <h1 className="text-2xl font-bold">{tarea.titulo}</h1>
                <p className="py-4">{tarea.descripcion}</p>
            </div>
            <div className="flex justify-end gap-x-2">
                <button 
                    onClick={() => navigate(`/tareas/${tarea.id}/editar`)}
                    className="btn-edit"
                    title="Editar"
                >
                    <MdEdit className="text-white" />
                </button>
                <button
                    className="btn-delete"
                    onClick={async () => {
                        if (window.confirm("¿Estas seguro de eliminar esta tarea?")) {
                            await eliminarTarea(tarea.id);
                        }
                    }}
                    title="Eliminar"
                >
                    <MdDelete className="text-white" />
                </button>
            </div>
        </Card>
    );
}

export default CardTareas;
