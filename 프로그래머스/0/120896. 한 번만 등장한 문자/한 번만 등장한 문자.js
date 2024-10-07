function solution(s) {
    let answer = '';
    const arr = [...s].sort()
    arr.forEach((str, i) => {
        // arr 배열에서 현재 문자열 str 앞에 문자열(arr[i+1])과 다르고 
        // 뒤에 문자열(arr[i-1])과도 다를 경우 answer에 넣어준다
        if(str !== arr[i+1] && str !== arr[i-1]) {
            answer += str
        }
    })
    
    return answer;
}