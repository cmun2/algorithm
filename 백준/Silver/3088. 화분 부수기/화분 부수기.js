const fs = require('fs');

// 입력을 읽어들입니다.
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const breakArray = new Array(1000001).fill(false);  // breakArray 초기화
let result = 0;

// 각 화분에 대해 처리
for (let i = 1; i <= N; i++) {
    const [number1, number2, number3] = input[i].split(' ').map(Number);

    // 세 숫자 중 하나라도 깨지지 않았다면 카운트 증가
    if (!breakArray[number1] && !breakArray[number2] && !breakArray[number3]) {
        result++;
    }

    // 각 숫자는 깨지므로 true로 설정
    breakArray[number1] = true;
    breakArray[number2] = true;
    breakArray[number3] = true;
}

// 결과를 출력합니다.
console.log(result);