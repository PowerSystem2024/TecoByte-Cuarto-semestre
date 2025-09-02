package UTN.presentacion;


import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static void main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in);

        var estudianteDao = new EstudianteDAO();
        while(!salir){
            try{
                mostrarMenu();

                salir = ejecutarOpciones(consola, estudianteDao);
            }catch(Exception e){
                System.out.println("Ocurrio un error al ejecutar la operacion: "+e.getMessage());
            }
        } //Fin while
    }//fin main
    
    private static void mostrarMenu(){
        System.out.print("""
                *** Sistema de Estudiantes ***
                1. Listar estudiantes
                2. Buscar estudiante
                3. Agregar estudiante
                4. Modificar estudiante
                5. Eliminar estudiante
                6. Salir
                Elige una opción:
                """);
    }
    //metodo para ejecutar opcicones

    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 -> { //Listar estudiantes
                System.out.println("Listado de Estudiantes...");

                var estudiantes = estudianteDAO.listarEstudiantes();

                estudiantes.forEach(System.out::println);
            }//fin caso 1
            case 2 -> {
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if(encontrado)
                System.out.println(" Estudiante encontrado: "+estudiante);
                else
                System.out.println(" Estudiante NO encontrado: "+estudiante);
            }// fin caso 2
            case 3 -> {
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                //crear objeto estudiante sin id
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if(agregado)
                System.out.println("Estudiante agregado; "+estudiante);
                else
                System.out.println("Estudiante NO agregadi: "+estudiante);
            }//fin caso 3
            case 4 -> {
                System.out.println("Modificar estudiante: ");

                System.out.println("Id Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();

                var estudiante = new Estudiante(idEstudiante, nombre, apellido, telefono, email);

                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if(modificado)
                System.out.println("Estudiante modificado: "+estudiante);
                else
                System.out.println("Estudiante NO modificado: "+estudiante);   
            }//fin caso 4
            case 5 -> {
                System.out.println("Eliminar estudiante: ");
                System.out.println("Id estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if(eliminado)
                System.out.println("Estudiante eliminado: "+estudiante);
                else
                System.out.println("Estudiante NO eliminado: "+estudiante);
            }//Fin caso 5
            case 6 -> {
                System.out.println("Hasta pronto!");
                salir = true;
            }//fin caso 6
            default -> System.out.println("Opcion no reconocida, ingrese otra opcion");
        }//fin switch
        return salir;
    }
}