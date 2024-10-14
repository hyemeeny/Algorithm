function solution(quiz) {
    const answer = [];
    
    quiz.map((v, i) => {
        // map으로 배열안에 수식들을 나눠주고 split을 이용해 공백 제거하고 전부 문자열로 변환
        const q = v.split(" ")
        // 1번 인덱스가 문자열 +이면 0번 인덱스와 2번 인덱스를 숫자로 변환 후 플러스 아니면 마이너스 
        const calc = q[1] === '+' ? +q[0] + +q[2] : +q[0] - +q[2]
        // 4번 인덱스가 calc에서 연산한 답과 같으면 "0" 아니면 "X"
        answer.push(+q[4] === calc ? 'O' : 'X')
    })
    
    return answer;
}