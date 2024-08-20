function solution(my_string, letter) {
    let answer = '';
    [...my_string].forEach((i) => {
        i !== letter ? answer += i : '';
    })
    
    // const answer = my_string.split(letter).join('');
    return answer;
}