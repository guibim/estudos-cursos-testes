print("Digite dois números inteiros:")

x = int(input())
y = int(input())

while x != y:
    if x < y:
        print("Crescente!")
    else:
        print("Decrescente!")
    print("Digite outros dois números inteiros:")
    x = int(input())
    y = int(input())
