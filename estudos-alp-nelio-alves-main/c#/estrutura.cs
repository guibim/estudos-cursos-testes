using System;

namespace Estrutura
{
    class Program
    {
        static void Main(string[] args)
        {

            int N, i, x, soma;

            Console.Write("Quantos números você vai digitar? ");
            N = int.Parse(Console.ReadLine());
            soma = 0;
            for (i = 1; i <= N; i++)
            {
                Console.Write("Digite um número: ");
                x = int.Parse(Console.ReadLine());
                soma = soma + x;
            }
            Console.WriteLine("Soma = " + soma);

        }

    }
}
