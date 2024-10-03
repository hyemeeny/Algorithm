function solution(cipher, code) {
    // i번째 인덱스를 code로 나누었을 때 떨어지는 값이 code의 배수
    return [...cipher].filter((_, i) => (i+1)%code === 0).join('');
}