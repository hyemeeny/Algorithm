function solution(n) {
    let count = '';
    for(let i=1; i<=n; i++) {
        n%i === 0 ? count++ : count;
    }
    return count;
}

// 20/1 = 20 ===0
// 20/2 = 10 ===0
// 20/3 = 6 ===2
// 20/4 = 5 ===0