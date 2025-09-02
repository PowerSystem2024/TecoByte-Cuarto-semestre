package UTN.datos;

import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    // metodo listar
    public List<Estudiante> listarEstudiantes() {
        List<Estudiante> estudiantes = new ArrayList<>();
        // creamos algunos objetos que so necesarios para ocmunicarnos con la base de
        // datos
        PreparedStatement ps;// envia la sentencia a la base de datos
        ResultSet rs; // Obtenemos el resultado de la base de datos
        // creamos un objeto de tipo conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2025 ORDER BY idestudiantes2025";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2025"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                // falta agregarlo a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("Ocurrio un error al seleccionar datos: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion: " + e.getMessage());
            }
        } // fin finally
        return estudiantes;
    }// fin metodo listar

    // metodo por id-> fin by id
    public boolean buscarEstudiantePorId(Estudiante estudiante) {
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2025 WHERE idestudiantes2025=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; // se encontro un registro
            } // fin if
        } catch (Exception e) {
            System.out.println("Ocurrio un error al buscar estudiante: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrio un error al cerrar la conexion. " + e.getMessage());
            } // fin catch
        } // fin finally
        return false;
    }

    // metodo agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2025 (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;

        } catch (Exception e) {
            System.out.println("Ocurrio un error al agregar estudiante: " + e.getMessage());
        } // fin catch
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Error al cerrar la conexion: " + e.getMessage());
            } // fin catch
        } // fin finally
        return false;
    }// fin metodo agregarEstudiante

    // metodo para modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2025 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2025=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Error al modificar estudiante" + e.getMessage());
        } // fin catch
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Error al cerrar la conexion" + e.getMessage());
            } // fin catch
        } // fin finally
        return false;
    }// fin metodo modificarEstudiante

    public boolean eliminarEstudiante(Estudiante estudiante) {
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2025 WHERE idestudiantes2025=?";
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Error al eliminar estudiante: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Error al cerrar la conexión: " + e.getMessage());
            }
        }
        return false;
    }

    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();
        // modificar estudiante
        // var estudianteModificado = new Estudiante(1, "Juan Carlos", "Juarez",
        // "4353523", "juancarlos@mail.com");
        // var modificado = estudianteDao.modificarEstudiante(estudianteModificado);
        // if(modificado)
        // System.out.println("Estudiante modificado: "+estudianteModificado);
        // else
        // System.out.println("No se modifico el estudiante: "+estudianteDao);

        // agregar estudiante
        // var nuevoEstudiante = new Estudiante("Carlos","Lara","435453",
        // "carlos@mail.com");
        // var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        // if(agregado)
        // System.out.println("Estudiante agregado: "+nuevoEstudiante);
        // else
        // System.out.println("No se ha agregado estudiante : "+nuevoEstudiante);

        // Eliminar estudiante con id 3
        var estudianteEliminar = new Estudiante(4);
        var eliminado = estudianteDao.eliminarEstudiante((estudianteEliminar));
        if (eliminado)
            System.out.println("Estudiante eliminado: " + estudianteEliminar);
        else
            System.out.println("No se elimino estudiante: " + estudianteEliminar);

        // Listar los estudiantes
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);// funcion lambda para imprimir

        // buscar por id
        // var estudiante1 = new Estudiante(1);
        // System.out.println("Estudiantes antes de la busqueda: "+estudiante1);
        // var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        // if(encontrado)
        // System.out.println("Estudiante encontrado: "+estudiante1);
        // else System.out.println("No se encontro el estudiante:
        // "+estudiante1.getIdEstudiante());
    }
}
