import java.util.Scanner;
import java.util.Locale;

public class Somaimp {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        int x, y, troca, soma;
        System.out.println("Digite dois números inteiros: ");
        x = scanner.nextInt();
        y = scanner.nextInt();

        if (x > y) {
            troca = x;
            x = y;
            y = troca;
        }
        soma = 0;
        for (int i = x+1; i < y; i++) {
            if (i % 2 != 0) {
                soma = soma + i;
            }
        }
        System.out.println("Soma dos ímpares: " + soma);

        scanner.close();
    }
}
