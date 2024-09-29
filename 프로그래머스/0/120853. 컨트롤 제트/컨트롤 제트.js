function solution(s) {
    let answer = 0;
    
    s.split(' ').forEach((v, i) => {
        if(v === "Z") {
            answer -= Number(s.split(' ')[i-1]);
        } else {
            answer += Number(v);
        }
    });
    
    return answer;
}