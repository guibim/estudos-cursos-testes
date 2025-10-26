#include <iostream>
#include <iomanip> 
using namespace std;

int main()
{
    double salario1, salario2;
    string nome1, nome2;
    int idade;
    char sexo;

    cout << "Nome da primeira pessoa: ";
    getline(cin, nome1);
    cout << "Salario da primeira pessoa: ";
    cin >> salario1;

    cout << "Nome da segunda pessoa: ";
    getline(cin, nome2);
    cout << "Salario da segunda pessoa: ";
    cin >> salario2;

    cout << "Digite uma idade: ";
    cin >> idade;
    cout << "Digite um sexo (M/F): ";
    cin >> sexo;

    cout << fixed << setprecision(2);
    cout << nome1 << " recebe R$ " << salario1 << endl;
    cout << nome2 << " recebe R$ " << salario2 << endl;
    cout << "Idade: " << idade << ", Sexo: " << sexo << endl;




    return 0;
}