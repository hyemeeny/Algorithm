function solution(numbers) {
    const minNumbers = [...numbers].sort((a, b) => a - b);
    const maxNumbers = [...numbers].sort((a, b) => b - a);
    
    return Math.max(minNumbers[0] * minNumbers[1], maxNumbers[0] * maxNumbers[1]);
}