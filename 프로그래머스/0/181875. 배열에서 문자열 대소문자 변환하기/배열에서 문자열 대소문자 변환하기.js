function solution(strArr) {
    const answer = [];
    
    strArr.map((a, i) => {
        answer.push(i%2===0 ? a.toLowerCase() : a.toUpperCase());
    })
    
    return answer;
}