from lib.types import Matrix

def sumOfMainDiagonal(s) -> int:
    tot = 0
    for i in range(len(s)):
        tot += s[i][i]
    return tot

def isMagicSquare(s) -> bool:
    check = sumOfMainDiagonal(s)
    sumOfDiagonal = 0
    for i in range(len(s)):
        # Check sum of row
        sumOfRow = 0
        for cell in s[i]:
            sumOfRow += cell
        if sumOfRow != check:
            return False

        # Check sum of Col
        sumOfCol = 0
        for j in range(len(s)):
            sumOfCol += s[j][i]

        if sumOfCol != check:
            return False

        # Check sum of Second Diagonal
        sumOfDiagonal += s[i][len(s) - i]

    if sumOfDiagonal != check:
        return False


    return True

def checkPos(row, col, n) -> (int, int):
    if row == -1 and col == -1:
        row = 1
        col = n - 1
    else:
        if row < 0:
            row = n - 1
        if col < 0:
            col = n - 1
        if row > n - 1:
            row = 0
        if col > n - 1:
            col = 0
    return (row, col)

def createMagicSquare(n: int) -> Matrix:
    a = []

    # Create the square matrix
    for i in range(n):
        a.append([])
        for j in range(n):
            a[i].append(0)

    # Initialize variables needed for algorithm
    row = 0
    col = 0
    tmp = False

    for z in range(1, n**2 + 1):
        if z == 1:
            col = n//2

        else:
            row -= 1
            col += 1

        row, col = checkPos(row, col, n)

        if a[row][col] != 0:
            row += 2
            col -= 1 

        row, col = checkPos(row, col, n)

        if row == 0 and col == n - 1:
            if tmp:
                row += 1
                # print(f"problem with {z}:\n{row}\t{col}")

            else:
                tmp = True


        if a[row][col] == 0:
            # print(f"number {z}: {row}\t{col}")
            a[row][col] = z
    return a


def pprint(matrix):
    print('\n'.join(['\t'.join([str(cell) for cell in row]) for row in matrix]))
