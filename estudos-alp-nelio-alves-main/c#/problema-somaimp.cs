using System;
using System.Globalization;
using System.Runtime.InteropServices;

namespace SomaImp
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int x, y, troca;
            Console.Write("Digite dois números inteiros: ");
            string[] valores = Console.ReadLine().Split(' ');
            x = int.Parse(valores[0]);
            y = int.Parse(valores[1]);

            if (x > y)
            {
                troca = x;
                x = y;
                y = troca;
            }
            for (int i = x + 1; i < y; i++)
            {
                if (i % 2 != 0)
                {
                    soma = soma + i;
                }
            }
            Console.WriteLine("SOMA DOS ÍMPARES = " + soma);

        }
    }
}