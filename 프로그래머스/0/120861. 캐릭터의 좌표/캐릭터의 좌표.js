function solution(keyinput, board) {
    let [x, y] = [0, 0];
    const row = Math.floor(board[0]/2)
    const column = Math.floor(board[1]/2);
    
    for(let key of keyinput) {
        if(key === "up") y++;
        if(key === "down") y--;
        if(key === "left") x--; 
        if(key === "right") x++; 
        
        if(Math.abs(x) > row) x>0 ? x-- : x++;
    if(Math.abs(y) > column) y>0 ? y-- : y++;
    }
    
    
    
    return [x, y];
}