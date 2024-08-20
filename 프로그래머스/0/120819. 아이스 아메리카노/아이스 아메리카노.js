function solution(money) {
    const answer = [];
    const num1 = Math.floor(money / 5500)
    const num2 = money % 5500
    answer.push(num1, num2);
    return answer;
}