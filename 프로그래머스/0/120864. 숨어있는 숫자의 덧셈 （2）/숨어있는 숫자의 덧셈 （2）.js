function solution(my_string) {
    // 문자열에서 연속된 숫자들을 모두 찾기
    const numbers = my_string.match(/\d+/g); // 정규식: \d+ → 숫자 하나 이상
    if (!numbers) return 0; // 숫자가 하나도 없을 경우 예외 처리

    // 숫자 문자열들을 실제 숫자로 바꿔서 모두 더하기
    return numbers.map(Number).reduce((a, b) => a + b, 0);
}