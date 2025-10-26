#include <iostream>

using namespace std;

int main()
{
    int a, b, c, menor;
    cout << "Digite tres numeros inteiros: ";
    cin >> a >> b >> c;
    menor = a;
    if (a < b && a < c)
    {
        menor = a;
    }
    else if (b < a && b < c)
    {
        menor = b;
    }
    else
    {
        menor = c;
    }

    cout << "MENOR = " << menor << endl;
    return 0;
}