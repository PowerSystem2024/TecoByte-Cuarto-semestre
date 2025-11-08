# dar formato a un string
nombre = 'Roberto'
edad = 30
mensaje_con_formato = 'Mi nombre es %s y tengo %d años' % (nombre, edad)

# Creamos una tupla
persona = ('Valeria', 'Martinez', 7000.00)
# mensaje_con_formato = 'Hola %s %s. Tu sueldo es %.2f' # % persona # Aqui le pasamos el objeto que es tupla
# print(mensaje_con_formato % persona)

nombre = 'Pedro'
edad = 22
sueldo = 8000
# mensaje_con_formato = f'Nombre {nombre} Edad {edad} Sueldo {sueldo:.2f}'

# mensaje = 'Nombre {} Edad {} Sueldo {:.2f}'.format(nombre, edad, sueldo)
# print(mensaje_con_formato)

# mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
# print(mensaje)

# mensaje = 'Sueldo {2:.2f} Edad {1} Nombre {0}'.format(nombre, edad, sueldo)
# print(mensaje)

mensaje = 'Nombre {n} Edad {e} Sueldo {s:.2f}'.format(n=nombre, e=edad, s=sueldo)
#print(mensaje)

diccionario = {'nombre': 'Marcos', 'edad': 39, 'sueldo': 9000.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[edad]} Sueldo {dic[sueldo]:.2f}'.format(dic=diccionario)
print(mensaje)