#include <iostream>

void move(char from, char to)
{
    std::cout << "From " << from << " to " << to << std::endl;
}

void hanoi(int n, char start, char finish, char aux)
{
    if(n==1) {
        move(start, finish);
    } else {
        hanoi(n - 1, start, aux, finish);
        move(start, finish);
        hanoi(n - 1, aux, finish, start);
    }
}

int main(void)
{
   hanoi(15, 'A', 'C', 'B');
}