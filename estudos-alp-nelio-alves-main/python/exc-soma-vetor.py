N = int(input("Quantos números você vai digitar? "))

vetor = [0 for x in range(N)]

for i in range(N):
    vetor[i] = float(input(f"Digite o {i + 1}º número: "))
    print()
    print("Valores = ", end="")
    for i in range(0, N):
        print(f"{vetor[i]:.1f} ", end="")
        print()

soma = 0    
for i in range(0, N):
    soma = soma + vetor[i]
    print(f"Soma = {soma:.2f}")
    media = soma / N
    print(f"Média = {media:.2f}")
    