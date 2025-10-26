using System;
using System.Globalization;

namespace Vetores
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture; // Define cultura invariante para formatação
            int M, N;
            Console.Write("Quantas linhas vai ter a matriz? ");
            M = int.Parse(Console.ReadLine());
            Console.Write("Quantas colunas vai ter a matriz? ");
            N = int.Parse(Console.ReadLine());
            double[,] mat = new double[M, N];
            for (int i = 0; i < M; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    Console.Write("Elemento [" + i + "," + j + "]: ");
                    mat[i, j] = double.Parse(Console.ReadLine(), CI);
                }
            }
            Console.WriteLine();
            Console.WriteLine("MATRIZ DIGITADA:");
            for (int i = 0; i < M; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    Console.Write(mat[i, j].ToString("F2", CI) + " ");
                }
                Console.WriteLine();
            }


        }

    }
}
