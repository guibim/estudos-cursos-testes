import java.util.Scanner;
import java.util.Locale;


public class Matriz {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

    
        System.out.print("Digite o número de linhas da matriz: ");
        int linhas = sc.nextInt();
        System.out.print("Digite o número de colunas da matriz: ");
        int colunas = sc.nextInt();

        int [][] matriz = new int[linhas][colunas];

        for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < colunas; j++) {
                System.out.printf("Elemento ["+ i + "," + j + "]: ");
                matriz[i][j] = sc.nextInt();
            }
        }

        System.out.println();
        System.out.println("Matriz digitada:");
        for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < colunas; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }

    
    }
}
