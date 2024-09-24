function solution(my_string) {
    const str = 'aeiou';
    return [...my_string].filter((v) => !str.includes(v)).join('');
}

// 자바스크립트 배열 includes() 함수 – 배열에 특정 요소 포함 여부 확인
// filter() 함수는 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수
// => true 또는 false 반환