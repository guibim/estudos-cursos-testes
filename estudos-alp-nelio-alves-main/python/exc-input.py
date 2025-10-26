salario1: float; salario2: float
nome1: str; nome2: str
idade: int
sexo: str

nome1 = input("Digite o nome do primeiro funcionário: ")
salario1 = float(input("Digite o salário do primeiro funcionário: "))
nome2 = input("Digite o nome do segundo funcionário: ")     
salario2 = float(input("Digite o salário do segundo funcionário: "))


idade = int(input("Digite a idade do funcionário: "))  
sexo = input("Digite o sexo do funcionário (M/F): ")

print(f"O funcionário {nome1} tem o salário de R$ {salario1}.")