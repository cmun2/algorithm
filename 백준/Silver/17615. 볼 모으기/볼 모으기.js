const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function findMinimumMoves(balls) {
   let minMoves = Infinity;  // 최소 이동 횟수를 추적하는 변수

   // 빨간공을 옮길 경우
   let isBlueDetected = false;
   let redMoveCount = 0;
   // 뒤에서부터 탐색 (뒤에서부터 빨간 공을 옮기기)
   for (let i = balls.length - 1; i >= 0; i--) {
      if (balls[i] === 'B') {
         isBlueDetected = true;
      }
      if (isBlueDetected && balls[i] === 'R') {
         redMoveCount++;
      }
   }
   minMoves = Math.min(minMoves, redMoveCount);

   // 앞에서부터 탐색 (앞에서부터 빨간 공을 옮기기)
   isBlueDetected = false;
   redMoveCount = 0;
   for (let i = 0; i < balls.length; i++) {
      if (balls[i] === 'B') {
         isBlueDetected = true;
      }
      if (isBlueDetected && balls[i] === 'R') {
         redMoveCount++;
      }
   }
   minMoves = Math.min(minMoves, redMoveCount);

   // 파란공을 옮길 경우
   let isRedDetected = false;
   let blueMoveCount = 0;
   // 뒤에서부터 탐색 (뒤에서부터 파란 공을 옮기기)
   for (let i = balls.length - 1; i >= 0; i--) {
      if (balls[i] === 'R') {
         isRedDetected = true;
      }
      if (isRedDetected && balls[i] === 'B') {
         blueMoveCount++;
      }
   }
   minMoves = Math.min(minMoves, blueMoveCount);

   // 앞에서부터 탐색 (앞에서부터 파란 공을 옮기기)
   isRedDetected = false;
   blueMoveCount = 0;
   for (let i = 0; i < balls.length; i++) {
      if (balls[i] === 'R') {
         isRedDetected = true;
      }
      if (isRedDetected && balls[i] === 'B') {
         blueMoveCount++;
      }
   }
   minMoves = Math.min(minMoves, blueMoveCount);

   return minMoves;
}

const balls = input[1].split('');
console.log(findMinimumMoves(balls));
