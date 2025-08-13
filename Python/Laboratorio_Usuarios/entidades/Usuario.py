from colorama import Style, Fore

class Usuario:
    def __init__(self, username: str, password: str, id_usuario: int = None):
        self._id_usuario = id_usuario
        self._username = username
        self._password = password
        
    @property
    def id_usuario(self):
        return self._id_usuario
    
    @property
    def username(self):
        return self.username
    
    @username.setter
    def username(self, username):
        self._username = username
        
    @property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, password):
        self._password = password

    from colorama import Fore, Style
        
    def __str__(self):
        id_line = f"ID: {self._id_usuario}"
        user_line = f"Usuario: {self._username}"

        # Calculamos el ancho del recuadro según el texto más largo
        max_length = max(len(id_line), len(user_line))
        
        top_border = "┌" + "─" * (max_length + 2) + "┐"
        bottom_border = "└" + "─" * (max_length + 2) + "┘"

        return (
            f"{Fore.GREEN}{Style.BRIGHT}"
            f"{top_border}\n"
            f"│ {id_line.ljust(max_length)} │\n"
            f"│ {user_line.ljust(max_length)} │\n"
            f"{bottom_border}"
            f"{Style.RESET_ALL}"
        )