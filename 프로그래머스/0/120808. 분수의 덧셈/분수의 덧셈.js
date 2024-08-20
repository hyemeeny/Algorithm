function solution(numer1, denom1, numer2, denom2) {

    // 분모 찾기
    let denom = denom1 * denom2;

    // 분자 찾기
    let numer = denom1 * numer2 + denom2 * numer1;

    // 최대 공약수 구하기
    let gcd = (denom, numer) => (denom % numer === 0 ? numer :  gcd(numer, denom % numer));

    return [numer / gcd(denom, numer), denom / gcd(denom, numer)];
}