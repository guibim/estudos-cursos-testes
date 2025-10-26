import java.util.Scanner;
import java.util.Locale;

public class Asc {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        int x, y;
        System.out.println("Digite dois números inteiros: ");
        x = scanner.nextInt();
        y = scanner.nextInt();
        while (x != y) {
            if (x < y) {
                System.out.println("Crescente!");
            } else {
                System.out.println("Decrescente!");
            }
            System.out.println("Digite outros dois números inteiros: ");
            x = scanner.nextInt();
            y = scanner.nextInt();
        }
    }

}
