from colorama import Fore, Style, init
from entidades.Usuario import Usuario
from controllers.usuario import UsuarioDAO

init(autoreset=True)  # Para que los colores se reseteen automáticamente

def mostrar_menu():
    opciones = [
        "1) Listar usuarios",
        "2) Agregar usuario",
        "3) Actualizar usuario",
        "4) Eliminar usuario",
        "5) Salir"
    ]

    # Calcular el ancho del recuadro según la opción más larga
    max_length = max(len(op) for op in opciones)

    # Bordes del recuadro
    top_border = "┌" + "─" * (max_length + 2) + "┐"
    bottom_border = "└" + "─" * (max_length + 2) + "┘"

    # Construir el contenido
    contenido = "\n".join(f"│ {op.ljust(max_length)} │" for op in opciones)

    return (
        f"{Fore.GREEN}{Style.BRIGHT}"
        f"{top_border}\n"
        f"{contenido}\n"
        f"{bottom_border}"
    )

def menu_handler():
    while True:
        print(mostrar_menu())
        option = input(f"{Fore.CYAN}Seleccione una opción: {Style.RESET_ALL}")

        if option == "1":
            print("📋 Listando usuarios...")
            usuarios = UsuarioDAO.listar()
            if not usuarios:
                print(
                    f"{Fore.YELLOW}No hay usuarios registrados.{Style.RESET_ALL}"
                )
            else:
                for usuario in usuarios:
                    print(
                        f"\n{Fore.WHITE}{Style.BRIGHT}{usuario}{Style.RESET_ALL}"
                    )
        elif option == "2":
            print("➕ Agregando usuario...")
            username = input("Ingrese el nombre: ").strip()
            email = input("Ingrese el email: ").strip()
            password = input("Ingrese la contraseña: ").strip()
            usuario = Usuario(username, email, password)
            UsuarioDAO.insertar(usuario)
        elif option == "3":
            print("✏️ Actualizando usuario...")
            username = input("Ingrese el nuevo nombre: ").strip()
            email = input("Ingrese el nuevo email: ").strip()
            password = input("Ingrese la nueva contraseña: ").strip()
            id_usuario = input("Ingrese el ID del usuario a actualizar: ").strip()
            usuario = Usuario(username, email, password, id_usuario)
            UsuarioDAO.actualizar(usuario)
        elif option == "4":
            print("🗑 Eliminando usuario...")
            id_usuario = input("Ingrese el ID del usuario a eliminar: ").strip()
            UsuarioDAO.eliminar(id_usuario)
        elif option == "5":
            print("👋 Saliendo de la aplicación...")
            break
        else:
            print(f"{Fore.RED}❌ Opción inválida, intente de nuevo.{Style.RESET_ALL}")