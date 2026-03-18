function solution(arr, query) {
    return query.reduce((acc, num, i) => {
        return i % 2 === 0 ? acc.slice(0, num+1) : acc.slice(num);
    }, arr);
}