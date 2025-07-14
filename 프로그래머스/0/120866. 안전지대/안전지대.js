function solution(board) {
  	//상,하,좌,우,대각선 
    const dx = [0,1,1,1,0,-1,-1,-1];
    const dy = [1,1,0,-1,-1,-1,0,1];
    
    const n = board.length;
    //전체를 안전하다고 가정
    let safe = n*n
    // 지뢰 위치 넣을 빈배열
    let ch = [];
    //지뢰위치 찾기
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(board[i][j]===1){
                ch.push([i,j])
                safe --;
            }
        }
    }
    // 전체가 위험 지역이면 0리턴
    if(safe === 0) return 0;
    
  	// 위험지역 확인
    ch.forEach((d) => {
        for(k=0; k<8; k++){
            const nx = d[0] + dx[k];
            const ny = d[1] + dy[k];
            if(nx>=0 && ny>=0 && nx<n && ny<n && board[nx][ny]===0){
                board[nx][ny] = 1;
                safe --;
            }
        }
    });
    return safe;    
}