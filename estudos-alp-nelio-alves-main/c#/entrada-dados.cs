using System;

namespace Dados
{
    class Program
    {
        static void Main(string[] args)
        {
            string nome1, nome2;
            int idade;
            double salario1, salario2;
            char sexo;

            Console.Write("Digite o nome da primeira pessoa: ");
            nome1 = Console.ReadLine();
            Console.Write("Digite a idade da primeira pessoa: ");
            idade = int.Parse(Console.ReadLine());
            Console.Write("Digite o salário da primeira pessoa: ");
            salario1 = double.Parse(Console.ReadLine());

            Console.Write("Digite o nome da segunda pessoa: ");
            nome2 = Console.ReadLine();
            Console.Write("Digite o salário da segunda pessoa: ");
            salario2 = double.Parse(Console.ReadLine());
            Console.Write("Digite o sexo da segunda pessoa: ");
            sexo = char.Parse(Console.ReadLine());

            Console.WriteLine("A primeira pessoa é " + nome1 + ", tem " + idade + " anos e recebe um salário de " + salario1.ToString("F2"));
            Console.WriteLine("A segunda pessoa é " + nome2 + ", do sexo " + sexo + ", e recebe um salário de " + salario2.ToString("F2"));
        }
    }
}