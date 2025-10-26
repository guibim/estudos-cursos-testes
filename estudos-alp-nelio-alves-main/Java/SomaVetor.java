import java.util.Scanner;
import java.util.Locale;

public class SomaVetor {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        int n;
        double soma, media;

        System.out.print("Quantos números você vai digitar? ");
        n = scanner.nextInt();

        double[] vetor = new double[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Digite um número: ");
            vetor[i] = scanner.nextDouble();
        }
        System.out.println();
        System.out.print("VALORES = ");
        for (int i = 0; i < n; i++) {
            System.out.printf(String.format("%.1f ", vetor[i]));
        }
        System.out.println();
        soma = 0;
        for (int i = 0; i < n; i++) {
            soma = soma + vetor[i];
        }
        System.out.println("SOMA = " + String.format("%.2f", soma));
        media = soma / n;
        System.out.println("MÉDIA = " + String.format("%.2f", media));
        
        scanner.close();
    }
}
