from conexion import Conexion

if __name__ == "__main__":
    try:
        conexion = Conexion.obtenerConexion()
        print("✅ Conexión exitosa:", conexion)
        conexion.close()
        print("🔒 Conexión cerrada")
    except Exception as e:
        print("❌ Error al conectar:", e)
