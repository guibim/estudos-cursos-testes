n = int(input("Quantos números você vai digitar? "))

vet: [float] = [0 for x in range (n)]

for i in range(0, n):
    vet[i] = float(input(f"Digite o {i+1}º número: "))

    print("NÚMEROS DIGITADOS:")
for i in range(0, n):
    print(f"{vet[i]:.1f}")