using System;
using System.Globalization;
using System.Security.Cryptography.X509Certificates;

namespace Crescente
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture;

            int a, b;
            Console.Write("Digite dois números inteiros: ");
            string[] valores = Console.ReadLine().Split(' ');
            a = int.Parse(valores[0]);
            b = int.Parse(valores[1]);

            while (a != b)
            {
                if (a < b)
                {
                    Console.WriteLine("CRESCENTE!");
                }
                else
                {
                    Console.WriteLine("DECRESCENTE!");
                }
                Console.Write("Digite dois números inteiros: ");
                valores = Console.ReadLine().Split(' ');
                a = int.Parse(valores[0]);
                b = int.Parse(valores[1]);


                }
            }
        }
    }