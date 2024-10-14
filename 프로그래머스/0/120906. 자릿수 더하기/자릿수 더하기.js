function solution(n) {
    return [...String(n)].reduce((acc, cur) => acc*1 +cur*1, 0)
}