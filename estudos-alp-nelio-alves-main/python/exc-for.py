x: int
soma: int

n = int(input("Quantos números você vai digitar? "))

soma = 0
for i in range(0, n):
    x = int(input(f"Digite o {i+1}º número: "))
    soma = soma + x
    print("SOMA =", soma)