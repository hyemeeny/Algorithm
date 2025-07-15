function solution(sides) {
    const [a, b] = sides.sort((a, b) => b - a); // 내림차순 정렬
    const min = a - b;       
    const max = a + b - 1;   
    return max - min;
}