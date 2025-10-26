using System;
using System.Globalization;

namespace Dados
{
    class Program
    {
        static void Main(string[] args)
        {
            CultureInfo CI = CultureInfo.InvariantCulture; 
            
            double largura, altura, area, perimetro, diagonal;
            Console.Write("Digite a largura do retângulo: ");
            largura = double.Parse(Console.ReadLine(), CI);
            Console.Write("Digite a altura do retângulo: ");
            altura = double.Parse(Console.ReadLine(), CI);

            area = largura * altura;
            perimetro = 2 * (largura + altura);

            diagonal = Math.Sqrt(Math.Pow(largura, 2.0) + Math.Pow(altura, 2.0));

            Console.WriteLine();
            Console.WriteLine("AREA = " + area.ToString("F2", CI));
            Console.WriteLine("PERÍMETRO = " + perimetro.ToString("F2", CI));
            Console.WriteLine("DIAGONAL = " + diagonal.ToString("F2", CI));


        }
    }
}