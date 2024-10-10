function solution(my_string) {
    const arr = my_string.split(' ')
    let answer = arr[0]*1;
    
    arr.forEach((str, i) => {
        if(str === '+') {
            answer += arr[i+1]*1
        }else if(str === '-') {
            answer -= arr[i+1]*1
        }
    }) 
    return answer;
}