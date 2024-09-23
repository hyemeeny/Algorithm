function solution(n) {
    let answer = 0;
    let factorial = 1;
    
    for(let i=1; i<=n; i++) {
        factorial *= i;
        if(factorial <= n) answer = i;
    }
    
    return answer;
}

// function solution(n) {
//   let factorial = 1;
//   let i = 0;
//   while (factorial <= n) {
//     i++;
//     factorial *= i;
//   }
//   return i - 1;
// }