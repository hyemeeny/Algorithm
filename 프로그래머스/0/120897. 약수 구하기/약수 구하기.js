function solution(n) {
    const answer = []
    // n을 i로 나누었을 때 나누어 떨어지는 값이 약수
    for(let i=1; i<=n; i++) n%i===0 ? answer.push(i) : null;
    
    return answer;
}