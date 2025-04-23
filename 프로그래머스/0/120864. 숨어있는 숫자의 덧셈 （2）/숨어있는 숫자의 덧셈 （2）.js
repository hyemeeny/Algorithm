function solution(my_string) {
    let answer = 0;
    let numStr = "";

    for (const char of my_string) {
        if (!isNaN(char) && char !== " ") {
            numStr += char; 
        } else {
            if (numStr !== "") {
                answer += Number(numStr); 
                numStr = "";
            }
        }
    }

    if (numStr !== "") {
        answer += Number(numStr);
    }

    return answer;
}