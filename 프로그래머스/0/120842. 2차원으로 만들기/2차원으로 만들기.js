function solution(num_list, n) {
    const answer = [];
    const rows = num_list.length/n;
    
    for(let i=0; i<rows; i++) {
        const arr = [];
        for(let j=0; j<n; j++) {
            arr.push(num_list[(n*i)+j])
        }
        answer.push(arr);
    }
    return answer;
}