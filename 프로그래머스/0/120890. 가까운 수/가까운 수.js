function solution(array, n) {
    array.sort((a,b) => a-b);
    let answer = [];
    let minNum = 0;
    let index = 0;
    
    // Math.abs 음수를 양수로 변환
    for(let i=0; i<array.length; i++) {
        answer.push(Math.abs(n-array[i])) // [17, 10, 8]
    }
    
    minNum = Math.min(...answer); // 가장 작은 수 8
    index = answer.indexOf(minNum) // minNum의 인덱스 위치
    return array[index]
}