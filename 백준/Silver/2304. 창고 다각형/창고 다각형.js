const fs = require('fs');
let [N, ...column] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

N = Number(N);
for (let i = 0; i < N; i++) {
  column[i] = column[i].trim().split(' ').map(Number);
}

column.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else return -1;
});

let max = column.reduce(
  (acc, array) => {
    const value = array[1];

    if (value > acc.maxHeight) {
      return {
        maxHeight: value,
        maxIndex: array[0],
      };
    }
    return acc;
  },
  { maxHeight: 0, maxIndex: null }
);

let index = 0;
let height = Array.from({ length: column[column.length - 1][0] }, () => null);

for (let i = column[0][0]; i <= max.maxIndex; i++) {
  if (column[index][0] !== i) {
    height[i] = height[i - 1];
  } else {
    if (column[index][1] < height[i - 1]) {
      height[i] = height[i - 1];
    } else if (column[index][1] > height[i - 1]) {
      height[i] = column[index][1];
    } else {
      height[i] = height[i - 1];
    }
    index++;
  }
}

index = column.length - 1;
for (let i = column[column.length - 1][0]; i > max.maxIndex; i--) {
  if (column[index][0] !== i) {
    height[i] = height[i + 1];
  } else {
    if (column[index][1] < height[i + 1]) {
      height[i] = height[i + 1];
    } else if (column[index][1] > height[i + 1]) {
      height[i] = column[index][1];
    } else {
      if (i === column[column.length - 1][0]) height[i] = column[index][1];
      else height[i] = height[i + 1];
    }
    index--;
  }
}

let sum = 0;
for (let i = 0; i < height.length; i++) {
  if (height[i]) sum += height[i];
}

console.log(sum);