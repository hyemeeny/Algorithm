function solution(s1, s2) {
    let answer = 0;
    
    // s1 배열 순환
    for(let i=0; i<s1.length; i++) {
        // s2 배열 순환
        for(let j=0; j<s2.length; j++) {
            // s1 문자열과 s2 문자열이 같으면 answer 증가
            s1[i] === s2[j] ? answer++ : 0
        }
    }
    return answer
}