function solution(num_list) {
    const arr = [0, 0];
    for(let i=0; i<num_list.length; i++) {
        if(num_list[i]%2===0) {
            arr[0] += 1
        } else {
            arr[1] += 1
        }
    }
    return [arr[0], arr[1]];
    
    // return num_list.reduce(([even, odd], curr) => (
    //     [
    //         curr % 2 === 0 ? even+1 : even,
    //         curr % 2 === 1 ? odd+1 : odd
    //     ]
    // ), [0,0]);
}