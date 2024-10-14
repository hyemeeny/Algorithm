function solution(quiz) {
    const answer = [];
    
    quiz.map((v, i) => {
        let q = v.split(" ")
        let calc = q[1] === '+' ? +q[0] + +q[2] : +q[0] - +q[2]
        answer.push(+q[4] === calc ? 'O' : 'X')
    })
    
    return answer;
}