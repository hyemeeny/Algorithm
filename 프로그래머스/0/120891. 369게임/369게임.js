function solution(order) {
    let answer = 0;
    
    [...String(order)].forEach((num) => {
        if(num === '3' || num === '6' || num === '9') {
            answer += 1;
        }
    })
    
    return answer;
}