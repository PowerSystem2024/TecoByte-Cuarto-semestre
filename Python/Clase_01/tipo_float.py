# Profundizando en el tipo float
a= 3.0

# Constructor de tipo float -> puede recibir de tipo int y str
a = float(10) # Le pasamos un tipo entero
a = float('10') # Le pasamos un tipo str
print(f"a {a:.2f}")


# Notación exponencial (valores positivos o negaativos)
a = 3e5
print(f'a: {a:.2f}')

a = 3e-5
print(f"a: {a:.5f}")


# Cualquier cálculo que incluya un float todo cambia a float
a = 4.0 + 5
print(a)
print(type(a))
