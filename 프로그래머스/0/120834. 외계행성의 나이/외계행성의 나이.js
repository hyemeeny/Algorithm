function solution(age) {
    var answer = '';
    
    const str = 'abcdefghij'
    // return Array.from(String(age)).map((t) => str[+t]).join('')
    return age.toString().split('').map((v) => 'abcdefghij'[v]).join('')
    // 'abcdefghij'[v]에서 [v]는 문자열의 인덱스 값이다
    // ['5', '1'] 일 때 'abcdefghij'[5], 'abcdefghij'[1] = ['f', 'b'] 
}