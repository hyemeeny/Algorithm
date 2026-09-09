function solution(x) {
    const numX = x.toString().split("");
    const num = numX.map(Number).reduce((acc, cur) => acc + cur, 0);
    // numX.map(Number) Number는 자바스크립트에 내장된 함수, 축약형으로 사용 가능
    // ['1', '2', '3'].map((item) => Number(item));
    
    return x % num === 0;
}

// 18 > 1+8=9 > 18/9=2...0 > 하샤드 수 true 
// 10 > 1+0=1 > 10/1=10...0 > 하샤드 수 true
// 11 > 1+1=2 > 11/2=5...1 > 하샤드 수 false