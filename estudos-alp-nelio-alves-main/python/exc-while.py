x: int
soma: int
soma = 0
x = int(input("Digite o primeiro numero (0 para sair): "))

while x != 0:
    soma = soma + x
    x = int(input("Digite o proximo numero (0 para sair): "))

    print(f"A soma dos numeros digitados é {soma}")