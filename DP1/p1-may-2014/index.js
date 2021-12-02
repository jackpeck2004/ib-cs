const frequencies = [100.4, 88.7, 90.2, 104.5, 93.8, 106.2];

const stats = [
    [5, 13],
    [4, 9],
    [0, 8],
    [3, 4],
    [1, 3],
    [2, 2],
];

const queue = new Queue();

for (let i = 0; i < stats.length; i = i +1) {
    const currentStat = stats[i];
    const freqIndex = currentStat[0];

    queue.enqueue(frequencies[freqIndex]);
}

function onFlick() {
    const feq = queue.dequeue();
    console.log(freq);
    queue.enqueue(freq);
}
