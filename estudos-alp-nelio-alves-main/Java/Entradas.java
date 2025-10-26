
import java.util.Locale;
import java.util.Scanner;

public class Entradas {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        String nome1, nome2;
        double salario1, salario2;
        int idade1, idade2;
        char sexo1, sexo2;

        // Entrada de dados da primeira pessoa
        System.out.print("Digite o nome da primeira pessoa: ");
        nome1 = sc.nextLine();

        System.out.print("Digite o salário da primeira pessoa: ");
        salario1 = sc.nextDouble();

        System.out.print("Digite a idade da primeira pessoa: ");
        idade1 = sc.nextInt();

        System.out.print("Digite o sexo da primeira pessoa (f/m): ");
        sexo1 = sc.next().charAt(0);
        sc.nextLine(); // limpa o buffer

        // Entrada de dados da segunda pessoa
        System.out.print("Digite o nome da segunda pessoa: ");
        nome2 = sc.nextLine();

        System.out.print("Digite o salário da segunda pessoa: ");
        salario2 = sc.nextDouble();

        System.out.print("Digite a idade da segunda pessoa: ");
        idade2 = sc.nextInt();

        System.out.print("Digite o sexo da segunda pessoa (f/m): ");
        sexo2 = sc.next().charAt(0);

        // Saída dos dados
        System.out.println("\n=== Dados da primeira pessoa ===");
        System.out.println("Nome: " + nome1);
        System.out.printf("Salário: %.2f%n", salario1);
        System.out.println("Idade: " + idade1);
        System.out.println("Sexo: " + sexo1);

        System.out.println("\n=== Dados da segunda pessoa ===");
        System.out.println("Nome: " + nome2);
        System.out.printf("Salário: %.2f%n", salario2);
        System.out.println("Idade: " + idade2);
        System.out.println("Sexo: " + sexo2);

        sc.close();
    }
}
