function solution(array) {
    const arr = array.sort((a,b) => a-b);
    const arrIdx = Math.floor(arr.length/2);
    return arr[arrIdx];
}