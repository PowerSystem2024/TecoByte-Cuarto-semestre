package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import javax.tools.Tool;
import java.awt.*;

@Component

public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private Jpanel panel;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
    }

    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperation(Jframe.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.height - getHeight()/2);
        setLocation(x, y);
    }
    private void createUIComponents(){
        // TODO: place custom component creation code here

    }
}
