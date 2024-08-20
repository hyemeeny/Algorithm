function solution(n) {
    let answer = 0;
    for(let i=0; i<=n; i+=2) {
        answer += i;
    }
    return answer;
    
    // let half = Math.floor(n/2);
    // return half*(half+1);
}