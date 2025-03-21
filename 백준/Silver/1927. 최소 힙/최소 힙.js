const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const X = input.slice(1).map(Number);

function heapifyUp(heap) {
    let index = heap.length - 1;
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] <= heap[index]) break;
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
    }
}

function heapifyDown(heap) {
    let index = 0;
    const length = heap.length;
    while (index * 2 + 1 < length) {
        let leftChild = index * 2 + 1;
        let rightChild = index * 2 + 2;
        let smallerChild = leftChild;
        if (rightChild < length && heap[rightChild] < heap[leftChild]) {
            smallerChild = rightChild
        }
        if (heap[index] <= heap[smallerChild]) break;
        [heap[index], heap[smallerChild]] = [heap[smallerChild], heap[index]];
        index = smallerChild
    }
}

const minHeap = [];
const result = [];

for (const x of X) {
    if (x > 0) {
        minHeap.push(x);
        heapifyUp(minHeap);
    } else if (x === 0) {
        if (minHeap.length === 0) {
            result.push(0)
        } else {
            //힙에서 가장 작은 값을 출력하고 제거
            result.push(minHeap[0]);
            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            heapifyDown(minHeap);
        }
    }
}

console.log(result.join('\n'));