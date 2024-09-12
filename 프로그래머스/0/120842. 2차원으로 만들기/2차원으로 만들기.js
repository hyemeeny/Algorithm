function solution(num_list, n) {
    const answer = [];
    const rows = num_list.length/n;
    
    for(let i=0; i<rows; i++) {
        answer.push(num_list.splice(0, n))
    }
    
    return answer;
}