const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

// 첫 번째 줄에서 문자열을 읽어오기
const word = input[0].split("").map(String);

// 'a'의 개수 세기
const totalA = word.filter((char) => char === 'a').length;

// 슬라이딩 윈도우로 'a'가 가장 많은 구간 찾기
let currentCount = 0;

// 처음 'totalA' 개의 구간에서 'a'의 개수 세기
for (let i = 0; i < totalA; i++) {
    currentCount += word[i] === 'a' ? 1 : 0;
}

// 슬라이딩 윈도우로 최대 'a'의 개수를 찾기
let maxAInWindow = currentCount;

for (let i = totalA; i < word.length + totalA - 1; i++) {
    let currentChar;

    // 새로운 값 더하기
    if (i >= word.length) {
        currentChar = word[i - word.length];
    } else {
        currentChar = word[i];
    }

    // 새로운 초밥이 'a'일 경우, count 증가
    currentCount += currentChar === 'a' ? 1 : 0;

    // 이전 값 빼기 (슬라이딩 윈도우)
    currentCount -= word[i - totalA] === 'a' ? 1 : 0;

    // 최대값 갱신
    if (currentCount > maxAInWindow) {
        maxAInWindow = currentCount;
    }
}

// 최소 교환 횟수는 전체 'a'의 수에서 가장 많이 연속된 'a'의 수를 빼면 됩니다.
const minMoves = totalA - maxAInWindow;
console.log(minMoves);