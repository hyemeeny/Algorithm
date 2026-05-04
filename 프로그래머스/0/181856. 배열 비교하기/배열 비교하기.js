function solution(arr1, arr2) {
    let arr1Acc = arr1.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
    let arr2Acc = arr2.reduce((acc, cur) => {
            return acc + cur;
        }, 0);
    
    if(arr1.length > arr2.length) return 1;
    if(arr1.length < arr2.length) return -1;
    if(arr1.length === arr2.length) {
        if(arr1Acc > arr2Acc) return 1;
        if(arr1Acc < arr2Acc) return -1;
        if(arr1Acc === arr2Acc) return 0;
    }
}