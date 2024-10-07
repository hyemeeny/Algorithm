function solution(s) {
    let answer = '';
    const arr = [...s].sort()
    arr.forEach((str, i) => {
        if(str !== arr[i+1] && str !== arr[i-1]) {
            answer += str
        }
    })
    
    return answer;
}