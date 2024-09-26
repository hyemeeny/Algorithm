function solution(n) {
    const answer = [];
    
    for(let i=2; i<=n; i++) {
        while(n%i === 0) {
            n /= i;
            answer.push(i);
        }
    }
    
    return [... new Set(answer)];
}

// 나누어 떨어져야 하니까 2부터 시작
// while문으로 n%i === 0 조건이 false일 때 까지 반복하고 종료 (true면 계속 반복)
// 6(n) = 12(n)/2(i)를 해서 6(n)은 다시 반복되고 몫 i는 answer 배열에 담김
// set으로 중복 제거