// splice 방식 => 배열에서 요소를 추가, 제거 또는 교체하는 작업을 수행한다. 이때 원본 배열이 수정된다.
function solution(num_list, n) {
    const answer = [];
    const rows = num_list.length/n;
    
    for(let i=0; i<rows; i++) {
        answer.push(num_list.splice(0, n))
    }
    
    return answer;
}

// slice 방식 => 배열의 일부분을 추출하여 새로운 배열을 반환한다. 원본 배열은 변경되지 않는다.
// function solution(num_list, n) {
//     const answer = [];
//     const rows = num_list.length;
    
//     for(let i=0; i<rows; i+=n) {
//         answer.push(num_list.slice(i, i+n))
//     }
    
//     return answer;
// }