using System;
using System.Globalization;

namespace Menor
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int a, b, c, menor;
            
            Console.Write("Digite três números inteiros: ");
            string[] valores = Console.ReadLine().Split(' ');
            a = int.Parse(valores[0]);
            b = int.Parse(valores[1]);
            c = int.Parse(valores[2]);

            if (a < b && a < c)
            {
                menor = a;
            }
            else if (b < c)
            {
                menor = b;
            }
            else
            {
                menor = c;
            }

            Console.WriteLine("MENOR = " + menor);


        }
    }
}