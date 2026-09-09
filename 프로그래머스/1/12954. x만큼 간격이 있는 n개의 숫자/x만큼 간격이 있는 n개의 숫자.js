function solution(x, n) {
    const answer = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = (i + 1) * x;
    }
    return answer;
}