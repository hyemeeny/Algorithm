function solution(n) {
    let count = '';
    for(let i=1; i<=n; i++) {
        n%i === 0 ? count++ : count;
    }
    return count;
}