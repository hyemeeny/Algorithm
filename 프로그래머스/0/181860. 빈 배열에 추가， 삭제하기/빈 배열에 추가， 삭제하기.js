function solution(arr, flag) {
    const x = [];
    
    for(let i=0; i<arr.length; i++) {
        if(flag[i] === true) {
            for(let j=0; j<arr[i]*2; j++){
                x.push(arr[i]);
            }
        } else {
            x.splice(-arr[i]);
        }
    }
    
    return x;
}