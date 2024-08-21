function solution(emergency) {
    const answer = [];
    const arrSort = [...emergency].sort((a,b) => b-a);
    for(let i=0; i<arrSort.length; i++) {
        answer.push(arrSort.indexOf(emergency[i])+1)
        //answer.push(arrSort.findIndex((item) => item === emergency[i])+1)
    }
    
    return answer;
}

/* 
indexOf
배열(boolean, 정수, 문자열)에서 특정 요소의 인덱스를 반환 (객체 X)
반환타입은 number(숫자형). false면 -1

findIndex 
배열 안에 객체나 특정 조건을 만족하면 인덱스를 반환
원하는 요소를 찾자마자 메서드를 종료
반환타입은 number(숫자형). false면 -1 
*/