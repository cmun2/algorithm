const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 숫자의 등장 횟수를 기록하는 객체
let count = {};
let left = 0;
let maxLength = 0;

for (let right = 0; right < N; right++) {
  const num = arr[right];

  // 오른쪽 포인터가 가리키는 숫자의 등장 횟수 증가
  count[num] = (count[num] || 0) + 1;

  // 등장 횟수가 K를 초과하면, 왼쪽 포인터를 옮겨서 조건을 만족하도록 함
  while (count[num] > K) {
    const leftNum = arr[left];
    count[leftNum]--;
    left++;
  }

  // 현재 윈도우의 길이 계산
  maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);