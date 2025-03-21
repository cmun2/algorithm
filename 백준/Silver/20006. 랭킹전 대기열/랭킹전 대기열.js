const fs = require('fs');
let [n, ...player] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let [p, m] = n.trim().split(' ').map(Number);
let room = [];

for (let i = 0; i < p; i++) {
  let [level, id] = player[i].trim().split(' ');
  level = Number(level);
  let isEnter = false;

  // 기존 방에서 매칭되는 방을 찾는 부분
  for (let j = 0; j < room.length; j++) {
    if (room[j].length < m && level >= room[j][0][0] - 10 && level <= room[j][0][0] + 10) {
      room[j].push([level, id]);
      isEnter = true;
      break;
    }
  }

  // 매칭되는 방이 없으면 새로운 방을 추가
  if (!isEnter) room.push([[level, id]]);
}

let answer = '';
for (let i = 0; i < room.length; i++) {
  // 방이 가득 차면 "Started!", 그렇지 않으면 "Waiting!"
  answer += room[i].length === m ? 'Started!' : 'Waiting!';

  // 플레이어를 이름순으로 정렬하고 출력
  answer += '\n' +
    room[i]
      .sort((a, b) => a[1].localeCompare(b[1])) // 닉네임 기준으로 정렬
      .map((item) => `${item[0]} ${item[1]}`)   // 레벨과 닉네임 출력
      .join('\n') + '\n';
}

console.log(answer.trim());  // 출력