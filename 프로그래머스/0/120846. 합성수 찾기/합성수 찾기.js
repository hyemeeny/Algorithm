function solution(n) {
    const arr = [];
    
    for(let i=1; i<=n; i++) {
        for(let j=2; j<i; j++) {
            if(i%j === 0) arr.push(i);
        }
    }
    
    return [...new Set(arr)].length;
}

// 1부터 n까지 순회하는 루프 하나, 그리고 2부터 i까지 순회하며 나누어 떨어지는지 확인하는 루프 하나
// 6과 12 처럼 2로도 나누어지고 3으로도 나누어지는 숫자들이 있기 때문에 배열에 담은 뒤 [...new Set()]을 활용하여 중복을 제거
// 새 배열의 길이를 구해 답을 반환