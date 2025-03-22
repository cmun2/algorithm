const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 입력 처리
let [N, d, k, c] = input.shift().split(" ").map(Number);

// 초밥 종류의 수만큼 카운트를 위한 배열 초기화
let sushiCount = Array(d + 1).fill(0);
let sushiBelt = Array(N).fill(0);

// 벨트 위의 초밥 번호 입력
for (let i = 0; i < N; i++) {
  sushiBelt[i] = Number(input.shift());
}

let uniqueSushiCount = 0; // 현재 연속된 k개 접시에서 다양한 초밥 종류 수
let maxSushiTypes = 0; // 최대로 먹을 수 있는 초밥 종류의 개수

// 첫 k개 접시에서 초밥 종류 카운트하기
for (let i = 0; i < k; i++) {
  if (sushiCount[sushiBelt[i]] === 0) {
    uniqueSushiCount++;
  }
  sushiCount[sushiBelt[i]]++;
}

// 초기 값 설정
maxSushiTypes = uniqueSushiCount;
if (sushiCount[c] === 0) {
  maxSushiTypes++; // 쿠폰으로 받은 초밥이 없다면 하나 더 추가
}

// 슬라이딩 윈도우 방식으로 벨트 돌기
for (let start = 1; start < N; start++) {
  let end = (start + k - 1) % N; // 끝 지점 계산 (원형 배열처럼 처리)

  // 이전 초밥 하나 빼기
  sushiCount[sushiBelt[start - 1]]--;
  if (sushiCount[sushiBelt[start - 1]] === 0) {
    uniqueSushiCount--;
  }

  // 새로운 초밥 하나 추가하기
  if (sushiCount[sushiBelt[end]] === 0) {
    uniqueSushiCount++;
  }
  sushiCount[sushiBelt[end]]++;

  // 쿠폰으로 받은 초밥을 추가했을 때 갯수 갱신
  if (sushiCount[c] === 0) {
    maxSushiTypes = Math.max(maxSushiTypes, uniqueSushiCount + 1);
  } else {
    maxSushiTypes = Math.max(maxSushiTypes, uniqueSushiCount);
  }
}

console.log(maxSushiTypes);