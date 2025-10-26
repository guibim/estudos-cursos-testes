import java.util.Scanner;   
import java.util.Locale;

public class Retangulo {
    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        double base, altura, area, perimetro, diagonal;
        System.out.print("Digite a base do retângulo: ");
        base = scanner.nextDouble();
        System.out.print("Digite a altura do retângulo: ");
        altura = scanner.nextDouble();
        area = base * altura;
        perimetro = 2 * (base + altura);
        diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

        System.out.printf("Área = %.4f%n", area);
        System.out.printf("Perímetro = %.4f%n", perimetro);
        System.out.printf("Diagonal = %.4f%n", diagonal);

        scanner.close();

    }
}
