function solution(intStrs, k, s, l) {
    let answer = [];
    let temp = '';
    
    for(let i of intStrs) {
        // i를 split으로 잘라주고 splice로 s번째부터 l까지 temp에 넣어줌 
        temp = Number(i.split('').splice(s,l).join(''));
        
        if(temp > k) {
            answer.push(temp)
        }
    }
    return answer;
}