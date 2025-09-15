package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2025;

public interface EstudianteRepositorio extends JpaRepository<Estudiantes2025, Integer> {
}
