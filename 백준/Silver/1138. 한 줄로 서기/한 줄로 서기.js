const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]); // 사람의 수 N
const arr = input[1].split(" ").map(Number); // 각 사람의 기억하는 정보
const list = [...new Array(T)].fill(0); // 사람들의 자리를 저장할 배열

for (let i = 0; i < T; i++) {
  let cnt = 0; // 현재 위치를 찾을 때 몇 명을 건너뛸지 세는 변수
  let K = 0; // 사람을 배치할 위치
  
  // 빈 자리를 찾아서 해당 자리에 사람을 배치
  for (let j = 0; j < T; j++) {
    if (list[j] === 0) { // 빈 자리가 있으면
      if (cnt === arr[i]) { // 목표한 자리에 도달하면
        K = j;
        break;
      }
      cnt += 1; // 큰 사람의 개수를 카운트
    }
  }
  
  // 찾은 위치에 해당 사람(i+1)을 배치
  list[K] = i + 1;
}

console.log(list.join(" ")); // 결과 출력