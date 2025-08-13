from entidades.Usuario import Usuario
from utils.connection import Conexion


class UsuarioDAO:
    _usuario_actual = None
    _SELECCIONAR_USUARIO = "SELECT * FROM usuario ORDER BY id_usuario"

    _INSERTAR_USUARIO = """
    INSERT INTO usuario(nombre, email, contrasenia)
    VALUES (%s, %s, %s)
    """

    _ACTUALIZAR_USUARIO = """
    UPDATE usuario
    SET nombre=%s, email=%s, contrasenia=%s,
    WHERE id_usuario=%s
    """
    _ELIMINAR_USUARIO = "DELETE FROM usuario WHERE id_usuario=%s"

    @classmethod
    def listar_usuarios(cls):
        """Obtiene todos los usuarios de la base de datos."""
        try:
            with Conexion.obtener_cursor() as cursor:
                cursor.execute(cls._SELECCIONAR_USUARIO)
                registros = []
                usuarios = cursor.fetchall()
                if usuarios:
                    for usuario in usuarios:
                        id_usuario, nombre, email, contrasenia = usuario
                        registro = Usuario(
                            username=nombre,
                            email=email,
                            password=contrasenia,
                            id_usuario=id_usuario,
                        )
                        registros.append(registro)
                return registros
        except Exception as e:
            print(f"Error al leer usuarios: {e}")
            return []

    @classmethod
    def insertar_usuario(cls, usuario):
        """Inserta un nuevo usuario en la base de datos."""
        try:
            with Conexion.obtener_conexion() as conexion:
                cursor = conexion.cursor()
                cursor.execute(
                    cls._INSERTAR_USUARIO,
                    (
                        usuario.username,
                        usuario.email,  
                        usuario.password  
                    ),
                )
                conexion.commit()
                print(
                    f"Usuario creado exitosamente."
                )
                print(f"{usuario}")
        except Exception as e:
            print(f"Error al crear usuario: {e}")

    @classmethod
    def actualizar_usuario(cls, usuario):
        """Actualiza un usuario existente en la base de datos."""
        try:
            with Conexion.obtener_conexion() as conexion:
                cursor = conexion.cursor()
                cursor.execute(
                    cls._ACTUALIZAR_USUARIO,
                    (
                        usuario.username,
                        usuario.email,
                        usuario.password,
                        usuario.id_usuario,
                    ),
                )
                conexion.commit()
                print(f"Usuario actualizado exitosamente: {usuario}")
        except Exception as e:
            print(f"Error al actualizar usuario: {e}")

    @classmethod
    def eliminar_usuario(cls, id_usuario):
        """Elimina un usuario de la base de datos.""" 
        try:
            with Conexion.obtener_conexion() as conexion:
                cursor = conexion.cursor()
                cursor.execute(cls._ELIMINAR_USUARIO, (id_usuario,))
                conexion.commit()
                if cursor.rowcount == 0:
                    print(f"No se encontró usuario con ID: {id_usuario}")
                else:
                    print(f"Usuario eliminado exitosamente, ID: {id_usuario}")
        except Exception as e:
            print(f"Error al eliminar usuario: {e}")  