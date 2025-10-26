import java.util.Scanner;
import java.util.Locale;

public class Idades {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        String nome1, nome2;
        int idade1, idade2;
        double media;

        System.out.println("Digite o nome da primeira pessoa: ");
        System.out.print("Nome: ");
        nome1 = scanner.nextLine();
        System.out.print("Idade: ");
        idade1 = scanner.nextInt();

        System.out.println("Digite o nome da segunda pessoa: ");
        System.out.print("Nome: ");
        scanner.nextLine(); // limpar buffer antes de ler o próximo nome
        nome2 = scanner.nextLine();
        System.out.print("Idade: ");
        idade2 = scanner.nextInt();

        media = (idade1 + idade2) / 2.0;

        System.out.println("A idade média de " + nome1 + " e " + nome2 + " é de " + media + " anos.");

        scanner.close();
    }
}