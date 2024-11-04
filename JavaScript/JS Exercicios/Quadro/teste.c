#include <stdio.h>

int main(void)
{

    printf("Here %d - %d\n", num); // < -Tentando acessar a variável 'num' antes de ter declarado ela

    int num = 10; // < -Declaração da variável 'num'

    return 0;
}