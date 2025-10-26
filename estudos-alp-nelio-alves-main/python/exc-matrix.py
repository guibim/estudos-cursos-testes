M = int(input("Digite o número de linhas da matriz: "))
N = int(input("Digite o número de colunas da matriz: "))   

mat: [[int]] = [[0 for x in range (N)] for y in range (M)]
for i in range(0, M):
    for j in range(0, N):
        mat[i][j] = int(input(f"Elemento [{i},{j}]: "))
print()
print("MATRIZ DIGITADA:")
for i in range(0, M):
    for j in range(0, N):
        print(f"{mat[i][j]} ", end="")
    print()
