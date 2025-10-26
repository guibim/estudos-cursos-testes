hora: int
hora = int(input("Digite a hora atual (0-23): "))
if 0 <= hora < 12:
    print("Bom dia!")
elif 12 <= hora < 18:
    print("Boa tarde!")
else:
    print("Boa noite!")