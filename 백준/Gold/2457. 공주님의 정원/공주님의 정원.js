const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const flowerDate = input.slice(1).map((list) => list.split(' ').map(Number));

const getDayOfYear = (month, day) => {
    const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dayInMonth.slice(0, month - 1).reduce(((sum, days) => sum + days), 0) + day;
}

const flowersConverted = flowerDate.map(([startMonth, startDay, endMonth, endDay]) => {
    return [getDayOfYear(startMonth, startDay), getDayOfYear(endMonth, endDay)]
})

flowersConverted.sort((a, b) => a[0] - b[0])

let count = 0;
let lastDayCovered = getDayOfYear(3, 1);
let i = 0;

while (lastDayCovered <= getDayOfYear(11, 30)) {
    let bestFlower = null;

    while (i < N && flowersConverted[i][0] <= lastDayCovered) {
        if (!bestFlower || flowersConverted[i][1] > bestFlower[1]) {
            bestFlower = flowersConverted[i]
        }
        i++;
    }

    if (!bestFlower) {
        console.log(0);
        return;
    }

    lastDayCovered = bestFlower[1];
    count++;
}

console.log(count)