#include <iostream>
#include <iomanip>

using namespace std;

    int main() {
        string nome1, nome2;
        int idade1, idade2;
        double media/

        cout << "Digite o nome da primeira pessoa: "; << endl;
        getline(cin, nome1);
        cout << "Digite a idade da primeira pessoa: "; << endl;
        cin >> idade1;

        cout << "Dados da segunda pessoa: "; << endl;
        cin.ignore(INT_MAX, '\n');
        getline(cin, nome2);
        cout << "Digite a idade da segunda pessoa: "; << endl;
        cin >> idade2;

        media = (idade1 + idade2) / 2.0;
        cout << fixed << setprecision(1);
        cout << "A idade media de " << nome1 << " e " << nome2 << " é de " << media << " anos." << endl;

        return 0;   
        
    
    }