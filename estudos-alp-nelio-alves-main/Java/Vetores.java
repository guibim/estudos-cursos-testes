import java.util.Locale;
import java.util.Scanner;

public class Vetores {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        System.out.print("Quantos números você vai digitar? ");
        int n = scanner.nextInt();

        double[] vet = new double[n];

        for (int i = 0; i < n; i++) {
            System.out.print("Digite um número: ");
            vet[i] = scanner.nextDouble();
        }

        System.out.println("\nNúmeros digitados:");
        for (int i = 0; i < n; i++) {
            System.out.printf("%.1f%n", vet[i]);
        }

        scanner.close();
    }
}
