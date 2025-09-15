package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiantes2025;

import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiantes2025> listarEstudiantes();
    public Estudiantes2025 buscarEstudiantePorId(Integer idEstudiantes2025);
    public void guardarEstudiante(Estudiantes2025 estudiante);
    public void eliminarEstudiante(Estudiantes2025 estudiante);
}
