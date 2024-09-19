function solution(box, n) {
    const row = Math.floor(box[0]/n);
    const column = Math.floor(box[1]/n);
    const height = Math.floor(box[2]/n);
    
    return row*column*height;
}