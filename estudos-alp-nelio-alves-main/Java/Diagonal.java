import java.util.Scanner;
import java.util.Locale;


public class Diagonal {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int n;
        System.out.print("Digite o tamanho da matriz: ");
        n = sc.nextInt();

        int[][] matriz = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("Elemento [%d,%d]: ", i, j);
                matriz[i][j] = sc.nextInt();
            }
        }

        System.out.println("Diagonal principal:");
        for (int i = 0; i < n; i++) {
            System.out.print(matriz[i][i] + " ");
    }
    System.out.println();
 
    int countNegativos = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matriz[i][j] < 0) {
                countNegativos++;
            }
        }
    }
    System.out.println("Quantidade de números negativos: " + countNegativos);



    sc.close();
}
} 