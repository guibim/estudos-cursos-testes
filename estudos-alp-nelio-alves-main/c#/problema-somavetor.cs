using System;
using System.Globalization;

namespace SomaVetor
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int N;
            double soma, media;

            Console.Write("Quantos números você vai digitar? ");
            N = int.Parse(Console.ReadLine());

            double[] vet = new double[N];

            for (int i = 0; i < N; i++)
            {
                Console.Write("Digite um número: ");
                vet[i] = double.Parse(Console.ReadLine(), CI);
            }

            Console.WriteLine();
            Console.WriteLine("VALORES = ");
            for (int i = 0; i < N; i++)
            {
                Console.WriteLine(vet[i].ToString("F1", CI) + " ");
            }
            soma = 0;
            for (int i = 0; i < N; i++)
            {
                soma = soma + vet[i];
            }

            Console.WriteLine("Soma = " + soma.ToString("F2", CI));

            media = soma / N;
            Console.WriteLine("Média = " + media.ToString("F2", CI));



        }
    }
}