function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1)
    // return numbers.splice(num1, num2-num1+1);
    // splice 함수는 첫 번째 인자로 시작 인덱스를 받고, 두 번째 인자로는 몇 개를 삭제할 건지를 받는다.
}