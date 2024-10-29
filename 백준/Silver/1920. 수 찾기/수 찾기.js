//표준 입력 받기
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//줄 단위로 나누어 배열로 저장
//공백을 기준으로 나누어서 숫자로 변환
const n_arr = new Set(input[1].split(' ').map(v=>+v));
const m_arr = input[3].split(' ').map(v=>+v);

const result = m_arr.map(m => n_arr.has(m) ? 1 : 0)

console.log(result.join('\n'))
