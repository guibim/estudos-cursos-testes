a = int(input("Digite o primeiro número: "))
b = int(input("Digite o segundo número: "))
c = int(input("Digite o terceiro número: "))   

if a < b and a < c:
    menor = a
elif b < a and b < c:
    menor = b
else:
    menor = c

print("O menor número é:", menor)