import java.util.Scanner;
import java.util.Locale;


public class Menor3 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        int a, b, c;
        int menor;

        System.out.print("Digite o valor de A: ");
        a = scanner.nextInt();
        System.out.print("Digite o valor de B: ");
        b = scanner.nextInt();
        System.out.print("Digite o valor de C: ");
        c = scanner.nextInt();

        if (a < b && a < c) {
            menor = a;
        } else if (b < a && b < c) {
            menor = b;
        } else {
            menor = c;
        }
        
        System.out.println("O menor valor é: " + menor);

        scanner.close();
    }

}
