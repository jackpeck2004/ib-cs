/*
 * ----Sequential Search----
 * Computational Complexity
 *
 * Best Case: when n is first 
 * element of arr => O(1)
 * 
 * Worst Case: when n is not
 * present in arr => O(n)
 *
 * Average Case: when n is in
 * middle of arr => O(n/2) => O(n)
 */

function sequentialSearch(arr, n) {
    found = false;
    for (let i = 0; i < arr.length && !found; i = i + 1) {
        if (n===arr[i]) {
            found = true;
        }
    }

    return found;
}


/*
 * ----Binary Search----
 * Computational Complexity
 *
 * Best: n is at middle of arr => O(1)
 *
 * Worst: n is not present => O(log n)
 *
 * Average: O(log n)
 *
 */

function binarySearch(arr, n) {
    let START = 0;
    let END = arr.length;
    let found;

    while (!found && start <= end) {
        const MID = Math.ceil((END + START) / 2)

        if(n > arr[MID]) {
            START = MID + 1;
        } else if (n < arr[MID]) {
            END = MID - 1;
        } else {
            found = true;
        }
            
    }

    return found;
}
