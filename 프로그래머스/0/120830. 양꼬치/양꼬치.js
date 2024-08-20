function solution(n, k) {
    const drink = Math.floor(n/10);
    return (n*12000)+((k-drink)*2000)
}

// 양꼬치 1인분 === 12000, 음료수 === 2000
// 양꼬치 n인분, 음료수 k개