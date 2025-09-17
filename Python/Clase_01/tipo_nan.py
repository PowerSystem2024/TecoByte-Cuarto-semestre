import math
from decimal import Decimal

# Nan (Not a Number)
a = float('nan')
print(f'a = {a}')

# Módulo math
a = float('nan')
print(f'Es de tipo NaN(Not a Number)? {math.isnan(a)}')

# Módulo Decimal
a = Decimal('nan')
print(f'Es de tipo NaN(Not a Number)? {math.isnan(a)}')

