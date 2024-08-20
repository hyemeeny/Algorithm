function solution(numbers) {
    const result = [];
    numbers.forEach(e => {
        result.push(e * 2);
    });
    return result;
}

// function solution(numbers) {
//     const answer = numbers.map((e) => {
//         return e*2;
//     })

//     return answer;
// }