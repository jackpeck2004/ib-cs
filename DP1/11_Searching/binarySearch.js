function binarySearch(arr, n) {
    let start = 0;
    let end = arr.length;
    let found = false;

    while(!found && start <= end) {
        let mid = parseInt((start + end) / 2);

        if(arr[mid] === n) {
            found = true;
        } else if(arr[mid] < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return found;
}

function main() {
    const arr = [1,2,3,4,5,6,7]
    const n = 3;

    console.log(binarySearch(arr, n));
}


main();
