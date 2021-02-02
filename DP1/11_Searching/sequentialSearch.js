function sequentialSearch(array, n) {
    for(let i = 0; i < array.length; i = i + 1) {
        if(array[i] === n) {
            return true;
        }
    }

    return false;
}

function main() {
    const arr = [1,2,3,4,5,6,7];
    const n = 3;
    console.log(sequentialSearch(arr, n));
}

main();
