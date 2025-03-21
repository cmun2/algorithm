const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);
let index = 1;

for (i = 0; i < T; i++) {
    const numDays = parseInt(input[index++]);
    const stockArray = input[index++].split(' ').map(Number);
    
    let maxProfit = 0;
    let maxPrice = 0;

    //뒤에서부터 주식 가격 확인하고 계산
    for (let j = numDays - 1; j >= 0; j--) {
        // stock의 제일 뒷번호가 맥스 값보다 크면 가장 높은 가격 갱신
        if (stockArray[j] > maxPrice) {
            maxPrice = stockArray[j]
        }
        maxProfit += maxPrice - stockArray[j]
    }

    console.log(maxProfit);
}