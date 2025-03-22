const fs = require('fs');
let [optionCount, ...optionsList] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// 이미 사용된 단축키를 추적할 리스트
let usedShortcuts = [];
// 결과를 저장할 리스트
let finalResults = [];

optionsList.forEach(option => {
  // 단어를 대문자로 변환하여 저장
  let upperCaseOption = option.toUpperCase();
  // 대문자로 변환된 단어 리스트
  let upperCaseWords = upperCaseOption.split(' ');
  // 원본 단어 리스트
  let originalWords = option.split(' ');
  // 단축키가 지정되었는지 체크할 변수
  let shortcutAssigned = false;

  // 첫 번째 조건: 단어들의 첫 번째 알파벳에 대해 단축키 지정 여부 확인
  for (let i = 0; i < upperCaseWords.length; i++) {
    if (!usedShortcuts.includes(upperCaseWords[i][0])) {
      usedShortcuts.push(upperCaseWords[i][0]);
      originalWords[i] = '[' + originalWords[i][0] + ']' + originalWords[i].substring(1);
      shortcutAssigned = true;
      break;
    }
  }

  // 두 번째 조건: 모든 첫 글자가 이미 단축키로 지정되었으면, 알파벳을 하나씩 체크하여 지정되지 않은 알파벳으로 단축키를 설정
  if (!shortcutAssigned) {
    for (let i = 0; i < upperCaseWords.length; i++) {
      for (let r = 0; r < upperCaseWords[i].length; r++) {
        if (!usedShortcuts.includes(upperCaseWords[i][r])) {
          usedShortcuts.push(upperCaseWords[i][r]);
          originalWords[i] = originalWords[i].substring(0, r) + '[' + originalWords[i][r] + ']' + originalWords[i].substring(r + 1);
          shortcutAssigned = true;
          break;
        }
      }
      if (shortcutAssigned) break;
    }
  }

  // 단축키가 지정되었으면 그 값을 반환하고, 아니면 원본 그대로 반환
  finalResults.push(shortcutAssigned ? originalWords.join(' ') : option);
});

// 결과 출력
finalResults.forEach(e => console.log(e));