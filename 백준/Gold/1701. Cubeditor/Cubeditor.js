const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

// 대부분의 에디터는 찾으려고 하는 문자열이 하나만 나와도 찾는다 -> 부적합
// 문자열 내에서 부분 문자열이 두번 이상 나오는 문자열 찾기, 두 부분 문자열은 겹쳐도 된다.
// 두번 이상 나오는 부분 문자열 중에서 가장 긴 부분 문자열의 길이 구하기
let partialStringInputs = input;

const buildSuffixArray = (str) => {
    const suffixes = []
    for (let i = 0; i < str.length; i++) {
        suffixes.push(str.slice(i));
    }

    return suffixes.sort();
}

// LCP 배열 생성 
const buildLCP = (suffixArray) => {
    let maxLCP = 0;
    for (let i = 1; i < suffixArray.length; i++) {
        const prev = suffixArray[i - 1];
        // abb
        const curr = suffixArray[i];
        // abcabb

        let lcpLength = 0;

        while (lcpLength < prev.length && lcpLength < curr.length && prev[lcpLength] === curr[lcpLength]) {
            lcpLength++;
        }

        // 최대 LCP 업데이트
        maxLCP = Math.max(maxLCP, lcpLength);
    }
    return maxLCP;
}

const suffixArray = buildSuffixArray(input);
console.log(buildLCP(suffixArray));