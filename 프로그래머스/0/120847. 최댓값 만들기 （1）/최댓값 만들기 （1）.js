function solution(numbers) {
    const first = numbers.sort((a,b) => b-a)[0];
    const second = numbers.sort((a,b) => b-a)[1];
    return first*second;
}