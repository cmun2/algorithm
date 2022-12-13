function solution(sizes) {
    //Max array에서 maximum과 Min array에서 maximum 찾기
    let Max_array = [];     //[60, 70, 70, 80] 한 객체array에서 제일 큰 값
    let Min_array = [];     //[50, 30, 30, 40]
    sizes.forEach(x => {            //array형태이기 때문에 forEach사용가능
        Max_array.push(Math.max(...x))
        console.log(x)
        Min_array.push(Math.min(...x))
    })
    //console.log(Max_array)
    //console.log(Max_array) [60, 70, 70, 80] 
    //console.log(Min_array) [50, 30, 30, 40]
    //list에 있던 것을 array형태로 바꿔줘야 계산됨
    return Math.max(...Max_array) * Math.max(...Min_array)
}