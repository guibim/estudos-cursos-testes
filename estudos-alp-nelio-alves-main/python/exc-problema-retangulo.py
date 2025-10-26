import math

base = float(input("Digite a base do retângulo: "))
altura = float(input("Digite a altura do retângulo: "))
area = base * altura
perimetro = 2 * (base + altura)
diagonal = math.sqrt(base**2 + altura**2)

print(f"Área: {area:.4f}")
print(f"Perímetro: {perimetro:.4f}")
print(f"Diagonal: {diagonal:.4f}")