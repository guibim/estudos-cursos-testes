using System;

namespace Dados
{
    class Program
    {
     static void main(string[] args)
        {
            Console.WriteLine("Testando C#");
            int idade;
            double salario, altura;
            char genero;
            string nome;

            idade = 32;
            salario = 4000.50;
            altura = 1.75;
            genero = 'F';
            nome = "Maria Silva";

            Console.WriteLine("Nome: " + nome);
            Console.WriteLine("Idade: " + idade);
            Console.WriteLine("Salário: " + salario);
            Console.WriteLine("Altura: " + altura);
            Console.WriteLine("Gênero: " + genero);
        }
    }
}