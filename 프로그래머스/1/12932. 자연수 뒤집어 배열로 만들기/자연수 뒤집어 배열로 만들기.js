function solution(n) {
    const num = String(n).split("");
    const numReverse = num.reverse();
    return numReverse.map((a) => parseInt(a));
}