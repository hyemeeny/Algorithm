function solution(arr1, arr2) {
    const sum = arr => arr.reduce((a, b) => a + b, 0);

    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }

    const sum1 = sum(arr1);
    const sum2 = sum(arr2);

    if (sum1 > sum2) return 1;
    if (sum1 < sum2) return -1;
    return 0;
}