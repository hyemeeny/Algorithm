function solution(n, lost, reserve) {
    const arr = Array(n + 1).fill(1);
    let count = 0;
    
    lost.forEach((v) => arr[v]--);
    reserve.forEach((v) => arr[v]++);
    
    arr.forEach((v, i) => {
      if (v === 0 && arr[i - 1] === 2) {
        arr[i] = 1;
        arr[i - 1] = 1;
      } else if (v === 0 && arr[i + 1] === 2) {
        arr[i] = 1;
        arr[i + 1] = 1;
      }
    });
    
    
    for (let i = 1; i <= n; i++) {
      if (arr[i] > 0) count++;
    }
    
    return count;
}

// n 전체 학생 수 
// lost 체육복을 도난당한 학생 번호 배열
// reserve 여벌 체육복 가져온 학생 번호 배열