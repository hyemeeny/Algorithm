function solution(my_string) {
    let answer = 0;
    
    my_string.split('').forEach((v) => {
        if(Number(v)) {
            answer += v*1
        }
    })
    
    return answer;
}

// return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)