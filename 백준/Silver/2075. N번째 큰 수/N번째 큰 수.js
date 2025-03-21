class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value){
        let cur = this.heap.length;
        let parent;
        while (cur > 1){
            parent = Math.floor(cur/2);
            if (value < this.heap[parent]) {
                this.heap[cur] = this.heap[parent];
                cur = parent;
            } else break;
        }
        this.heap[cur] = value;
    }

    pop(){
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();
        const popValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let cur = 1;
        let left = cur*2;
        let right = cur*2+1;
        while (this.heap[left]){
            let childIdx = left;
            if (this.heap[right] && this.heap[left] > this.heap[right]) childIdx = right;
            if (this.heap[cur] > this.heap[childIdx]){
                [this.heap[cur],this.heap[childIdx]] = [this.heap[childIdx],this.heap[cur]];
                cur = childIdx;
                left = cur * 2;
                right = cur * 2 + 1;
            } else break;
        }
        return popValue;
    }

    size(){
        return this.heap.length -1;
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N = -1;
let cnt;
const que = new MinHeap()
rl.on("line",(line)=>{
    if (N === -1){
        N = parseInt(line);
        cnt = N;
        idxCheck = new Array(N).fill(N-1);
        return;
    }
    const temp = line.split(' ').map(Number);
    temp.forEach((num,idx)=>{
        que.push(num);
        if (que.size() > N) que.pop();
    })
    cnt -= 1
    if (cnt === 0){
        rl.close();
    }
}).on('close',()=>{
    console.log(que.pop())
})