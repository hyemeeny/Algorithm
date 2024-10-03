function solution(my_string) {
    let answer = [];
    
    [...my_string].forEach((v) => {
        if(v === v.toUpperCase()) { 
            answer.push(v.toLowerCase())
        } else {
            answer.push(v.toUpperCase())
        }
    })
    
    return answer.join('');
}