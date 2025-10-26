using System;
using System.Globalization;

namespace Vetores
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture; // Define cultura invariante para formatação
            int N;
            Console.Write("Quantos números você vai digitar? ");
            N = int.Parse(Console.ReadLine());

            double[] vet = new double[N];
            for (int i = 0; i < N; i++)
            {
                Console.Write("Digite um número: ");
                vet[i] = double.Parse(Console.ReadLine(), CI);
            }
            Console.WriteLine();
            Console.WriteLine("Números digitados:");
            for (int i = 0; i < N; i++)
            {
                Console.WriteLine(vet[i].ToString("F2", CI));
            }
      

        }

    }
}
