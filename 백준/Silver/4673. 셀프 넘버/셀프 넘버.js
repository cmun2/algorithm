// const selfNumbers = [1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97]
const LIMIT = 10000

const generate = (n) => {
    let sum = n
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10)
    }
    return sum;
}



const getSelfNumber = () => {
    const generated = new Array(LIMIT + 1).fill(false);

    for (let i = 1; i <= LIMIT; i++) {
        const num = generate(i);
        if (num <= LIMIT) {
            generated[num] = true;
        }
    }

    // 셀프 넘버 출력
    const result = [];
    for (let i = 1; i <= LIMIT; i++) {
        if (!generated[i]) {
            result.push(i);            
        }
    }
    return result
}

console.log(getSelfNumber().join('\n'));