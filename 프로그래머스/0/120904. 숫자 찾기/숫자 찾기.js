function solution(num, k) {
    // num에 includes로 k가 확인
    // true면 indexOf로 num의 인덱스 위치를 확인 후 자릿 수 리턴을 위해 +1
    // false면 -1 리턴
    return [...String(num)].includes(String(k)) ? [...String(num)].indexOf(String(k))+1 : -1;
}