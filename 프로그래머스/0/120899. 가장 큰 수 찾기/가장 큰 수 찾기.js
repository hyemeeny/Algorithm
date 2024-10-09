function solution(array) {
    // 스프레드 문법으로 배열안에 숫자만 복사하여 가장 큰 수 찾음
    const maxNum = Math.max(...array);
    // indexOf로 maxNum의 인덱스를 찾음
    return [maxNum, array.indexOf(maxNum)];
}