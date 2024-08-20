function solution(my_string, n) {
    const answer = [];
    for(let i=0; i<my_string.length; i++) {
        answer.push(my_string[i].repeat(n));
    }
    
    return answer.join('');
    
    // const answer = [...my_string].map((word) => word.repeat(n)).join('')
    // return answer;
}