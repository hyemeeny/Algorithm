function solution(my_string) {    
    const str = my_string.replace(/[^0-9]/g, "")
    const answer = str.split('').map((v) => Number(v))
    
    return answer.sort((a,b) => a-b)
}

// return my_string.split("").filter((v) => !isNaN(v)).map((v) => Number(v)).sort((a,b) => a-b)